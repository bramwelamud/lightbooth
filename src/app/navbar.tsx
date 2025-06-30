import React, { useState } from 'react';
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
    <nav className="fixed top-0 w-full bg-black shadow-lg z-50">
      <div className="mx-auto px-4 py-3 w-full max-w-[100vw]">
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink 
              to="/" 
              className="flex items-center space-x-3" 
              onClick={closeMenu}
            >
              <img 
                src={Logo} 
                alt="logo" 
                className="h-8 w-8 rounded-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <span className="text-white text-xl font-semibold">Glimps</span>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <NavLink
                to="/features"
                className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group px-2 py-1"
                onClick={closeMenu}
              >
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about"
                className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group px-2 py-1"
                onClick={closeMenu}
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group px-2 py-1"
                onClick={closeMenu}
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group px-2 py-1"
                onClick={closeMenu}
              >
                Login
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ml-0.5${
            isMenuOpen 
              ? 'max-h-screen opacity-100' 
              : 'max-h-0 opacity-0'
          }`}
          style={{ transitionProperty: 'max-height, opacity' }}
        >
          <div className="px-2 pt-2 pb-3 space-y-2 bg-gray-800 mt-2 rounded-lg">
            <NavLink
              to="/features"
              onClick={closeMenu}
              className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors duration-200"
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
              className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors duration-200"
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
              className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors duration-200"
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
              className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors duration-200"
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
      </div>
    </nav>
  );
};

export default Navbar;