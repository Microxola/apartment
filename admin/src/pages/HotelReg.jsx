import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
// import { useAppContext } from '../context/AppContext'
import { toast } from 'react-toastify'
import { backendurl } from '../App';
import axios from "axios"


const HotelReg = ({token}) => {
     const [name, setName] = useState("");
    const [address, setContact] = useState("");
    const [contact, setPhone] = useState("");
    const [city, setCity] = useState("");

     const submitHandler = async (e) => { 
            try { 
                e.preventDefault(); 
                const {data} = await axios.post(backendurl+"/api/hotels", {name, address, contact, city},
                    {headers: {token}}
                )

                if(data.success){
                    toast.success(data.message);  

                }else{
                    // toast.error(data.message);
                }
            } catch (error) {
                    toast.error(error.message);
                    console.log(error.message);
                    
                
            }
    }
  return (
    <div className='mt-10'>

        <form onSubmit={submitHandler} onClick={(e) => e.stopPropagation()}
        className='bg-[#f9f3ef] rounded-xl max-w-3xl max-md:mx-2'>
       
            <div className='flex flex-col items-center p-8 md:p-10'>
               
                <p className='text-2xl font-semibold mt-6'>Register New Agent</p>


 
                {/* hotel name */}
                <div className="w-full mt-4">
                        <label htmlFor="name">Agent Name</label>
                        <input onChange={(e)=> setName(e.target.value)} value={name} id='name' type="text" placeholder='type here . .' className='border  border-gray-200
                        rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light' required/>
                </div>
                <div className="w-full mt-4">
                        <label htmlFor="contact">Contact</label>
                        <input onChange={(e)=> setPhone(e.target.value)} value={contact}
                         id='contact' type="text" placeholder='type here . .' className='border  border-gray-200
                        rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light' required/>
                </div>
                <div className="w-full mt-4">
                        <label htmlFor="address">Address</label>
                        <input onChange={(e)=> setContact(e.target.value)} value={address}
                         id='address' type="text" placeholder='type here . .' className='border  border-gray-200
                        rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light' required/>
                </div>
                <div className="w-full mt-4">
                        <label htmlFor="address">States</label>
                        <input onChange={(e)=> setCity(e.target.value)} value={city}
                         id='address' type="text" placeholder='type here . .' className='border  border-gray-200
                        rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light' required/>
                </div>

               
                <button className="text-white bg-indigo-500 hover:bg-indigo-600 transition-all mr-auto 
                px-4 py-2 rounded cursor-pointer mt-6">
                    Register
                </button>
            </div>
        </form>
    </div>
  )
}

export default HotelReg