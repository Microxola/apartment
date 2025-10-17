import {
  BuildingOffice2Icon,
  ClockIcon,
  EyeIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';

const DashboardCards = () => {
  return (
    <div className="bg-white p-4 rounded-2xl mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* All Properties */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-4">
          <div className="flex items-center justify-between">
            <div className="order-1 w-12 h-12 rounded-full flex items-center justify-center bg-gray-100">
              <BuildingOffice2Icon className="w-6 h-6 text-indigo-600" />
            </div>
            <div className="order-0 text-right">
              <span className="text-sm text-gray-500">All Properties</span>
              <div className="text-lg font-semibold text-gray-800">1.7k+</div>
            </div>
          </div>
        </div>

        {/* Total Pending */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-4">
          <div className="flex items-center justify-between">
            <div className="order-1 w-12 h-12 rounded-full flex items-center justify-center bg-gray-100">
              <ClockIcon className="w-6 h-6 text-yellow-500" />
            </div>
            <div className="order-0 text-right">
              <span className="text-sm text-gray-500">Total Pending</span>
              <div className="text-lg font-semibold text-gray-800">03</div>
            </div>
          </div>
        </div>

        {/* Total Views */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-4">
          <div className="flex items-center justify-between">
            <div className="order-1 w-12 h-12 rounded-full flex items-center justify-center bg-gray-100">
              <EyeIcon className="w-6 h-6 text-blue-500" />
            </div>
            <div className="order-0 text-right">
              <span className="text-sm text-gray-500">Total Views</span>
              <div className="text-lg font-semibold text-gray-800">4.8k</div>
            </div>
          </div>
        </div>

        {/* Total Favourites */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-4">
          <div className="flex items-center justify-between">
            <div className="order-1 w-12 h-12 rounded-full flex items-center justify-center bg-gray-100">
              <HeartIcon className="w-6 h-6 text-red-500" />
            </div>
            <div className="order-0 text-right">
              <span className="text-sm text-gray-500">Favourites</span>
              <div className="text-lg font-semibold text-gray-800">09</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
