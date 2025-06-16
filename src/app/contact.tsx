import { Phone, Mail, MessageCircle, User } from 'lucide-react';
import lighmvp from '../assets/light.mp4';

const Contact = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gray-900">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover opacity-20"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={lighmvp} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-gray-800/20 to-black/90"></div>
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gray-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-gray-300 rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-gray-400 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-gray-300 rounded-full animate-ping opacity-60"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-12">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                <span className="text-gray-300">Свяжитесь</span>
                <br />
                <span className="text-white">с нами</span>
              </h1>
              <p className="text-xl text-gray-400 font-light max-w-md">
                Готовы преобразить маркетинг вашего заведения? Давайте обсудим ваши идеи.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Name Card */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gray-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative bg-gray-800/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 hover:bg-gray-800 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center shadow-lg">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 uppercase tracking-wide">Контактное лицо</p>
                      <p className="text-2xl font-semibold text-white">Даниил Глимс</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gray-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative bg-gray-800/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 hover:bg-gray-800 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center shadow-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 uppercase tracking-wide">Телефон</p>
                      <a href="tel:+79312008039" className="text-2xl font-semibold text-white hover:text-gray-300 transition-colors">
                        +7 931 200-80-39
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gray-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative bg-gray-800/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 hover:bg-gray-800 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center shadow-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
                      <a href="mailto:daniil.sapozhnikov@outlook.com" className="text-xl font-semibold text-white hover:text-gray-300 transition-colors break-all">
                        daniil.sapozhnikov@outlook.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Telegram Card */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gray-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative bg-gray-800/80 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 hover:bg-gray-800 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center shadow-lg">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 uppercase tracking-wide">Telegram</p>
                      <a href="https://t.me/Glimps_selfiecamera" target="_blank" rel="noopener noreferrer" className="text-2xl font-semibold text-white hover:text-gray-300 transition-colors">
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
            <div className="absolute -inset-1 bg-gray-600 rounded-3xl blur opacity-20"></div>
            <div className="relative bg-gray-800/80 backdrop-blur-xl border border-gray-700 rounded-3xl p-8 shadow-2xl text-center">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Готовы к сотрудничеству?</h2>
                <p className="text-gray-400 text-lg">Выберите удобный способ связи</p>
              </div>

              <div className="space-y-4">
                <a
                  href="tel:+79312008039"
                  className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-gray-500/10 flex items-center justify-center space-x-3"
                >
                  <Phone className="w-5 h-5" />
                  <span>Позвонить</span>
                </a>

                <a
                  href="mailto:daniil.sapozhnikov@outlook.com"
                  className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-gray-500/10 flex items-center justify-center space-x-3"
                >
                  <Mail className="w-5 h-5" />
                  <span>Написать email</span>
                </a>

                <a
                  href="https://t.me/Glimps_selfiecamera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-gray-500/10 flex items-center justify-center space-x-3"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Написать в Telegram</span>
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-gray-400 text-sm">
                  Доступен для консультаций и обсуждения проектов
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;