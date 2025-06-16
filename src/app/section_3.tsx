import image1 from '../assets/image1.jpg'

const section_3 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url(${image1})`,
          filter: 'grayscale(100%)'
        }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
              Во что это вам обходится:
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto rounded-full"></div>
        </div>

        {/* Cost Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1: Missed Clients */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-white to-gray-400 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative bg-black/80 backdrop-blur-xl border border-gray-500/20 rounded-3xl p-8 h-full hover:border-gray-400/40 transition-all duration-500">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-gray-500/25">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Упущенные клиенты</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-500/10 border border-gray-500/20 rounded-xl p-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-300 mb-1">10,000+</div>
                    <div className="text-sm text-gray-400">Просмотров историй гостями</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="text-4xl text-gray-400">→</div>
                </div>
                
                <div className="bg-gray-800/50 border border-gray-600/30 rounded-xl p-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-500 mb-1">0</div>
                    <div className="text-sm text-gray-500">Новых посетителей</div>
                    <div className="text-xs text-gray-400 mt-1">Заведение не отмечено</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-700/50">
                <p className="text-gray-300 text-sm leading-relaxed">
                  Десятки тысяч просмотров историй ваших гостей не приводят к новым посетителям, потому что ваше заведение не отмечено
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: No Retention System */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-black-400 to-black-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative bg-black/80 backdrop-blur-xl border border-gray-500/20 rounded-3xl p-8 h-full hover:border-gray-400/40 transition-all duration-500">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-gray-500/25">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Нет удержания гостей</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-500/10 border border-gray-500/20 rounded-xl p-4 text-center">
                  <div className="text-lg font-semibold text-gray-300 mb-2">Текущая система:</div>
                  <div className="text-gray-400 text-sm">Нет механизма последующих контактов</div>
                </div>
                
                <div className="bg-gray-800/50 border border-gray-600/30 rounded-xl p-4 text-center">
                  <div className="text-lg font-semibold text-gray-500 mb-2">Результат:</div>
                  <div className="text-gray-500 text-sm">Меньше повторных визитов</div>
                </div>
                
                <div className="bg-gray-500/10 border border-gray-500/20 rounded-xl p-4 text-center">
                  <div className="text-gray-300 font-medium text-sm italic">
                    "Давайте снова туда пойдем!" никогда не происходит
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-700/50">
                <p className="text-gray-300 text-sm leading-relaxed">
                  Без системы удержания гости забывают о вашем заведении и не возвращаются
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Expensive Marketing */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-white rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative bg-black/80 backdrop-blur-xl border border-gray-500/20 rounded-3xl p-8 h-full hover:border-gray-400/40 transition-all duration-500">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-gray-500/25">
                  <span className="text-2xl">💸</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Неэффективный маркетинг</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-500/10 border border-gray-500/20 rounded-xl p-4">
                  <div className="text-center mb-3">
                    <div className="text-gray-300 font-semibold text-sm">Традиционная реклама</div>
                  </div>
                  <ul className="text-gray-400 text-xs space-y-1">
                    <li>• Затмевается конкурентами</li>
                    <li>• Высокая стоимость, низкая отдача</li>
                    <li>• Общие сообщения</li>
                  </ul>
                </div>
                
                <div className="text-center text-2xl text-white">≠</div>
                
                <div className="bg-gray-300/10 border border-gray-300/20 rounded-xl p-4">
                  <div className="text-center mb-3">
                    <div className="text-gray-200 font-semibold text-sm">Вирусный контент гостей</div>
                  </div>
                  <ul className="text-gray-300 text-xs space-y-1">
                    <li>• Подлинный опыт</li>
                    <li>• Доверенные рекомендации</li>
                    <li>• Высокий уровень конверсии</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-700/50">
                <p className="text-gray-300 text-sm leading-relaxed">
                  Дорогая реклама в публичных каналах теряется и работает не так хорошо, как вирусный контент от ваших гостей
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Impact Summary */}
        <div className="bg-gradient-to-r from-gray-900/30 to-black/30 backdrop-blur-xl border border-gray-500/30 rounded-3xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Настоящая цена</h2>
          <p className="text-xl text-gray-300 mb-6 max-w-4xl mx-auto">
            Вы не просто теряете отдельных клиентов — вы упускаете самый мощный маркетинговый инструмент: 
            <span className="text-gray-200 font-semibold"> подлинные отзывы довольных гостей</span>
          </p>
          <button className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-gray-500/25">
            Остановите потери — посмотрите решение
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gray-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gray-400/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gray-600/10 rounded-full blur-xl"></div>
    </div>
  );
};

export default section_3;