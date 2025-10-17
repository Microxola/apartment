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
  ChevronDownIcon,
  EyeIcon,
  EyeSlashIcon
} from '@heroicons/react/24/outline';
import { useAppContext } from '../context/AppContext';
import axios from 'axios';
import toast from 'react-hot-toast';

const ModernNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthDropdownOpen, setIsAuthDropdownOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef(null);
  const authRef = useRef(null);
  const modalRef = useRef(null);
  const {token, backendUrl, setToken, navigate} = useAppContext();
  const [data, SetData] = useState({
    name: '',
    email: '',
    password: ''
  })

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close search and modals when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
      if (authRef.current && !authRef.current.contains(event.target)) {
        setIsAuthDropdownOpen(false);
      }
      if (modalRef.current && !modalRef.current.contains(event.target) && isAuthModalOpen) {
        setIsAuthModalOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isAuthModalOpen]);

  const openAuthModal = (tab) => {
    setActiveTab(tab);
    setIsAuthModalOpen(true);
    setIsAuthDropdownOpen(false);
    setIsMobileMenuOpen(false); // Close mobile menu when opening modal
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    setIsSearchOpen(false);
    setSearchQuery('');
  };
  
  const eventHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    SetData(data => ({...data, [name]:value}))
  }

  const onSubmitHandler = async (e) => {
        e.preventDefault();

        let newUrl = backendUrl
          if(activeTab === 'login'){
              console.log('login slide', data);
              newUrl  += '/api/user/login'
          }else{
              console.log('register slide', data);
              newUrl  += '/api/user/register'
          }
       const response = await axios.post(newUrl, data);
       if(response.data.success){
          setToken(response.data.token);
          console.log(response.user);
          
          localStorage.setItem("token",response.data.token);
          toast.success("Logged  In Successfully")
          setIsAuthModalOpen(false);
       } else {
        toast.error(response.data.message);
      }
  }
  
  const logout = () => {
    navigate('/');
    localStorage.removeItem('token');
    setToken('');
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
              aria-label="Home"
            >
              <span className="text-black">
                APARTMENT
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              <Link
                to='/'
                className={`px-4 py-2 text-sm font-mono rounded-lg transition-colors ${
                  location.pathname === '/'
                    ? "text-[#ff6725] bg-orange-50"
                    : "text-gray-600 hover:text-[#ff6625bb] hover:bg-gray-50"
                }`}
              >
                Home
              </Link>
              <Link
                to='/buy'
                className={`px-4 py-2 text-sm font-mono rounded-lg transition-colors ${
                  location.pathname === '/buy'
                    ? "text-[#ff6725] bg-orange-50"
                    : "text-gray-600 hover:text-[#ff6725] hover:bg-gray-50"
                }`}
              >
                Buy
              </Link>
              <Link
                to='/rent'
                className={`px-4 py-2 text-sm font-mono rounded-lg transition-colors ${
                  location.pathname === '/rent'
                    ? "text-[#ff6725] bg-orange-50"
                    : "text-gray-600 hover:text-[#ff6725] hover:bg-gray-50"
                }`}
              >
                Rent
              </Link>
              <Link
                to='/Apartment'
                className={`px-4 py-2 text-sm font-mono rounded-lg transition-colors ${
                  location.pathname === '/Apartment'
                    ? "text-[#ff6725] bg-orange-50"
                    : "text-gray-600 hover:text-[#ff6725] hover:bg-gray-50"
                }`}
              >
                Apartment
              </Link>
              <Link
                to='/Houses'
                className={`px-4 py-2 text-sm font-mono rounded-lg transition-colors ${
                  location.pathname === '/Houses'
                    ? "text-[#ff6725] bg-orange-50"
                    : "text-gray-600 hover:text-[#ff6725] hover:bg-gray-50"
                }`}
              >
                Houses
              </Link>
              <Link
                to='/about'
                className={`px-4 py-2 text-sm font-mono rounded-lg transition-colors ${
                  location.pathname === '/about'
                    ? "text-[#ff6725] bg-orange-50"
                    : "text-gray-600 hover:text-[#ff6725] hover:bg-gray-50"
                }`}
              >
                About Us
              </Link>
              <Link
                to='/contact'
                className={`px-4 py-2 text-sm rounded-lg transition-colors font-mono ${
                  location.pathname === '/contact'
                    ? "text-[#ff6725] bg-orange-50"
                    : "text-gray-600 hover:text-[#ff6725] hover:bg-gray-50"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right side elements - Search and Auth */}
            <div className="flex items-center space-x-4">
              {/* Phone number - hidden on mobile, visible on tablet and up */}
              <div className="hidden md:flex items-center text-gray-700">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/>
                </svg>
                <a href="tel:+757-699-4478" className="hover:text-[#ff6725] transition-colors text-sm">+757 699-4478</a>
              </div>

              {/* Search dropdown */}
              <div className="relative hidden lg:block" ref={searchRef}>
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 text-gray-600 hover:text-[#ff6725] rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Search"
                >
                  <MagnifyingGlassIcon className="w-5 h-5" />
                </button>
                
                {isSearchOpen && (
                  <div className="absolute right-0 top-12 w-72 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50">
                    <form onSubmit={handleSearchSubmit}>
                      <div className="flex items-center">
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search apartments..."
                          className="py-2 px-3 w-full border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#ff6725] focus:border-transparent"
                          autoFocus
                        />
                        <button
                          type="submit"
                          className="p-2 text-white bg-[#ff6725] rounded-r-md hover:bg-orange-600 transition-colors"
                          aria-label="Search"
                        >
                          <MagnifyingGlassIcon className="w-5 h-5" />
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>

              {/* Auth dropdown */}
              <div className="relative hidden lg:block" ref={authRef}>
                <button
                  onClick={() => setIsAuthDropdownOpen(!isAuthDropdownOpen)}
                  className="flex items-center space-x-1 p-2 text-gray-600 hover:text-[#ff6725] rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="User account"
                >
                  <UserCircleIcon className="w-6 h-6" />
                  <ChevronDownIcon className="w-4 h-4" />
                </button>
                
                {isAuthDropdownOpen && (
                 <div className="absolute right-0 top-12 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                        {token ? (
                          <>
                            <Link
                              to="/order"
                              onClick={() => setIsAuthDropdownOpen(false)}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#ff6725]"
                            >
                              My Property
                            </Link>
                            <button
                              onClick={() => {
                                logout();
                                setIsAuthDropdownOpen(false);
                              }}
                              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#ff6725]"
                            >
                              Logout
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              onClick={() => openAuthModal('login')}
                              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#ff6725]"
                            >
                              Sign In
                            </button>
                            <button
                              onClick={() => openAuthModal('register')}
                              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#ff6725]"
                            >
                              Register
                            </button>
                          </>
                        )}
                      </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-gray-600 hover:text-[#ff6725] focus:outline-none"
              aria-label="Open menu"
            >
              <Bars3Icon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Auth Modal - Fixed z-index for mobile */}
     
      {isAuthModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-20 backdrop-blur-sm">
          <div 
            ref={modalRef}
            className="relative bg-white rounded-lg shadow-xl w-full max-w-[600px] mx-4 max-h-[95vh] overflow-y-auto py-10"
          >
            {/* Close button */}
            <button
              onClick={() => setIsAuthModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            {/* Tabs */}
          
                  <div className="flex border-b border-gray-200">
                            <button
                              onClick={() => setActiveTab('login')}
                              className={`flex-1 py-4 px-6 text-center font-mono ${
                                activeTab === 'login'
                                  ? 'text-[#ff6725] border-b-2 border-[#ff6725]'
                                  : 'text-gray-500 hover:text-gray-700'
                              }`}
                            >
                              Sign In
                            </button>
                            <button
                              onClick={() => setActiveTab('register')}
                              className={`flex-1 py-4 px-6 text-center font-mono ${
                                activeTab === 'register'
                                  ? 'text-[#ff6725] border-b-2 border-[#ff6725]'
                                  : 'text-gray-500 hover:text-gray-700'
                              }`}
                            >
                              Register
                            </button>
                </div>
          

            {/* Login Form */}
            {activeTab === 'login' && (
              <div className="p-6">
                <h2 className="text-4xl font-bold text-gray-800 mb-8 py-5 text-center">Welcome Back!</h2>
                <form className="space-y-4" onSubmit={onSubmitHandler}>
                  <div>
                    <label htmlFor="email" className="block text-sm font-mono text-gray-500 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      onChange={eventHandler}
                      value={data.email}
                      className="w-full px-4 py-5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff6725] focus:border-[#ff6725] text-gray-400"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-mono text-gray-500 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                         onChange={eventHandler}
                        value={data.password}
                        className="w-full px-4 py-5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff6725] text-gray-400 focus:border-[#ff6725]"
                        placeholder="Enter your password"
                        required
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeSlashIcon className="h-5 w-5 text-gray-400" />
                        ) : (
                          <EyeIcon className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="remember"
                        className="h-4 w-4 text-[#ff6725] focus:ring-[#ff6725] border-gray-300 rounded"
                      />
                      <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                        Remember me
                      </label>
                    </div>
                    <a href="#" className="text-sm text-[#ff6725] hover:text-orange-600">
                      Forgot password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#ff6725] text-white py-5 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-[#ff6725] focus:ring-offset-2 cursor-pointer"
                  >
                    SIGN IN
                  </button>
                </form>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    Don't have an account?{' '}
                    <button
                      onClick={() => setActiveTab('register')}
                      className="font-mono text-[#ff6725] hover:text-orange-600"
                    >
                      Register now
                    </button>
                  </p>
                </div>
              </div>
            )}

            {/* Register Form */}
            {activeTab === 'register' && (
              <div className="p-6">
                <h2 className="text-4xl font-bold text-gray-800 mb-6 py-5 text-center">Create Account</h2>
                <form className="space-y-4" onSubmit={onSubmitHandler}>
                  <div className="grid gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-mono text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        onChange={eventHandler}
                        value={data.name}
                        className="w-full px-4 py-5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff6725] focus:border-[#ff6725] text-gray-500"
                        placeholder="First name"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="reg-email" className="block text-sm font-mono text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      onChange={eventHandler}
                      value={data.email}
                      className="w-full px-4 py-5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff6725] focus:border-[#ff6725] text-gray-400"
                      placeholder="Enter your email"
                      required
                    />
                    
                  </div>
                  <div>
                    <label htmlFor="reg-password" className="block text-sm font-mono text-gray-700 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        onChange={eventHandler}
                        value={data.password}
                        className="w-full px-4 py-5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ff6725] focus:border-[#ff6725] text-gray-400"
                        placeholder="Create a password"
                        required
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeSlashIcon className="h-5 w-5 text-gray-400" />
                        ) : (
                          <EyeIcon className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="terms"
                      className="h-4 w-4 text-[#ff6725] focus:ring-[#ff6725] border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                      I agree to the <a href="#" className="text-[#ff6725] hover:text-orange-600">Terms and Conditions</a>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#ff6725] text-white py-5 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-[#ff6725] focus:ring-offset-2 cursor-pointer"
                  >
                    CREATE ACCOUNT
                  </button>
                </form>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    Already have an account?{' '}
                    <button
                      onClick={() => setActiveTab('login')}
                      className="font-mono text-[#ff6725] hover:text-orange-600"
                    >
                      Sign in
                    </button>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay - Fixed z-index */}
      <div
        className={`fixed inset-0 z-100 bg-black/30 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
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

            {/* Search in mobile menu */}
            <div className="mt-6 mb-4">
              <form onSubmit={handleSearchSubmit}>
                <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search apartments..."
                    className="bg-transparent flex-1 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="text-gray-500 hover:text-[#ff6725]"
                    aria-label="Search"
                  >
                    <MagnifyingGlassIcon className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col space-y-2">
              <Link
                to='/'
                className={`flex items-center px-4 py-3 rounded-lg text-base font-mono ${
                  location.pathname === '/'
                    ? "bg-orange-50 text-[#ff6725]"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <HomeIcon className="w-5 h-5 mr-3" />
                Home
              </Link>
              <Link
                to='/buy'
                className={`flex items-center px-4 py-3 rounded-lg text-base font-mono ${
                  location.pathname === '/buy'
                    ? "bg-orange-50 text-[#ff6725]"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <TagIcon className="w-5 h-5 mr-3" />
                Buy
              </Link>
              <Link
                to='/rent'
                className={`flex items-center px-4 py-3 rounded-lg text-base font-mono ${
                  location.pathname === '/rent'
                    ? "bg-orange-50 text-[#ff6725]"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <TagIcon className="w-5 h-5 mr-3" />
                Rent
              </Link>
              <Link
                to='/Apartment'
                className={`flex items-center px-4 py-3 rounded-lg text-base font-mono ${
                  location.pathname === '/Apartment'
                    ? "bg-orange-50 text-[#ff6725]"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <TagIcon className="w-5 h-5 mr-3" />
                Apartment
              </Link>
              <Link
                to='/Houses'
                className={`flex items-center px-4 py-3 rounded-lg text-base font-mono ${
                  location.pathname === '/Houses'
                    ? "bg-orange-50 text-[#ff6725]"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <TagIcon className="w-5 h-5 mr-3" />
                Houses
              </Link>
              <Link
                to='/about'
                className={`flex items-center px-4 py-3 rounded-lg text-base font-mono ${
                  location.pathname === '/about'
                    ? "bg-orange-50 text-[#ff6725]"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <InformationCircleIcon className="w-5 h-5 mr-3" />
                About
              </Link>
              <Link
                to='/contact'
                className={`flex items-center px-4 py-3 rounded-lg text-base font-mono font-sans ${
                  location.pathname === '/contact'
                    ? "bg-orange-50 text-[#ff6725]"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <PhoneIcon className="w-5 h-5 mr-3" />
                Contact
              </Link>
            </nav>

            {/* Mobile Auth Section - Fixed to close menu and open modal */}
            <div className="mt-auto mb-6 space-y-3">
                  {token ? (
                    <>
                      <Link
                        to="/order"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-center w-full px-4 py-3 rounded-lg text-base font-mono text-[#ff6725] hover:bg-orange-50 border border-[#ff6725]"
                      >
                        My Property
                      </Link>
                      <button
                        onClick={() => {
                          logout();
                          setIsMobileMenuOpen(false);
                        }}
                        className="flex items-center justify-center w-full px-4 py-3 rounded-lg text-base font-mono text-white bg-red-600 hover:bg-red-700"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => openAuthModal('login')}
                        className="flex items-center justify-center w-full px-4 py-3 rounded-lg text-base font-mono text-[#ff6725] hover:bg-orange-50 border border-[#ff6725]"
                      >
                        Sign In
                      </button>
                      <button
                        onClick={() => openAuthModal('register')}
                        className="flex items-center justify-center w-full px-4 py-3 rounded-lg text-base font-mono text-white bg-[#ff6725] hover:bg-orange-600"
                      >
                        Create Account
                      </button>
                    </>
                  )}
                </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ModernNavbar;