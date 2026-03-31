import React from 'react'

const Collection = () => {
  return (
    <div className='w-full h-192.5 flex text-2xl font-bold text-white '>
      <div className='w-1/3 h-full relative '>
        <img src="https://media.ray-ban.com/cms/resource/image/1586060/portrait_ratio6x7/960/1120/a5141bc1f046235ee3c11f5e49543e91/FDA3C78B035324D4E824573E49CD862C/hp-holiday-male-d.jpg" alt="" className='object-cover h-full  w-full' />
        <h2 className='absolute top-[85%] left-[20%] '>MEN'S COLLECTION</h2>
      </div>

      <div className='w-1/3 h-full relative '>
        <img src="https://media.ray-ban.com/cms/resource/image/1586070/portrait_ratio6x7/960/1120/66143322ece8ac0ff679e0363a6ce400/B90F55C82536BC2A79F3468B67A5BB45/hp-holiday-female-d.jpg" alt="" className='object-cover h-full w-full' />
        <h2 className='absolute top-[85%] left-[30%] '>WOMEN'S COLLECTION</h2>
      </div>

      <div className='w-1/3 h-full relative '>
        <img src="https://media.ray-ban.com/cms/resource/image/1586032/portrait_ratio6x7/960/1120/1b5e3a0ab047ce0976b31afe9839a7b/FC571630675E500752FF108CAB147322/hp-holiday-kids-d.jpg" alt="" className='object-cover h-full w-full' />
        <h2 className='absolute top-[85%] left-[30%] '>KIDS' COLLECTION</h2>
      </div>
    </div>
  )
}

export default Collection
