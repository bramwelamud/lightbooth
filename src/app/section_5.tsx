import { useState } from 'react';
import vedio from "../assets/jumbotron (online-video-cutter.com).mp4"

export default function Section_5() {
  const [formData, setFormData] = useState({
    establishment: '',
    city: '',
    phone: ''
  });
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};


  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      // Send to Telegram Bot
      const telegramMessage = `Новая заявка на тест-драйв Glimps!\n\nЗаведение: ${formData.establishment}\n Город: ${formData.city}\n  Телефон: ${formData.phone}`;
      
      const BOT_TOKEN = '8445331751:AAGWN-I5RdBsZO8ojR61y2HuDCqIzRyyPI0';
      const CHAT_ID = '1860860817';
      
      const telegramResponse = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: telegramMessage,
          parse_mode: 'HTML'
        })
      });
      
      if (telegramResponse.ok) {
        setSubmitStatus('success');
        setFormData({ establishment: '', city: '', phone: '' });
        setTimeout(() => {
          setShowForm(false);
          setSubmitStatus('');
        }, 3000);
      } else {
        throw new Error('Failed to send to Telegram');
      }
    } catch (error) {
      console.error('Error sending to Telegram:', error);
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="w-full bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main CTA Heading */}
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          Хотите больше гостей и рост выручки?
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text and Buttons */}
          <div className="space-y-8">
            <p className="text-xl text-gray-300 leading-relaxed">
              Мы бесплатно установим Glimps в вашем заведении — вы сможете протестировать ее в реальных условиях и оценить результат.
            </p>
            
            <div className="space-y-4">
              <button
                onClick={() => setShowForm(true)}
                className="w-full bg-white hover:bg-gray-100 text-black font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg border-2 border-white"
              >
                Записаться на тест-драйв
              </button>
            </div>
          </div>
          
          {/* Right side - Video with gradient border */}
          <div className="relative">
            {/* Gradient border container */}
            <div className="p-1 rounded-lg bg-gradient-to-r from-black via-gray-800 to-black">
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
                {/* Replace with your actual video */}
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/api/placeholder/800/450"
                >
                  <source src={vedio} type="video/mp4" />
                  Ваш браузер не поддерживает видео.
                </video>
              </div>
            </div>
          </div>
        </div>
        
        {/* Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-md w-full p-8 relative border-2 border-black">
              <button
                onClick={() => {
                  setShowForm(false);
                  setSubmitStatus('');
                }}
                className="absolute top-4 right-4 text-black hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
              
              <h3 className="text-2xl font-bold text-black mb-4">
                Бесплатный тест-драйв
              </h3>
              
              <p className="text-gray-700 mb-6">
                Установим селфи-камеру в вашем баре или клубе на бесплатный тест.
                Никаких обязательств. Только возможность увидеть эффект вживую.
              </p>
              
              {submitStatus === 'success' && (
                <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">
                  Спасибо! Мы свяжемся с вами в ближайшее время.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
                  Произошла ошибка. Попробуйте еще раз или напишите нам в Telegram.
                </div>
              )}
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-black mb-2">
                    Название заведения
                  </label>
                  <input
                    type="text"
                    name="establishment"
                    value={formData.establishment}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-black rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-gray-600 bg-white text-black"
                    placeholder="Введите название вашего заведения"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-black mb-2">
                    Город
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-black rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-gray-600 bg-white text-black"
                    placeholder="Введите ваш город"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-black mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-black rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-gray-600 bg-white text-black"
                    placeholder="+7 (xxx) xxx-xx-xx"
                  />
                </div>
                
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-black hover:bg-gray-800 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 border-2 border-black"
                >
                  {isSubmitting ? 'Отправляем...' : 'Получить бесплатный тест'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}