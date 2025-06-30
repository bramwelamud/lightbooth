import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white" style={{ fontFamily: 'Nunito, sans-serif' }}>
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Политика обработки данных
          </h1>
          <div className="text-gray-300 text-lg">
            © 2025 Glimps
          </div>
        </div>

        {/* Company Information */}
        <div className="bg-gray-900 rounded-lg p-6 mb-8 border border-gray-800">
          <h2 className="text-xl font-semibold mb-4 text-white">Информация о компании</h2>
          <div className="space-y-2 text-gray-300">
            <p><span className="font-medium text-white">ИП:</span> Сапожников Даниил Алексеевич</p>
            <p><span className="font-medium text-white">ИНН:</span> 781156723688</p>
            <p><span className="font-medium text-white">ОГРНИП:</span> 325784700109670</p>
            <p><span className="font-medium text-white">Email:</span> 
              <a href="mailto:Daniil.Sapozhnikov@outlook.com" className="text-blue-400 hover:text-blue-300 ml-1">
                Daniil.Sapozhnikov@outlook.com
              </a>
            </p>
            <p><span className="font-medium text-white">Юр. адрес:</span> Санкт-Петербург, Пушкин, Колокольный пер, кв 282</p>
            <p><span className="font-medium text-white">Дата публикации:</span> 11.05.2025</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Consent Section */}
          <section className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <h2 className="text-xl font-semibold mb-4 text-white">Согласие на обработку персональных данных</h2>
            <p className="text-gray-300 leading-relaxed">
              В соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ 
              «О персональных данных» я, субъект персональных данных, свободно, своей 
              волей и в своих интересах даю согласие индивидуальному предпринимателю 
              Сапожникову Даниилу Алексеевичу (далее — «Оператор») на обработку моих 
              персональных данных, включая сбор, запись, систематизацию, накопление, 
              хранение, уточнение (обновление, изменение), извлечение, использование, 
              передачу (предоставление, доступ), обезличивание, блокирование, удаление 
              и уничтожение, совершаемые с использованием средств автоматизации или 
              без таковых.
            </p>
          </section>

          {/* Data Types Section */}
          <section className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <h2 className="text-xl font-semibold mb-4 text-white">Обрабатываемые персональные данные</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Я даю согласие на обработку следующих персональных данных:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>номер телефона</li>
              <li>никнейм в мессенджере Telegram (если был предоставлен)</li>
              <li>фотографии, сделанные с использованием устройства Glimps</li>
              <li>данные о посещаемости данного места или события</li>
              <li>файлы cookie (в случае предоставления согласия через интерфейс устройства или сайта)</li>
            </ul>
          </section>

          {/* Purposes Section */}
          <section className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <h2 className="text-xl font-semibold mb-4 text-white">Цели обработки персональных данных</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Обработка персональных данных осуществляется в следующих целях:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>предоставление услуг фотосъёмки с помощью устройства Glimps</li>
              <li>отправка полученных фотографий на указанный номер телефона или через Telegram</li>
              <li>анализ использования устройств Glimps и посещаемости конкретных мест и мероприятий с целью улучшения качества сервиса</li>
              <li>передача персональных данных партнёрам Оператора в целях продвижения их услуг и проведения маркетинговых мероприятий</li>
            </ul>
          </section>

          {/* Third Party Sharing */}
          <section className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <h2 className="text-xl font-semibold mb-4 text-white">Передача данных третьим лицам</h2>
            <p className="text-gray-300 leading-relaxed">
              Оператор вправе передавать мои персональные данные третьим лицам — 
              партнёрам, в местах или на мероприятиях которых установлены устройства 
              Glimps, исключительно в вышеуказанных целях. Такая передача 
              осуществляется на основании соглашений, обеспечивающих соблюдение 
              требований законодательства Российской Федерации о персональных данных.
            </p>
          </section>

          {/* Duration and Withdrawal */}
          <section className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <h2 className="text-xl font-semibold mb-4 text-white">Срок действия и отзыв согласия</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Настоящее согласие действует в течение <span className="font-medium text-white">одного года</span> с момента его 
                предоставления. Обработка персональных данных может быть прекращена 
                ранее указанного срока в случае получения Оператором письменного 
                заявления субъекта персональных данных об отзыве настоящего согласия.
              </p>
              <p>
                Отзыв согласия осуществляется в соответствии с действующим 
                законодательством Российской Федерации. Письменное заявление об отзыве 
                направляется на электронную почту Оператора: 
                <a href="mailto:Daniil.Sapozhnikov@outlook.com" className="text-blue-400 hover:text-blue-300 ml-1">
                  Daniil.Sapozhnikov@outlook.com
                </a>, 
                либо иным способом, позволяющим подтвердить факт его получения. В случае 
                получения отзыва Оператор прекращает обработку персональных данных в срок, 
                не превышающий <span className="font-medium text-white">30 календарных дней</span>.
              </p>
            </div>
          </section>

          {/* Final Confirmation */}
          <section className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-white">Подтверждение согласия</h2>
            <p className="text-gray-300 leading-relaxed">
              Предоставляя свои персональные данные путём ввода номера телефона, 
              перехода по ссылке из мессенджера, загрузки фотографий либо 
              использования интерфейса устройства Glimps, я подтверждаю, что 
              ознакомлен(а) с настоящим соглашением, понимаю его содержание и выражаю 
              согласие на обработку персональных данных без оговорок и ограничений.
            </p>
          </section>
        </div>

        
      </div>
    </div>
  );
}