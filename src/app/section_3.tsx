import image1 from '../assets/image14.png';
import image2 from '../assets/image13.png';

export default function section_3() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Grid - Text Content */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Мы возвращаем клиентов
            </h1>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Мы автоматически собираем номера телефонов и Telegram-аккаунты пользователей, 
                получая согласие на их обработку и рекламную рассылку.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Расскажите потенциальным клиентам о грядущей вечеринке, акции или просто 
                пригласите клиента на будущее мероприятие.
              </p>
            </div>

            
          </div>

          {/* Right Grid - Image/Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img src={image1} alt="photo" />
               
              </div>
              
              {/* Floating elements */}
             
            </div>
          </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Grid - Text Content */}
          <div className="space-y-8">
           
            
            <div className="space-y-6">
             
              
              <p className="text-lg text-gray-300 leading-relaxed">
                В пятницу и субботу вечером, когда народ выбирает где отдыхать, мы отправляем рекламное предложение. Так мы напоминаем о заведении в наиболее подходящий для этого момент.
              </p>
            </div>

            
          </div>

          {/* Right Grid - Image/Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img src={image2} alt="photo"  width="550px"/>
               
              </div>
              
              {/* Floating elements */}
             
            </div>
          </div>
      </div>
    </div>
  );
}