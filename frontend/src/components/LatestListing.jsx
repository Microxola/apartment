import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

const LatestListing = () => {
  const [activeSlides, setActiveSlides] = useState({});
  const {rooms} = useAppContext();
  
  const properties = [
    {
      id: 1,
      title: "Blueberry villa",
      address: "Mirpur 10, Stadium dhaka 1208",
      type: "FOR RENT",
      price: "$3,280",
      period: "month",
      sqft: "1370",
      beds: "03",
      baths: "02",
      images: [
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 2,
      title: "White House villa",
      address: "Muza link road, ca, usa",
      type: "FOR SELL",
      price: "$28,100.00",
      period: "",
      sqft: "1270",
      beds: "02",
      baths: "02",
      images: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 3,
      title: "Luxury villa in Dal lake.",
      address: "Mirpur 10, Stadium",
      type: "FOR SELL",
      price: "$42,500.00",
      period: "",
      sqft: "1270",
      beds: "02",
      baths: "02",
      images: [
        "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600566753052-dc67f3a2d2c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 4,
      title: "Blueberry villa",
      address: "Mirpur 10, Stadium dhaka 1208",
      type: "FOR RENT",
      price: "$3,280",
      period: "month",
      sqft: "1370",
      beds: "03",
      baths: "02",
      images: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 5,
      title: "White House villa",
      address: "Muza link road, ca, usa",
      type: "FOR SELL",
      price: "$28,100.00",
      period: "",
      sqft: "1270",
      beds: "02",
      baths: "02",
      images: [
        "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 6,
      title: "Luxury villa in Dal lake.",
      address: "Mirpur 10, Stadium",
      type: "FOR RENT",
      price: "$3,280",
      period: "month",
      sqft: "1270",
      beds: "02",
      baths: "02",
      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600566753052-dc67f3a2d2c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      ]
    }
  ];

  const handleSlideChange = (propertyId, slideIndex) => {
    setActiveSlides({
      ...activeSlides,
      [propertyId]: slideIndex
    });
  };

  return (
    <div className="bg-pink-50 mt-36 xl:mt-30 lg:mt-20 pt-32 xl:pt-28 lg:pt-20 pb-40 xl:pb-28 lg:pb-24">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Section Title */}
          <div className="text-center lg:text-left mb-12 xl:mb-8 lg:mb-6">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              New <span className="relative inline-block">
                Listings
                <svg className="absolute -bottom-2 right-0 w-full" viewBox="0 0 160 30" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5,15 C40,25 120,5 155,15" stroke="#ec4899" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h3>
            <p className="text-xl mt-2">Explore latest & featured properties for sale.</p>
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((property, index) => (
              <div key={property._id} className="flex">
                <div className="bg-white rounded-2xl shadow-md w-full overflow-hidden transition-transform duration-300 hover:shadow-lg">
                  {/* Image Gallery */}
                  <div className="p-4">
                    <div className="relative rounded-2xl overflow-hidden">
                      <div className={`absolute top-4 left-4 z-10 rounded-full px-3 py-1 text-sm font-medium ${
                        property.Type === "Rent" ? "bg-blue-500 text-white" : "bg-green-500 text-white"
                      }`}>
                        {property.Type}
                      </div>
                      
                      {/* Carousel */}
                      <div className="relative overflow-hidden rounded-2xl">
                        <div className="relative h-56">
                          {property.image.map((img, imgIndex) => (
                            <div 
                              key={imgIndex} 
                              className={`absolute inset-0 transition-opacity duration-500 ${(activeSlides[property._id] || 0) === imgIndex ? 'opacity-100' : 'opacity-0'}`}
                            >
                              <a href="#">
                                <img src={img} alt="" className="w-full h-full object-cover" />
                              </a>
                            </div>
                          ))}
                        </div>
                        
                        {/* Carousel Indicators */}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                          {property.image.map((_, indicatorIndex) => (
                            <button
                              key={indicatorIndex}
                              type="button"
                              className={`w-2 h-2 rounded-full ${(activeSlides[property._id] || 0) === indicatorIndex ? 'bg-white' : 'bg-white/50'}`}
                              onClick={() => handleSlideChange(property._id, indicatorIndex)}
                              aria-label={`Slide ${indicatorIndex + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Property Info */}
                  <div className="p-6">
                    <a href="#" className="text-xl font-semibold text-gray-900 hover:text-[#ff6725] transition-colors block mb-2">
                      {property.name}
                    </a>
                    <div className="text-gray-600 mb-4">{property.address}</div>
                    
                    <ul className="flex flex-wrap justify-between items-center mb-4">
                      <li className="flex items-center mb-2">
                        <svg className="w-5 h-5 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.2 6.5 10.266a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                        </svg>
                        <span>{property.plot} sqft</span>
                      </li>
                      <li className="flex items-center mb-2">
                        <svg className="w-5 h-5 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                        </svg>
                        <span>{property.Bedroom} bed</span>
                      </li>
                      <li className="flex items-center mb-2">
                        <svg className="w-5 h-5 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.2 6.5 10.266a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                        </svg>
                        <span>{property.Bathroom} bath</span>
                      </li>
                    </ul>
                    
                    <div className="border-t pt-4 flex items-center justify-between">
                      <strong className="text-lg font-semibold text-gray-900">
                        # {property.pricePerNight.toLocaleString()}
                        {property.period && <sub className="text-sm font-normal">/{property.period}</sub>}
                      </strong>
                      <Link to={'/details/' + property._id} onClick={() => scrollTo(0,0)} className="w-10 h-10 flex items-center justify-center bg-blue-100 text-[#ff6725] rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Explore All Button */}
          <div className="text-center mt-16 md:mt-12">
            <a href="#" className="inline-block bg-[#ff6725] hover:bg-[#ff6625bb] text-white font-medium py-3 px-8 rounded-lg transition-colors">
              Explore All
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestListing;