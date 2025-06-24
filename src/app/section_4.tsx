import image1 from '../assets/image8.png';

export default function section_4() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* First Grid - Text Content */}
          <div className="space-y-8">
            {/* <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Мы возвращаем клиентов
            </h1> */}
            
            <div className="space-y-6">              
              <p className="text-lg text-gray-300 leading-relaxed">
                Страница скачивания фотографий - пользователь видит свои фотографии на 1 секунду 
                и после ему показана реклама, после просмотра он либо закрывает и скачивает фото, 
                либо переходит по рекламной ссылке.
              </p>
            </div>
          </div>
          
          {/* Second Grid - First Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img src={image1} alt="photo" className="w-full h-auto" />
            </div>
          </div>
          
          {/* Third Grid - Second Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img src={image1} alt="photo" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}