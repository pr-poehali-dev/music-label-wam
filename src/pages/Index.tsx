import { useState } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Artists from '@/components/Artists';
import Releases from '@/components/Releases';
import Contact from '@/components/Contact';
import ArtistPortal from '@/components/ArtistPortal';
import Navigation from '@/components/Navigation';

const Index = () => {
  const [showPortal, setShowPortal] = useState(false);

  if (showPortal) {
    return <ArtistPortal onBack={() => setShowPortal(false)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation onPortalClick={() => setShowPortal(true)} />
      <Hero />
      <About />
      <Services />
      <Artists />
      <Releases />
      <Contact />
    </div>
  );
};

export default Index;