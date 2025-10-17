import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import axios from "axios";
import { backendurl, currency } from '../App';
import { toast } from 'react-toastify';
import Title from '../components/Title';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title as ChartTitle,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { 
  HomeIcon,
  ClockIcon,
  EyeIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ChartTitle,
  Tooltip,
  Legend,
  ArcElement
);

const Home = ({ token }) => {
  const [dashboardData, setDashboardData] = useState({
    bookings: [],
    totalBooking: 0,
    totalRevenue: 0,
    Allproperty: 0
  });
  const [selectedTimeframe, setSelectedTimeframe] = useState('monthly');
  const [loading, setLoading] = useState(true);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${backendurl}/api/booking/hotel`,
        { headers: { token } }
      );
        setDashboardData(data.dashboardData);
        console.log(data.dashboardData);
      if (data.success) {
        setDashboardData(data.dashboardData);
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Failed to fetch dashboard data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  // Sample data for charts (replace with your actual data)
  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [12000, 19000, 15000, 25000, 22000, 30000],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const bookingStatusData = {
    labels: ['Completed', 'Pending', 'Cancelled'],
    datasets: [
      {
        data: [65, 15, 20],
        backgroundColor: [
          'rgba(34, 197, 94, 0.8)',
          'rgba(234, 179, 8, 0.8)',
          'rgba(239, 68, 68, 0.8)',
        ],
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
    cutout: '70%',
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-[#f9f3ef] min-h-screen">
      <Title 
        align='left' 
        font='outfit' 
        title='Dashboard' 
        subTitle=''
      />

      {/* dashboard starts from  here bruh */}
<div className="bg-white rounded-2xl p-10 mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* All Properties */}
        <div className="bg-white rounded-3xl border border-gray-200 relative mb-4 p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 order-1 sm:order-2 mb-4 sm:mb-0">
              <HomeIcon className="w-6 h-6 text-white" />
            </div>
            <div className="order-2 sm:order-1 text-center sm:text-left py-4">
              <span className="text-gray-600 text-sm font-medium block">All Properties</span>
              <div className="value font-semibold text-4xl text-gray-800">{dashboardData.Allproperty}</div>
            </div>
          </div>
        </div>

        {/* Total Pending */}
        <div className="bg-white rounded-3xl border border-gray-200 relative mb-4 p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="bg-yellow-500 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 order-1 sm:order-2 mb-4 sm:mb-0">
              <ClockIcon className="w-6 h-6 text-white" />
            </div>
            <div className="order-2 sm:order-1 text-center sm:text-left py-4">
              <span className="text-gray-600 text-[12px] font-medium block">Total Purchased</span>
              <div className="value font-semibold text-4xl text-gray-800">{dashboardData.totalBooking}</div>
            </div>
          </div>
        </div>

        {/* Total Views */}
        <div className="bg-white rounded-3xl border border-gray-200 relative mb-4 p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 order-1 sm:order-2 mb-4 sm:mb-0">
              <EyeIcon className="w-6 h-6 text-white" />
            </div>
            <div className="order-2 sm:order-1 text-center sm:text-left py-4">
              <span className="text-gray-600 text-sm font-medium block">Total Revenue</span>
              <div className="value font-semibold text-[20px] text-gray-800">{dashboardData.totalRevenue.toLocaleString()}k</div>
            </div>
          </div>
        </div>

        {/* Total Favourites */}
        <div className="bg-white rounded-3xl border border-gray-200 relative mb-4 p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="bg-red-500 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 order-1 sm:order-2 mb-4 sm:mb-0">
              <HeartIcon className="w-6 h-6 text-white" />
            </div>
            <div className="order-2 sm:order-1 text-center sm:text-left py-4">
              <span className="text-gray-600 text-sm font-medium block"> Favourites</span>
              <div className="value font-semibold text-4xl text-gray-800">107</div>
            </div>
          </div>
        </div>

      </div>
</div>
<div className="bg-white rounded-2xl p-10 mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
      

        {/* Total Pending */}
        <div className="bg-white rounded-3xl border border-gray-200 relative mb-4 p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="bg-yellow-500 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 order-1 sm:order-2 mb-4 sm:mb-0">
              <ClockIcon className="w-6 h-6 text-white" />
            </div>
            <div className="order-2 sm:order-1 text-center sm:text-left py-4">
              <span className="text-gray-600 text-sm font-medium block">Total Pending</span>
              <div className="value font-semibold text-4xl text-gray-800">03</div>
            </div>
          </div>
        </div>

        {/* Total Views */}
        <div className="bg-white rounded-3xl border border-gray-200 relative mb-4 p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 order-1 sm:order-2 mb-4 sm:mb-0">
              <EyeIcon className="w-6 h-6 text-white" />
            </div>
            <div className="order-2 sm:order-1 text-center sm:text-left py-4">
              <span className="text-gray-600 text-sm font-medium block">Total Views</span>
              <div className="value font-semibold text-4xl text-gray-800">4.8k</div>
            </div>
          </div>
        </div>

        

      </div>
</div>
     
      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Revenue Chart */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Revenue Overview</h3>
            <div className="text-sm text-gray-500">Last 6 months</div>
          </div>
          <div className="h-80">
            <Line data={revenueData} options={chartOptions} />
          </div>
        </div>
        
        {/* Booking Status Chart */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Booking Status</h3>
            <div className="text-sm text-gray-500">Current distribution</div>
          </div>
          <div className="h-80 relative">
            <Doughnut data={bookingStatusData} options={doughnutOptions} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">100%</p>
                <p className="text-sm text-gray-500">Total Bookings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recent Bookings */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900">Recent Purchase</h3>
          <p className="text-sm text-gray-500 mt-1">Latest property purchase</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User Name</th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">Property Type</th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Amount</th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Status</th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {dashboardData.bookings.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="font-medium text-[#ff6725]">
                          {item.user.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="font-medium text-gray-900">{item.user.name}</div>
                        <div className="text-sm text-gray-500">#{index + 1001}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap hidden sm:table-cell">
                    <div className="text-sm text-gray-900">{item.room.roomType}</div>
                    <div className="text-sm text-gray-500">{item.guest}</div>
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{currency} {item.totalPrice.toLocaleString()}</div>
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      item.isPaid 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {item.isPaid ? 'Completed' : 'Pending'}
                    </span>
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm font-medium">
                    <button className="text-[#ff6725] hover:text-blue-900 mr-3">View</button>
                    <button className="text-red-600 hover:text-red-900">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
          <button className="text-sm text-[#ff6725] hover:text-blue-800 font-medium">
            View all bookings →
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Home;