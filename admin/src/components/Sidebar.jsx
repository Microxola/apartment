import React from 'react'
import {NavLink} from "react-router-dom"
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[25%] min-h-screen bg-white'>

        <div className='flex flex-col gap-6 pt-6 pl-[20%] text-[22px] px-10'>
            <NavLink className='flex items-center gap-3 border-r-0 px-3 py-2 rounded-l' to='/'>
                    {/* <img src={assets.add_icon} className='w-5 h-5' /> */}
                    <p className='hidden md:block'>Dashboard</p>
            </NavLink>
            <NavLink className='flex items-center gap-3 border-r-0 px-3 py-2 rounded-l' to='/add'>
                    <img src={assets.add_icon} className='w-5 h-5' />
                    <p className='hidden md:block'>Add Property</p>
            </NavLink>
            <NavLink className='flex items-center gap-3 border-r-0 px-3 py-2 rounded-l' to='/hotel'>
                    <img src={assets.add_icon} className='w-5 h-5' />
                    <p className='hidden md:block'>Add Agents</p>
            </NavLink>
            <NavLink className='flex items-center gap-3 border-r-0 px-3 py-2 rounded-l' to='/list'>
                    <img src={assets.order_icon} className='w-5 h-5' />
                    <p className='hidden md:block'>List Products</p>
            </NavLink>
            <NavLink className='flex items-center gap-3 border-r-0 px-3 py-2 rounded-l' to='/order'>
                    <img src={assets.order_icon} className='w-5 h-5' />
                    <p className='hidden md:block'>All Order</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar
