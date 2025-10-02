import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';
import axios from 'axios';
import { 
  Calendar, 
  CreditCard, 
  MapPin, 
  Building, 
  ChevronDown,
  ChevronUp,
  Filter,
  Search,
  Download,
  Printer
} from 'lucide-react';

const Order = () => {
  const [bookings, setUserBooking] = useState([]);
  const [gmail, setGmail] = useState('');
  const [expandedBooking, setExpandedBooking] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const { currency, backendUrl, token, userEmail } = useAppContext();

  const fetchUserBooking = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/booking/user`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (data.success) {
        setUserBooking(data.bookings);
        setGmail(data.email);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
      console.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      fetchUserBooking();
    }
  }, [token]);

  const toggleBookingDetails = (bookingId) => {
    if (expandedBooking === bookingId) {
      setExpandedBooking(null);
    } else {
      setExpandedBooking(bookingId);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getDaysBetween = (checkIn, checkOut) => {
    const diffTime = Math.abs(new Date(checkOut) - new Date(checkIn));
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  // Filter and sort bookings
  const filteredBookings = bookings
    .filter(booking => {
      const matchesStatus = filterStatus === 'all' || 
        (filterStatus === 'paid' && booking.isPaid) ||
        (filterStatus === 'unpaid' && !booking.isPaid);
      
      const matchesSearch = booking.hotel?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        booking.room?.roomType?.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesStatus && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'newest') return new Date(b.createdAt) - new Date(a.createdAt);
      if (sortBy === 'oldest') return new Date(a.createdAt) - new Date(b.createdAt);
      if (sortBy === 'price-high') return b.totalPrice - a.totalPrice;
      if (sortBy === 'price-low') return a.totalPrice - b.totalPrice;
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">My Property</h1>
          <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">
            Easily manage your past, current House reservations in one place. 
            Plan your stay seamlessly with just a few clicks.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 className="text-lg font-medium text-gray-700">Total Property</h3>
            <p className="mt-2 text-3xl font-bold text-indigo-600">{bookings.length}</p>
          </div>
         
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 className="text-lg font-medium text-gray-700">Account Email</h3>
            <p className="mt-2 text-sm font-medium text-gray-900 truncate">{userEmail}</p>
          </div>
        </div>

        {/* Controls Section */}
        <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 mb-8 border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by hotel or room type..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-3">
              <select
                className="py-2 pl-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">All Statuses</option>
                <option value="paid">Paid</option>
                <option value="unpaid">Unpaid</option>
              </select>
              
              <select
                className="py-2 pl-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
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
        </div>

        {/* Bookings List */}
        <div className="space-y-4">
          {filteredBookings.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-100">
              <Building className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">No property found</h3>
              <p className="mt-2 text-gray-500">
                {searchQuery || filterStatus !== 'all' 
                  ? 'Try adjusting your search or filter criteria.' 
                  : "You haven't made any bookings yet."}
              </p>
            </div>
          ) : (
            filteredBookings.map((booking) => (
              <div key={booking._id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 transition-all hover:shadow-md">
                {/* Booking Summary */}
                <div 
                  className="p-4 md:p-6 cursor-pointer"
                  onClick={() => toggleBookingDetails(booking._id)}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <img 
                          src={booking.room?.image?.[0] || '/placeholder-hotel.jpg'} 
                          alt={booking.hotel?.name} 
                          className="w-20 h-20 md:w-24 md:h-24 rounded-lg object-cover shadow-sm"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                          {booking.room?.name}
                          <span className="text-sm font-normal bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                            {booking.room.roomType}
                          </span>
                        </h3>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <MapPin size={16} className="mr-1" />
                          <span>{booking.room?.address || 'Address not available'}</span>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <h1 className='text-black pr-5 font-extrabold'>By Agent: </h1> 
                          <span>{booking.hotel.name || 'agent not available'}</span>
                        </div>
                        {/* <div className="mt-2 flex flex-wrap gap-4">
                          <div className="flex items-center text-sm text-gray-600">
                            <Calendar size={16} className="mr-1" />
                            <span>{formatDate(booking.checkInDate)} - {formatDate(booking.checkOutDate)}</span>
                            <span className="ml-2 bg-gray-100 px-2 py-0.5 rounded">
                              {getDaysBetween(booking.checkInDate, booking.checkOutDate)} nights
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <span>Guests: {booking.guest}</span>
                          </div>
                        </div> */}
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end gap-2">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        booking.isPaid ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        <div className={`h-2 w-2 rounded-full mr-2 ${booking.isPaid ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                        {booking.isPaid ? 'Paid' : 'Payment Pending'}
                      </div>
                      <div className="text-xl font-bold text-gray-900">
                        {currency} {booking.totalPrice}
                      </div>
                      <div className="text-sm text-gray-500">
                        {expandedBooking === booking._id ? 'Show less' : 'Show details'}
                        {expandedBooking === booking._id ? (
                          <ChevronUp size={16} className="inline ml-1" />
                        ) : (
                          <ChevronDown size={16} className="inline ml-1" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Expanded Details */}
                {expandedBooking === booking._id && (
                  <div className="px-4 md:px-6 pb-4 md:pb-6 border-t border-gray-200">
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Booking Details</h4>
                        <dl className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <dt className="text-gray-500">Booking ID:</dt>
                            <dd className="font-medium">{booking._id}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-gray-500">Booking Date:</dt>
                            <dd className="font-medium">{formatDate(booking.createdAt)}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-gray-500">Status:</dt>
                            <dd className="font-medium capitalize">{booking.status}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-gray-500">Payment Method:</dt>
                            <dd className="font-medium">{booking.paymentMethod}</dd>
                          </div>
                          {booking.transaction_id && (
                            <div className="flex justify-between">
                              <dt className="text-gray-500">Transaction ID:</dt>
                              <dd className="font-medium text-sm">{booking.transaction_id}</dd>
                            </div>
                          )}
                        </dl>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Price Breakdown</h4>
                        <dl className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <dt className="text-gray-500">Room rate:</dt>
                            <dd className="font-medium">{currency} {booking.totalPrice}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-gray-500">Taxes & fees:</dt>
                            <dd className="font-medium">{currency} 0</dd>
                          </div>
                          <div className="flex justify-between border-t border-gray-200 pt-2">
                            <dt className="text-gray-700 font-medium">Total:</dt>
                            <dd className="text-gray-900 font-bold">{currency} {booking.totalPrice}</dd>
                          </div>
                        </dl>
                        
                        <div className="mt-4 flex gap-3">
                          {!booking.isPaid && (
                            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700">
                              Complete Payment
                            </button>
                          )}
                          <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center gap-2">
                            <Printer size={16} />
                            Print
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Order;