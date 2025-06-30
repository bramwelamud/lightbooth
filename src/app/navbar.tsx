import  { useState } from 'react';
import Logo from '../assets/IMG_20250531_174626_916.jpg';
import { NavLink } from 'react-router-dom';

type Props = {};

const Navbar: React.FC<Props> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Hamburger menu SVG icon
  const MenuIcon = () => (
    <svg 
      className="w-6 h-6" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M4 6h16M4 12h16M4 18h16" 
      />
    </svg>
  );

  // Close menu SVG icon
  const CloseIcon = () => (
    <svg 
      className="w-6 h-6" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M6 18L18 6M6 6l12 12" 
      />
    </svg>
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-black px-4 py-3 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <NavLink to="/" className="flex items-center space-x-3" onClick={closeMenu}>
            <img 
              src={Logo} 
              alt="logo" 
              className="h-8 w-8 rounded-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <span className="text-white text-xl font-semibold">Glimps</span>
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {/* <li>
            <NavLink
              to="/pricing"
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group"
              onClick={closeMenu}
            >
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to="/features"
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group"
              onClick={closeMenu}
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about"
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group"
              onClick={closeMenu}
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group"
              onClick={closeMenu}
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group"
              onClick={closeMenu}
            >
              Login
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white focus:outline-none focus:text-white transition-all duration-300 hover:scale-110"
            aria-label="Toggle menu"
          >
            <div className="transition-transform duration-300 ease-in-out transform">
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isMenuOpen 
            ? 'max-h-64 opacity-100 translate-y-0' 
            : 'max-h-0 opacity-0 -translate-y-4'
        }`}
      >
        <div className="px-2 pt-4 pb-3 space-y-1 bg-gray-700 mt-4 rounded-lg shadow-lg">
          {/* <NavLink
            to="/pricing"
            onClick={closeMenu}
            className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-600 rounded-md transition-all duration-300 transform hover:translate-x-2"
          >
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2h6v2m2 4H7a2 2 0 01-2-2V5a2 2 0 012-2h4l2 2h6a2 2 0 012 2v12a2 2 0 01-2 2z" />
              </svg>
              <span>Pricing</span>
            </div>
          </NavLink> */}
          <NavLink
            to="/features"
            onClick={closeMenu}
            className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-600 rounded-md transition-all duration-300 transform hover:translate-x-2"
          >
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Features</span>
            </div>
          </NavLink>
          <NavLink
            to="/about"
            onClick={closeMenu}
            className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-600 rounded-md transition-all duration-300 transform hover:translate-x-2"
          >
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>About</span>
            </div>
          </NavLink>
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-600 rounded-md transition-all duration-300 transform hover:translate-x-2"
          >
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Contact</span>
            </div>
          </NavLink>
          <NavLink
            to="/login"
            onClick={closeMenu}
            className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-600 rounded-md transition-all duration-300 transform hover:translate-x-2"
          >
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H3m0 0l4-4m-4 4l4 4m13-8v12a2 2 0 01-2 2H9a2 2 0 01-2-2v-4" />
              </svg>
              <span>Login</span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;