import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-5xl mx-auto text-center animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          WE ARE MUSIC
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Музыкальный лейбл и дистрибьютор. Мы занимаемся всей технической и организационной частью релиза, а ты фокусируешься на творчестве.
        </p>
        <Button
          onClick={scrollToContact}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
        >
          Начать сотрудничество
        </Button>
      </div>
    </section>
  );
};

export default Hero;