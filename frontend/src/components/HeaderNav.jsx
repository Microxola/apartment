import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  XMarkIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  HomeIcon,
  TagIcon,
  InformationCircleIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
// import { useAppContext } from '../context/AppContext';  
import menuIcon from "../assets/menu_icon.png"  

const ModernNavbar = () => {
  // const { token, setToken, navigate } = useAppContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');  
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <>
      {/* Desktop Navigation */}
      
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white backdrop-blur-lg shadow-sm py-2 border-b border-gray-100"
            : "bg-white/95 backdrop-blur-md py-3"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link
              to="/"
              className="text-2xl font-bold flex items-center"
              aria-label="Hotel Luxe - Home"
            >
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                APARTMENT
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1">
              <Link
                to='/'
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === '/'
                    ? "text-indigo-600 bg-indigo-50"
                    : "text-gray-600 hover:text-indigo-600 hover:bg-gray-50"
                }`}
              >
                Home
              </Link>
                <Link
                to='/buy'
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === '/deals'
                    ? "text-indigo-600 bg-indigo-50"
                    : "text-gray-600 hover:text-indigo-600 hover:bg-gray-50"
                }`}
              >
                Buy
              </Link>
              <Link
                to='/rent'
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === '/room'
                    ? "text-indigo-600 bg-indigo-50"
                    : "text-gray-600 hover:text-indigo-600 hover:bg-gray-50"
                }`}
              >
                Rent
              </Link>
              
            
              
              <Link
                to='/sell'
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === '/about'
                    ? "text-indigo-600 bg-indigo-50"
                    : "text-gray-600 hover:text-indigo-600 hover:bg-gray-50"
                }`}
              >
                Sell
              </Link>
              <Link
                to='/about'
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === '/about'
                    ? "text-indigo-600 bg-indigo-50"
                    : "text-gray-600 hover:text-indigo-600 hover:bg-gray-50"
                }`}
              >
                About Us
              </Link>
              
              <Link
                to='/contact'
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === '/contact'
                    ? "text-indigo-600 bg-indigo-50"
                    : "text-gray-600 hover:text-indigo-600 hover:bg-gray-50"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Auth Section */}
           

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 text-gray-600 hover:text-indigo-600 focus:outline-none"
              aria-label="Open menu"
            >
              {/* <Bars3Icon className="w-6 h-6" />  */}
              <img src={menuIcon} className="w-6 h-6"/>
            </button>
          </div>
        </div>
      </header>
       <div className="hidden md:flex items-center space-x-3 mt-20 justify-end mr-15">
              
            <div className="flex items-center text-gray-700">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/>
              </svg>
              <a href="tel:+757-699-4478" className="hover:text-[#ff6725] transition-colors">+757 699-4478</a>
            </div>
              <div className="mt-auto">
              <form
                onSubmit={handleSearchSubmit}
                className="bg-white rounded-full shadow-sm overflow-hidden"
              >
                <div className="flex items-center">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search apartments..."
                    className="py-3 px-4 w-full focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="p-3 text-indigo-600 hover:bg-indigo-50"
                    aria-label="Search"
                  >
                    <MagnifyingGlassIcon className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
            <div className="flex space-x-2">
                  <Link
                    to="/login"
                    className="px-4 py-2 text-sm font-medium text-indigo-600 hover:text-white hover:bg-indigo-600 rounded-lg transition-colors border border-indigo-600 hover:border-indigo-700"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors shadow-sm"
                  >
                    Register
                  </Link>
                </div>
                  <div className="hidden md:flex items-center space-x-4">
          

          
          </div>
        </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/30 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 h-full w-4/5 max-w-xs bg-white shadow-xl transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full p-5">
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="self-end p-2 text-gray-500 hover:text-gray-700"
              aria-label="Close menu"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col space-y-2 mt-6">
              <Link
                to='/'
                className={`flex items-center px-4 py-3 rounded-lg text-base font-medium ${
                  location.pathname === '/'
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <HomeIcon className="w-5 h-5 mr-3" />
                Home
              </Link>
              
              <Link
                to='/room'
                className={`flex items-center px-4 py-3 rounded-lg text-base font-medium ${
                  location.pathname === '/room'
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <MagnifyingGlassIcon className="w-5 h-5 mr-3" />
                Rooms
              </Link>
              
              <Link
                to='/deals'
                className={`flex items-center px-4 py-3 rounded-lg text-base font-medium ${
                  location.pathname === '/deals'
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <TagIcon className="w-5 h-5 mr-3" />
                Deals
              </Link>
              
              <Link
                to='/about'
                className={`flex items-center px-4 py-3 rounded-lg text-base font-medium ${
                  location.pathname === '/about'
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <InformationCircleIcon className="w-5 h-5 mr-3" />
                About
              </Link>
              
              <Link
                to='/contact'
                className={`flex items-center px-4 py-3 rounded-lg text-base font-medium ${
                  location.pathname === '/contact'
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <PhoneIcon className="w-5 h-5 mr-3" />
                Contact
              </Link>
            </nav>

            {/* Mobile Auth Section */}
            <div className="mt-auto mb-6 space-y-3">
             
                  <Link
                    to="/login"
                    className="flex items-center justify-center px-4 py-3 rounded-lg text-base font-medium text-indigo-600 hover:bg-indigo-50 border border-indigo-600"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="flex items-center justify-center px-4 py-3 rounded-lg text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Create Account
                  </Link>
           
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModernNavbar; 