import React, { useState, useEffect } from "react";

const FeedbackSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const feedbackData = [
    {
      id: 1,
      name: "Jonathan Harry",
      location: "Milan, Italy",
      comment: "Efficient, knowledgeable, & made our home search a smooth experience. Highly recommended agency!",
      rating: 4.7,
      ratingCount: "13k",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      name: "Sofia Rena",
      location: "New York, USA",
      comment: "People who are sentinels are definitely the working very hard now, so that they can enjoy the fruits.",
      rating: 4.5,
      ratingCount: "10k",
      image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      name: "Rashed Kabir",
      location: "Dhaka, BD",
      comment: "They are very strict about themselves and their work, and do not have a carefree attitude to anything in life.",
      rating: 4.8,
      ratingCount: "11k",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % feedbackData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [feedbackData.length]);

  return (
    <div className="relative z-10 pt-16 md:pt-12 pb-20 md:pb-14 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our <span className="text-pink-600">Customers</span> Say
          </h2>
          
          {/* Feedback Slider */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {feedbackData.map((feedback) => (
                <div key={feedback.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center">
                      {/* User Info */}
                      <div className="w-full md:w-3/12 text-center mb-6 md:mb-0">
                        <img
                          src={feedback.image}
                          alt={feedback.name}
                          className="rounded-full w-24 h-24 object-cover mx-auto"
                        />
                        <h6 className="text-xl font-semibold mt-2 mb-0">{feedback.name}</h6>
                        <span className="text-gray-600">{feedback.location}</span>
                      </div>
                      
                      {/* Comment */}
                      <div className="w-full md:w-6/12 px-0 md:px-6 mb-6 md:mb-0">
                        <blockquote className="text-xl italic text-gray-700 text-center md:text-left">
                          "{feedback.comment}"
                        </blockquote>
                      </div>
                      
                      {/* Rating */}
                      <div className="w-full md:w-3/12 text-center">
                        <div className="flex justify-center">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className={`w-6 h-6 ${star <= Math.floor(feedback.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="mt-2">
                          <span className="font-medium text-gray-900">{feedback.ratingCount} rating</span> ({feedback.rating} Rating)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {feedbackData.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-pink-600' : 'bg-gray-300'}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;