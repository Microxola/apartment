import React from 'react';
import { 
  HomeIcon,
  ClockIcon,
  EyeIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const DashboardStats = () => {
  const stats = [
    {
      title: "All Properties",
      value: "1.7k+",
      icon: <HomeIcon className="w-6 h-6 text-white" />,
      bgColor: "bg-blue-500"
    },
    {
      title: "Total Pending",
      value: "03",
      icon: <ClockIcon className="w-6 h-6 text-white" />,
      bgColor: "bg-yellow-500"
    },
    {
      title: "Total Views",
      value: "4.8k",
      icon: <EyeIcon className="w-6 h-6 text-white" />,
      bgColor: "bg-green-500"
    },
    {
      title: "Total Favourites",
      value: "07",
      icon: <HeartIcon className="w-6 h-6 text-white" />,
      bgColor: "bg-red-500"
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-10 mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-3xl border border-gray-200 relative mb-4 p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className={`${stat.bgColor} rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 order-1 sm:order-2 mb-4 sm:mb-0`}>
                {stat.icon}
              </div>
              <div className="order-2 sm:order-1 text-center sm:text-left py-4">
                <span className="text-gray-600 text-sm font-medium block">{stat.title}</span>
                <div className="value font-semibold text-4xl text-gray-800">{stat.value}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardStats;