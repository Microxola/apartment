import React from "react";
import { Link } from "react-router-dom";

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      title: "Apartments",
      link: "/Apartment",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "House",
      link: "/Houses",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      delay: "100"
    },
    {
      id: 3,
      title: "Lofts",
      link: "/Houses",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      delay: "200"
    },
    {
      id: 4,
      title: "Villa",
      link: "/Apartment",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      delay: "300"
    }
  ];

  return (
    <div className="mt-40 xl:mt-28">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Section Title */}
          <div className="text-center lg:text-left mb-16 xl:mb-10 lg:mb-6">
            <h3 className="text-3xl md:text-4xl font-bold">Popular Categories.</h3>
          </div>

          {/* Categories Grid */}
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-8">
            {categories.map((category) => (
              <div 
                key={category.id} 
                className="relative rounded-full overflow-hidden w-64 h-64 flex items-center justify-center group"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.image})` }}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
                </div>
                <Link 
                  to={category.link} 
                  className="relative z-10 text-center"
                >
                  <h4 className="text-white text-2xl font-medium transition-transform duration-300 group-hover:translate-y-1">
                    {category.title}
                  </h4>
                </Link>
              </div>
            ))}
          </div>

          {/* See All Button */}
          <div className="text-center mt-16 md:mt-12">
            <a 
              href="#" 
              className="inline-flex items-center text-[#ff6725] hover:text-blue-700 font-medium text-lg transition-colors"
            >
              <span>See all categories</span>
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;