// components/Hero.js
import React, { useState } from 'react';
import h1 from "../assets/hero1.jpg";
import h2 from "../assets/hero2.jpg";
import h3 from "../assets/hero3.jpg";
import h4 from "../assets/hero4.jpg";
import bg from "../assets/house5.avif";

const Hero = () => {
  const [activeTab, setActiveTab] = useState('buy');

  return (
    <div className="relative min-h-screen overflow-hidden">
      
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-2"
       style={{
    backgroundImage: `url(${bg})`,
    height: "100vh" 
  }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-1"></div>
      
      {/* Content */}
      <div className="relative z-10 pt-32 pb-32 lg:pt-40 lg:pb-40 md:pt-24 md:pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 flex items-center">
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
                  Buy, Sell & Rent.
                  <span className="block lg:inline-flex mt-4 lg:mt-0 lg:ml-4">
                    <div className="flex space-x-2">
                      <img 
                        src={h1} 
                        alt="" 
                        className="w-12 h-12 rounded-full object-cover border-2 border-white" 
                      />
                      <img 
                        src={h2} 
                        alt="" 
                        className="w-12 h-12 rounded-full object-cover border-2 border-white" 
                      />
                      <img 
                        src={h3} 
                        alt="" 
                        className="w-12 h-12 rounded-full object-cover border-2 border-white" 
                      />
                      <img 
                        src={h4} 
                        alt="" 
                        className="w-12 h-12 rounded-full object-cover border-2 border-white" 
                      />
                    </div>
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl mb-8 max-w-2xl">
                  Explore a vast selection of over 745,000 listings, including apartments, lots, and plots.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="listing_01.html" 
                    className="bg-[#ff6725] hover:bg-[#ff6625bb] text-white px-8 py-3 rounded transition-colors"
                  >
                    Explore All
                  </a>
                  <a 
                    href="contact.html" 
                    className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded transition-all flex items-center gap-2"
                  >
                    <span>Request a Callback</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Content - Search Form */}
            <div className="w-full lg:w-1/2 lg:pl-12">
              <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
                {/* Tabs */}
                <div className="flex border-b border-gray-200 mb-6">
                  <button
                    className={`px-4 py-2 font-medium text-sm ${activeTab === 'buy' ? 'text-[#ff6725] border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => setActiveTab('buy')}
                  >
                    Buy
                  </button>
                  <button
                    className={`px-4 py-2 font-medium text-sm ${activeTab === 'rent' ? 'text-[#ff6725] border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => setActiveTab('rent')}
                  >
                    Rent
                  </button>
                  <button
                    className={`px-4 py-2 font-medium text-sm ${activeTab === 'apartment' ? 'text-[#ff6725] border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => setActiveTab('sell')}
                  >
                    Apartment
                  </button>
                </div>

                <h4 className="text-xl font-semibold mb-6">Find & Buy Now!</h4>

                {/* Form Content */}
                <div className="space-y-4">
                  {activeTab === 'buy' && (
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          I'm looking to...
                        </label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                          <option>Buy Apartments</option>
                          <option>Buy Condos</option>
                          <option>Buy Houses</option>
                          <option>Buy Industrial</option>
                          <option>Buy Villas</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Location
                        </label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                          <option>Dhanmondi, Dhaka</option>
                          <option>Acapulco, Mexico</option>
                          <option>Berlin, Germany</option>
                          <option>Cannes, France</option>
                          <option>Delhi, India</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Price Range
                        </label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                          <option>$10,000 - $200,000</option>
                          <option>$200,000 - $300,000</option>
                          <option>$300,000 - $400,000</option>
                        </select>
                      </div>
                      
                      <button 
                        type="submit"
                        className="w-full bg-[#ff6725] hover:bg-[#ff6625bb] text-white py-3 px-4 rounded-md font-medium transition-colors"
                      >
                        Search
                      </button>
                    </form>
                  )}

                  {activeTab === 'rent' && (
                   <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          I'm looking to...
                        </label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                          <option>Rent Apartments</option>
                          <option>Rent Condos</option>
                          <option>Rent Houses</option>
                          <option>Rent Industrial</option>
                          <option>Rent Villas</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Location
                        </label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                          <option>Dhanmondi, Dhaka</option>
                          <option>Acapulco, Mexico</option>
                          <option>Berlin, Germany</option>
                          <option>Cannes, France</option>
                          <option>Delhi, India</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Price Range
                        </label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                          <option>$10,000 - $200,000</option>
                          <option>$200,000 - $300,000</option>
                          <option>$300,000 - $400,000</option>
                        </select>
                      </div>
                      
                      <button 
                        type="submit"
                        className="w-full bg-[#ff6725] hover:bg-[#ff6625bb] text-white py-3 px-4 rounded-md font-medium transition-colors"
                      >
                        Search
                      </button>
                    </form>
                  )}

                  {activeTab === 'sell' && (
                   <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          I'm looking to...
                        </label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                          <option>Sell Apartments</option>
                          <option>Sell Condos</option>
                          <option>Sell Houses</option>
                          <option>Sell Industrial</option>
                          <option>Sell Villas</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Location
                        </label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                          <option>Dhanmondi, Dhaka</option>
                          <option>Acapulco, Mexico</option>
                          <option>Berlin, Germany</option>
                          <option>Cannes, France</option>
                          <option>Delhi, India</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Price Range
                        </label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                          <option>$10,000 - $200,000</option>
                          <option>$200,000 - $300,000</option>
                          <option>$300,000 - $400,000</option>
                        </select>
                      </div>
                      
                      <button 
                        type="submit"
                        className="w-full bg-[#ff6725] hover:bg-[#ff6625bb] text-white py-3 px-4 rounded-md font-medium transition-colors"
                      >
                        Search
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="absolute left-8 bottom-8 z-10">
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-white hover:text-blue-300 transition-colors text-sm">Fb.</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-300 transition-colors text-sm">Tw.</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-300 transition-colors text-sm">Inst.</a>
          </li>
        </ul>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute right-8 bottom-8 z-10">
        <div className="text-white text-sm rotate-90 transform origin-center">Scroll</div>
      </div>
    </div>
  );
};

export default Hero;