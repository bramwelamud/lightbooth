import  { useState, useEffect } from 'react';

 import image1 from '../assets/Untitled design.png';

function FrontPage() {
  const words =["момент",  "поцелуй", "веселье", "тусовку" ,"встречу", "друзей" ,"улыбку" , "смех"]
;
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
          <h2 className="text-purple-500 to-blue-500 text-4xl font-bold mb-4 drop-shadow-2xl">
           Glimps — не просто фотобудка, а маркетинг инструмент
          </h2>
          
          <div className="text-left mt-8">
            <span className="text-gray-200 text-3xl font-light"> Запечатлит </span>
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
         
        </div>
        
        {/* Floating particles effect */}
       
       
        
      </div>
    </div>
  );
}

export default FrontPage;