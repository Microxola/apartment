import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { StarIcon, ShieldCheckIcon, SparklesIcon, HeartIcon } from '@heroicons/react/24/solid';
import out from "../assets/out1.jpg"
import outside from "../assets/house.jpg"
import hotel from "../assets/house.jpg"
import person from "../assets/m1.png"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const timelineRef = useRef(null);
  const statsRef = useRef(null);
  const teamRef = useRef(null);

  useEffect(() => {
    // Hero section animation
    gsap.fromTo(heroRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Mission section animation
    gsap.fromTo(".mission-item", 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: missionRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );

    // Timeline animation
    gsap.fromTo(".timeline-item", 
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.3,
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );

    // Stats animation
    gsap.fromTo(".stat-item", 
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );

    // Team animation
    gsap.fromTo(".team-member", 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );
  }, []);

  return (
    <section id="about" className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff662590] to-transparent opacity-90 z-0"></div>
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
        
        <div ref={heroRef} className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Redefining Modern Living
            </h1>
            <p className="text-xl text-white font-bold mb-10">
              At Luxe Apartments, we create exceptional living experiences through innovative design, premium amenities, and community-focused developments.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#ff6725] hover:bg-[#e55a1d] text-white px-8 py-4 rounded-lg shadow-lg transition-all text-lg font-medium">
                Explore Properties
              </button>
              <button className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg transition-all text-lg font-medium">
                Virtual Tours
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div ref={statsRef} className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="stat-item text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#ff6725] mb-2">5K+</div>
              <div className="text-gray-600">Happy Residents</div>
            </div>
            <div className="stat-item text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#ff6725] mb-2">120+</div>
              <div className="text-gray-600">Properties</div>
            </div>
            <div className="stat-item text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#ff6725] mb-2">15</div>
              <div className="text-gray-600">Cities</div>
            </div>
            <div className="stat-item text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#ff6725] mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission, Vision, Values Section */}
      <div ref={missionRef} className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">Our Philosophy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="mission-item bg-white p-8 rounded-xl shadow-md border-l-4 border-[#ff6725]">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#ff6725]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To create exceptional living spaces that enhance quality of life through innovative design, sustainable practices, and community building.
              </p>
            </div>

            <div className="mission-item bg-white p-8 rounded-xl shadow-md border-l-4 border-[#ff6725]">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#ff6725]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading innovator in residential living, setting new standards for comfort, sustainability, and community engagement.
              </p>
            </div>

            <div className="mission-item bg-white p-8 rounded-xl shadow-md border-l-4 border-[#ff6725]">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#ff6725]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h3>
              <ul className="text-gray-600 list-disc pl-5 space-y-2">
                <li>Innovation in design and sustainability</li>
                <li>Commitment to community building</li>
                <li>Excellence in customer service</li>
                <li>Transparency and integrity</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      {/* <div ref={timelineRef} className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">Our Journey</h2>
          
          <div className="relative">
           
            <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-[#ff6725] to-orange-300 transform -translate-x-1/2"></div>
            
           
            <div className="space-y-12">
              <div className="timeline-item relative pl-10 md:pl-0 md:flex md:items-center">
                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-[#ff6725] rounded-full border-4 border-white shadow-md transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-gray-900">2010</h3>
                  <p className="text-gray-600">Foundation of Luxe Apartments</p>
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
                    <p>Established with a vision to redefine urban living through innovative apartment designs.</p>
                  </div>
                </div>
              </div>

              <div className="timeline-item relative pl-10 md:pl-0 md:flex md:items-center">
                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-[#ff6725] rounded-full border-4 border-white shadow-md transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-gray-900">2014</h3>
                  <p className="text-gray-600">First Sustainable Development</p>
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
                    <p>Launched our first LEED-certified green building with eco-friendly features and energy-efficient design.</p>
                  </div>
                </div>
              </div>

              <div className="timeline-item relative pl-10 md:pl-0 md:flex md:items-center">
                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-[#ff6725] rounded-full border-4 border-white shadow-md transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-gray-900">2018</h3>
                  <p className="text-gray-600">National Expansion</p>
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
                    <p>Expanded to 10 major cities across the country, bringing our unique approach to multifamily housing nationwide.</p>
                  </div>
                </div>
              </div>

              <div className="timeline-item relative pl-10 md:pl-0 md:flex md:items-center">
                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-[#ff6725] rounded-full border-4 border-white shadow-md transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-gray-900">2023</h3>
                  <p className="text-gray-600">Smart Home Integration</p>
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
                    <p>Implemented full smart home technology across all new properties, setting a new industry standard.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* new something to add up */}
        {/* Mission Section */}
      <div className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Our Philosophy</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Apartment, we believe true luxury lies in the details. Our mission is to craft 
              personalized experiences that transcend ordinary hospitality, creating moments 
              that linger in memory long after your stay.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <SparklesIcon className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900">Curated Excellence</h3>
                  <p className="text-gray-600">Every property meets our exacting 500-point standard</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <HeartIcon className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900">Personalized Service</h3>
                  <p className="text-gray-600">Dedicated concierge for every guest</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img 
                src={outside}
                alt="ApartmentHotel service"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Why Choose Apartment</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by the most discerning authorities in luxury travel
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <StarIcon className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">5-Star Rated</h3>
              <p className="text-gray-600">
                Consistently awarded top honors by Luxury Travel Magazine
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Trusted</h3>
              <p className="text-gray-600">
                Partnered with American Express & Resorts
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <SparklesIcon className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Sustainable Luxury</h3>
              <p className="text-gray-600">
                Certified by the Sustainable Luxury Hospitality Alliance
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Founded in 2010 by hospitality veterans, Apartment began with a single boutique property in Bali. 
            Today, we curate the world's finest luxury accommodations while maintaining our founding principles.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative aspect-[5/4] rounded-xl overflow-hidden shadow-lg">
            <img 
              src={hotel}
              alt="ApartmentHotel founders"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-serif font-medium text-gray-900 mb-3">The Apartment Difference</h3>
                <p className="text-gray-600">
                  Unlike conventional hospitality brands, we don't just provide accommodations—we craft experiences. 
                  Each property undergoes a meticulous selection process, ensuring it meets our uncompromising 
                  standards for design, service, and authenticity.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-serif font-medium text-gray-900 mb-3">Looking Forward</h3>
                <p className="text-gray-600">
                  As we expand our global footprint, we remain committed to our core values: exceptional service, 
                  architectural integrity, and sustainable luxury. The future of travel is personal, and we're 
                  proud to be shaping it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div ref={teamRef} className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Leadership Team</h2>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Meet the visionaries behind our success and innovation in residential living.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="team-member bg-white rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="h-68 bg-gray-200 flex items-center justify-center">
                <img src={person} alt="" />
                {/* <span className="text-gray-400">Team Member Photo</span> */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Tunde Bakare</h3>
                <p className="text-[#ff6725] mb-2">CEO & Founder</p>
                <p className="text-gray-600 text-sm">Visionary leader with 15+ years in real estate development.</p>
              </div>
            </div>
            
            <div className="team-member bg-white rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="h-60 bg-gray-200 flex items-center justify-center">
                                <img src={person} alt="" />

              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Sarah Johnson</h3>
                <p className="text-[#ff6725] mb-2">Chief Design Officer</p>
                <p className="text-gray-600 text-sm">Award-winning architect with a passion for sustainable design.</p>
              </div>
            </div>
            
            <div className="team-member bg-white rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="h-60 bg-gray-200 flex items-center justify-center">
                <img src={person} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Sadiq Musa</h3>
                <p className="text-[#ff6725] mb-2">CTO</p>
                <p className="text-gray-600 text-sm">Tech innovator specializing in smart home integration.</p>
              </div>
            </div>
            
            <div className="team-member bg-white rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="h-60 bg-gray-200 flex items-center justify-center">
                                <img src={person} alt="" />

              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Tolu Adebayo</h3>
                <p className="text-[#ff6725] mb-2">VP of Community Development</p>
                <p className="text-gray-600 text-sm">Dedicated to creating vibrant, connected resident communities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>  

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-[#ff6725] to-orange-500">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Find Your Dream Apartment</h2>
          <p className="text-xl text-white mb-10 max-w-2xl mx-auto">
            Explore our premium properties and experience the Luxe Apartments difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#ff6725] px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition-all text-lg font-medium">
              View Properties
            </button>
            <button className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#ff6725] px-8 py-4 rounded-lg transition-all text-lg font-medium">
              Schedule a Tour
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 

export default About;