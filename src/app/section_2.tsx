import lightmvp from '../assets/light.mp4';

type Props = {}

const Section_2: React.FC<Props> = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden text-nunito">
      {/* Background Video for Desktop */}
      <div className="absolute inset-0 hidden md:block">
        <video
          className="w-full h-full object-cover opacity-40"
          style={{ filter: 'grayscale(100%)' }}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={lightmvp} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>

      {/* Background Image for Mobile */}
      <div className="absolute inset-0 md:hidden">
        <img
          src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Modern restaurant interior with ambient lighting and contemporary design"
          className="w-full h-full object-cover opacity-30"
          style={{ filter: 'grayscale(100%)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        <div className="text-white space-y-8 text-center">
          {/* Heading */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
              Сервис селфи-камер, который превращает гостей в ваших онлайн-амбассадоров — и помогает продавать больше
            </h1>
          </div>

          {/* Main Content */}
          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-left">
                Мы создаём сервис селфи-камер, который делает любое событие ярче и заметнее. Наши камеры бесплатно фотографируют гостей, добавляют ваш логотип и сразу отправляют снимки в Telegram или по SMS — пока люди ещё в эмоциях и с желанием делиться. Фото начинают жить в соцсетях, а вместе с ними — и ваш бренд.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-left">
                Каждая камера собирает контакты гостей (по согласию), чтобы вы могли легко пригласить их на следующие вечеринки, акции или события. А на странице, где гость скачивает фото, мы показываем ему персонализированное предложение — ведь это лучший момент продать ему то, что вам выгодно: от билета на следующий ивент до коктейля уже сегодня.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default Section_2