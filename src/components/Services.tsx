import Icon from '@/components/ui/icon';

const Services = () => {
  const services = [
    {
      icon: 'Music',
      title: 'Дистрибуция',
      description: 'Аудио и видео-контент на все основные стримминговые сервисы',
    },
    {
      icon: 'Users',
      title: 'Менеджмент артистов',
      description: 'Контроль и поддержка на основе модели "360 градусов"',
    },
    {
      icon: 'Mic',
      title: 'Концерты',
      description: 'Полная организация концертов и живых выступлений',
    },
    {
      icon: 'TrendingUp',
      title: 'Маркетинг',
      description: 'Настройка таргетированной рекламы и продвижение',
    },
    {
      icon: 'Headphones',
      title: 'Поддержка',
      description: 'Помощь артистам по любым вопросам 24/7',
    },
  ];

  const platforms = [
    'Яндекс.Музыка',
    'VK Музыка',
    'Звук',
    'Apple Music',
    'Spotify',
    'YouTube Music',
  ];

  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Услуги</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полный комплекс услуг для развития музыкальной карьеры
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name={service.icon} className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-center mb-8">Платформы дистрибуции</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-white px-6 py-3 rounded-full text-sm font-medium shadow-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {platform}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
