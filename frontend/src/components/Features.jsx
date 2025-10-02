import React from 'react';

import homeIcon from "../assets/HomeIcon.png"
import homeIcon2 from "../assets/HomeIcon1.png"

const Features = () => {
  const features = [
    {
      icon: homeIcon,
      title: "Buy a home",
      description: "Explore homy's 2 million+ homes and uncover your ideal living space.",
      link: "listing_03.html",
      linkText: "Buy Home"
    },
    {
      icon: homeIcon2,
      title: "Rent a home",
      description: "Discover a rental you'll love on homy, thanks to 35+ filters.",
      link: "listing_03.html",
      linkText: "Rent Home"
    },
    {
      icon: homeIcon2,
      title: "Sell Home",
      description: "List, sell, thrive – with our top-notch real estate agency. It's super easy & fun.",
      link: "listing_03.html",
      linkText: "Sell Home"
    }
  ];

  return (
    <div className="bg-pink-50 relative z-10 mt-40 lg:mt-32 xl:mt-40 pt-20 lg:pt-24 xl:pt-24 pb-28 lg:pb-32 xl:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="max-w-3xl">
            <div className="mb-12 lg:mb-10">
              <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                We're here to help you find properties.
              </h3>
              <p className="text-xl md:text-2xl text-gray-600">
                Over 745K listings of apartments, lots, plots - available today.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="mt-8 lg:mt-12 flex">
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 flex flex-col h-full w-full">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-[#ff6725] mb-8 transition-colors duration-300">
                    <img 
                      src={feature.icon} 
                      
                      className="w-8 h-8"
                    //   onError={(e) => {
                    //     e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTQiIGZpbGw9IiNlMWY1ZmYiIHN0cm9rZT0iIzNiODJmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGR5PSIwLjM1ZW0iIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjgiIGZpbGw9IiMzYjgyZmYiPkljb248L3RleHQ+PC9zdmc+';
                    //   }}
                    />
                  </div>
                  
                  <h5 className="text-xl font-semibold text-gray-900 mb-4 mt-2 lg:mt-4">
                    {feature.title}
                  </h5>
                  
                  <p className="text-gray-600 mb-8 flex-grow">
                    {feature.description}
                  </p>
                  
                  <a 
                    href={feature.link} 
                    className="inline-flex items-center text-[#ff6725] hover:text-blue-800 font-medium transition-colors duration-300 mt-auto"
                  >
                    {feature.linkText}
                    <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5 12h14m-7-7l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;