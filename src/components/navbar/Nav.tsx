import React from 'react'
import Categories from './Categories'
import Icons from './Icons'

const Nav = () => {
  return (
    <div className=' flex items-center justify-between px-15 py-4'>

      <img src="https://www.ray-ban.com/rbstatichtml/assets/images/icons/red-logo.svg" alt=""  className='w-20 h-20'/>

      <Categories />

      <Icons  />
      
    </div>
  )
}

export default Nav
