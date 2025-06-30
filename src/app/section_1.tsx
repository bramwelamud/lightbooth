import image2  from '../assets/image2.jpeg';
import image3  from '../assets/image3.jpeg';
import image4  from '../assets/image4.jpeg';
import image9  from '../assets/image9.jpeg';
import image11  from '../assets/image11.jpeg';
import image12  from '../assets/image12.jpeg';
import image15  from '../assets/image15.jpg';
import image16  from '../assets/image16.jpg';
import image17  from '../assets/image17.jpeg';
import image18  from '../assets/image18.jpg';
import image19  from '../assets/image19.jpg'; 
import image20  from '../assets/image20.jpg';
import image21  from '../assets/image21.jpg';
import image22  from '../assets/image22.jpg';
import image23  from '../assets/image23.jpg';
import image24  from '../assets/image24.jpg';
import image25  from '../assets/image25.jpg';
import image26  from '../assets/image26.jpg';
import image27  from '../assets/image27.jpg';
import image28  from '../assets/image28.jpg';
import image29  from '../assets/image29.jpg';

type Props = {};
const section1: React.FC<Props> = () => {
  const images = [
    { src: image2, alt: "Image 2" },
    { src: image3, alt: "Image 3" },
    { src: image4, alt: "Image 4" },
    { src: image9, alt: "Image 9" },
    { src: image11, alt: "Image 11" },
    { src: image12, alt: "Image 12" },
    { src: image15, alt: "Image 14" },
    { src: image16, alt: "Image 14" },
    { src: image17, alt: "Image 14" },
    { src: image18, alt: "Image 14" },
    { src: image19, alt: "Image 14" },
    { src: image20, alt: "Image 14" },
    { src: image21, alt: "Image 14" },
    { src: image22, alt: "Image 14" },
    { src: image23, alt: "Image 14" },
    { src: image24, alt: "Image 14" },
    { src: image25, alt: "Image 14" },
    { src: image26, alt: "Image 14" },
    { src: image27, alt: "Image 14" },
    { src: image28, alt: "Image 14" },
    { src: image29, alt: "Image 14" },
  ];

  // Duplicate images for seamless loop
  const duplicatedImage = [...images, ...images];

  function shuffleArray<T>(array: T[]): T[] {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

const duplicatedImages = shuffleArray(duplicatedImage);

  return (
    <>
      <style>
        {`
          @keyframes scroll-rtl {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-scroll-rtl {
            animation: scroll-rtl 40s linear infinite;
          }
          
          .animate-scroll-rtl:hover {
            animation-play-state: paused;
          }
        `}
      </style>
      
      <div className="w-full bg-gradient-to-r from-slate-1200 via-black-1300 to-slate-1400 py-12 px-4">
        <div className="max-w-9xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
           Почувствуйте магию  Glimps
          </h2>
          
          {/* Auto-scrolling container with no scrollbar */}
          <div className="relative overflow-hidden">
            <div className="flex space-x-6 animate-scroll-rtl" style={{ width: 'max-content' }}>
              {duplicatedImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative flex-shrink-0 w-80 h-64 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10"
                >
                  {/* Image container with multiple hover effects */}
                  <div className="relative w-full h-full overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1 group-hover:brightness-110"
                    />
                    
                    {/* Gradient overlay that appears on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Animated border effect */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-400/50 rounded-2xl transition-all duration-500"></div>
                    
                    {/* Floating elements on hover */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500 delay-100"></div>
                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400/80 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500 delay-200"></div>
                    
                    {/* Text overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      
                    </div>
                  </div>
                  
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-black-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center space-x-2 text-white/60">
              <div className="w-2 h-2 rounded-full bg-white/40 animate-pulse"></div>
              <span className="text-sm">Публичные моменты, которыми поделились гости</span>
              <div className="w-2 h-2 rounded-full bg-white/40 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default section1;