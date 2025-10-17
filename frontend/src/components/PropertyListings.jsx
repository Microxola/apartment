import React from 'react';
import feature1 from "../assets/feat1.jpeg"
import feature2 from "../assets/feat2.jpeg"
import feature3 from "../assets/feat3.jpeg"
import feature4 from "../assets/feat4.jpeg"
import new1 from "../assets/house.jpg"
import new2 from "../assets/house2.jpg"
import new3 from "../assets/house3.jpg"
import { useAppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
import { LandPlot, Bath, Bed } from 'lucide-react';

const PropertyListings = () => {

  const {rooms} = useAppContext();
  // console.log(rooms);
  
  const newListings = [
    {
      id: 1,
      tag: "FOR RENT",
      images: [new1, new2, new3],
      title: "Blueberry villa",
      address: "Mirpur 10, Stadium dhaka 1208",
      area: "1370",
      beds: "03",
      baths: "02",
      price: "$34,900.00",
      link: "listing_details_03.html"
    },
    {
      id: 2,
      tag: "FOR SELL",
      images: [new2, new3, new1],
      title: "White House villa",
      address: "Muza link road, ca, usa",
      area: "1270",
      beds: "02",
      baths: "02",
      price: "$28,100.00",
      link: "listing_details_03.html"
    },
    {
      id: 3,
      tag: "FOR SELL",
      images: [new3, new1, new2],
      title: "Luxury villa in Dal lake.",
      address: "Mirpur 10, Stadium",
      area: "1270",
      beds: "02",
      baths: "02",
      price: "$42,500.00",
      link: "listing_details_03.html"
    }
  ];

  const featuredListings = [
    {
      id: 1,
      tag: "RENT",
      image: feature1,
      title: "Blueberry villa.",
      address: "Mirpur 10, Stadium dhaka 1208",
      area: "2137",
      beds: "03",
      kitchens: "01",
      baths: "02",
      link: "listing_details_04.html"
    },
    {
      id: 2,
      tag: "SELL",
      image: feature2,
      title: "Swimming Pool Villa",
      address: "127 green road, California, USA",
      area: "2137",
      beds: "03",
      kitchens: "01",
      baths: "02",
      link: "listing_details_04.html"
    },
    {
      id: 3,
      tag: "RENT",
      image: feature3,
      title: "Modern Duplex",
      address: "Twin tower, 32 street, Florida",
      area: "2137",
      beds: "03",
      kitchens: "01",
      baths: "02",
      link: "listing_details_04.html"
    }
  ];

  return (
    <>
      {/* New Listings Section */}
      <div className="mt-40 lg:mt-32 xl:mt-40">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="text-center mb-10 lg:mb-6">
              <h3 className="text-3xl md:text-4xl font-semibold text-gray-900">New Listings</h3>
              <p className="text-xl md:text-2xl text-gray-600 mt-2">
                Explore latest and featured properties for sale, rent & mortgage.
              </p>
            </div>
                {/* previous design */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {rooms.slice(0,4).map((listing) => (
                  <div key={listing._id} className="flex mt-10">
                    <div className="bg-white transition-shadow duration-300 w-full overflow-hidden flex flex-col">
                      <div className="relative overflow-hidden">
                        <div className="absolute top-4 left-0 z-10 bg-white px-3 py-1 text-sm font-medium text-gray-800 uppercase">
                          FOR {listing.Type}
                        </div>
                        <div className="h-56 bg-gray-200 relative">
                          <img 
                            src={listing.image[0]} 
                            
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIyNCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkeT0iMC4zNWVtIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSI+UHJvcGVydHkgSW1hZ2U8L3RleHQ+PC9zdmc+';
                            }}
                          />
                        </div>
                      </div>
                      
                      <div className="pt-4 flex-grow">
                        <Link to={'/details/' + listing._id} onClick={() => scrollTo(0,0)} href={listing.link} className="text-xl py-2 font-serif text-black hover:text-gray-600 transition-colors block">
                          {listing.name}
                        </Link>
                        <div className="text-gray-400 text-sm mb-3 font-serif">{listing.address}</div>
                        
                        <ul className="flex flex-wrap justify-between items-center pb-7 pt-6 border-b border-gray-200">
                          <li className="flex items-center mb-2">
                            <LandPlot size={20} className="w-5 h-5 text-gray-500 mr-2" />
                            <span className="text-gray-700"><span className="font-medium text-gray-900">{listing.plot}</span> sqft</span>
                          </li>
                          <li className="flex items-center mb-2">
                            <Bed size={20} className="w-5 h-5 text-gray-500 mr-2" />
                           
                            <span className="text-gray-700"><span className="font-medium text-gray-900">0{listing.Bedroom}</span> bed</span>
                          </li>
                          <li className="flex items-center mb-2">
                            <Bath size={20} className="w-5 h-5 text-gray-500 mr-1" />
                            
                            <span className="text-gray-700"><span className="font-medium text-gray-900">0{listing.Bathroom}</span> bath</span>
                          </li>
                        </ul>
                          
                        <div className="flex items-center justify-between pt-4 py-5 border-b border-gray-200">
                          <strong className="text-[25px] font-bold font-mono text-black">#{listing.pricePerNight.toLocaleString()}</strong>
                          <Link to={'/details/' + listing._id} onClick={() => scrollTo(0,0)} className="w-12 h-12 flex items-center justify-center bg-[#333] hover:bg-[#ff6725] transition-colors">
                          
                                <svg
                                      className="w-8 h-8 text-white"
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
                ))}
              </div>

            <div className="text-center mt-16 md:mt-24">
              <Link to='/Apartment' className="inline-flex items-center px-6 py-3 border-2 border-[#ff6725] text-gray-900 font-medium hover:bg-[#ff6725] hover:text-white transition-colors font-serif">
                <span>Explore All</span>
               <svg
                                      className="w-5 h-5 text-black hover:text-white ml-3"
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

      {/* Featured Listings Section */}
      {/* <div className="mt-40 lg:mt-32 xl:mt-40">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="text-center mb-10 lg:mb-6">
              <h3 className="text-3xl md:text-4xl font-semibold text-gray-900">Featured Listing</h3>
              <p className="text-xl md:text-2xl text-gray-600 mt-2">
                Explore featured properties for sale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
              {rooms.slice(0,3).map((listing) => (
                <div key={listing._id} className="mt-10">
                  <div 
                    className="h-140 rounded-lg overflow-hidden relative bg-cover bg-center flex items-end"
                    style={{backgroundImage: `url(${listing.image[0]})`}}
                  >
                    <div className="absolute top-4 left-4 z-10 bg-white px-3 py-1 text-sm font-medium text-gray-800 uppercase">
                      FOR {listing.Type}
                    </div>
                    <div className="bg-white m-4 p-6 rounded-lg w-full transform transition-transform duration-300 hover:-translate-y-1">
                      <div className="flex items-center justify-between mb-4">
                        <div className="pr-4">
                          <a href={listing.link} className="text-xl font-sarif cursor-pointer text-gray-900 hover:text-[#ff6725] transition-colors block">
                            {listing.name}
                          </a>
                          <div className="text-gray-600 text-sm mt-1">{listing.address}</div>
                        </div>
                        <Link to={'/details/' + listing._id} onClick={() => scrollTo(0,0)} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#f8a27e] hover:text-white transition-colors flex-shrink-0">
                             <svg
                                      className="w-5 h-5 text-[#ff6725] hover:text-white"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M7 17L17 7M7 7h10v10" />
                                    </svg>
                        </Link>
                      </div>
                      
                      <ul className="flex flex-wrap justify-between items-center pt-4 border-t border-gray-100">
                        <li className="text-center">
                          <strong className="block font-semibold text-gray-900">{listing.plot}</strong>
                          <span className="text-sm text-gray-600">sqft</span>
                        </li>
                        <li className="text-center">
                          <strong className="block font-semibold text-gray-900">{listing.Bedroom}</strong>
                          <span className="text-sm text-gray-600">bed</span>
                        </li>
                        <li className="text-center">
                          <strong className="block font-semibold text-gray-900">{listing.Kitchen}</strong>
                          <span className="text-sm text-gray-600">kitchen</span>
                        </li>
                        <li className="text-center">
                          <strong className="block font-semibold text-gray-900">{listing.Bathroom}</strong>
                          <span className="text-sm text-gray-600">bath</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16 md:mt-24">
              <Link to={'/rent'} onClick={() => scrollTo(0,0)} className="inline-flex items-center px-6 py-3 border-2 border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors">
                <span>Explore All</span>
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 12h14m-7-7l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default PropertyListings;