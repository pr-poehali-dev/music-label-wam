import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  const transparencyPoints = [
    'Мы работаем с артистами на одной волне',
    'Все условия понятны заранее',
    'Вся информация по релизам и доходам передаётся напрямую',
    'Никаких скрытых комиссий и "мелкого шрифта"',
    'Ты всегда понимаешь что происходит с твоей музыкой',
  ];

  const reliabilityStats = [
    { value: '8 лет', label: 'на рынке с 2018 года' },
    { value: '1000+', label: 'отгруженных релизов' },
    { value: 'Сотни', label: 'довольных артистов' },
  ];

  return (
    <section id="about" className="py-32 px-6 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">О лейбле</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <Card className="p-10 border-border animate-fade-in">
            <div className="w-16 h-16 bg-[#6E7261] rounded-full flex items-center justify-center mb-6">
              <Icon name="Eye" className="text-white" size={28} />
            </div>
            <h3 className="text-3xl font-semibold mb-6">Прозрачность</h3>
            <ul className="space-y-3">
              {transparencyPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Icon name="Check" className="text-[#6E7261] mt-1 flex-shrink-0" size={20} />
                  <span className="text-muted-foreground leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-10 border-border animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="w-16 h-16 bg-[#6E7261] rounded-full flex items-center justify-center mb-6">
              <Icon name="Shield" className="text-white" size={28} />
            </div>
            <h3 className="text-3xl font-semibold mb-6">Надёжность</h3>
            <div className="grid grid-cols-3 gap-6 mb-6">
              {reliabilityStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Мы выстраиваем стабильные отношения с платформами и артистами. Мы не экспериментируем на твоей музыке - мы работаем по отлаженной системе.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;