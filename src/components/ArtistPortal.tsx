import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface ArtistPortalProps {
  onBack: () => void;
}

interface Track {
  id: string;
  title: string;
  artist: string;
  status: 'processing' | 'approved' | 'distributed';
  progress: number;
  uploadDate: string;
}

const ArtistPortal = ({ onBack }: ArtistPortalProps) => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<'upload' | 'tracks'>('upload');
  const [tracks, setTracks] = useState<Track[]>([
    {
      id: '1',
      title: 'Summer Night',
      artist: 'Demo Artist',
      status: 'distributed',
      progress: 100,
      uploadDate: '2024-01-15',
    },
    {
      id: '2',
      title: 'Electric Soul',
      artist: 'Demo Artist',
      status: 'processing',
      progress: 60,
      uploadDate: '2024-01-20',
    },
  ]);

  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    genre: '',
    releaseDate: '',
    description: '',
  });

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    const newTrack: Track = {
      id: Date.now().toString(),
      title: formData.title,
      artist: formData.artist,
      status: 'processing',
      progress: 20,
      uploadDate: new Date().toISOString().split('T')[0],
    };
    setTracks([newTrack, ...tracks]);
    setFormData({ title: '', artist: '', genre: '', releaseDate: '', description: '' });
    setActiveTab('tracks');
    toast({
      title: 'Трек загружен!',
      description: 'Начата обработка и проверка метаданных.',
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'approved':
        return 'bg-blue-100 text-blue-800';
      case 'distributed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'processing':
        return 'Обработка';
      case 'approved':
        return 'Одобрено';
      case 'distributed':
        return 'Распространено';
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-muted">
      <nav className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="hover:text-gray-600 transition-colors">
              <Icon name="ArrowLeft" size={24} />
            </button>
            <div className="text-2xl font-bold">WAM Portal</div>
          </div>
          <Badge variant="secondary" className="bg-[#6E7261] text-[#FFFCF3]">
            Артист
          </Badge>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Портал артиста</h1>
          <p className="text-muted-foreground">Управление треками и мониторинг дистрибуции</p>
        </div>

        <div className="flex gap-4 mb-8">
          <Button
            onClick={() => setActiveTab('upload')}
            variant={activeTab === 'upload' ? 'default' : 'outline'}
            className={activeTab === 'upload' ? 'bg-primary' : ''}
          >
            <Icon name="Upload" size={18} className="mr-2" />
            Загрузить трек
          </Button>
          <Button
            onClick={() => setActiveTab('tracks')}
            variant={activeTab === 'tracks' ? 'default' : 'outline'}
            className={activeTab === 'tracks' ? 'bg-black' : ''}
          >
            <Icon name="Music" size={18} className="mr-2" />
            Мои треки
          </Button>
        </div>

        {activeTab === 'upload' && (
          <Card className="p-8 animate-fade-in">
            <h2 className="text-2xl font-semibold mb-6">Новый релиз</h2>
            <form onSubmit={handleUpload} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Название трека</label>
                  <Input
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Summer Vibes"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Исполнитель</label>
                  <Input
                    value={formData.artist}
                    onChange={(e) => setFormData({ ...formData, artist: e.target.value })}
                    placeholder="Ваше имя"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Жанр</label>
                  <Input
                    value={formData.genre}
                    onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                    placeholder="Pop, Hip-Hop, Electronic..."
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Дата релиза</label>
                  <Input
                    type="date"
                    value={formData.releaseDate}
                    onChange={(e) => setFormData({ ...formData, releaseDate: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Описание</label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Расскажите о вашем треке..."
                  rows={4}
                />
              </div>

              <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-[#6E7261] transition-colors cursor-pointer">
                <Icon name="Upload" size={48} className="mx-auto mb-4 text-muted-foreground" />
                <p className="text-lg font-medium mb-2">Загрузите аудиофайл</p>
                <p className="text-sm text-muted-foreground">WAV, MP3, FLAC до 500MB</p>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                Загрузить трек
              </Button>
            </form>
          </Card>
        )}

        {activeTab === 'tracks' && (
          <div className="space-y-4 animate-fade-in">
            {tracks.map((track) => (
              <Card key={track.id} className="p-6">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#6E7261] to-[#9DA190] rounded-lg flex-shrink-0 flex items-center justify-center">
                    <Icon name="Music" className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-semibold">{track.title}</h3>
                        <p className="text-muted-foreground">{track.artist}</p>
                      </div>
                      <Badge className={getStatusColor(track.status)}>
                        {getStatusText(track.status)}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground/80 mb-3">Загружено: {track.uploadDate}</p>
                    {track.status !== 'distributed' && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Прогресс дистрибуции</span>
                          <span className="font-medium">{track.progress}%</span>
                        </div>
                        <Progress value={track.progress} className="h-2" />
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtistPortal;