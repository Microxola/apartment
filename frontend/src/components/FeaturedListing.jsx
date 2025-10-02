import React from "react";

const FeaturedListing = () => {
  const properties = [
    {
      id: 1,
      title: "Blueberry villa.",
      address: "Mirpur 10, Stadium dhaka 1208",
      type: "RENT",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      details: {
        sqft: "2137",
        bed: "03",
        kitchen: "01",
        bath: "02"
      }
    },
    {
      id: 2,
      title: "Swimming Pool Villa",
      address: "127 green road, California, USA",
      type: "SELL",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      details: {
        sqft: "2137",
        bed: "03",
        kitchen: "01",
        bath: "02"
      }
    },
    {
      id: 3,
      title: "Modern Duplex",
      address: "Twin tower, 32 street, Florida",
      type: "RENT",
      image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      details: {
        sqft: "2137",
        bed: "03",
        kitchen: "01",
        bath: "02"
      }
    }
  ];

  return (
    <div className="mt-40 xl:mt-30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="relative">
          {/* Section Title */}
          <div className="mb-6 lg:mb-3">
            <h3 className="text-3xl md:text-4xl font-bold mb-2">Featured Listing</h3>
            <p className="text-xl">Explore featured properties for sale.</p>
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <div key={property.id} className="mt-10">
                <div 
                  className="relative rounded-2xl overflow-hidden flex items-end h-96 bg-cover bg-center"
                  style={{ backgroundImage: `url(${property.image})` }}
                >
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  
                  {/* Property Tag */}
                  <div className={`absolute top-4 left-4 z-10 rounded-full px-3 py-1 text-sm font-medium ${
                    property.type === "RENT" ? "bg-blue-500 text-white" : "bg-green-500 text-white"
                  }`}>
                    {property.type}
                  </div>
                  
                  {/* Property Info */}
                  <div className="relative z-10 w-full p-6 transition-transform duration-300 transform hover:translate-y-1">
                    <div className="flex items-center justify-between mb-4">
                      <div className="pr-3">
                        <a href="#" className="text-xl font-medium text-white hover:text-blue-300 transition-colors block mb-1">
                          {property.title}
                        </a>
                        <div className="text-gray-200 text-sm">{property.address}</div>
                      </div>
                      <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                    
                    {/* Property Details */}
                    <div className="pt-4 border-t border-white/20">
                      <ul className="flex flex-wrap justify-between">
                        <li className="text-center mb-2">
                          <strong className="text-white font-medium">{property.details.sqft}</strong> 
                          <span className="text-gray-200 text-sm block">sqft</span>
                        </li>
                        <li className="text-center mb-2">
                          <strong className="text-white font-medium">{property.details.bed}</strong> 
                          <span className="text-gray-200 text-sm block">bed</span>
                        </li>
                        <li className="text-center mb-2">
                          <strong className="text-white font-medium">{property.details.kitchen}</strong> 
                          <span className="text-gray-200 text-sm block">kitchen</span>
                        </li>
                        <li className="text-center mb-2">
                          <strong className="text-white font-medium">{property.details.bath}</strong> 
                          <span className="text-gray-200 text-sm block">bath</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Explore All Button */}
          <div className="text-center mt-16 md:mt-12">
            <a href="#" className="inline-flex items-center border border-blue-600 text-[#ff6725] hover:bg-blue-600 hover:text-white font-medium py-3 px-6 rounded-lg transition-colors">
              <span>Explore All</span>
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedListing;