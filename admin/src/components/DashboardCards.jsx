import {
  BuildingOffice2Icon,
  ClockIcon,
  EyeIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';

const stats = [
  {
    label: 'All Properties',
    value: '1.7k+',
    icon: <BuildingOffice2Icon className="w-6 h-6 text-indigo-600" />,
  },
  {
    label: 'Total Pending',
    value: '03',
    icon: <ClockIcon className="w-6 h-6 text-yellow-500" />,
  },
  {
    label: 'Total Views',
    value: '4.8k',
    icon: <EyeIcon className="w-6 h-6 text-blue-500" />,
  },
  {
    label: 'Total Favourites',
    value: '07',
    icon: <HeartIcon className="w-6 h-6 text-red-500" />,
  },
];

const DashboardCards = () => {
  return (
    <div className="bg-white p-4 rounded-2xl mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 rounded-2xl shadow-sm p-4"
          >
            <div className="flex items-center justify-between">
              {/* Icon */}
              <div className="order-1 w-12 h-12 rounded-full flex items-center justify-center bg-gray-100">
                {stat.icon}
              </div>
              {/* Text Content */}
              <div className="order-0 text-right">
                <span className="text-sm text-gray-500">{stat.label}</span>
                <div className="text-lg font-semibold text-gray-800">{stat.value}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCards;
