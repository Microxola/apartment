import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import axios from "axios";
import { backendurl, currency } from '../App';
import { toast } from 'react-toastify';
import Title from '../components/Title';

const Order = ({ token }) => {
  const [dashboardData, setDashboardData] = useState({
    bookings: [],
    totalBookings: 0,
    totalRevenue: 0
  });
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${backendurl}/api/booking/hotel`,
        { headers: { token } }
      );
      
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

  // Filter bookings based on status
  const filteredBookings = dashboardData.bookings.filter(booking => {
    if (filterStatus === 'all') return true;
    return filterStatus === 'completed' ? booking.isPaid : !booking.isPaid;
  });

  // Sort bookings based on selection
  const sortedBookings = [...filteredBookings].sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else if (sortBy === 'oldest') {
      return new Date(a.createdAt) - new Date(b.createdAt);
    } else if (sortBy === 'price-high') {
      return b.totalPrice - a.totalPrice;
    } else if (sortBy === 'price-low') {
      return a.totalPrice - b.totalPrice;
    }
    return 0;
  });

  // Stats for the header
  const completedBookings = dashboardData.bookings.filter(b => b.isPaid).length;
  const pendingBookings = dashboardData.bookings.filter(b => !b.isPaid).length;

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
        title='All Orders' 
        subTitle='Monitor all orders made by users, track bookings and analyze revenue—all in one place. Stay updated with real-time insights to ensure smooth operation.'
      />
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Total Orders</h3>
              <p className="text-2xl font-semibold text-gray-900">{sortedBookings.length}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <img src={assets.totalBookingIcon} className="h-6 w-6" alt="Total Orders" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Completed</h3>
              <p className="text-2xl font-semibold text-gray-900">{completedBookings}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Pending</h3>
              <p className="text-2xl font-semibold text-gray-900">{pendingBookings}</p>
            </div>
            <div className="bg-amber-100 p-3 rounded-lg">
              <svg className="h-6 w-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Filters and Sorting */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-wrap gap-2">
          <span className="text-sm font-medium text-gray-700 mr-2">Filter by:</span>
          {['all', 'completed', 'pending'].map(status => (
            <button
              key={status}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                filterStatus === status
                  ? status === 'all' 
                    ? 'bg-blue-100 text-[#ff6725]' 
                    : status === 'completed' 
                    ? 'bg-green-100 text-green-600' 
                    : 'bg-amber-100 text-amber-600'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setFilterStatus(status)}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="flex items-center">
          <span className="text-sm font-medium text-gray-700 mr-2">Sort by:</span>
          <select 
            className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="price-high">Price: High to Low</option>
            <option value="price-low">Price: Low to High</option>
          </select>
        </div>
      </div>
      
      {/* Orders Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">All Bookings</h3>
            <p className="text-sm text-gray-500 mt-1">{sortedBookings.length} orders found</p>
          </div>
          {/* <button className="text-[#ff6725] hover:text-blue-800 text-sm font-medium flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Export CSV
          </button> */}
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Room Details</th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            
            <tbody className="divide-y divide-gray-100">
              {sortedBookings.length > 0 ? (
                sortedBookings.map((item, index) => (
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
                    
                    <td className="py-4 px-6 whitespace-nowrap hidden md:table-cell">
                      <div className="text-sm text-gray-900">{item.room.roomType}</div>
                      <div className="text-sm text-gray-500">{item.guest} Guest</div>  
                    </td>
                    
                    <td className="py-4 px-6 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{currency} {item.totalPrice.toLocaleString()}</div>
                      {/* <div className="text-sm text-gray-500">Paid via Card</div> */}
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
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="py-8 text-center">
                    <div className="flex flex-col items-center justify-center text-gray-500">
                      <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      <p className="text-lg font-medium">No orders found</p>
                      <p className="text-sm">Try changing your filters or check back later</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {sortedBookings.length > 0 && (
          <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
            <div className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to <span className="font-medium">{Math.min(10, sortedBookings.length)}</span> of{' '}
              <span className="font-medium">{sortedBookings.length}</span> results
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 rounded-md bg-white border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-1 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700">
                1
              </button>
              <button className="px-3 py-1 rounded-md bg-white border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;