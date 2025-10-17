import React, { useState } from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  Heart,
  ChevronRight,
  Building2,
  Home,
  Crown,
  Briefcase,
  Factory,
  Castle,
  Building
} from 'lucide-react';


const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Company Info & Social */}
            <div className="lg:col-span-2">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="logo mb-6">
                    <a href="/" className="inline-block">
                      <div className="flex items-center">
                        <div className="bg-blue-600 p-2 rounded-lg mr-3">
                          <Building2 size={28} />
                        </div>
                        <div className="text-2xl font-bold text-white">APARTMENT</div>
                      </div>
                    </a>
                  </div>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    Premium real estate solutions with a focus on luxury apartments and exceptional customer experience.
                  </p>
                  <div className="flex items-center text-gray-400 mb-4">
                    <MapPin size={18} className="mr-3 flex-shrink-0" />
                    <span>Dada Estate Osogbo, Osun State, Nigeria</span>
                  </div>
                  <div className="flex items-center text-gray-400 mb-4">
                    <Phone size={18} className="mr-3 flex-shrink-0" />
                    <span>+234 803 449 0540</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Mail size={18} className="mr-3 flex-shrink-0" />
                    <span>info@apartment.com</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
                  <ul className="flex space-x-4">
                    <li>
                      <a 
                        href="#" 
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1"
                        aria-label="Facebook"
                      >
                        <Facebook size={20} />
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#" 
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-400 transition-all duration-300 transform hover:-translate-y-1"
                        aria-label="Twitter"
                      >
                        <Twitter size={20} />
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#" 
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-600 transition-all duration-300 transform hover:-translate-y-1"
                        aria-label="Instagram"
                      >
                        <Instagram size={20} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="text-lg font-semibold mb-6 flex items-center">
                <ChevronRight size={20} className="mr-2 text-blue-400" />
                Quick Links
              </h5>
              <ul className="space-y-3">
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors flex items-center group"><ChevronRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />Home</a></li>
                <li><a href="/membership" className="text-gray-400 hover:text-white transition-colors flex items-center group"><ChevronRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />Membership</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-white transition-colors flex items-center group"><ChevronRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />About Company</a></li>
                <li><a href="/blog" className="text-gray-400 hover:text-white transition-colors flex items-center group"><ChevronRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />Blog</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors flex items-center group"><ChevronRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />Contact Us</a></li>
              </ul>
            </div>

            {/* Properties */}
            <div>
              <h5 className="text-lg font-semibold mb-6 flex items-center">
                <ChevronRight size={20} className="mr-2 text-blue-400" />
                Properties
              </h5>
              <ul className="space-y-3">
                <li><a href="/listing" className="text-gray-400 hover:text-white transition-colors flex items-center group"><Home size={16} className="mr-2" />Buy Apartments</a></li>
                <li><a href="/listing" className="text-gray-400 hover:text-white transition-colors flex items-center group"><Building size={16} className="mr-2" />Buy Condos</a></li>
                <li><a href="/listing" className="text-gray-400 hover:text-white transition-colors flex items-center group"><Home size={16} className="mr-2" />Rent Houses</a></li>
                <li><a href="/listing" className="text-gray-400 hover:text-white transition-colors flex items-center group"><Factory size={16} className="mr-2" />Rent Industrial</a></li>
                <li><a href="/listing" className="text-gray-400 hover:text-white transition-colors flex items-center group"><Castle size={16} className="mr-2" />Buy Villas</a></li>
                <li><a href="/listing" className="text-gray-400 hover:text-white transition-colors flex items-center group"><Briefcase size={16} className="mr-2" />Rent Office</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h5 className="text-lg font-semibold mb-6 flex items-center">
                <ChevronRight size={20} className="mr-2 text-blue-400" />
                Legal
              </h5>
              <ul className="space-y-3">
                <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="/cookie" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ's</a></li>
              </ul>
            </div>

            {/* Newsletter Subscription */}
            <div>
              <h5 className="text-lg font-semibold mb-6">Stay Updated</h5>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest properties and updates.</p>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#ff6725] hover:bg-[#ff6625bb] text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} APARTMENT. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <ul className="flex space-x-6">
                <li><a href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy</a></li>
                <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">Terms</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a></li>
              </ul>
              
              <div className="flex items-center text-sm text-gray-400">
                <span>Developed by</span>
                <Heart size={16} className="mx-1 text-red-500 fill-current" />
                <span>by </span>
                <a 
                  href="https://wa.me/23408034490540" 
                  className="ml-1 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Williams Synergy Inc.
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;