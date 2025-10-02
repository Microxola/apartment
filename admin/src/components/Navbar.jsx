import React from 'react'
import logo from "../assets/Logo-Trans.png"
import { 
  XMarkIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  HomeIcon,
  TagIcon,
  InformationCircleIcon,
  PhoneIcon,
  ChevronDownIcon,
  EyeIcon,
  EyeSlashIcon
} from '@heroicons/react/24/outline';
const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between bg-[#fff]'>
            {/* <img className='w-20' src={logo} /> */}
            <h1 className='text-[30px] font-mono font-extrabold'>Admin</h1>
            {/* <img className='w-[max(10%, 50px)]' src={assets.logo} /> */}
        <div className='flex'>
           <form className="search-form ms-auto flex items-center border border-gray-300 rounded-lg  gap-4 mr-4">
                <input 
                  type="text" 
                  placeholder="Search here.." 
                  className="px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="text-black px-4 py-2 rounded-r-lg">
                  {/* <img src="../images/lazy.svg" data-src="images/icon/icon_43.svg" alt="" className="mx-auto w-5 h-5" /> */}
                          <MagnifyingGlassIcon className="w-5 h-5" />

                </button>
              </form>
            <button onClick={()=>setToken('')} className='bg-gray-600  text-white px-5 py-2 sm:py-2 rounded-full text-xs sm:text-sm'>LogOut</button>
        </div>
    </div>
  )
}
export default Navbar
