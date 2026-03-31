import React from 'react'
import Categories from './Categories'

const Nav = () => {
  return (
    <div className='bg-black flex items-center justify-between p-4'>

      <img src="https://www.ray-ban.com/rbstatichtml/assets/images/icons/red-logo.svg" alt=""  className='w-20 h-20'/>

      <Categories />
      
    </div>
  )
}

export default Nav
