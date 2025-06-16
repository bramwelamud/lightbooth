import React from 'react';
import { Check, Star, Crown, Shield } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: string;
  icon: React.ReactNode;
  features: string[];
  popular: boolean;
  gradient: string;
}

const PricingPage: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      name: 'Базовый',
      price: '23 000',
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      features: [
        'Ваш логотип на всех фото',
        'Автоматическая отправка в Telegram/SMS'
      ],
      popular: false,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      name: 'Продвинутый',
      price: '26 000',
      icon: <Star className="w-8 h-8 text-amber-500" />,
      features: [
        'Всё из Базового +',
        'Доступ к контактам гостей (телефоны/Tg)',
        'Рассылка таргет-сообщений'
      ],
      popular: true,
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      name: 'Премиум',
      price: '30 000',
      icon: <Crown className="w-8 h-8 text-purple-500" />,
      features: [
        'Всё из Продвинутого +',
        'Реклама событий на странице скачивания',
        '(баннер/фулскрин)'
      ],
      popular: false,
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/external/396409062.sd.mp4?s=7c12b0c1e4c3aabbf4b6e0b7e6b8a3e5&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-pink-900/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Тарифы
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Выберите подходящий план для вашего бизнеса
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
          {plans.map((plan: PricingPlan, index: number) => (
            <div
              key={plan.name}
              className={`relative group transform transition-all duration-300 hover:scale-105 ${
                plan.popular ? 'md:-translate-y-4' : ''
              }`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Популярный
                  </div>
                </div>
              )}

              {/* Card */}
              <div className="relative h-full">
                {/* Glassmorphism Effect */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl"></div>
                
                {/* Gradient Border */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon and Name */}
                  <div className="text-center mb-8">
                    <div className="mb-4 flex justify-center">
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-2xl text-gray-300 ml-1">₽</span>
                    </div>
                    <span className="text-gray-400 text-lg">/мес</span>
                  </div>

                  {/* Features */}
                  <div className="flex-grow mb-8">
                    <ul className="space-y-4">
                      {plan.features.map((feature: string, featureIndex: number) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full py-4 px-6 rounded-2xl font-semibold text-white transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 shadow-lg shadow-amber-500/30'
                      : 'bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 border border-gray-600'
                  }`}>
                    Выбрать план
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Setup Notice */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-green-500/20 border border-green-400/30 rounded-full backdrop-blur-sm">
            <Check className="w-5 h-5 text-green-400 mr-2" />
            <span className="text-green-400 font-semibold">Настройка и установка — бесплатно</span>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <style tsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default PricingPage;