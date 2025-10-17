import React, { useState, useEffect } from 'react';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  MapPin,
  Home
} from 'lucide-react';
import unsplash from "../assets/m1.png";
import unsplash1 from "../assets/m2.png";
import unsplash2 from "../assets/m3.png";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  
  const testimonials = [
    {
      id: 1,
      name: "Chinelo Okonkwo",
      role: "Software Engineer",
      image: unsplash,
      content: "Finding my apartment through this platform was seamless. The virtual tour feature helped me make a decision from Lagos, and when I arrived in Abuja, everything was exactly as described. The customer service team was incredibly helpful throughout the process.",
      rating: 5,
      location: "Abuja",
      date: "3 months ago"
    },
    {
      id: 2,
      name: "Bello Mohammed",
      role: "Business Owner",
      image: unsplash1,
      content: "As a business owner relocating to Lagos, I needed a comfortable and secure apartment quickly. The team understood my needs and presented options that matched my criteria perfectly. The lease process was transparent with no hidden costs.",
      rating: 5,
      location: "Lagos",
      date: "2 months ago"
    },
    {
      id: 3,
      name: "Thomas Adebayo",
      role: "University Lecturer",
      image: unsplash2,
      content: "I've rented through several platforms, but this one stands out for its professionalism. The verification process ensured I was dealing with legitimate property owners, and the apartment I found in Port Harcourt exceeded my expectations. Highly recommended!",
      rating: 5,
      location: "Port Harcourt",
      date: "1 month ago"
    },
    {
      id: 4,
      name: "Chinedu Eze",
      role: "Banker",
      image:  unsplash,
      content: "The quality of apartments on this platform is exceptional. I found a modern, fully-furnished apartment in Ikeja that was perfect for my needs. The maintenance response has been prompt whenever I've had issues. A truly premium service worth every kobo.",
      rating: 4,
      location: "Lagos",
      date: "2 weeks ago"
    }
  ];

  // Calculate how many slides to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(2); // Show 2 testimonials on large screens
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(1); // Show 1 testimonial on medium screens
      } else {
        setSlidesToShow(1); // Show 1 testimonial on small screens
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate total number of slides
  const totalSlides = Math.ceil(testimonials.length / slidesToShow);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, totalSlides]);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-[#ff6725]">Customers</span> Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied residents who found their perfect home through our platform
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button 
            onClick={prevTestimonial}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg hover:bg-blue-50 text-[#ff6725] transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg hover:bg-blue-50 text-[#ff6725] transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div 
                  key={slideIndex}
                  className="flex-shrink-0 w-full flex"
                >
                  <div className="flex w-full">
                    {testimonials
                      .slice(slideIndex * slidesToShow, slideIndex * slidesToShow + slidesToShow)
                      .map((testimonial) => (
                        <div 
                          key={testimonial.id}
                          className="w-full px-4"
                        >
                          <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full border border-gray-100 transition-all duration-300 hover:shadow-xl">
                            <div className="p-8">
                              {/* Quote Icon */}
                              <div className="mb-6 text-blue-500">
                                <Quote size={32} className="opacity-20" />
                              </div>

                              {/* Rating */}
                              <div className="flex mb-6">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i}
                                    size={20} 
                                    className={i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"} 
                                  />
                                ))}
                              </div>

                              {/* Content */}
                              <blockquote className="text-gray-700 text-lg leading-relaxed mb-8">
                                "{testimonial.content}"
                              </blockquote>

                              {/* Author */}
                              <div className="flex items-center">
                                <div className="relative mr-4">
                                  <img 
                                    src={testimonial.image} 
                                    alt={testimonial.name}
                                    className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                                  />
                                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                    <Home size={12} className="text-white" />
                                  </div>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                                  <div className="flex items-center mt-1 text-sm text-gray-500">
                                    <MapPin size={14} className="mr-1" />
                                    <span>{testimonial.location}</span>
                                    <span className="mx-2">•</span>
                                    <span>{testimonial.date}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator - Now shows correct number of dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial group ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#ff6725] mb-2">5,000+</div>
            <div className="text-gray-600">Happy Residents</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#ff6725] mb-2">12+</div>
            <div className="text-gray-600">Cities Nationwide</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#ff6725] mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#ff6725] mb-2">24/7</div>
            <div className="text-gray-600">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;