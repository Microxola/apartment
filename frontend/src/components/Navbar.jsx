// components/Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="/images/logo/logo_06.svg" 
                alt="Homy Logo" 
                className="h-8 w-auto"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjQwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iNDAiIGZpbGw9IiMzMzMiLz48dGV4dCB4PSIxMCIgeT0iMjUiIGZpbGw9IiNmZmYiPkhPTVk8L3RleHQ+PC9zdmc+';
                }}
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="/dashboard/dashboard-index.html" target="_blank" className="text-gray-700 hover:text-[#ff6725] transition-colors">
              Dashboard
            </a>
            
            <div className="relative group">
              <button className="text-gray-700 hover:text-[#ff6725] transition-colors flex items-center">
                Home
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 p-2 min-w-[200px]">
                <a href="index.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Home 01</a>
                <a href="index-2.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Home 02</a>
                <a href="index-3.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Home 03</a>
                <a href="index-4.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Home 04</a>
                <a href="index-5.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Home 05</a>
                <a href="index-6.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Home 06</a>
                <a href="index-7.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Home 07</a>
              </div>
            </div>

            {/* Add other menu items here */}
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-gray-700">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/>
              </svg>
              <a href="tel:+757-699-4478" className="hover:text-[#ff6725] transition-colors">+757 699-4478</a>
            </div>

            <button className="p-2 rounded-full border border-gray-300 hover:border-blue-600 hover:text-[#ff6725] transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 10v-4c0-3.313-2.687-6-6-6s-6 2.687-6 6v4h-3v14h18v-14h-3zm-10 0v-4c0-2.206 1.794-4 4-4s4 1.794 4 4v4h-8z"/>
              </svg>
            </button>

            <button className="p-2 rounded-full border border-gray-300 hover:border-blue-600 hover:text-[#ff6725] transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.172 24l-7.387-7.387c-1.388 1.442-3.401 2.387-5.785 2.387-4.432 0-8-3.568-8-8s3.568-8 8-8 8 3.568 8 8c0 2.384-.945 4.397-2.387 5.785l7.387 7.387-1.414 1.414-7.387-7.387c-1.442 1.388-3.401 2.387-5.785 2.387-4.432 0-8-3.568-8-8s3.568-8 8-8 8 3.568 8 8c0 2.384-.999 4.343-2.387 5.785l7.387 7.387-1.414 1.414z"/>
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2 rounded-md text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            <div className="flex justify-center mb-4">
              <img 
                src="/images/logo/logo_06.svg" 
                alt="Homy Logo" 
                className="h-8 w-auto"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjQwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iNDAiIGZpbGw9IiMzMzMiLz48dGV4dCB4PSIxMCIgeT0iMjUiIGZpbGw9IiNmZmYiPkhPTVk8L3RleHQ+PC9zdmc+';
                }}
              />
            </div>
            
            <div className="space-y-2">
              <a href="/dashboard/dashboard-index.html" target="_blank" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded">
                Dashboard
              </a>
              
              <div>
                <button 
                  className="w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-100 rounded flex items-center justify-between"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Home
                  <svg className={`w-4 h-4 transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {dropdownOpen && (
                  <div className="pl-6 mt-1 space-y-1">
                    <a href="index.html" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded">Home 01</a>
                    <a href="index-2.html" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded">Home 02</a>
                    <a href="index-3.html" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded">Home 03</a>
                    <a href="index-4.html" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded">Home 04</a>
                    <a href="index-5.html" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded">Home 05</a>
                    <a href="index-6.html" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded">Home 06</a>
                    <a href="index-7.html" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded">Home 07</a>
                  </div>
                )}
              </div>

              {/* Mobile contact info */}
              <div className="pt-4 border-t border-gray-200 mt-4">
                <div className="flex items-center justify-center text-gray-700 mb-3">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/>
                  </svg>
                  <a href="tel:+757-699-4478" className="hover:text-[#ff6725]">+757 699-4478</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;