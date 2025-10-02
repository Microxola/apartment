// components/Categories.js
import React from 'react';
import feature1 from "../assets/feat1.jpeg"
import feature2 from "../assets/feat2.jpeg"
import feature3 from "../assets/feat3.jpeg"
import feature4 from "../assets/feat4.jpeg"
import bdImage from "../assets/house2.jpg"
import { Link } from 'react-router-dom';


const Categories = () => {
  const categories = [
    {
      image: feature1,
      title: "Apartments",
      link: "listing_03.html"
    },
    {
      image: feature4,
      title: "House",
      link: "listing_03.html"
    },
    {
      image: feature3,
      title: "Lofts",
      link: "listing_03.html"
    },
    {
      image: feature2,
      title: "Villa",
      link: "listing_03.html"
    }
  ];

  return (
    <div className="mt-44 xl:mt-32 lg:mt-24">
      <div className="container mx-auto px-4 max-w-8xl">
        <div className="relative">
          <div className="text-center lg:text-left mb-16 xl:mb-10 lg:mb-5 animate-fade-in-up">
            <h3 className="text-3xl font-bold text-gray-900">Popular Categories.</h3>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6">
            {categories.map((category, index) => (
                // <img src={category.image[0]} alt="" />,

              <div 
                key={index} 
                className="relative z-10 rounded-full overflow-hidden flex items-center justify-center w-64 h-64 bg-cover bg-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{backgroundImage: `url(${category.image})`}}
               
              >                
                <div className="absolute inset-0 bg-black bg-opacity-40 hover:bg-opacity-30 transition-all duration-300"></div>
                <Link to='/rent' className="title relative z-20">
                  <h4 className="text-white text-xl font-semibold transition-transform duration-300 hover:scale-105">{category.title}</h4>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16 md:mt-16">
            <a href="listing_02.html" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300">
              <span>See all categories</span> 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;