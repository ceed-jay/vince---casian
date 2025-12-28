import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { BigFrame } from './components/BigFrame';
import { Details } from './components/Details';
import { OurStory } from './components/OurStory';
import { PhotoGallery } from './components/PhotoGallery';
import { RSVP } from './components/RSVP';
import { EnvelopeEntry } from './components/EnvelopeEntry';

const App: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  // Background for home screen
  const heroBackgroundImage = "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000";
  
  // URL for the big picture frame photo
  const framePhotoUrl = "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=2000";

  // Handle entry
  const handleOpenInvitation = () => {
    setIsOpened(true);
  };

  // Force scroll to top on mount and prevent browser scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  // Disable/Enable scroll based on envelope state
  useEffect(() => {
    if (!isOpened) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpened]);

  return (
    <div className="relative bg-white text-gray-800 overflow-x-hidden selection:bg-red-100 selection:text-red-700 min-h-screen">
      {!isOpened && <EnvelopeEntry onOpen={handleOpenInvitation} />}
      
      <main className={`relative z-10 transition-all duration-1000 ease-in-out ${isOpened ? 'opacity-100' : 'opacity-0 pointer-events-none translate-y-8'}`}>
        <Hero bgImageUrl={heroBackgroundImage} />
        
        <BigFrame 
          imgUrl={framePhotoUrl} 
        />

        <OurStory />
        
        <PhotoGallery />

        <Details />
        
        <RSVP />
      </main>

      <footer className={`py-12 md:py-20 bg-white text-center border-t border-red-50 relative z-10 transition-opacity duration-1000 ${isOpened ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-symphony text-4xl sm:text-5xl md:text-7xl text-red-800 mb-6">
            Vince <span className="font-script">&</span> Casian
          </p>
          <p className="text-gray-400 uppercase tracking-[0.3em] text-[9px] md:text-xs">Forever & Always • May Date, 2026</p>
          <div className="mt-8 flex justify-center items-center space-x-4 md:space-x-6">
             <div className="w-8 md:w-20 h-px bg-red-100"></div>
             <span className="text-red-600 text-lg md:text-xl">❤</span>
             <div className="w-8 md:w-20 h-px bg-red-100"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
