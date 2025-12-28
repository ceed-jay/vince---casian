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

      {/* Floating Sparkles/Petals Effect */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-red-200/40 z-[3] pointer-events-none"
          initial={{ 
            x: Math.random() * 400 - 200, 
            y: -50, 
            rotate: 0,
            opacity: 0 
          }}
          animate={{ 
            y: '110vh', 
            rotate: 360,
            opacity: [0, 0.6, 0]
          }}
          transition={{ 
            duration: 10 + Math.random() * 10, 
            repeat: Infinity, 
            delay: i * 3,
            ease: "linear"
          }}
          style={{ left: `${Math.random() * 100}%` }}
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C12 2 10 8 4 10C10 12 12 18 12 18C12 18 14 12 20 10C14 8 12 2 12 2Z" />
          </svg>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="z-10 relative w-full max-w-[95vw] sm:max-w-4xl"
      >
        <h1 className="font-symphony text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] text-white mb-6 tracking-normal drop-shadow-2xl leading-none">
          Vince <span className="text-red-500 font-script sm:inline-block">&</span> Casian
        </h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="space-y-6 px-4"
        >
          <p className="font-serif italic text-lg sm:text-xl md:text-3xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-lg font-light">
            "What God has joined together, let no one separate."
          </p>
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