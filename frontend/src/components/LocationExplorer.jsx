import React, { useState, useEffect } from "react";

const LocationExplorer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const locations = [
    {
      id: 1,
      name: "Kelowna",
      properties: "1,230 Properties",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "California",
      properties: "1,190 Properties",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "New York",
      properties: "1,710 Properties",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Miami",
      properties: "670 Properties",
      image: "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      name: "Dhaka",
      properties: "1,670 Properties",
      image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % locations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + locations.length) % locations.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-36 xl:mt-30">
      <div className="container mx-auto px-4">
        <div className="relative z-10">
          {/* Section Title */}
          <div className="text-center mb-20 xl:mb-12 md:mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Explore Popular <span className="relative inline-block">
                Location
                <svg className="absolute -bottom-2 right-0 w-full" viewBox="0 0 160 30" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5,15 C40,25 120,5 155,15" stroke="#ec4899" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h3>
            <p className="text-xl">Explore the latest listings & projects in diverse areas</p>
          </div>

          {/* Location Cards */}
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 20}%)` }}>
              {locations.map((location, index) => (
                <div key={location.id} className="w-1/5 flex-shrink-0 px-3">
                  <div 
                    className="relative rounded-2xl overflow-hidden flex items-end h-96 bg-cover bg-center"
                    style={{ backgroundImage: `url(${location.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="relative z-10 text-center w-full p-6 transition-transform duration-300 transform hover:translate-y-1">
                      <h5 className="text-white text-xl font-normal mb-1">{location.name}</h5>
                      <p className="text-white font-light">{location.properties}</p>
                    </div>
                    <a href="#" className="absolute inset-0 z-20"></a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mt-8">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationExplorer;