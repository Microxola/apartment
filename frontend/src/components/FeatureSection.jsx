import React, { useState, useEffect } from "react";
import myBackground from "../assets/house5.avif"
const FeatureSection = () => {
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    // Counter animation
    const interval = setInterval(() => {
      setYears(prev => prev < 7 ? prev + 1 : prev);
      setProjects(prev => prev < 1700 ? prev + 20 : prev);
      setCustomers(prev => prev < 1300000 ? prev + 20000 : prev);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const openVideo = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };

  return (
    <div className="mt-36 xl:mt-28">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">
          {/* Left Column */}
          <div className="w-full lg:w-7/12 flex">
            <div className="rounded-2xl p-8 md:p-10 relative w-full h-full min-h-[500px] flex flex-col justify-between" 
            style={{
                backgroundImage: `url(${myBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 max-w-md">Secure your family's dream home.</h3>
              
              <button 
                onClick={openVideo}
                className="w-20 h-20 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow absolute left-8 bottom-1/2 transform translate-y-1/2 z-10"
              >
                <svg className="w-8 h-8 text-[#ff6725] ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </button>
              
              <div className="bg-white rounded-xl p-6 shadow-lg max-w-xs ml-auto mt-auto">
                <h3 className="text-4xl font-semibold text-gray-900">
                  <span className="text-[#ff6725]">0{years}</span>+
                </h3>
                <p className="text-xl mt-2">Years Experience <br />with proud.</p>
              </div>
              
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                alt="House illustration" 
                className="absolute bottom-0 right-0 w-3/5 max-w-md"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-5/12">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg h-full">
              <h4 className="text-2xl md:text-3xl font-bold mb-6">Who we are?</h4>
              <p className="text-xl md:text-2xl mt-5">
                Your premier partner in real estate. <br /> Transforming properties into dreams. Let us guide you home with expertise.
              </p>
              
              <div className="px-3 pb-8 mt-10 mb-12 border-b border-gray-200">
                <div className="flex flex-wrap -mx-2">
                  <div className="w-1/2 px-2">
                    <div className="mt-5">
                      <div className="text-3xl font-semibold text-gray-900">
                        {projects.toLocaleString()}K+
                      </div>
                      <span className="text-gray-600">Completed Project</span>
                    </div>
                  </div>
                  <div className="w-1/2 px-2">
                    <div className="mt-5">
                      <div className="text-3xl font-semibold text-gray-900">
                        {(customers/1000000).toFixed(1)}mil+
                      </div>
                      <span className="text-gray-600">Happy Customers</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <ul className="text-xl md:text-2xl text-gray-900 space-y-4 mb-10">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Loan & low Interest facility
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Over 100k+ property & update regularly
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Expert agent consultation
                </li>
              </ul>
              
              <div className="flex flex-wrap gap-4 mt-5">
                <a href="#" className="bg-[#ff6725] hover:bg-[#ff6625bb] text-white font-medium py-3 px-6 rounded-lg transition-colors">
                  More Details
                </a>
                <a href="#" className="border border-blue-600 text-[#ff6725] hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition-colors flex items-center">
                  Request a Callback
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={closeVideo}>
          <div className="bg-white rounded-lg overflow-hidden w-full max-w-4xl aspect-video" onClick={e => e.stopPropagation()}>
            <div className="relative pb-[56.25%] h-0">
              <iframe 
                className="absolute top-0 left-0 w-full h-full" 
                src="https://www.youtube.com/embed/aXFSJTjVjw0" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeatureSection;