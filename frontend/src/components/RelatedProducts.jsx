import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

const RelatedProducts = ({roomType}) => {
    const {rooms} = useAppContext();
    const [related, setRelated] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const isMobile = window.innerWidth < 768; // Tailwind's 'md' breakpoint
    const itemsPerSlide = isMobile ? 1 : 2;

  const totalSlides = Math.ceil(related.length / itemsPerSlide);
    

    useEffect(()=>{
        if(rooms.length > 0){
            let productsCopy = rooms.slice();

            productsCopy = productsCopy.filter((item) => roomType === item.roomType)
            // productsCopy = productsCopy.filter((item) => subCategory === item.subCategory)

            setRelated(productsCopy.slice(0,6))
        }
    }, [rooms])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000); // 4-second interval

    return () => clearInterval(interval);
  }, [totalSlides]);

  const getVisibleHomes = () => {
    const start = currentSlide * itemsPerSlide;
    return related.slice(start, start + itemsPerSlide);
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-8 mb-8 border-t">
      <h4 className="text-2xl font-bold mb-8">Similar Homes You May Like</h4>

      {/* Slider */}
      <div className="transition-all duration-700 ease-in-out">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {getVisibleHomes().map((home, index) => (
            <div
              key={index}
              className="border rounded-2xl overflow-hidden transition-all duration-500 ease-in-out"
            >
              <div className="p-4">
                <div className="relative rounded-xl overflow-hidden">
                  <div className="absolute top-4 left-4 bg-white text-gray-900 font-medium px-3 py-1 rounded-full text-xs">
                    {home.status}
                  </div>
                  <img
                    src={home.image[0]}
                    alt={home.title}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <Link
                    to={'/details/' + home._id} onClick={() => scrollTo(0,0)}
                    className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="p-4 pt-0">
                <Link to={'/details/' + home._id} onClick={() => scrollTo(0,0)}
                  href="#"
                  className="text-lg font-semibold text-gray-900 hover:text-[#ff6725] transition-colors"
                >
                  {home.name}
                </Link>
                <div className="text-gray-600 mt-1">{home.address}</div>
                <div className="flex justify-between items-center mt-4">
                  <strong className="text-lg font-medium text-gray-900">
                    #{home.pricePerNight.toLocaleString()}
                  </strong>
                  <ul className="flex">
                    <li className="ml-2">
                      <a href="#" className="text-gray-500 hover:text-[#ff6725]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </a>
                    </li>
                    <li className="ml-2">
                      <a href="#" className="text-gray-500 hover:text-[#ff6725]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                          />
                        </svg>
                      </a>
                    </li>
                    <li className="ml-2">
                      <a href="#" className="text-gray-500 hover:text-[#ff6725]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 01118 0z"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="mt-6 flex justify-center space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-blue-600'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
