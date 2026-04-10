import React from 'react';

const About = () => {
  return (
    <>
      <div className="container mx-auto my-6 py-6">
        <h1 className="text-3xl font-bold text-center mb-4">About Us</h1>
        <hr className="border-gray-300 mb-6" />
        <p className="text-lg text-center text-gray-700 mb-4">
          <b>Welcome to Shopper</b>, your one-stop destination for stylish and affordable fashion. We believe that everyone deserves to feel confident and look their best, no matter the occasion. That’s why we’ve curated a wide range of clothing for both MEN, WOMEN ,JEWELRY & ELECTRONICS designed to suit every style, preference, and budget.
          <br />
          At <b>Shopper</b>, fashion is more than just trends—it’s about expressing yourself. Our collections are thoughtfully selected, keeping comfort, quality, and uniqueness in mind. From timeless classics to the latest trends, we offer everything from casual wear to statement pieces, ensuring you find something you love.
          <br />
          We take pride in delivering an exceptional shopping experience with customer satisfaction as our top priority. With fast shipping, secure payments, and friendly customer support, we’re here to make your fashion journey seamless and enjoyable.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img className="w-full h-40 object-cover" src="https://images-static.nykaa.com/uploads/bb14f4e7-93eb-42d4-bbc8-f38495538001.jpg?tr=w-600,cm-pad_resize" alt="Men's Clothing" />
            <div className="p-4">
              <h5 className="text-center text-xl font-semibold">Men's Clothing</h5>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img className="w-full h-40 object-cover" src="https://images-static.nykaa.com/uploads/4619d281-246a-455a-a0a5-d8518054551d.jpg?tr=w-600,cm-pad_resize" alt="Women's Clothing" />
            <div className="p-4">
              <h5 className="text-center text-xl font-semibold">Women's Clothing</h5>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img className="w-full h-40 object-cover" src="https://images-static.nykaa.com/uploads/cdf5a4e6-da45-47ea-945a-22d0d67e6543.jpg?tr=w-1800,cm-pad_resize" alt="Jewelry" />
            <div className="p-4">
              <h5 className="text-center text-xl font-semibold">Jewellery</h5>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img className="w-full h-40 object-cover" src="https://images-static.nykaa.com/uploads/a0199eec-aeee-47dd-8220-24c4f21b9a7e.jpg?tr=w-600,cm-pad_resize" alt="Kids" />
            <div className="p-4">
              <h5 className="text-center text-xl font-semibold">Kids</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
