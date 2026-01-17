import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Releases = () => {
  const releases = [
    {
      title: 'Summer Vibes',
      artist: 'АРТИСТ 1',
      date: '2024',
      streams: '2.5M',
      type: 'Album',
    },
    {
      title: 'Night Drive',
      artist: 'АРТИСТ 2',
      date: '2024',
      streams: '1.8M',
      type: 'EP',
    },
    {
      title: 'Reflections',
      artist: 'АРТИСТ 3',
      date: '2023',
      streams: '5.2M',
      type: 'Single',
    },
    {
      title: 'Electric Dreams',
      artist: 'АРТИСТ 4',
      date: '2023',
      streams: '3.1M',
      type: 'Album',
    },
  ];

  return (
    <section id="releases" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Релизы</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Последние работы наших артистов
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {releases.map((release, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-shadow border-gray-100 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-6">
                <div className="w-32 h-32 bg-gradient-to-br from-[#9b87f5] to-[#6E59A5] rounded-lg flex-shrink-0 flex items-center justify-center">
                  <Icon name="Music" className="text-white" size={48} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold">{release.title}</h3>
                    <Badge variant="secondary" className="bg-gray-100">
                      {release.type}
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-4">{release.artist}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{release.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Icon name="Play" size={14} />
                      {release.streams} прослушиваний
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Releases;
