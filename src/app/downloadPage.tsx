import image1 from "../assets/image32.png";
import image2 from "../assets/image30.png";

export default function downloadPage() {
  return (
    <div 
      className="min-h-screen bg-black text-white  mb-16" 
      style={{ fontFamily: "'Nunito', sans-serif" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Header Section */}
        <div className="space-y-8 mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white text-center lg:text-left">
           Увеличиваем выручку прямо в момент настроения

          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Text Content - Takes 4 columns on large screens */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-6">
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
               Страница скачивания-— тот самый миг, когда гость любуется свежими фото и открыт к предложениям. Мы показываем на экране ваш баннер с выгодой именно здесь и сейчас: фирменный бургер, сет на компанию или апгрейд до VIP-зоны. В Old Irish Pub такая мягкая механика '«покажи фото и получи скидку на виски-колу»' подняла продажи напитка на 26 %. Гость уже находится в баре, действие простое, а дополнительная выручка — мгновенная.
              </p>
            </div>
          </div>

          {/* Images Container - Takes 8 columns on large screens */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* First Image */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-sm">
                  <img 
                    src={image1} 
                   
                    alt="photo" 
                    className=" h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-out"
                  />
                </div>
              </div>

              {/* Second Image */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-sm">
                  <img 
                    src={image2} 
                    alt="photo" 
                    className="w-full h-auto object-cover rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-out"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Fonts Link */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800;900&display=swap" 
        rel="stylesheet" 
      />
    </div>
  );
}