import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendurl, currency } from '../App'
import { toast } from 'react-toastify'

const List = ({token}) => {
   const [rooms, setRooms] = useState([])

 // fecthing rooms
  const fetchRoom = async () => {
    try {
        const {data} = await axios.get(backendurl+"/api/rooms/owner",
                   {headers: {token}}
                )
          
        if(data.success){
          setRooms(data.rooms)
        }else{
              toast.error(data.message);

            }
        } catch (error) {
          toast.error(error.message)
          console.log(error.message);
      
    }
  }

  const toggleAvailability = async (roomId) => {
      const {data} = await axios.post(backendurl+"/api/rooms/toggle-availability", {roomId},
                    {headers: {token}}
                )

      if(data.success){
        toast.success(data.message);
        fetchRoom();
      }else{
        toast.error(data.message)
      }
  }  

  useEffect(() => {
        fetchRoom();
        // console.log(fetchRoom);
  }, [])
  return (
    <>
        <div className='bg-[#f9f3ef]'>
        <p className='text-gray-500 mt-7'>All Rooms</p>


         <div className='w-full max-w-5xl text-left border border-gray-300 
      rounded-lg max-h-80 overflow-y-scroll mt-3'>
          <table className='w-full'>
            <thead className='bg-gray-50'>
              <tr>
                <th className='py-3 px-4 text-gray-800 font-medium'> Name</th>
                <th className='py-3 px-4 text-gray-800 font-medium'> Type</th>
                <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden'>Facility</th>
                <th className='py-3 px-4 text-gray-800 font-medium text-center'>Price </th>
                <th className='py-3 px-4 text-gray-800 font-medium text-center'>Actions</th>
              </tr>

            </thead>

            <tbody className='text-sm'>
                  {
                    rooms.map((item, index) => (
                      <tr key={index}>
                          <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                              {item.name}
                          </td>
                          <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                              {item.roomType}
                          </td>
                          <td className='py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden'>
                              {item.amenities.join(', ')}
                          </td>
                          <td className='py-3 px-4 text-gray-700 border-t border-gray-300 text-center'>
                              {currency} {item.pricePerNight.toLocaleString()}
                          </td>
                          <td className='py-3 px-4 text-red-500 border-t border-gray-300 text-center text-sm'>
                              <label className='relative inline-flex items-center cursor-pointer
                              text-gray-900 gap-3'>
                                <input type="checkbox" onChange={()=> toggleAvailability(item._id)} className='sr-only peer' checked={item.isAvailable} />
                                <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200">

                                </div>
                                <span className='dot absolute left-1 top-1 w-5 h-5 bg-white
                                rounded-full transition-transform duration-200 ease-in-out
                                peer-checked:translate-x-5'>

                                </span>
                              </label>
                          </td>
                      </tr>
                    ))
                  }
            </tbody>
          </table>

          </div>

    </div>
    </>
  )
}

export default List
