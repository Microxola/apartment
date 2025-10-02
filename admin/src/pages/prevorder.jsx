import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from "axios"
import { backendurl, currency } from '../App'
import { toast } from 'react-toastify'
import Title from '../components/Title'
import { useEffect } from 'react'

const Order = ({token}) => {
  // const {user, currency, getToken, toast, axios} = useAppContext();
  const [dashboardData, setDashboardData] = useState({
      bookings: [],
      totalBookings: 0,
      totalRevenue: 0
  })

  const fetchDashboardData = async () => {
    try {
      const {data} = await axios.get(backendurl+"/api/booking/hotel",
                    {headers: {token}}
                )
        setDashboardData(data.dashboardData)
      if(data.success){
        console.log(data);
        toast.success(data.message);
        setDashboardData(data.dashboardData)
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error("Failed to fetch dashboard data");
}
  }
  useEffect(()=>{
      fetchDashboardData();
  }, [])
  return (
    <div>
      <Title align='left' font='outfit' title='All Orders' subTitle='Monitor All orders made by user, track bookings and anakyze revenue-all in one place
    . Stay updated with real-time insights to ensure smooth operation'/>
    {/* recent booking */}
    <h2 className='text-xl text-blue-950/70 font-medium mb-5'>Recent Bookings</h2>

      <div className='w-full max-w-3xl text-left border border-gray-300 
      rounded-lg max-h-80 overflow-y-scroll'>
          <table className='w-full'>
            <thead className='bg-gray-50'>
              <tr>
                <th className='py-3 px-4 text-gray-800 font-medium'>User Name</th>
                <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden'>Room Name</th>
                <th className='py-3 px-4 text-gray-800 font-medium text-center'>Total Amount</th>
                <th className='py-3 px-4 text-gray-800 font-medium text-center'>Payment Status</th>
              </tr>

            </thead>

            <tbody className='text-sm'>
              {dashboardData.bookings.map((item, index) => (
                <tr key={index}>
                
                  <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>{item.user.name}</td>
                  <td className='py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden'>{item.room.roomType}</td>
                  <td className='py-3 px-4 text-gray-700 border-t border-gray-300 text-center'>{currency} {item.totalPrice}</td>
                  <td className='py-3 px-4 text-gray-700 border-t border-gray-300 flex'>
                    
                    <button className={`py-1 px-3 text-xs rounded-full mx-auto ${item.isPaid ? 'bg-green-200 text-green-600': 'bg-amber-200 text-yellow-600'}`}>
                      {item.isPaid ? 'completed' : 'pending'}
                    </button>
                    </td>
                
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    </div>
  )
}

export default Order;