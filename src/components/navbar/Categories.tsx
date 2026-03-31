import React from 'react'

const Categories = () => {
  return (
    <ul className='flex items-center gap-5 font-bold '>
      <li className='hover:border-b-2 hover:border-black cursor-pointer'>NEW IN</li>
      <li className='hover:border-b-2 hover:border-black cursor-pointer'>SUNGLASSES</li>
      <li className='hover:border-b-2 hover:border-black cursor-pointer'>EYEGLASSES</li>
      <li className='text-[#e80c00] hover:border-b-2 hover:border-[#e80c00] cursor-pointer'>PROMO</li>
    </ul>
  )
}

export default Categories
