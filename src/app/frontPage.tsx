import React, { useState, useEffect } from 'react';

// You'll need to import your image - replace this with your actual image import
 import image1 from '../assets/Untitled design.png';

function FrontPage() {
  const words = ['the fun', 'the kiss', 'the night', 'the smiles', 'the vibe', 'the friends'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsVisible(true);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, [words.length]);

  const backgroundStyle = {
     backgroundImage: `url(${image1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '90vh',
    width: '100%'
  };

  return (
    <div style={backgroundStyle}>
      <div className="flex items-center justify-start h-full m-0 relative">
        <div className="ml-8">
          <h2 className="text-white text-6xl font-bold mb-4 drop-shadow-2xl">
            Remember
          </h2>
          
          <div className="text-left mt-8">
            <span className="text-gray-200 text-3xl font-light">Capture </span>
            <span 
              className={`text-pink-300 text-3xl font-semibold transition-all duration-300 transform inline-block ${
                isVisible 
                  ? 'opacity-100 scale-100 translate-y-0' 
                  : 'opacity-0 scale-95 -translate-y-2'
              }`}
              style={{
                textShadow: '0 0 20px rgba(236, 72, 153, 0.5)',
                minWidth: '200px',
                display: 'inline-block'
              }}
            >
              {words[currentWordIndex]}
            </span>
          </div>
          
          {/* Decorative elements */}
          <div className="mt-12 space-y-2">
            <div className="w-24 h-1 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-300 to-blue-300 rounded-full opacity-70"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-full opacity-50"></div>
          </div>
        </div>
        
        {/* Floating particles effect */}
        <div className="absolute top-20 left-96 w-2 h-2 bg-pink-300 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 left-80 w-1 h-1 bg-purple-300 rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-60 left-72 w-3 h-3 bg-blue-300 rounded-full animate-bounce opacity-30"></div>
        <div className="absolute top-32 left-64 w-1 h-1 bg-indigo-300 rounded-full animate-pulse opacity-50"></div>
      </div>
    </div>
  );
}

export default FrontPage;