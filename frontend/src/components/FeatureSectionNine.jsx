import React from "react";
import { Link } from "react-router-dom";
import { HousePlus, HousePlug } from 'lucide-react';

const FeatureSectionNine = () => {
  const features = [
    {
      id: 1,
      title: "Buy a home",
      description: "Explore homy's 2 million+ homes and uncover your ideal living space.",
      buttonText: "Buy Home",
      icon: (
        <svg className="w-10 h-10 text-[#ff6725]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Rent a home",
      description: "Discover a rental you'll love on homy, thanks to 35+ filters.",
      buttonText: "Rent Home",
      icon: (
        <HousePlus className="w-10 h-10 text-[#ff6725]" />
      )
    },
    {
      id: 3,
      title: "Sell Home",
      description: "List, sell, thrive – with our top-notch real estate agency. It's super easy & fun.",
      buttonText: "Sell Home",
      icon: (
                <HousePlug className="w-10 h-10 text-[#ff6725]" />

      )
    }
  ];

  return (
    <div className="bg-pink-50 relative z-10 mt-40 xl:mt-28 pt-20 pb-28 xl:pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative">
          <div className="row">
            <div className="w-full xl:w-6/12 lg:w-8/12">
              <div className="mb-8 lg:mb-6">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  We're here to help you find properties.
                </h3>
                <p className="text-xl md:text-2xl">
                  Over 745K listings of apartments, lots, plots - available today.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {features.map((feature, index) => (
              <div key={feature.id} className="mt-8 flex">
                <div className="bg-white rounded-xl p-8 shadow-md flex flex-col items-start transition-all duration-300 hover:shadow-lg h-full w-full">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-50 text-[#ff6725] transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h5 className="mt-9 mb-5 text-xl font-semibold">{feature.title}</h5>
                  <p className="mb-10 text-gray-600">{feature.description}</p>
                  <Link to="/Apartment" className="mt-auto text-black border font-medium py-3 px-6 rounded hover:bg-[#ff6725] hover:border-none hover:text-white transition-colors">
                    {feature.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSectionNine;