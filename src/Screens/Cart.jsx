import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from './CartContext';
import { MdDelete } from "react-icons/md";
import { LuBus } from "react-icons/lu";
import { message, Button } from 'antd';
import './Screen.css'
import BestSelling from '../Components/BestSelling';



const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const [counts, setCounts] = useState(cart.map(() => 1));
  const [total, setTotal] = useState(0);
  const [address, setAddress] = useState('');
  const [showOrderButton, setShowOrderButton] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleAddressSubmit = () => {
    if (address.trim()) {
      setShowOrderButton(true);
    } else {
      message.error('Please enter a valid address.');
    }
  };

  const placeOrder = () => {
    removeFromCart(0);

    setOrderPlaced(true);
    message.success('Your order has been placed successfully!');


    setAddress('');
    setShowOrderButton(false);
    setTimeout(() => {
      setOrderPlaced(false);
    }, 3000);
  };

  const increase = (index) => {
    const newCounts = [...counts];
    newCounts[index] += 1;
    setCounts(newCounts);
  };

  const decrease = (index) => {
    const newCounts = [...counts];
    if (newCounts[index] > 1) {
      newCounts[index] -= 1;
    }
    setCounts(newCounts);
  };

  useEffect(() => {
    const subtotal = cart.reduce((acc, product, index) => {
      return acc + product.price * counts[index];
    }, 0);
    setTotal(subtotal);
  }, [counts, cart]);

  const showModal = (product) => {
    removeFromCart(product.id);
  };

  return (
    <>
      <div className="container mx-auto p-6">
        <div className="text-center mt-5">
          <h1 className="text-3xl font-bold">Shopping Cart</h1>
        </div>
        {cart.length === 0 ? (
          <div className="text-center mt-6">
            <h2 className="text-xl font-medium">Your cart is empty</h2>
          </div>
        ) : (
          <>
            <div className="flex flex-row items-center justify-around w-full p-2 mt-4 bg-gray-100 rounded-lg flex-wrap ">
              <div ><h3 className="font-bold">Product</h3></div>
              <div ><h3 className="font-bold">Title</h3></div>
              <div><h3 className="font-bold">Price</h3></div>
              <h3 className="font-bold">Quantity</h3>
              <h3 className="font-bold">Remove</h3>
            </div>
            {cart.map((product, index) => (
              <div key={product.id} className="flex flex-col items-center justify-evenly">
                <div className="flex flex-row items-center justify-around gap-4 w-full mt-4 p-3 border border-gray-300 rounded-lg bg-white shadow-sm flex-wrap">
                  <img src={product.image} alt={product.title} className="w-[50px] h-[50px] object-contain rounded-md shadow-md" />
                  <div className="w-[160px]"><h3 className="font-medium">{product.title}</h3></div>
                  <p className="text-lg font-semibold">${(product.price * counts[index]).toFixed(2)}</p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decrease(index)}
                      className="bg-gray-300 hover:bg-gray-400 text-black p-2 w-[40px] h-[40px] rounded-full transition-all">
                      −
                    </button>
                    <span className="text-lg">{counts[index]}</span>
                    <button
                      onClick={() => increase(index)}
                      className="bg-gray-300 hover:bg-gray-400 text-black p-2 w-[40px] h-[40px] rounded-full transition-all">
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => showModal(product)}
                    className="hover:text-red-700 transition-all">
                    <MdDelete size={30} className="text-red-500" />
                  </button>
                </div>
              </div>
            ))}
            <div className="text-center mt-6">
              <h2 className="text-2xl font-semibold">Cart Totals</h2>
            </div>
            <div className="flex flex-col gap-4 items-center mt-4 bg-gray-50 p-4 rounded-lg shadow-md w-full">
              <div className="flex flex-row items-center justify-between w-[300px] p-2 border-b border-gray-300">
                <h3 className="font-medium">Subtotal</h3>
                <h3 className="font-medium">${total.toFixed(2)}</h3>
              </div>
              <div className="flex flex-row items-center justify-between w-[300px] p-2 border-b border-gray-300">
                <h3 className="font-medium">Delivery Fee</h3>
                <h3 className="font-medium text-green-600">Free</h3>
              </div>
              <div className="flex flex-row items-center justify-between w-[300px] p-2 border-b border-gray-300">
                <h3 className="font-bold">Total</h3>
                <h3 className="font-bold">${total.toFixed(2)}</h3>
              </div>
            </div>
            <div className='orderNow'>
              <div>
                <h2>Details Required<span>*</span></h2>
                {!orderPlaced && (
                  <div className='mt-4'>
                    <textarea style={{height: '150px', resize: 'none'}}
                      type='text'
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder='Enter your address'
                      className='border p-2 rounded w-full'
                    />
                  </div>
                )}
              </div>
              <br />
              <div className='orderBtns'>
                <Button
                  type='primary'
                  className='bg-[#f49521] flex items-center'
                  onClick={handleAddressSubmit}
                >
                  <LuBus size='20' color='white' />
                  <span className='ml-2'>Order Now</span>
                </Button>
                {showOrderButton && !orderPlaced && (
                  <Button
                    type='primary'
                    className=' bg-green-500'
                    onClick={placeOrder}
                  >
                    Place Order
                  </Button>
                )}
              </div>
            </div>
          </>
        )}
        <br />
        <br />
      </div>
      <BestSelling />
    </>
  );
};

export default Cart;
