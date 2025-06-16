import React from 'react';
import image1 from '../assets/image1.jpg'

const section_3 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900/20 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url(${image1})`,
        }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-500 via-red-400 to-orange-500 bg-clip-text text-transparent">
              What it costs you:
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Cost Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1: Missed Clients */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative bg-gray-900/80 backdrop-blur-xl border border-red-500/20 rounded-3xl p-8 h-full hover:border-red-500/40 transition-all duration-500">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-red-500/25">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Missed Clients</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-400 mb-1">10,000+</div>
                    <div className="text-sm text-gray-300">Story views by guests</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="text-4xl text-red-500">→</div>
                </div>
                
                <div className="bg-gray-800/50 border border-gray-600/30 rounded-xl p-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-400 mb-1">0</div>
                    <div className="text-sm text-gray-400">New visitors</div>
                    <div className="text-xs text-red-400 mt-1">Venue wasn't tagged</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-700/50">
                <p className="text-gray-300 text-sm leading-relaxed">
                  Tens of thousands of story views by your guests result in zero new visitors because your venue wasn't tagged
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: No Retention System */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative bg-gray-900/80 backdrop-blur-xl border border-orange-500/20 rounded-3xl p-8 h-full hover:border-orange-500/40 transition-all duration-500">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-orange-500/25">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">No Guest Retention</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4 text-center">
                  <div className="text-lg font-semibold text-orange-400 mb-2">Current System:</div>
                  <div className="text-gray-300 text-sm">No follow-up mechanism</div>
                </div>
                
                <div className="bg-gray-800/50 border border-gray-600/30 rounded-xl p-4 text-center">
                  <div className="text-lg font-semibold text-gray-400 mb-2">Result:</div>
                  <div className="text-gray-400 text-sm">Fewer repeat visits</div>
                </div>
                
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-center">
                  <div className="text-red-400 font-medium text-sm italic">
                    "Let's go there again!" never happens
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-700/50">
                <p className="text-gray-300 text-sm leading-relaxed">
                  Without a retention system, guests forget about your venue and don't return
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Expensive Marketing */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-red-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative bg-gray-900/80 backdrop-blur-xl border border-yellow-500/20 rounded-3xl p-8 h-full hover:border-yellow-500/40 transition-all duration-500">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-yellow-500/25">
                  <span className="text-2xl">💸</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Ineffective Marketing</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4">
                  <div className="text-center mb-3">
                    <div className="text-yellow-400 font-semibold text-sm">Traditional Ads</div>
                  </div>
                  <ul className="text-gray-300 text-xs space-y-1">
                    <li>• Buried by competitors</li>
                    <li>• High cost, low return</li>
                    <li>• Generic messaging</li>
                  </ul>
                </div>
                
                <div className="text-center text-2xl">≠</div>
                
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                  <div className="text-center mb-3">
                    <div className="text-green-400 font-semibold text-sm">Viral Guest Content</div>
                  </div>
                  <ul className="text-gray-300 text-xs space-y-1">
                    <li>• Authentic experiences</li>
                    <li>• Trusted recommendations</li>
                    <li>• Higher conversion rates</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-700/50">
                <p className="text-gray-300 text-sm leading-relaxed">
                  Expensive ads in public channels get buried and don't work as well as viral content from your guests
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Impact Summary */}
        <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 backdrop-blur-xl border border-red-500/30 rounded-3xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">The Real Cost</h2>
          <p className="text-xl text-gray-300 mb-6 max-w-4xl mx-auto">
            You're not just losing individual customers — you're missing out on the most powerful marketing tool: 
            <span className="text-red-400 font-semibold"> authentic word-of-mouth from satisfied guests</span>
          </p>
          <button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-red-500/25">
            Stop the Loss — See the Solution
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-red-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-500/10 rounded-full blur-xl"></div>
    </div>
  );
};

export default section_3;