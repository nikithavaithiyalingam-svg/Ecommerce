import React from 'react'
import { FaShippingFast } from 'react-icons/fa'
import { MdOutlinePayment, MdProductionQuantityLimits } from 'react-icons/md'
import { TbTruckReturn } from 'react-icons/tb'

const Services = () => {
  return (
    <>
      <div className="container mx-auto px-5 flex py-11 gap-7 items-center justify-center flex-wrap">
        <div className="bg-red-500 py-7 px-2 rounded text-white flex gap-2 flex-col items-center w-[200px]">
           <FaShippingFast size={40}/>
           <p >FREE SHIPPING</p>
        </div>

        <div className="bg-red-500 py-7 px-2 rounded text-white flex gap-2 flex-col items-center w-[200px]">
           <MdProductionQuantityLimits size={40}/>
           <p>AUTHENTIC PRODUCT</p>
        </div>

        <div className="bg-red-500 py-7 px-2 rounded text-white flex gap-2 flex-col items-center w-[200px]">
           <TbTruckReturn size={40}/>
           <p>EASY RETURN</p>
        </div>

        <div className="bg-red-500 py-7 px-2 rounded text-white flex gap-2 flex-col items-center w-[200px]">
           <MdOutlinePayment size={40}/>
           <p>SECURE PAYMENT</p>
        </div>

      </div>
    </>
  )
}

export default Services
