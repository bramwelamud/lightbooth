import Logo from '../assets/IMG_20250531_174626_916.jpg';
import { NavLink } from 'react-router-dom';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-black-900 via-black to-black-900 border-t border-black-800/50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-black-500 via-black-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
               <img src={Logo} alt="logo" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Glimps
              </h3>
              <p className="text-gray-500 text-sm">Selfie Camera Solutions</p>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © {currentYear} Glimps. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Transforming venue marketing through innovative technology
            </p>
          </div>
        </div>

        {/* Divider Line */}
        <div className="mt-6 pt-6 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
            <div className="flex items-center space-x-6 text-gray-500 text-sm">
            <NavLink to="/Privacy"> <button><span>Privacy Policy</span></button>  </NavLink>  
              <span>•</span>
              <span>Terms of Service</span>
              <span>•</span>
              <span>Contact</span>
            </div>
            <div className="text-gray-500 text-xs">
              Made for you 
            </div>
          </div>
        </div>
      </div>

      {/* Background Glow Effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent blur-sm"></div>
    </footer>
  );
};

export default Footer;