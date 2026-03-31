import React from 'react'

const Categories = () => {
  return (
    <ul className='flex items-center gap-5 font-bold '>
      <li className='text-[#e80c00] hover:border-b-2 hover:border-[#e80c00] cursor-pointer'>SPRING DEALS</li>
      <li className='hover:border-b-2 hover:border-black cursor-pointer'>NEW IN</li>
      <li className='hover:border-b-2 hover:border-black cursor-pointer'>SUNGLASSES</li>
      <li className='hover:border-b-2 hover:border-black cursor-pointer'>PRESCRIPTION</li>
      <li className='hover:border-b-2 hover:border-black cursor-pointer'>CUSTOMIZE</li>
      <li className='hover:border-b-2 hover:border-black cursor-pointer flex gap-1'>AI GLASSES <p className='text-white rounded-full bg-[#e80c00] w-10 h-4 text-[10px] text-center'>NEW</p></li>
      <li className='hover:border-b-2 hover:border-black cursor-pointer'>EYEGLASSES</li>
      
    </ul>
  )
}

export default Categories
