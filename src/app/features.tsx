
import { Camera, Users, BarChart3, MessageCircle, Target, TrendingUp, Phone, Repeat, Eye } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Every Selfie is an Advertisement",
      subtitle: "Our Secret Sauce",
      description: "Adding your venue's logo to every photograph. When guests post photos on social media, they become your secret marketing agents",
      imageSlot: "logo-overlay",
      stats: "8,000+ free impressions from one post"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Automatic Contact Collection",
      subtitle: "Smart Database",
      description: "We automatically collect phone numbers and Telegram accounts, getting consent for processing and marketing communications. After events, we send personalized invitations and promotional messages",
      imageSlot: "contact-collection",
      stats: "300+ contacts every evening"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "How We Increase Return Visits",
      subtitle: "While They Think, We Remind",
      description: "On Friday and Saturday evenings, when people decide where to go, we send personalized messages with your offers. It's the perfect moment to remind them about you and encourage a visit",
      imageSlot: "messaging",
      stats: "14+% return visits"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Advertising Break",
      subtitle: "Targeted Ads at the Right Moment",
      description: "The photo upload page becomes an additional advertising platform. Guests see your announcements and promotional offers while already in your venue",
      imageSlot: "ad-display",
      stats: "Notable F&B sales growth"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Everything at Hand",
      subtitle: "Complete Control and Analytics",
      description: "Analyze statistics, configure ad displays, view taken photos, download phone numbers, set up the platform and create SMS campaigns in your personal dashboard",
      imageSlot: "dashboard",
      stats: "Numbers behind real guest actions"
    }
  ];

  const statsCards = [
    {
      icon: <Repeat className="w-6 h-6" />,
      number: "14+%",
      label: "return visits",
      description: "Personalized messages and special offers bring people back. Average return growth — 14% over 3 months"
    },
    {
      icon: <Users className="w-6 h-6" />,
      number: "300+",
      label: "contacts",
      description: "Phone numbers and Telegram accounts accumulate every evening. The more active you are — the more you get"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      number: "8,000+",
      label: "free impressions",
      description: "Guests publish photos, and it works. One visitor's post got over 8,000 views — free and organic"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      number: "↗",
      label: "F&B sales growth",
      description: "When integrated with promotions (\"Show photo — get a shot\")"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Turn Every Photo Into Advertisement
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Automatic marketing through guest photography
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-32">
          {features.map((feature, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white bg-opacity-10 rounded-2xl border border-white border-opacity-20">
                    {feature.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold">{feature.title}</h2>
                    <p className="text-gray-400 text-lg">{feature.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-white to-gray-200 text-black rounded-full font-semibold">
                  <TrendingUp className="w-5 h-5" />
                  {feature.stats}
                </div>
              </div>

              {/* Image/Video Slot */}
              <div className="flex-1">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-white border-opacity-10 flex items-center justify-center group hover:border-opacity-30 transition-all duration-500">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto bg-white bg-opacity-10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-400 font-medium">
                        {feature.imageSlot === 'logo-overlay' && 'Photos with venue logo'}
                        {feature.imageSlot === 'contact-collection' && 'Contact analytics'}
                        {feature.imageSlot === 'messaging' && 'Personal messages'}
                        {feature.imageSlot === 'ad-display' && 'Ads on upload page'}
                        {feature.imageSlot === 'dashboard' && 'Control panel'}
                      </p>
                      <p className="text-sm text-gray-500">
                        Place for photo/video demonstration
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-b from-black to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Numbers Behind Real Guest Actions
            </h2>
            <p className="text-gray-400 text-lg">
              Measurable results for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statsCards.map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-3xl p-8 border border-white border-opacity-10 hover:border-opacity-30 transition-all duration-500 hover:bg-opacity-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-white bg-opacity-10 rounded-xl group-hover:bg-opacity-20 transition-all duration-300">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-3xl md:text-4xl font-bold">{stat.number}</div>
                      <div className="text-gray-400 font-medium">{stat.label}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-white to-gray-200 text-black py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to turn guests into marketing agents?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Start using the power of photography to grow your business today
          </p>
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-2xl font-semibold hover:bg-gray-800 transition-colors duration-300">
            <Camera className="w-5 h-5" />
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;