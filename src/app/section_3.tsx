import image1 from '../assets/image31.png';

export default function section_3() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-5 py-8 sm:py-12">
        

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Grid - Text Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Возвращаем гостей снова и снова
              </h1>
                           
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                При каждом взаимодействии будка собирает контакты гостя (по согласию) и кладёт их в вашу CRM. Стоит запланировать новый концерт или тематический вечер — и в пару кликов вы отправляете персональное приглашение вместе с тем самым снимком, который уже вызывает приятные воспоминания. Гость вспоминает эмоцию прошлого визита, быстро принимает решение и снова приходит к вам — зал заполняется ещё до того, как афиши успеют разойтись по пабликам.
              </p>
            </div>
          </div>

          {/* Right Grid - Image/Visual */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-md lg:max-w-none">
              <img 
                src={image1} 
                alt="photo" 
                className="w-full h-auto max-w-full lg:max-w-[550px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}