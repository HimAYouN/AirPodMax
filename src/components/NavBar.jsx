import React from 'react'
import { FaApple } from "react-icons/fa";

function NavBar() {
  return (
    <div className='w-full h-16 bg-[rgb(245,245,247)] flex justify-between items-center text-gray-600 px-20 '>
      <div>
        <FaApple size={40} color='gray'/>
      </div>
      <div className='flex justify-around gap-10'>
        <p>Products</p>
        <p>Prices</p>
        <p>Overview</p>
        <p>Contacts</p>
      </div>
      
    </div>
  )
}

export default NavBar