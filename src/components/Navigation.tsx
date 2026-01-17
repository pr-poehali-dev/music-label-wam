import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

interface NavigationProps {
  onPortalClick: () => void;
}

const Navigation = ({ onPortalClick }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const menuItems = [
    { label: 'Главная', id: 'hero' },
    { label: 'О лейбле', id: 'about' },
    { label: 'Услуги', id: 'services' },
    { label: 'Артисты', id: 'artists' },
    { label: 'Релизы', id: 'releases' },
    { label: 'Контакты', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-lg z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">WAM</div>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={onPortalClick}
              className="bg-[#6E7261] hover:bg-[#6E7261]/90 text-[#FFFCF3]"
            >
              Портал артистов
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Icon name={isOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={onPortalClick}
              className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
            >
              Портал артистов
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;