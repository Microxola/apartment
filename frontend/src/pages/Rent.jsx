import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

const Rent = () => {
  const [activeView, setActiveView] = useState('grid');
  const [activeIndicators, setActiveIndicators] = useState({});
  const { rooms } = useAppContext();
  
  // State for filters
  const [filters, setFilters] = useState({
    propertyType: '',
    location: '',
    priceRange: '' 
  });
  
  // State for sorting
  const [sortOption, setSortOption] = useState('newest');
  
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); // Show 6 properties per page
  
  // Filtered and sorted rooms
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [displayedRooms, setDisplayedRooms] = useState([]);
  
  // Total pages calculation
  const totalPages = Math.ceil(filteredRooms.length / itemsPerPage);
  
  // Function to handle carousel navigation
  const handleIndicatorClick = (propertyId, index) => {
    setActiveIndicators(prev => ({
      ...prev,
      [propertyId]: index
    }));
  };
  
  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
    setCurrentPage(1); // Reset to first page when filters change
  };
  
  // Handle sort changes
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    setCurrentPage(1); // Reset to first page when sort changes
  };
  
  // Handle pagination clicks
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Apply filters and sorting
  useEffect(() => {
    let result = [...rooms];
    
    // Apply filters
    if (filters.propertyType) {
      result = result.filter(room => room.roomType === filters.propertyType);
    }
    
    if (filters.location) {
      console.log("Selected location:", filters.location);
      // result = result.filter(room => room.State === filters.location);
      result = result.filter(room => room.State.includes(filters.location));
    }
    
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split(' - ').map(val => 
        parseInt(val.replace(/#|,/g, ''), 10)
      );
      result = result.filter(room => {
        const price = room.pricePerNight;
        return price >= min && price <= max;
      });
    }
    
    // Apply sorting
    switch(sortOption) {
      case 'newest':
        // Assuming rooms have a createdAt field, otherwise use _id as fallback
        result = result.sort((a, b) => {
          if (a.createdAt && b.createdAt) {
            return new Date(b.createdAt) - new Date(a.createdAt);
          }
          return b._id.localeCompare(a._id);
        });
        break;
      case 'price-low':
        result = result.sort((a, b) => a.pricePerNight - b.pricePerNight);
        break;
      case 'price-high':
        result = result.sort((a, b) => b.pricePerNight - a.pricePerNight);
        break;
      case 'best-seller':
        // Assuming rooms have a salesCount field, otherwise keep original order
        if (result[0] && result[0].salesCount !== undefined) {
          result = result.sort((a, b) => b.salesCount - a.salesCount);
        }
        break;
      default:
        break;
    }
    
    setFilteredRooms(result);
  }, [rooms, filters, sortOption]);
  
  // Update displayed rooms based on current page
  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredRooms.slice(indexOfFirstItem, indexOfLastItem);
    setDisplayedRooms(currentItems);
  }, [filteredRooms, currentPage, itemsPerPage]);
  
  // Generate page numbers for pagination
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="bg-pink-50 md:pt-20 pb-40 xl:pb-30">
      <div className="container mx-auto px-4">
        {/* Search Form */}
        <div className="hidden lg:block md:block search-wrapper bg-[#000000B3] rounded-2xl relative mb-16 md:mb-12 w-full">
          <div className="bg-white border border-black rounded-2xl p-6">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
                <div className="input-box border-l border-gray-200 pl-4">
                  <div className="label text-sm text-gray-500 mb-1">I'm looking to...</div>
                  <select 
                    name="propertyType"
                    value={filters.propertyType}
                    onChange={handleFilterChange}
                    className="w-full bg-transparent border-none focus:outline-none text-gray-800"
                  >
                    <option value="">All Types</option>
                    <option value="Apartment">Apartments</option>
                    <option value="Houses">Houses</option>
                    <option value="Industrial">Industrial</option>
                    <option value="Villas">Villa</option>
                  </select>
                </div>
                
                <div className="input-box border-l border-gray-200 pl-4">
                  <div className="label text-sm text-gray-500 mb-1">Location</div>
                  <select 
                    name="location"
                    value={filters.location}
                    onChange={handleFilterChange}
                    className="w-full bg-transparent border-none focus:outline-none text-gray-800"
                  >
                    <option value="">All Locations</option>
                    <option value="Osun State">Osun State</option>
                    <option value="Lagos State">Lagos State</option>
                    <option value="Benin State">Benin City</option>
                    <option value="Ogun State">Ogun State</option>
                    <option value="Oyo State">Oyo State</option>
                    <option value="Abuja State">Abuja State</option>
                    <option value="River State">River State</option>
                  </select>
                </div>
                
                <div className="input-box border-l border-gray-200 pl-4 lg:border-0">
                  <div className="label text-sm text-gray-500 mb-1">Price Range</div>
                  <select 
                    name="priceRange"
                    value={filters.priceRange}
                    onChange={handleFilterChange}
                    className="w-full bg-transparent border-none focus:outline-none text-gray-800"
                  >
                    <option value="">All Prices</option>
                    <option value="500000 - 5000000">#500,000 - #5,000,000</option>
                    <option value="5000000 - 50000000">#5,000,000 - #50,000,000</option>
                    <option value="60000000 - 500000000">#60,000,000 - #500,000,000</option>
                  </select>
                </div>
                
                <div className="input-box lg:mt-5">
                  <div className="flex items-center">
                    <a href="#" className="search-modal-btn transition-all duration-300 text-xs uppercase font-medium text-gray-600 inline-flex items-center mr-3">
                      <i className="fa-solid fa-sliders mr-1"></i> Filters
                    </a>
                    <button 
                      type="button" 
                      className="font-medium text-[15px] uppercase transition-all duration-300 search-btn bg-black text-white px-8 py-3 rounded-md"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* i'm working on mobile filtering */}
        <div className="block sm:hidden w-full px-4">
                      <form className="w-full rounded-xl p-2">
                      <div className="flex justify-between items-center gap-2 mt-10">

                        {/* Property Type */}
                        <div className="flex-1 bg-white border border-gray-300 rounded-md px-2 py-1">
                          <label className="block text-[11px] text-gray-500 mb-0.5">Type</label>
                          <select
                            name="propertyType"
                            value={filters.propertyType}
                            onChange={handleFilterChange}
                            className="w-full bg-transparent text-sm text-gray-800 focus:outline-none"
                          >
                            <option value="">Category</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Houses">House</option>
                            <option value="Industrial">Industrial</option>
                            <option value="Villas">Villa</option>
                          </select>
                        </div>

                        {/* Location */}
                        <div className="flex-1 bg-white border border-gray-300 rounded-md px-2 py-1">
                          <label className="block text-[11px] text-gray-500 mb-0.5">Location</label>
                          <select
                            name="location"
                            value={filters.location}
                            onChange={handleFilterChange}
                            className="w-full bg-transparent text-sm text-gray-800 focus:outline-none"
                          >
                                    <option value="">Locations</option>
                                      <option value="Osun State">Osun State</option>
                                      <option value="Lagos State">Lagos State</option>
                                      <option value="Benin State">Benin City</option>
                                      <option value="Ogun State">Ogun State</option>
                                      <option value="Oyo State">Oyo State</option>
                                      <option value="Abuja State">Abuja State</option>
                                      <option value="River State">River State</option>
                          </select>
                        </div>

                        {/* Price Range */}
                        <div className="flex-1 bg-white border border-gray-300 rounded-md px-2 py-1">
                          <label className="block text-[11px] text-gray-500 mb-0.5">Price</label>
                          <select
                            name="priceRange"
                            value={filters.priceRange}
                            onChange={handleFilterChange}
                            className="w-full bg-transparent text-sm text-gray-800 focus:outline-none"
                          >
                                      <option value="">Prices</option>
                                      <option value="500000 - 5000000">#500k - #5m</option>
                                      <option value="5000000 - 50000000">#5m - #50m</option>
                                      <option value="60000000 - 500000000">#50m - #500m</option>
                          </select>
                        </div>

                      </div>
                    </form>
                  </div>
        {/* Listing Header Filter */}
        <div className="listing-header-filter flex flex-col sm:flex-row justify-between items-center mb-10 lg:mb-8">
          <div className="text-gray-600 mb-4 sm:mb-0">
            Showing <span className="text-gray-900 font-medium">{(currentPage - 1) * itemsPerPage + 1}–{Math.min(currentPage * itemsPerPage, filteredRooms.length)}</span> of <span className="text-gray-900 font-medium">{filteredRooms.length}</span> results
          </div>
          <div className="flex items-center">
            <div className="short-filter flex items-center">
              <div className="text-sm mr-2">Sort by:</div>
              <select 
                value={sortOption}
                onChange={handleSortChange}
                className="border-none bg-transparent focus:outline-none text-sm"
              >
                <option value="newest">Newest</option>
                <option value="best-seller">Best Seller</option>
                <option value="price-low">Price Low</option>
                <option value="price-high">Price High</option>
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
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                         {displayedRooms.filter(property => property.Type === 'Rent').map(property => {
                           const activeIndex = activeIndicators[property._id] || 0;
                           
                           return (
                             <div key={property._id} className="flex mb-6 md:mb-12 bg-white">
                               <div className="listing-card border border-gray-200 rounded-2xl h-full w-full overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                                 <div className="img-gallery p-3 md:p-4">
                                   <div className="relative rounded-2xl overflow-hidden">
                                     <div className={`tag absolute top-3 left-3 md:top-4 md:left-4 rounded-full px-2 py-1 md:px-3 md:py-1 text-xs font-medium z-10 ${property.Type === 'Sell' ? 'bg-blue-500 text-white' : 'bg-green-500 text-white'}`}>
                                       FOR {property.Type}
                                     </div>
                                     <a href="#" className="fav-btn transition-all duration-300 absolute top-3 right-3 md:top-4 md:right-4 bg-white rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center text-gray-600 hover:text-red-500">
                                       <i className="fa-regular fa-heart text-xs md:text-base"></i>
                                     </a>
                                     
                                     {/* Image Carousel - Fixed Implementation */}
                                     <div className="relative overflow-hidden rounded-xl" style={{ height: '180px' }}>
                                       <div className="flex transition-transform duration-300 ease-in-out" 
                                           style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                                         {property.image.map((img, index) => (
                                           <div key={index} className="w-full flex-shrink-0">
                                             <img 
                                               src={img} 
                                               className="w-full h-full object-cover" 
                                               alt={`${property.name} - Image ${index + 1}`} 
                                               style={{ height: '180px' }}
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
                                             className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${activeIndex === index ? "bg-white opacity-100" : "bg-white opacity-50"}`}
                                             aria-label={`Slide ${index + 1}`}
                                           ></button>
                                         ))}
                                       </div>
                                     </div>
                                   </div>
                                 </div>
                                 
                                 <div className="property-info p-4 md:p-6">
                                   <a href="#" className="title transition-all duration-300 text-sm md:text-lg font-semibold text-gray-900 hover:text-blue-500 block mb-2">
                                     {property.name}
                                   </a>
                                   <div className="address text-xs md:text-sm text-gray-500 mb-3 md:mb-4">{property.address}</div>
                                   
                                   <ul className="feature flex flex-wrap items-center justify-between mb-3 md:mb-4">
                                     <li className="flex items-center text-xs md:text-sm text-gray-600">
                                       <i className="fa-solid fa-ruler-combined text-blue-500 mr-1 md:mr-2 text-xs md:text-sm"></i>
                                       <span>{property.plot} sqft</span>
                                     </li>
                                     <li className="flex items-center text-xs md:text-sm text-gray-600">
                                       <i className="fa-solid fa-bed text-blue-500 mr-1 md:mr-2 text-xs md:text-sm"></i>
                                       <span>{property.Bedroom} bed</span>
                                     </li>
                                     <li className="flex items-center text-xs md:text-sm text-gray-600">
                                       <i className="fa-solid fa-bath text-blue-500 mr-1 md:mr-2 text-xs md:text-sm"></i>
                                       <span>{property.Bathroom} bath</span>
                                     </li>
                                   </ul>
                                   
                                   <div className="pl-footer border-t border-gray-200 pt-3 md:pt-4 flex items-center justify-between">
                                     <strong className="price font-medium text-gray-900 text-base md:text-lg">
                                       #{property.pricePerNight.toLocaleString()}
                                       {property.priceType === "month" && <sub className="text-xs md:text-sm">/m</sub>}
                                     </strong>
                                     <Link to={'/details/' + property._id} onClick={() => scrollTo(0,0)} className="btn-four rounded-full bg-[#ff6725] hover:bg-[#ff6625ab] text-white w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transition-colors duration-300">
                                        <svg
                                             className="w-5 h-5 text-white hover:text-black"
                                             fill="none"
                                             stroke="currentColor"
                                             strokeWidth="2"
                                             viewBox="0 0 24 24"
                                           >
                                             <path d="M7 17L17 7M7 7h10v10" />
                                           </svg>
                                     </Link>
                                   </div>
                                 </div>
                               </div>
                             </div>
                           );
                         })}
                       </div>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="pt-12 md:pt-6 text-center">
            <ul className="pagination-two inline-flex items-center justify-center space-x-2">
              <li>
                <button 
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-blue-500 hover:text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <i className="fa-solid fa-chevron-left text-xs"></i>
                </button>
              </li>
              
              {pageNumbers.map(number => {
                // Show limited page numbers with ellipsis
                if (totalPages <= 7 || 
                    number === 1 || 
                    number === totalPages || 
                    (number >= currentPage - 1 && number <= currentPage + 1)) {
                  return (
                    <li key={number}>
                      <button
                        onClick={() => handlePageChange(number)}
                        className={`w-8 h-8 flex items-center justify-center rounded-full ${currentPage === number ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-blue-500 hover:text-white'} transition-colors duration-300`}
                      >
                        {number}
                      </button>
                    </li>
                  );
                } else if (number === currentPage - 2 || number === currentPage + 2) {
                  return <li key={number}><span className="text-gray-600">...</span></li>;
                }
                return null;
              })}
              
              <li>
                <button 
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-blue-500 hover:text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <i className="fa-solid fa-chevron-right text-xs"></i>
                </button>
              </li>
            </ul>
          </div>
        )}
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

export default Rent;