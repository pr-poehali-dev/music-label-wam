import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Сообщение отправлено!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const contacts = [
    { icon: 'Mail', label: 'info@wam-music.com' },
    { icon: 'Phone', label: '+7 (999) 123-45-67' },
    { icon: 'MapPin', label: 'Москва, Россия' },
  ];

  return (
    <section id="contact" className="py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Контакты</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Готовы начать работу? Свяжитесь с нами
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="p-8 border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Имя</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ваше имя"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Сообщение</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Расскажите о своём проекте"
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-black hover:bg-gray-800">
                Отправить сообщение
              </Button>
            </form>
          </Card>

          <div className="space-y-8">
            {contacts.map((contact, index) => (
              <div
                key={index}
                className="flex items-start gap-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-[#9b87f5] rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name={contact.icon} className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-lg font-medium">{contact.label}</p>
                </div>
              </div>
            ))}

            <div className="pt-8">
              <h3 className="text-2xl font-semibold mb-4">Социальные сети</h3>
              <div className="flex gap-4">
                {['Instagram', 'Youtube', 'Music'].map((platform, index) => (
                  <button
                    key={index}
                    className="w-12 h-12 bg-black hover:bg-gray-800 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Icon name={platform} className="text-white" size={20} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center text-gray-500 text-sm">
          <p>© 2024 WAM (We Are Music). Все права защищены.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
