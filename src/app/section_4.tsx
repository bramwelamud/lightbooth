import image1 from "../assets/image27.jpg";
import image2 from "../assets/image2.jpeg";

export default function Section4() {
  return (
    <div
        className="min-h-screen bg-black text-white pb-0 mb-16 scroll-smooth"
       style={{ fontFamily: "'Nunito', sans-serif",marginTop: '-4' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Header Section */}
        <div className="space-y-8 mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white text-center lg:text-left">
            Каждое селфи — это реклама вашего заведения
          </h1>
        </div>

        {/* Main Content Grid - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content - Takes 1 column */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                Гость получает яркое фото и короткое 3-секундное видео, а вместе с ним — ваш логотип. Контент мгновенно улетает в Telegram, WhatsApp и сторис, превращая гостей в онлайн-амбассадоров.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                Один пост с отметкой бара видят десятки друзей, а вы получаете бесплатный охват, который сложно купить даже таргетом.
              </p>
            </div>
          </div>

          {/* Single Image - Takes 1 column */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <img
                 src={image1}
                 alt="photo"
                 className="w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-out"
              />
              <img
                 src={image2}
                 alt="photo"
                 className="w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-out  m-3"
              />
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