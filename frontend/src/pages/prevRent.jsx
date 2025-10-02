import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const RentProducts = () => {
  const [activeView, setActiveView] = useState('grid');
  const [activeIndicators, setActiveIndicators] = useState({});
  const {rooms} = useAppContext();
  console.log(rooms);
  

  // Function to handle carousel navigation
  const handleIndicatorClick = (propertyId, index) => {
    setActiveIndicators(prev => ({
      ...prev,
      [propertyId]: index
    }));
  };

  // Sample property data
  const properties = [
    {
      id: 1,
      title: "Blueberry villa",
      address: "Mirpur 10, Stadium dhaka 1208",
      price: "$3,280",
      priceType: "month",
      status: "FOR RENT",
      details: { sqft: 1370, beds: 3, baths: 2 },
      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1600566753052-d6f4e3c7bcc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
      ]
    },
    {
      id: 2,
      title: "White House villa",
      address: "Muza link road, ca, usa",
      price: "$28,100.00",
      priceType: "total",
      status: "FOR SELL",
      details: { sqft: 1270, beds: 2, baths: 2 },
      images: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
      ]
    },
    {
      id: 3,
      title: "Luxury villa in Dal lake",
      address: "Mirpur 10, Stadium",
      price: "$42,500.00",
      priceType: "total",
      status: "FOR SELL",
      details: { sqft: 1270, beds: 2, baths: 2 },
      images: [
        "https://images.unsplash.com/photo-1600566753052-d6f4e3c7bcc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
      ]
    },
    {
      id: 4,
      title: "Modern Apartments",
      address: "Gulshan, Dhaka 1212",
      price: "$2,500",
      priceType: "month",
      status: "FOR RENT",
      details: { sqft: 1100, beds: 2, baths: 2 },
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1600566753052-d6f4e3c7bcc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
      ]
    },
    {
      id: 5,
      title: "Beachfront Villa",
      address: "Cox's Bazar, Bangladesh",
      price: "$350,000",
      priceType: "total",
      status: "FOR SELL",
      details: { sqft: 2200, beds: 4, baths: 3 },
      images: [
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
      ]
    },
    {
      id: 6,
      title: "City Penthouse",
      address: "Banani, Dhaka",
      price: "$4,200",
      priceType: "month",
      status: "FOR RENT",
      details: { sqft: 1800, beds: 3, baths: 2 },
      images: [
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
      ]
    },
  ];

  return (
    <div className="bg-pink-50 md:pt-20 pb-40 xl:pb-30 mt-2 xl:mt-5">
      <div className="container mx-auto px-4">
        {/* Search Form */}
        <div className="search-wrapper bg-white rounded-2xl relative mb-16 md:mb-12">
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
                <div className="input-box border-l border-gray-200 pl-4">
                  <div className="label text-sm text-gray-500 mb-1">I'm looking to...</div>
                  <select className="w-full bg-transparent border-none focus:outline-none text-gray-800">
                    <option value="Apartments">Apartments</option>
                    <option value="Houses">Houses</option>
                    <option value="Industrial">Industrial</option>
                    <option value="Villa">Villa</option>
                  </select>
                </div>
                
                <div className="input-box border-l border-gray-200 pl-4">
                  <div className="label text-sm text-gray-500 mb-1">Location</div>
                  <select className="w-full bg-transparent border-none focus:outline-none text-gray-800">
                    <option value="Osun State">Osun State</option>
                    <option value="Lagos State">Lagos State</option>
                    <option value="Benin City">Benin City</option>
                    <option value="Ogun State">Ogun State</option>
                    <option value="Oyo State">Oyo State</option>
                    <option value="Abuja State">Abuja State</option>
                    <option value="River State">River State</option>
                  </select>
                </div>
                
                <div className="input-box border-l border-gray-200 pl-4 lg:border-0">
                  <div className="label text-sm text-gray-500 mb-1">Price Range</div>
                  <select className="w-full bg-transparent border-none focus:outline-none text-gray-800">
                    <option value="500,000 - 5,000,000">#500,000 - #5,000,000</option>
                    <option value="5,000,000 - 50,000,000">#5,000,000 - #50,000,000</option>
                    <option value="60,000,000 - 500,000,000">#60,000,000 - #500,000,000</option>
                  </select>
                </div>
                
                <div className="input-box lg:mt-5">
                  <div className="flex items-center">
                    <a href="#" className="search-modal-btn transition-all duration-300 text-xs uppercase font-medium text-gray-600 inline-flex items-center mr-3">
                      <i className="fa-solid fa-sliders mr-1"></i> Filters
                    </a>
                    <button className="font-medium text-xs uppercase transition-all duration-300 search-btn bg-blue-500 text-white px-5 py-2 rounded-md">Search</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        
        {/* Listing Header Filter */}
        <div className="listing-header-filter flex flex-col sm:flex-row justify-between items-center mb-10 lg:mb-8">
          <div className="text-gray-600 mb-4 sm:mb-0">
            Showing <span className="text-gray-900 font-medium">1–{rooms.length}</span> of <span className="text-gray-900 font-medium">170</span> results
          </div>
          <div className="flex items-center">
            <div className="short-filter flex items-center">
              <div className="text-sm mr-2">Short by:</div>
              <select className="border-none bg-transparent focus:outline-none text-sm">
                <option value="0">Newest</option>
                <option value="1">Best Seller</option>
                <option value="3">Price Low</option>
                <option value="4">Price High</option>
              </select>
            </div>
            <button 
              className={`transition-all duration-300 layout-change rounded-full ml-3 p-2 ${activeView === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setActiveView('list')}
              title="Switch To List View"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
            <button 
              className={`transition-all duration-300 layout-change rounded-full ml-2 p-2 ${activeView === 'grid' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setActiveView('grid')}
              title="Switch To Grid View"
            >
              <i className="fa-solid fa-grid"></i>
            </button>
          </div>
        </div>
        
        {/* Property Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map(property => {
            const activeIndex = activeIndicators[property._id] || 0;
            
            return (
              <div key={property._id} className="flex mb-12 bg-white">
                <div className="listing-card border border-gray-200 rounded-2xl h-full w-full overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="img-gallery p-4">
                    <div className="relative rounded-2xl overflow-hidden">
                      <div className={`tag absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-medium z-10 ${property.Type === 'Sell' ? 'bg-blue-500 text-white' : 'bg-green-500 text-white'}`}>
                        FOR {property.Type}
                      </div>
                      <a href="#" className="fav-btn transition-all duration-300 absolute top-4 right-4 bg-white rounded-full w-8 h-8 flex items-center justify-center text-gray-600 hover:text-red-500">
                        <i className="fa-regular fa-heart"></i>
                      </a>
                      
                      {/* Image Carousel - Fixed Implementation */}
                      <div className="relative overflow-hidden rounded-xl" style={{ height: '230px' }}>
                        <div className="flex transition-transform duration-300 ease-in-out" 
                             style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                          {property.image.map((img, index) => (
                            <div key={index} className="w-full flex-shrink-0">
                              <img 
                                src={img} 
                                className="w-full h-full object-cover" 
                                alt={`${property.name} - Image ${index + 1}`} 
                                style={{ height: '230px' }}
                              />
                            </div>
                          ))}
                        </div>
                        
                        {/* Carousel Indicators */}
                        <div className="absolute bottom-2 flex justify-center space-x-1 w-full">
                          {property.image.map((_, index) => (
                            <button 
                              key={index}
                              type="button"
                              onClick={() => handleIndicatorClick(property._id, index)}
                              className={`w-2 h-2 rounded-full ${activeIndex === index ? "bg-white opacity-100" : "bg-white opacity-50"}`}
                              aria-label={`Slide ${index + 1}`}
                            ></button>
                          ))}
                        </div>
                        
                        {/* Navigation Arrows */}
                        {/* <button 
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white rounded-full w-8 h-8 flex items-center justify-center"
                          onClick={() => handleIndicatorClick(property._id, (activeIndex - 1 + property.image.length) % property.image.length)}
                        >
                          <i className="fa-solid fa-chevron-left text-xs"></i>
                        </button>
                        <button 
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white rounded-full w-8 h-8 flex items-center justify-center"
                          onClick={() => handleIndicatorClick(property._id, (activeIndex + 1) % property.image.length)}
                        >
                          <i className="fa-solid fa-chevron-right text-xs"></i>
                          
                        </button> */}
                      </div>
                    </div>
                  </div>
                  
                  <div className="property-info p-6">
                    <a href="#" className="title transition-all duration-300 text-lg font-semibold text-gray-900 hover:text-blue-500 block mb-2">
                      {property.name}
                    </a>
                    <div className="address text-sm text-gray-500 mb-4">{property.address}</div>
                    
                    <ul className="feature flex flex-wrap items-center justify-between mb-4">
                      <li className="flex items-center text-sm text-gray-600">
                        <i className="fa-solid fa-ruler-combined text-blue-500 mr-2"></i>
                        <span>{property.plot} sqft</span>
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <i className="fa-solid fa-bed text-blue-500 mr-2"></i>
                        <span>{property.Bedroom} bed</span>
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <i className="fa-solid fa-bath text-blue-500 mr-2"></i>
                        <span>{property.Bathroom} bath</span>
                      </li>
                    </ul>
                    
                    <div className="pl-footer border-t border-gray-200 pt-4 flex items-center justify-between">
                      <strong className="price font-medium text-gray-900 text-lg">
                        #{property.pricePerNight.toLocaleString()}
                        {property.priceType === "month" && <sub className="text-sm">/m</sub>}
                      </strong>
                      <a href="#" className="btn-four rounded-full bg-blue-500 text-white w-10 h-10 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                        <i className="fa-solid fa-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Pagination */}
        <div className="pt-12 md:pt-6 text-center">
          <ul className="pagination-two inline-flex items-center justify-center space-x-2">
            <li><a href="#" className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-blue-500 hover:text-white transition-colors duration-300"><i className="fa-solid fa-chevron-left text-xs"></i></a></li>
            <li className="active"><a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white">1</a></li>
            <li><a href="#" className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-blue-500 hover:text-white transition-colors duration-300">2</a></li>
            <li><a href="#" className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-blue-500 hover:text-white transition-colors duration-300">3</a></li>
            <li><span className="text-gray-600">...</span></li>
            <li><a href="#" className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-blue-500 hover:text-white transition-colors duration-300">13</a></li>
            <li><a href="#" className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-blue-500 hover:text-white transition-colors duration-300"><i className="fa-solid fa-chevron-right text-xs"></i></a></li>
          </ul>
        </div>
      </div>
      
      {/* Newsletter Banner */}
      <div className="fancy-banner-two relative z-10 pt-20 lg:pt-12 pb-20 lg:pb-12 bg-blue-600 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <div className="title-one text-center lg:text-left">
                <h3 className="text-white text-2xl md:text-3xl font-bold m-0">
                  Start your <span className="relative">Journey
                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 186 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 10.5C43.3333 3.49996 142.8 -5.29998 185 6.99996" stroke="#FFBF5F" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                  </span> As a Retailer.
                </h3>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="form-wrapper mx-auto lg:mx-0 lg:ml-auto max-w-md">
                <form className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Email address" 
                    className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                  <button className="bg-white text-[#ff6725] font-medium px-5 py-3 rounded-md hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap">
                    Get Started
                  </button>
                </form>
                <div className="text-sm mt-3 text-white">
                  Already a Agent? <a href="#" className="text-white font-medium underline">Sign in.</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentProducts;