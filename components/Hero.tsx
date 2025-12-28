import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  bgImageUrl?: string;
}

export const Hero: React.FC<HeroProps> = ({ bgImageUrl }) => {
  return (
    <section id="home" className="relative h-[100svh] flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-white">
      {/* Background Image Layer */}
      {bgImageUrl && (
        <div className="absolute inset-0 z-0">
          <img 
            src={bgImageUrl} 
            alt="Wedding Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60"></div>
        </div>
      )}

      {/* Date - Positioned separately at the top */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        className="absolute top-24 left-0 right-0 z-10 text-white/90 text-sm sm:text-base md:text-lg uppercase tracking-[0.3em] sm:tracking-[0.4em] drop-shadow-lg font-light"
      >
        May 31, 2026
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="z-10 relative w-full max-w-[95vw] sm:max-w-4xl"
      >
        <h1 className="font-symphony text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] text-white mb-6 tracking-normal drop-shadow-2xl leading-[0.8] sm:leading-none sm:whitespace-nowrap">
          <span className="block sm:inline">Vince</span>
          <span className="text-red-800 font-script inline-block mx-1 sm:mx-4 transform sm:translate-y-2 text-4xl sm:text-5xl md:text-7xl lg:text-[8rem]">&</span>
          <span className="block sm:inline">Casian</span>
        </h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="space-y-4 px-4"
        >
          <div>
            <p className="font-serif italic text-base sm:text-lg md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-lg font-light">
              "What God has joined together, let no one separate."
            </p>
            <p className="font-serif italic text-xs sm:text-sm text-white/80 max-w-2xl mx-auto mt-3 drop-shadow-lg font-light">
              (Matthew 19:6)
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-px bg-red-500/50"></div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-12 z-20 flex flex-col items-center gap-3"
      >
        <span className="text-white/40 text-[9px] uppercase tracking-[0.4em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-white/40 w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};
