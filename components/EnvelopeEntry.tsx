import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface EnvelopeEntryProps {
  onOpen: () => void;
}

export const EnvelopeEntry: React.FC<EnvelopeEntryProps> = ({ onOpen }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOpen = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onOpen();
    }, 1100);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[#fdfcfb] overflow-hidden px-6">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#991b1b 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <motion.div
        animate={isAnimating ? { scale: 1.1, opacity: 0, y: -60 } : { scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
        className="relative flex flex-col items-center w-full"
      >
        <div className="text-center mb-10 md:mb-20 space-y-3 md:space-y-4">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-800 uppercase tracking-[0.4em] text-[9px] md:text-[11px] font-bold"
          >
            A Special Invitation
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-3xl sm:text-4xl md:text-7xl text-gray-900"
          >
            Vince & Casian
          </motion.h2>
        </div>

        {/* Responsive Envelope Container */}
        <div 
          onClick={handleOpen}
          className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[550px] aspect-[1.4/1] cursor-pointer group"
        >
          {/* Main Envelope Body */}
          <div className="absolute inset-0 bg-[#f9f7f4] shadow-2xl rounded-sm border border-red-50/50 overflow-hidden">
            <div className="absolute inset-0" style={{ 
              clipPath: 'polygon(0% 0%, 50% 50%, 100% 0%, 100% 100%, 0% 100%)',
              background: '#fffdfa',
              boxShadow: 'inset 0 0 40px rgba(0,0,0,0.03)'
            }}></div>
          </div>

          {/* Top Flap */}
          <motion.div 
            initial={{ rotateX: 0 }}
            animate={isAnimating ? { rotateX: 180 } : { rotateX: 0 }}
            transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
            style={{ 
              transformOrigin: 'top', 
              zIndex: isAnimating ? 5 : 20,
              clipPath: 'polygon(0% 0%, 50% 100%, 100% 0%)'
            }}
            className="absolute top-0 left-0 w-full h-[60%] bg-[#f4f2ef] shadow-sm"
          >
            <div className="absolute inset-0 bg-red-50/10"></div>
          </motion.div>

          {/* Wax Seal / Stamp */}
          <motion.div 
            animate={isAnimating ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
            className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center"
          >
            <div className="relative">
              <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 bg-red-700 rounded-full shadow-[0_20px_40px_rgba(153,27,27,0.4)] flex items-center justify-center border-4 border-red-800/20 group-hover:scale-110 transition-transform duration-700 p-4 md:p-8 overflow-hidden">
                <img 
                  src="https://i.imgur.com/Shplw1y.png" 
                  alt="Wedding Crest"
                  className="w-full h-full object-contain brightness-[1.8] contrast-125 select-none pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none rounded-full"></div>
              </div>
              {/* Animated Ring */}
              <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -inset-4 border border-red-200/20 rounded-full pointer-events-none"
              />
            </div>
          </motion.div>

          {/* Prompt Message */}
          <motion.div 
            animate={isAnimating ? { opacity: 0 } : { opacity: 1 }}
            className="absolute -bottom-16 left-0 right-0 text-center"
          >
            <p className="text-gray-400 font-serif italic text-xs md:text-sm animate-pulse tracking-widest uppercase">Click to Unveil Invitation</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative corners */}
      <div className="absolute top-6 left-6 md:top-16 md:left-16 w-20 h-20 md:w-40 md:h-40 text-red-100 opacity-20 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="currentColor"><path d="M0 0C40 0 60 20 60 60C60 40 40 40 0 0Z" /></svg>
      </div>
      <div className="absolute bottom-6 right-6 md:bottom-16 md:right-16 w-20 h-20 md:w-40 md:h-40 text-red-100 opacity-20 rotate-180 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="currentColor"><path d="M0 0C40 0 60 20 60 60C60 40 40 40 0 0Z" /></svg>
      </div>
    </div>
  );
};