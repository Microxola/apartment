import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import RelatedProducts from '../components/RelatedProducts';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { closePaymentModal, useFlutterwave } from 'flutterwave-react-v3';
import { jwtDecode } from 'jwt-decode';
import toast from 'react-hot-toast';
import axios from "axios"

const ListingDetails = () => {
  const {id} = useParams();
  const {rooms, token, userEmail, navigate, backendUrl} = useAppContext();
  const [property, setProperty] = useState(null);
  const [images, setImages] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
        const property = rooms.find(property => property._id === id);
        property && setProperty(property);
        property && setImages(property.image[0]);
        console.log(property);
        
  }, [rooms])
  const handlePayment = (propertyId, amount) => {
   if (!token) {
    return toast.error("You are required to login");
  }

  const config = {
    public_key: "FLWPUBK_TEST-773457000f834f0e11c7ee7b2ceb4466-X",
    tx_ref: Date.now(),
    amount: amount,  // ✅ Now it's defined
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: userEmail,
    },
    customizations: {
      title: 'Synergy Booking',
      description: "Hotel Booking",
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  console.log("we have get to initiate");
  
  const handleFlutterPayment = useFlutterwave(config);

  handleFlutterPayment({
    callback: async (response) => {
      closePaymentModal();
   
      if (response.status === "completed") {    
        try {
    

          const res = await axios.post(
            backendUrl+"/api/booking/pay",
            {
              propertyId,
              transaction_id: response.transaction_id,
            },
            {headers: {Authorization: `Bearer ${token}`},}
          );

          if (res.data.success) {
            toast.success("Payment verified and booking updated!");
            navigate('/order');
          } else {
            toast.error(res.data.message);
          }
        } catch (err) {
          toast.error("Server error during payment update.");
        }
      } else {
        toast.error("Payment was not successful.");
      }
    },
    onClose: () => {
      console.log("Payment popup closed.");
    },
  }); 
};

  return property && (
    <div className="bg-pink-50 pt-40 lg:pt-32 pb-32 xl:pb-28">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <h3 className="text-6xl font-bold text-gray-900">{property.name}</h3>
            <div className="flex flex-wrap mt-3">
              <div className="uppercase bg-gray-200 text-gray-800 px-4 py-1 rounded-full text-sm font-medium mt-3 mr-3">FOR {property.Type}</div>
              <div className="text-gray-600 mt-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                    {property.address}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:text-right mt-10 lg:mt-0">
            <div className="inline-block md:mt-10">
              <div className="text-4xl font-medium text-gray-900">#{property.pricePerNight.toLocaleString()}</div>
              {/* <div className="text-xl mt-6 mb-8 md:mb-7 text-gray-400">Est. Payment <span className="font-medium text-gray-900">$8,343/mo*</span></div> */}
              <ul className="flex items-center">
                <li className="mr-auto font-medium text-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Share
                </li>
                <li>
                  <a href="#" className="flex items-center justify-center rounded-full w-10 h-10 bg-gray-100 hover:bg-gray-200 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </a>
                </li>
                <li className="ml-3">
                  <a href="#" className="flex items-center justify-center rounded-full w-10 h-10 bg-gray-100 hover:bg-gray-200 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </a>
                </li>
                <li className="ml-3">
                  <a href="#" className="flex items-center justify-center rounded-full w-10 h-10 bg-gray-100 hover:bg-gray-200 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </a>
                </li>
                
              </ul>
              <button onClick={()=> handlePayment(property._id, property.pricePerNight)}
                    type="button"
                    className="group relative cursor-pointer inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-emerald-500 to-green-600 px-6 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:from-emerald-600 hover:to-green-700 focus:outline-none focus:ring-4 focus:ring-emerald-300 active:scale-95"
                    aria-label="Purchase property now"
                  >
                  <ShoppingCartIcon className="mr-2 h-5 w-5 text-white transition-transform duration-300 group-hover:scale-110" />
                  Purchase Now
                </button>
            </div>
          </div>
        </div>

        {/* Media Gallery */}
        <div className="bg-white shadow-lg rounded-2xl p-8 mt-16 lg:mt-12 mb-12">
          <div className="flex flex-col">
            <div className="w-full">
              <div className="relative z-10 overflow-hidden rounded-2xl">
                <div className="absolute top-4 right-4 z-20 bg-white text-gray-900 font-medium px-4 py-2 rounded-full text-sm">
                  {/* See all 37 Photos */}
                  world class
                </div>
                
                {/* Main Carousel */}
                <div className="relative">
                  <div className="overflow-hidden rounded-2xl">
                    <img 
                      src={property.image[activeSlide]} 
                      alt="Property" 
                      className="w-full h-96 object-cover rounded-2xl"
                    />
                  </div>
                  
                  {/* Navigation Arrows */}
                  <button 
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                    onClick={() => setActiveSlide((activeSlide - 1 + property.image.length) % property.image.length)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                    onClick={() => setActiveSlide((activeSlide + 1) % property.image.length)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Thumbnails */}
            <div className="w-full mt-6">
              <div className="flex justify-between">
                {property.image.map((img, index) => (
                  <button 
                    key={index}
                    className={`w-1/5 mx-1 first:ml-0 last:mr-0 ${activeSlide === index ? 'ring-2 ring-blue-500' : ''}`}
                    onClick={() => setActiveSlide(index)}
                  >
                    <img 
                      src={img} 
                      alt={`Thumbnail ${index + 1}`} 
                      className="w-full h-20 object-cover rounded-lg"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content and Sidebar */}
        <div className="flex flex-wrap -mx-4">
          <div className="w-full xl:w-8/12 px-4">
            {/* Overview Section */}
            <div className="bg-white shadow-lg rounded-2xl p-8 mb-8">
              <h4 className="text-2xl font-bold mb-5">Overview</h4>
              <p className="text-xl leading-relaxed">
                {property.description}
              </p>
              
              <div className="mt-10">
                <ul className="flex flex-wrap justify-between">
                  <li className="flex items-center mb-5 w-full sm:w-1/2 lg:w-1/4">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <span className="text-xl font-medium text-gray-900">Sqft . {property.plot}</span>
                  </li>
                  <li className="flex items-center mb-5 w-full sm:w-1/2 lg:w-1/4">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                      </svg>
                    </div>
                    <span className="text-xl font-medium text-gray-900">Bed . {property.Bedroom}</span>
                  </li>
                  <li className="flex items-center mb-5 w-full sm:w-1/2 lg:w-1/4">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <span className="text-xl font-medium text-gray-900">Bath . {property.Bathroom}</span>
                  </li>
                  <li className="flex items-center mb-5 w-full sm:w-1/2 lg:w-1/4">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                      </svg>
                    </div>
                    <span className="text-xl font-medium text-gray-900">Kitchen . {property.Kitchen}</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Property Features */}
            <div className="bg-white shadow-lg rounded-2xl p-8 mb-8 border-t">
              <h4 className="text-2xl font-bold mb-5">Property Features</h4>
              <p className="text-xl leading-relaxed mb-6">
                Risk management and compliance, when approached strategically, have the potential to go beyond mitigating threats.
              </p>
              <h5 className="text-xl font-semibold pt-6 pb-5">Property Details</h5>
              <div className="feature-list-two">
                <ul className="flex flex-wrap justify-between">
                 
                    <li className="w-full sm:w-1/2 mb-4">
                      <span>Bedrooms </span> 
                      <span className="font-medium text-gray-900">{property.Bedroom}</span>
                    </li>
                     <li className="w-full sm:w-1/2 mb-4">
                      <span>Furnishing </span> 
                      <span className="font-medium text-gray-900">{property.Furnishing}</span>
                    </li>
                     <li className="w-full sm:w-1/2 mb-4">
                      <span>Bathrooms </span> 
                      <span className="font-medium text-gray-900">{property.Bathroom}</span>
                    </li>
                     <li className="w-full sm:w-1/2 mb-4">
                      <span>Garage </span> 
                      <span className="font-medium text-gray-900">{property.Garage}</span>
                    </li>
                     <li className="w-full sm:w-1/2 mb-4">
                      <span>Property Type: </span> 
                      <span className="font-medium text-gray-900">{property.roomType}</span>
                    </li>
                     <li className="w-full sm:w-1/2 mb-4">
                      <span>Status </span> 
                      <span className="font-medium text-gray-900">{property.Type}</span>
                    </li>
                     <li className="w-full sm:w-1/2 mb-4">
                      <span>Kitchen </span> 
                      <span className="font-medium text-gray-900">{property.Kitchen}</span>
                    </li>
                    
                 
                </ul>
              </div>
            </div>
            
            {/* Amenities */}
            <div className="bg-white shadow-lg rounded-2xl p-8 mb-8 border-t">
              <h4 className="text-2xl font-bold mb-5">Amenities</h4>
              <p className="text-xl leading-relaxed pb-5">
                Risk management & compliance, when approached strategically, have the potential
              </p>
              <ul className="flex flex-wrap justify-between list-disc pl-5">
                {property.amenities.map((amenity, index) => (
                  <li key={index} className="w-full sm:w-1/2 lg:w-1/3 mb-3">{amenity}</li>
                ))}
              </ul>
            </div>
            
            {/* Video Tour */}
            <div className="bg-white shadow-lg rounded-2xl p-8 mb-8 border-t">
              <h4 className="text-2xl font-bold mb-7">Video Tour</h4>
              <div className="relative rounded-xl overflow-hidden z-1">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80" 
                  alt="Property video" 
                  className="w-full h-96 object-cover"
                />
                <a className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-all hover:bg-opacity-20">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#ff6725] ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            
          
            {/* What's Nearby */}
            <div className="bg-white shadow-lg rounded-2xl p-8 mb-8 border-t">
              <h4 className="text-2xl font-bold mb-5">What's Nearby</h4>
              <p className="text-xl leading-relaxed pb-6">
                Risk management and compliance, when approached strategically, have the potential to go beyond mitigating threats.
              </p>
              <ul className="flex flex-wrap justify-between">
                {property.nearby.map((item, index) => (
                  <li key={index} className="w-full sm:w-1/2 lg:w-1/3 mb-4">
                    {item} 
                    {/* <span className="font-medium text-gray-900">{item}</span> */}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Similar Homes */}
                <RelatedProducts roomType={property.roomType} />
            
            {/* my other Additional section starts from here */}
          </div>
          
          <div className="w-full xl:w-4/12 px-4 mt-12 xl:mt-0">
            {/* Agent Info (for desktop) */}
            <div className="bg-white rounded-2xl p-6 mb-8">
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" 
                  alt="Agent" 
                  className="w-24 h-24 rounded-full mx-auto"
                />
                <div className="mt-6">
                  <h6 className="text-lg font-semibold">{property.hotel.name}</h6>
                  <p className="text-gray-600">Property Agent & Broker</p>
                  <ul className="flex justify-center space-x-3 mt-4">
                    <li><a href="#" className="text-gray-500 hover:text-blue-500">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a></li>
                    <li><a href="#" className="text-gray-500 hover:text-blue-400">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a></li>
                    <li><a href="#" className="text-gray-500 hover:text-pink-500">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a></li>
                    <li><a href="#" className="text-gray-500 hover:text-blue-700">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                      </svg>
                    </a></li>
                  </ul>
                </div>
                
                <div className="border-t border-gray-200 mt-8 pt-6">
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span>Location:</span> 
                      <span className="font-medium">{property.hotel.address}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Email:</span> 
                      <span className="font-medium">
                        <a href="mailto:akabirr770@gmail.com" className="text-[#ff6725]">{property.hotel.city}</a>
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Phone:</span> 
                      <span className="font-medium">
                        <a href="tel:+12347687565" className="text-[#ff6725]">+{property.hotel.contact}</a>
                      </span>
                    </li>
                  </ul>
                </div>
                
                <a href="#contact" className="block w-full bg-blue-600 text-white text-center uppercase py-3 rounded-lg mt-6 font-medium hover:bg-blue-700 transition-colors">
                  CONTACT AGENT
                </a>
              </div>
            </div>
            
            {/* Schedule Tour Form */}
            <div className="bg-white rounded-2xl p-6 mb-8">
              <h5 className="text-xl font-bold mb-8">Schedule Tour</h5>
              <form>
                <div className="mb-5">
                  <label className="block text-gray-700 mb-2">Your Name*</label>
                  <input 
                    type="text" 
                    placeholder="Your full name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="mb-5">
                  <label className="block text-gray-700 mb-2">Your Email*</label>
                  <input 
                    type="email" 
                    placeholder="Enter mail address" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="mb-5">
                  <label className="block text-gray-700 mb-2">Your Phone*</label>
                  <input 
                    type="tel" 
                    placeholder="Your phone number" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="mb-5">
                  <label className="block text-gray-700 mb-2">Message*</label>
                  <textarea 
                    placeholder="Hello, I am interested in [Califronia Apartments]" 
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>
                <button className="w-full bg-blue-600 text-white uppercase py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  INQUIRY
                </button>
              </form>
            </div>
            
            {/* Mortgage Calculator */}
            <div className="bg-white rounded-2xl p-6 mb-8">
              <h5 className="text-xl font-bold mb-8">Mortgage Calculator</h5>
              <form>
                <div className="mb-5">
                  <label className="block text-gray-700 mb-2">Home Price*</label>
                  <input 
                    type="tel" 
                    placeholder="1,32,789" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="mb-5">
                  <label className="block text-gray-700 mb-2">Down Payment*</label>
                  <input 
                    type="tel" 
                    placeholder="$" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="mb-5">
                  <label className="block text-gray-700 mb-2">Interest Rate*</label>
                  <input 
                    type="tel" 
                    placeholder="3.5%" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="mb-5">
                  <label className="block text-gray-700 mb-2">Loan Terms (Years)</label>
                  <input 
                    type="tel" 
                    placeholder="24" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <button className="w-full bg-blue-600 text-white uppercase py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  CALCULATE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;