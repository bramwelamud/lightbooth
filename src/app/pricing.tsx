import React from 'react';
import { Check, Star, Crown, Shield } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: string;
  icon: React.ReactNode;
  features: string[];
  popular: boolean;
}

const PricingPage: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      name: 'Базовый',
      price: '23 000',
      icon: <Shield className="w-8 h-8 text-gray-300" />,
      features: [
        'Ваш логотип на всех фотографиях',
        'Автоматическая отправка в Telegram/SMS',
        'До 1000 обработанных фото в месяц'
      ],
      popular: false
    },
    {
      name: 'Продвинутый',
      price: '26 000',
      icon: <Star className="w-8 h-8 text-white" />,
      features: [
        'Все функции Базового тарифа',
        'Доступ к контактам гостей (телефоны/Tg)',
        'Рассылка персонализированных сообщений',
        'До 3000 обработанных фото в месяц'
      ],
      popular: true
    },
    {
      name: 'Премиум',
      price: '30 000',
      icon: <Crown className="w-8 h-8 text-gray-100" />,
      features: [
        'Все функции Продвинутого тарифа',
        'Реклама ваших событий на странице скачивания',
        'Приоритетная поддержка 24/7',
        'Неограниченное количество фото'
      ],
      popular: false
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-black-900">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Наши Тарифы
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Выберите оптимальное решение для вашего бизнеса
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
                  <div className="bg-white text-gray-900 px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Популярный выбор
                  </div>
                </div>
              )}

              {/* Card */}
              <div className="relative h-full bg-gray-800 rounded-3xl shadow-xl overflow-hidden border border-gray-700">
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
                      <span className="text-2xl text-gray-400 ml-1">₽</span>
                    </div>
                    <span className="text-gray-400 text-lg">в месяц</span>
                  </div>

                  {/* Features */}
                  <div className="flex-grow mb-8">
                    <ul className="space-y-4">
                      {plan.features.map((feature: string, featureIndex: number) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-gray-300 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full py-4 px-6 rounded-2xl font-semibold text-black-900 transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                    plan.popular
                      ? 'bg-white hover:bg-gray-100 shadow-lg'
                      : 'bg-gray-300 hover:bg-gray-200'
                  }`}>
                    {plan.popular ? 'Начать сейчас' : 'Выбрать тариф'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center max-w-3xl">
          <div className="mb-8 p-6 bg-gray-800 rounded-xl shadow-md border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4">Дополнительные услуги</h3>
            <p className="text-gray-300 mb-4">
              Индивидуальная настройка под ваши требования - 5 000₽
            </p>
            <p className="text-gray-300">
              Обучение персонала работе с системой - 3 000₽
            </p>
          </div>
          
          <div className="inline-flex items-center px-6 py-3 bg-gray-800 rounded-full shadow-md border border-gray-700">
            <Check className="w-5 h-5 text-gray-300 mr-2" />
            <span className="text-gray-300 font-semibold">Первая настройка и установка — бесплатно</span>
          </div>
        </div>
      </div>

      <style>{`
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