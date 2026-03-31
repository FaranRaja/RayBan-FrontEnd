import React from 'react'

const Hero1 = () => {
  return (
    <div className='w-full h-200 relative'>
      <img src="https://media.ray-ban.com/cms/resource/image/1758526/landscape_ratio144x65/2592/1170/61f1351c3c16aa5146d06c216e4ebadf/FE973E1E307185D8C1B0E8BEE093290B/rb-hp-easter-sun-na-d-3.jpg" alt="" className='w-full h-full object-cover'/>


      <div className='absolute top-100 left-50 font-extrabold flex flex-col gap-4'>
        <h1 className='text-[24px]'>20% OFF SUNGLASSES | SPRING DAYS </h1>

        <div className='flex gap-4'>
          <button className='text-[14px] px-6 py-3.25 bg-black text-white'>SHOP MEN</button>
          <button className='text-[14px] px-6 py-3.25 bg-black text-white'>SHOP WOMEN</button>
        </div>
      </div>
    </div>
  )
}
    
export default Hero1
