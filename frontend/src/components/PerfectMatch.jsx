import React from 'react';

const PerfectMatch = () => {
  return (
    <div className="mt-40 lg:mt-32 xl:mt-40 md:mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 order-first lg:order-last mb-12 lg:mb-0">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              {/* Main background image */}
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Modern living room"
                className="w-full h-full object-cover"
              />
              
              {/* Floating card overlay */}
              <div className="absolute top-6 right-6 bg-white rounded-xl shadow-xl p-6 text-center w-32">
                <h3 className="text-3xl font-bold text-[#ff6725]">07+</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Years Experience <br />with proud.
                </p>
              </div>
              
              {/* Screen overlay */}
              <div className="absolute bottom-6 left-6 w-48 h-32 bg-white rounded-lg shadow-lg p-3">
                <img 
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                  alt="Property dashboard"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 lg:pl-16">
            <div className="pt-10 lg:pt-12 xl:pt-16 pb-16 lg:pb-20 xl:pb-24">
              <div className="mb-12 lg:mb-10">
                <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                  Find Your Perfect Match Easily.
                </h3>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-12">
                Browse 745,000+ homes for purchase, rent, and mortgage options in our listings.
              </p>
              
              <form className="relative mb-8">
                <input 
                  type="email" 
                  placeholder="Your Email Address..." 
                  className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-32"
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-2 bg-[#ff6725] hover:bg-[#ff6625bb] text-white px-6 py-2 rounded-md transition-colors duration-300"
                >
                  Find out
                </button>
              </form>
              
              <p className="text-gray-600 text-base mt-6">
                For more details please{' '}
                <a href="#" className="text-gray-900 underline hover:text-[#ff6725] italic">
                  contact us
                </a>
              </p>
              
              <div className="pt-8 lg:pt-10 pr-0 xl:pr-12">
                <div className="flex flex-col sm:flex-row gap-8">
                  <div className="flex-1">
                    <div className="mt-8">
                      <div className="text-3xl font-semibold text-gray-900 mb-2">
                        <span className="count-up">1.2</span>x
                      </div>
                      <span className="text-gray-600">Fast search engine</span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="mt-8">
                      <div className="text-3xl font-semibold text-gray-900 mb-2">
                        $<span className="count-up">1.3</span>b+
                      </div>
                      <span className="text-gray-600">Property listing sold last year</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfectMatch;