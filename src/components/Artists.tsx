import { Card } from '@/components/ui/card';

const Artists = () => {
  const artists = [
    {
      name: 'АРТИСТ 1',
      genre: 'Hip-Hop',
      releases: 12,
    },
    {
      name: 'АРТИСТ 2',
      genre: 'Electronic',
      releases: 8,
    },
    {
      name: 'АРТИСТ 3',
      genre: 'Pop',
      releases: 15,
    },
    {
      name: 'АРТИСТ 4',
      genre: 'Rock',
      releases: 6,
    },
  ];

  return (
    <section id="artists" className="py-32 px-6 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Наши артисты</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Сотни артистов доверяют нам свою музыку
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {artists.map((artist, index) => (
            <Card
              key={index}
              className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-[#6E7261] to-[#9DA190] rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-semibold mb-2">{artist.name}</h3>
              <p className="text-muted-foreground mb-1">{artist.genre}</p>
              <p className="text-sm text-muted-foreground/80">{artist.releases} релизов</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artists;