import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import unsplash from "../assets/m1.png";
import unsplash1 from "../assets/m2.png";
import unsplash2 from "../assets/m3.png";

const HeroBannerFour = () => {
  const [activeTab, setActiveTab] = useState("rent");
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  // State to hold search parameters
  const [searchParams, setSearchParams] = useState({
    transactionType: "buy",
    propertyType: "",
    location: "",
    priceRange: ""
  });

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80"
    }
  ];

  const avatars = [
    unsplash,
   unsplash1,
   unsplash2,
   unsplash
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Update search params when tab changes
  useEffect(() => {
    setSearchParams(prev => ({
      ...prev,
      transactionType: activeTab
    }));
  }, [activeTab]);

  // Handle form submission
  const handleSearch = (e) => {
    e.preventDefault();
    
    // Navigate to search results with parameters
    navigate(`/search-results?transactionType=${searchParams.transactionType}&propertyType=${searchParams.propertyType}&location=${searchParams.location}&priceRange=${searchParams.priceRange}`);
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="relative">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          ></div>
        ))}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-36 xl:pt-28 md:pt-16 pb-36 xl:pb-28 md:pb-20">
        <div className="container mx-auto px-4 relative z-20">
          <div className="flex flex-col lg:flex-row">
            {/* Left Content */}
            <div className="w-full lg:w-6/12 mb-12 lg:mb-0">
              <div className="mt-12">
                <h1 className="text-7xl md:text-5xl lg:text-9xl font-semibold text-white mb-6">
                  Buy, Sell <br />&  Rent.  
                 
                </h1>
                 <span className="flex lg:inline-flex mt-4 lg:mt-0 lg:ml-4">
                    {avatars.map((avatar, index) => (
                      <img
                        key={index}
                        src={avatar}
                        alt="Avatar"
                        className="w-12 h-12 rounded-full border-2 border-white -ml-2 first:ml-0"
                      />
                    ))}
                  </span>
                <p className="text-xl md:text-2xl text-white pt-10 pb-8 md:pb-6 pr-0 lg:pr-12">
                  Explore a vast selection of over 745,000 listings, including apartments, lots, and plots.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="bg-white hover:bg-gray-100 text-gray-900 font-medium py-3 px-6 mt-4 transition-colors">
                    Explore All
                  </a>
                  <a href="#" className="border border-white text-white hover:bg-white/10 font-medium py-3 px-6 mt-4 transition-colors flex items-center">
                    Request a Callback
                    <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Content - Search Form */}
            <div className="w-full lg:w-6/12 lg:pl-12">
              <div className="bg-white rounded-lg p-6 md:p-8 shadow-xl md:mt-16">
                {/* Tabs */}
                <nav className="mb-6">
                  <div className="flex border-b">
                    {/* <button
                      className={`py-2 px-4 font-medium ${activeTab === "buy" ? "text-[#ff6725] border-b-2 border-[#ff6725]" : "text-gray-500"}`}
                      onClick={() => setActiveTab("buy")}
                    >
                      Buy
                    </button> */}
                    <button
                      className={`py-2 px-4 font-medium cursor-pointer  ${activeTab === "rent" ? "text-[#ff6725] border-b-2 border-[#ff6725]" : "text-gray-500"}`}
                      onClick={() => setActiveTab("rent")}
                    >
                      Rent
                    </button>
                    <button
                      className={`py-2 px-4 font-medium  cursor-pointer ${activeTab === "sell" ? "text-[#ff6725] border-b-2 border-[#ff6725]" : "text-gray-500"}`}
                      onClick={() => setActiveTab("sell")}
                    >
                      Buy
                    </button>
                  </div>
                </nav>

                <h4 className="text-xl md:text-2xl font-semibold mb-8 md:mb-7">Find & Buy / Rent Now!</h4>
                {/* <h4 className="text-xl md:text-2xl font-semibold mb-8 md:mb-7">Find & {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Now!</h4> */}

                {/* Tab Content */}
                <div className="tab-content">
                  {activeTab === "buy" && (
                    <form onSubmit={handleSearch}>
                      <div className="space-y-6 md:space-y-7">
                        <div className="border-b pb-4">
                          <div className="text-sm text-gray-500 mb-2">I'm looking to...</div>
                          <select 
                            name="propertyType"
                            value={searchParams.propertyType}
                            onChange={handleInputChange}
                            className="w-full bg-transparent border-none focus:ring-0 p-0 font-normal"
                          >
                            <option value="Apartment">Buy Apartments</option>
                            <option value="Houses">Buy Houses</option>
                            <option value="Industrial">Buy Industrial</option>
                            <option value="Villas">Buy Villas</option>
                          </select>
                        </div>
                        <div className="border-b pb-4">
                          <div className="text-sm text-gray-500 mb-2">Location</div>
                          <select 
                            name="location"
                            value={searchParams.location}
                            onChange={handleInputChange}
                            className="w-full bg-transparent border-none focus:ring-0 p-0 font-normal"
                          >
                            <option value="Osun State">Osun State</option>
                            <option value="Lagos State">Lagos State</option>
                            <option value="Benin State">Benin City</option>
                            <option value="Ogun State">Ogun State</option>
                            <option value="Oyo State">Oyo State</option>
                            <option value="Abuja State">Abuja State</option>
                            <option value="River State">River State</option>
                          </select>
                        </div>
                        <div className="border-b pb-4">
                          <div className="text-sm text-gray-500 mb-2">Price Range</div>
                          <select 
                            name="priceRange"
                            value={searchParams.priceRange}
                            onChange={handleInputChange}
                            className="w-full bg-transparent border-none focus:ring-0 p-0 font-normal"
                          >
                             <option value="500000 - 5000000">#500,000 - #5,000,000</option>
                            <option value="5000000 - 50000000">#5,000,000 - #50,000,000</option>
                            <option value="60000000 - 500000000">#60,000,000 - #500,000,000</option>
                          </select>
                        </div>
                        <button type="submit" className="w-full bg-[#ff6725] hover:bg-[#ff662595] text-white font-medium py-3 px-6 uppercase">
                          Search
                        </button>
                      </div>
                    </form>
                  )}

                  {activeTab === "rent" && (
                    <form onSubmit={handleSearch}>
                      <div className="space-y-6 md:space-y-7">
                        <div className="border-b pb-4">
                          <div className="text-sm text-gray-500 mb-2">I'm looking to...</div>
                          <select 
                            name="propertyType"
                            value={searchParams.propertyType}
                            onChange={handleInputChange}
                            className="w-full bg-transparent border-none focus:ring-0 p-0 font-normal"
                          >
                            <option value="Apartment">Rent Apartments</option>
                            <option value="Houses">Rent Houses</option>
                            <option value="Industrial">Rent Industrial</option>
                            <option value="Villas">Rent Villas</option>
                          </select>
                        </div>
                        <div className="border-b pb-4">
                          <div className="text-sm text-gray-500 mb-2">Location</div>
                          <select 
                            name="location"
                            value={searchParams.location}
                            onChange={handleInputChange}
                            className="w-full bg-transparent border-none focus:ring-0 p-0 font-normal"
                          >
                            <option value="Osun State">Osun State</option>
                            <option value="Lagos State">Lagos State</option>
                            <option value="Benin State">Benin City</option>
                            <option value="Ogun State">Ogun State</option>
                            <option value="Oyo State">Oyo State</option>
                            <option value="Abuja State">Abuja State</option>
                            <option value="River State">River State</option>
                          </select>
                        </div>
                        <div className="border-b pb-4">
                          <div className="text-sm text-gray-500 mb-2">Price Range</div>
                          <select 
                            name="priceRange"
                            value={searchParams.priceRange}
                            onChange={handleInputChange}
                            className="w-full bg-transparent border-none focus:ring-0 p-0 font-normal"
                          >
                             <option value="500000 - 5000000">#500,000 - #5,000,000</option>
                            <option value="5000000 - 50000000">#5,000,000 - #50,000,000</option>
                            <option value="60000000 - 500000000">#60,000,000 - #500,000,000</option>
                          </select>
                        </div>
                        <button type="submit" className="w-full bg-[#ff6725] hover:bg-[#ff662595] text-white font-medium py-3 px-6 uppercase">
                          Search
                        </button>
                      </div>
                    </form>
                  )}

                  {activeTab === "sell" && (
                    <form onSubmit={handleSearch}>
                      <div className="space-y-6 md:space-y-7">
                        <div className="border-b pb-4">
                          <div className="text-sm text-gray-500 mb-2">I'm looking to...</div>
                          <select 
                            name="propertyType"
                            value={searchParams.propertyType}
                            onChange={handleInputChange}
                            className="w-full bg-transparent border-none focus:ring-0 p-0 font-normal"
                          >
                            <option value="Apartment">Buy Apartments</option>
                            <option value="Houses">Buy Houses</option>
                            <option value="Industrial">Buy Industrial</option>
                            <option value="Villas">Buy Villas</option>
                          </select>
                        </div>
                        <div className="border-b pb-4">
                          <div className="text-sm text-gray-500 mb-2">Location</div>
                          <select 
                            name="location"
                            value={searchParams.location}
                            onChange={handleInputChange}
                            className="w-full bg-transparent border-none focus:ring-0 p-0 font-normal"
                          >
                             <option value="Osun State">Osun State</option>
                            <option value="Lagos State">Lagos State</option>
                            <option value="Benin State">Benin City</option>
                            <option value="Ogun State">Ogun State</option>
                            <option value="Oyo State">Oyo State</option>
                            <option value="Abuja State">Abuja State</option>
                            <option value="River State">River State</option>
                          </select>
                        </div>
                        <div className="border-b pb-4">
                          <div className="text-sm text-gray-500 mb-2">Price Range</div>
                          <select 
                            name="priceRange"
                            value={searchParams.priceRange}
                            onChange={handleInputChange}
                            className="w-full bg-transparent border-none focus:ring-0 p-0 font-normal"
                          >
                            <option value="500000 - 5000000">#500,000 - #5,000,000</option>
                            <option value="5000000 - 50000000">#5,000,000 - #50,000,000</option>
                            <option value="60000000 - 500000000">#60,000,000 - #500,000,000</option>
                          </select>
                        </div>
                        <button type="submit" className="w-full bg-[#ff6725] hover:bg-[#ff662595] text-white font-medium py-3 px-6 uppercase">
                          Search
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="absolute left-0 w-20 top-0 bottom-8 z-20 hidden md:block bg-white">
        <ul className="flex flex-col space-y-12 mt-50">
          <li><a href="#" className="text-black p-5 hover:text-blue-300 transition-colors">Fb.</a></li>
          <li><a href="#" className="text-black p-5 hover:text-blue-300 transition-colors">Tw.</a></li>
          <li><a href="#" className="text-black p-5 hover:text-blue-300 transition-colors">Inst.</a></li>
        </ul>

         <div className="absolute right-8 bottom-8 z-20 hidden md:flex flex-col items-center">
        <div className="w-[4px] h-15 bg-black"></div>
        <span className="text-black text-sm mr-2">Scroll</span>

      </div>
      </div>

      {/* Scroll Indicator */}
     
    </div>
  );
};

export default HeroBannerFour;