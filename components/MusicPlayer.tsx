
import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Volume2, VolumeX } from 'lucide-react';

interface MusicPlayerProps {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying, setIsPlaying }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(err => {
          console.warn("Autoplay blocked or failed:", err);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, setIsPlaying]);

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <audio 
        ref={audioRef}
        loop
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // Placeholder royalty-free piano
      />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsPlaying(!isPlaying)}
        className="relative group p-4 bg-white border border-red-100 rounded-full shadow-2xl flex items-center justify-center text-red-700 overflow-hidden"
      >
        <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        <div className="relative z-10 group-hover:text-white transition-colors">
          {isPlaying ? <Volume2 size={24} className="animate-pulse" /> : <VolumeX size={24} />}
        </div>
        
        {/* Play indicator */}
        <AnimatePresence>
          {isPlaying && (
            <motion.div 
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute inset-0 bg-red-100 rounded-full pointer-events-none"
            />
          )}
        </AnimatePresence>
      </motion.button>
      
      <div className="absolute bottom-full right-0 mb-4 pointer-events-none">
        <AnimatePresence>
          {isPlaying && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-red-50 shadow-lg text-[10px] uppercase tracking-tighter whitespace-nowrap text-red-800 font-bold flex items-center gap-2"
            >
              <Music size={12} /> Playing Romance No. 1
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
