import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Hero } from './components/Hero';
import { BigFrame } from './components/BigFrame';
import { Details } from './components/Details';
import { OurStory } from './components/OurStory';
import { PhotoGallery } from './components/PhotoGallery';
import { RSVP } from './components/RSVP';
import { EnvelopeEntry } from './components/EnvelopeEntry';

interface QRModalProps {
  isOpen: boolean;
  onClose: () => void;
  qrCodeUrl?: string;
}

const QRModal: React.FC<QRModalProps> = ({ isOpen, onClose, qrCodeUrl }) => (
  <AnimatePresence>
    {isOpen && qrCodeUrl && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 cursor-pointer"
        aria-modal="true"
        role="dialog"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 250 }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-white p-4 border-4 border-red-100 shadow-2xl cursor-default"
        >
          <img 
            src={qrCodeUrl} 
            alt="Enlarged Gift QR Code"
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-contain"
          />
           <button 
             onClick={onClose}
             className="absolute -top-5 -right-5 w-10 h-10 bg-white text-red-700 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 hover:text-white transition-all transform hover:rotate-90"
             aria-label="Close QR code view"
           >
             <X size={20} />
           </button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const App: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  // Background for home screen
  const heroBackgroundImage = "https://images.unsplash.com/photo-1519741497674-611481863552?auto-format&fit=crop&q=80&w=2000";
  
  // URL for the big picture frame photo
  const framePhotoUrl = "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto-format&fit=crop&q=80&w=2000";

  // QR Code details for RSVP section
  const qrCodeUrl = "https://i.imgur.com/ZzyuSOb.png"; // Replace with your actual QR code image URL
  const qrTitle = "A Note on Gifts";
  const qrDescription = " For your convenience, gifts may be given via the QR code below or placed in the gift box at the venue. Thank you for sharing in this joyous beginning with us.";


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
    if (!isOpened || isQrModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    if(!isOpened) {
      window.scrollTo(0, 0);
    }
  }, [isOpened, isQrModalOpen]);

  return (
    <div className="relative bg-white text-gray-800 overflow-x-hidden selection:bg-red-100 selection:text-red-700 min-h-screen">
      {!isOpened && <EnvelopeEntry onOpen={handleOpenInvitation} />}

      <QRModal 
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
        qrCodeUrl={qrCodeUrl}
      />
      
      <main className={`relative z-10 transition-all duration-500 ease-in-out ${isOpened ? 'opacity-100' : 'opacity-0 pointer-events-none translate-y-8'} ${isQrModalOpen ? 'blur-sm' : ''}`}>
        <Hero bgImageUrl={heroBackgroundImage} />
        
        <BigFrame 
          imgUrl={framePhotoUrl} 
        />

        <OurStory />
        
        <PhotoGallery />

        <Details />
        
        <RSVP 
          qrCodeUrl={qrCodeUrl}
          qrTitle={qrTitle}
          qrDescription={qrDescription}
          onQrClick={() => setIsQrModalOpen(true)}
        />
      </main>

      <footer className={`py-12 md:py-20 bg-white text-center border-t border-red-50 relative z-10 transition-all duration-500 ${isOpened ? 'opacity-100' : 'opacity-0'} ${isQrModalOpen ? 'blur-sm' : ''}`}>
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-symphony text-4xl sm:text-5xl md:text-7xl text-red-800 mb-6">
            Vince <span className="font-script">&</span> Casian
          </p>
          <p className="text-gray-400 uppercase tracking-[0.3em] text-[9px] md:text-xs">Forever & Always • July 11, 2026</p>
          <div className="mt-8 flex justify-center items-center space-x-4">
             <div className="w-8 h-px bg-red-100"></div>
             <span className="text-red-600 text-lg">❤</span>
             <div className="w-8 h-px bg-red-100"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
