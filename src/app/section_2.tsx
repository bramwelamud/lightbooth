import lightmvp  from '../assets/light.mp4';

type Props ={}

                                                     
const Section_2: React.FC<Props> = () => {
return (
     
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background Video for Desktop */}
      <div className="absolute inset-0 hidden md:block">
        <video
          className="w-full h-full object-cover opacity-40"
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
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Content */}
        <div className="text-white space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-red-500">Your Customers</span>
              <br />
              <span className="text-white">Aren't Promoting</span>
              <br />
              <span className="text-gray-300">You</span>
            </h1>
            <p className="text-xl text-gray-300 font-light">
              Even though they could
            </p>
          </div>

          <div className="space-y-6">
            {/* Pain Point 1 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    People take hundreds of selfies, but <span className="text-red-400 font-semibold">less than 1%</span> tag the venue on social media.
                  </p>
                </div>
              </div>
            </div>

            {/* Pain Point 2 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Photographers don't help with PR: guests receive their photos the next morning, and <span className="text-orange-400 font-semibold">91% never post them</span> (due to hangovers, fatigue, or lost relevance).
                  </p>
                </div>
              </div>
            </div>

            {/* Pain Point 3 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Every venue uses the same marketing tactics (Telegram channels, promos), so <span className="text-yellow-400 font-semibold">your ads get lost in the noise</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* Pain Point 4 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    <span className="text-blue-400 font-semibold">Targeted advertising is nearly impossible</span> to execute effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          {/* <div className="pt-4">
            <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-red-500/25">
              Discover the Solution
            </button>
          </div> */}
        </div>

        {/* Right Side - Visual Element (Hidden on mobile since background handles it) */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative">
            <div className="w-96 h-96 rounded-full bg-gradient-to-br from-red-500/20 to-transparent border border-white/10 flex items-center justify-center backdrop-blur-sm">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-white/5 to-transparent border border-white/5 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-6xl">📱</div>
                    <p className="text-white/70 text-sm font-light">Untapped Potential</p>
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