import React from 'react';
import { 
  HomeIcon,
  ClockIcon,
  EyeIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const DashboardStats = () => {
  return (
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
              <div className="value font-semibold text-4xl text-gray-800">1.7k+</div>
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
  );
};

export default DashboardStats;
