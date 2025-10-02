import React from "react";

const NewFeatures = () => {
  const features = [
    {
      id: 1,
      title: "Buy a home",
      description: "Explore homy’s 2 million+ homes and uncover your ideal living space.",
      icon: (
        <svg className="w-16 h-16 text-[#ff6725]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Rent a home",
      description: "Discover a rental you'll love on homy, thanks to 35+ filters and tailored keywords.",
      icon: (
        <svg className="w-16 h-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Sell property",
      description: "List, sell, thrive – with our top-notch real estate agency. It’s super easy & fun.",
      icon: (
        <svg className="w-16 h-16 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="mt-36 xl:mt-30">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12 xl:mb-8 lg:mb-6">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Unlock Homy's <span className="relative inline-block">
              advantages
              <svg className="absolute -bottom-2 right-0 w-full" viewBox="0 0 160 30" xmlns="http://www.w3.org/2000/svg">
                <path d="M5,15 C40,25 120,5 155,15" stroke="#ec4899" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </h3>
          <p className="text-xl md:text-2xl">Your trusted real estate partner in every transaction.</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-10">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className="bg-white rounded-xl shadow-md p-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex justify-center">
                {feature.icon}
              </div>
              <div className="text-sm uppercase font-medium text-gray-500 mt-8 md:mt-7 mb-5">
                {feature.title}
              </div>
              <p className="text-xl md:text-2xl px-2 md:px-4">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewFeatures;