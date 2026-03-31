import React from 'react'

const Hero2 = () => {
  return (
    <div className='w-full h-200 relative'>

        <img src="https://media.ray-ban.com/cms/resource/image/1754848/landscape_ratio144x65/2592/1170/c38f605a25b30c60bdabd6fb2f72e304/F25AD2AC99BC02CB96A4B9BE0D3FC08B/rb-hero-essentials-optical-d.jpg" alt="" className='w-full h-full object-cover' />


        <div className='font-extrabold absolute top-100 right-50 flex items-center flex-col gap-10'>
            <h1 className='text-[24px] cursor-pointer'>FRESH PRESCRIPTION LOOKS FOR EVERY MOMENT</h1>
            <button className='text-[14px] px-6 py-3.25 bg-black text-white cursor-pointer hover:opacity-60'>SHOP NOW</button>
        </div>
    </div>
  )
}

export default Hero2
