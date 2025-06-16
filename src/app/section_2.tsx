import lightmvp  from '../assets/light.mp4';


type Props ={}

                                                     
const Section_2: React.FC<Props> = () => {
return (
     
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background Video for Desktop */}
      <div className="absolute inset-0 hidden md:block">
        <video
          className="w-full h-full object-cover opacity-40"
          style={{ filter: 'grayscale(100%)' }}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={lightmvp} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>

      {/* Background Image for Mobile */}
      <div className="absolute inset-0 md:hidden">
        <img
          src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Modern restaurant interior with ambient lighting and contemporary design"
          className="w-full h-full object-cover opacity-30"
          style={{ filter: 'grayscale(100%)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Content */}
        <div className="text-white space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gray-300">Ваши клиенты</span>
              <br />
              <span className="text-white">Не продвигают</span>
              <br />
              <span className="text-gray-400">Вас</span>
            </h1>
            <p className="text-xl text-gray-300 font-light">
              Хотя они могли бы
            </p>
          </div>

          <div className="space-y-6">
            {/* Pain Point 1 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Люди делают сотни селфи, но <span className="text-gray-300 font-semibold">менее 1%</span> отмечают заведение в социальных сетях.
                  </p>
                </div>
              </div>
            </div>

            {/* Pain Point 2 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Фотографы не помогают с PR: гости получают фотографии на следующее утро, и <span className="text-gray-300 font-semibold">91% никогда их не публикуют</span> (из-за похмелья, усталости или потери актуальности).
                  </p>
                </div>
              </div>
            </div>

            {/* Pain Point 3 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Каждое заведение использует одинаковые маркетинговые тактики (Telegram-каналы, акции), поэтому <span className="text-gray-300 font-semibold">ваша реклама теряется в шуме</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* Pain Point 4 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    <span className="text-white font-semibold">Таргетированную рекламу почти невозможно</span> эффективно реализовать.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          {/* <div className="pt-4">
            <button className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-gray-500/25">
              Откройте для себя решение
            </button>
          </div> */}
        </div>

        {/* Right Side - Visual Element (Hidden on mobile since background handles it) */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative">
            <div className="w-96 h-96 rounded-full bg-gradient-to-br from-gray-500/20 to-transparent border border-white/10 flex items-center justify-center backdrop-blur-sm">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-white/5 to-transparent border border-white/5 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-gray-500/10 to-transparent border border-gray-500/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-6xl"></div>
                    <p className="text-white/70 text-sm font-light">Неиспользованный потенциал</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
)

}


export default Section_2