import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  const values = [
    {
      icon: 'Eye',
      title: 'Прозрачность',
      description: 'Все условия понятны заранее. Вся информация по релизам и доходам передаётся напрямую. Никаких скрытых комиссий.',
    },
    {
      icon: 'Shield',
      title: 'Надёжность',
      description: '8 лет на рынке с 2018 года. 1000+ отгруженных релизов и сотни довольных артистов.',
    },
    {
      icon: 'Target',
      title: 'Фокус на артисте',
      description: 'Наша главная цель — чтобы артист не тратил время на рутину. Без лишних процессов и непонятных схем.',
    },
  ];

  return (
    <section id="about" className="py-32 px-6 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">О лейбле</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы работаем с артистами на одной волне. Вся музыка.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-lg transition-shadow duration-300 border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-[#6E7261] rounded-full flex items-center justify-center mb-6">
                <Icon name={value.icon} className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;