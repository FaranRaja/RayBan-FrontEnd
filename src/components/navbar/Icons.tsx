import React from 'react'
import { Search, User, ShoppingBag } from 'lucide-react'

const Icons = () => {
  return (
    <div className=' flex gap-6'>
      
      <Search className='w-7 h-7 cursor-pointer'/>
      <User className='w-7 h-7 cursor-pointer'/>
      <ShoppingBag className='w-7 h-7 cursor-pointer'/>
    </div>
  )
}

export default Icons
