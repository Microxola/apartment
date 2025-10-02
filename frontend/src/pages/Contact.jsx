import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const formRef = useRef(null);
  const sectionRef = useRef(null);
  const inputRefs = useRef([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    // Section entrance animation
    gsap.fromTo(sectionRef.current, 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );

    // Form animation
    gsap.fromTo(formRef.current, 
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    );

    // Input animations on focus
    inputRefs.current.forEach(input => {
      if (!input) return;
      
      const label = input.previousElementSibling;
      
      input.addEventListener('focus', () => {
        gsap.to(label, {
          y: -20,
          scale: 0.85,
          duration: 0.3,
          color: '#ff6725'
        });
        gsap.to(input, {
          borderColor: '#ff6725',
          duration: 0.3
        });
      });
      
      input.addEventListener('blur', () => {
        if (!input.value) {
          gsap.to(label, {
            y: 0,
            scale: 1,
            duration: 0.3,
            color: '#9ca3af'
          });
        }
        gsap.to(input, {
          borderColor: '#e5e7eb',
          duration: 0.3
        });
      });
    });

    // Animate contact info cards
    gsap.utils.toArray('.info-card').forEach((card, i) => {
      gsap.fromTo(card, 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const name = inputRefs.current[0]?.value;
    const email = inputRefs.current[1]?.value;
    const phone = inputRefs.current[2]?.value;
    const message = inputRefs.current[3]?.value;

    const subject = `New message from ${name}`;
    const body = `Full Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AMessage:%0D%0A${message}`;
    const mailtoLink = `mailto:help@geniustouch.ng?subject=${encodeURIComponent(subject)}&body=${body}`;

    window.location.href = mailtoLink;
    
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white" ref={sectionRef}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Find Your Dream Apartment</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with our expert agents to discover the perfect apartment that fits your lifestyle and needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div ref={formRef} className="bg-white rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Schedule a Viewing</h3>
            <p className="text-gray-600 mb-8">Fill out the form and our agent will contact you shortly</p>
            
            {submitStatus === 'success' && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                There was an error sending your message. Please try again or contact us directly at help@geniustouch.ng
              </div>
            )}
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label htmlFor="firstName" className="absolute left-4 top-3 text-gray-500 pointer-events-none transition-all text-sm">
                    First Name
                  </label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-[#ff6725] focus:border-transparent"
                    ref={el => inputRefs.current[0] = el}
                    required
                  />
                </div>

                <div className="relative">
                  <label htmlFor="lastName" className="absolute left-4 top-3 text-gray-500 pointer-events-none transition-all text-sm">
                    Last Name
                  </label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-[#ff6725] focus:border-transparent"
                    ref={el => inputRefs.current[1] = el}
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <label htmlFor="email" className="absolute left-4 top-3 text-gray-500 pointer-events-none transition-all text-sm">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-[#ff6725] focus:border-transparent"
                  ref={el => inputRefs.current[2] = el}
                  required
                />
              </div>

              <div className="relative">
                <label htmlFor="phone" className="absolute left-4 top-3 text-gray-500 pointer-events-none transition-all text-sm">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-[#ff6725] focus:border-transparent"
                  ref={el => inputRefs.current[3] = el}
                />
              </div>

              <div className="relative">
                <label htmlFor="message" className="absolute left-4 top-3 text-gray-500 pointer-events-none transition-all text-sm">
                  Your Message or Preferred Requirements
                </label>
                <textarea 
                  id="message" 
                  rows="4"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-[#ff6725] focus:border-transparent"
                  ref={el => inputRefs.current[4] = el}
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#ff6725] text-white py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02]"
                onMouseDown={(e) => {
                  if (!isSubmitting) {
                    gsap.to(e.target, {scale: 0.98, duration: 0.1})
                  }
                }}
                onMouseUp={(e) => {
                  gsap.to(e.target, {scale: 1, duration: 0.1})
                }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Schedule Viewing'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="info-card bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="w-12 h-12 bg-[#fff5f0] rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#ff6725]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                  <p className="text-gray-600">+234 (706) 372-7453</p>
                </div>

                <div className="info-card bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="w-12 h-12 bg-[#fff5f0] rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#ff6725]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                  <p className="text-gray-600">help@geniustouch.ng</p>
                </div>

                <div className="info-card bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="w-12 h-12 bg-[#fff5f0] rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#ff6725]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                  <p className="text-gray-600">Lekki, Lagos<br />NG.</p>
                </div>

                <div className="info-card bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="w-12 h-12 bg-[#fff5f0] rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#ff6725]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Hours</h4>
                  <p className="text-gray-600">Mon-Fri: 8am-6pm<br />Sat: 9am-2pm</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="info-card">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Location</h3>
              <div className="rounded-xl overflow-hidden h-64 w-full shadow-md">
                <iframe
                  title="Lekki Lagos Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.3506750408065!2d3.4722249741356187!3d6.474308224720193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf46d0d8aef99%3A0x3a7a04784555b5d2!2sLekki%2C%20Lagos!5e0!3m2!1sen!2sng!4v1694873153434!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="border-0"
                ></iframe>
              </div>
            </div>

            {/* Callback Request */}
            <div className="info-card bg-gradient-to-r from-[#fff5f0] to-[#ffe6d9] p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Immediate Assistance?</h3>
              <p className="text-gray-700 mb-4">Speak directly with our rental experts for immediate help finding your next apartment.</p>
              <div className="flex">
                <a 
                  href="https://wa.me/23407063727453" 
                  className="flex items-center justify-center w-full bg-[#ff6725] text-white px-4 py-3 rounded-lg hover:bg-[#e55a1d] transition-colors font-medium"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;