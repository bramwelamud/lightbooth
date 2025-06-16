import { Phone, Mail, MessageCircle, User } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover opacity-30"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/20 to-black/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-pink-400 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-12">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Get in
                </span>
                <br />
                <span className="text-white">Touch</span>
              </h1>
              <p className="text-xl text-gray-300 font-light max-w-md">
                Ready to transform your venue's marketing? Let's connect and discuss your vision.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Name Card */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 uppercase tracking-wide">Contact Person</p>
                      <p className="text-2xl font-semibold text-white">Daniil Glimps</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 uppercase tracking-wide">Phone</p>
                      <a href="tel:+79312008039" className="text-2xl font-semibold text-white hover:text-cyan-400 transition-colors">
                        +7 931 200-80-39
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
                      <a href="mailto:daniil.sapozhnikov@outlook.com" className="text-xl font-semibold text-white hover:text-pink-400 transition-colors break-all">
                        daniil.sapozhnikov@outlook.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Telegram Card */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 uppercase tracking-wide">Telegram</p>
                      <a href="https://t.me/Glimps_selfiecamera" target="_blank" rel="noopener noreferrer" className="text-2xl font-semibold text-white hover:text-blue-400 transition-colors">
                        @Glimps_selfiecamera
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Call to Action */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-3xl blur opacity-20"></div>
            <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl text-center">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Connect?</h2>
                <p className="text-gray-400 text-lg">Choose your preferred way to reach out</p>
              </div>

              <div className="space-y-4">
                <a
                  href="tel:+79312008039"
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-cyan-500/25 flex items-center justify-center space-x-3"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>

                <a
                  href="mailto:daniil.sapozhnikov@outlook.com"
                  className="w-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-pink-500/25 flex items-center justify-center space-x-3"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Email</span>
                </a>

                <a
                  href="https://t.me/Glimps_selfiecamera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-purple-500/25 flex items-center justify-center space-x-3"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Message on Telegram</span>
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-gray-400 text-sm">
                  Available for consultation and project discussions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default Contact;