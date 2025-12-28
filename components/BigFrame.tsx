import React from 'react';
import { motion } from 'framer-motion';

interface BigFrameProps {
  imgUrl: string;
  caption?: string;
}

export const BigFrame: React.FC<BigFrameProps> = ({ imgUrl, caption }) => {
  return (
    <section className="py-10 md:py-24 bg-white flex justify-center items-center px-4 md:px-12 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-7xl w-full"
      >
        {/* Cinematic Wide Photo Container */}
        <div className="relative shadow-2xl rounded-lg overflow-hidden aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/9] bg-gray-50 group">
          <motion.img 
            src={imgUrl} 
            alt="Couples Portrait" 
            className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
          />
          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          
          {/* Minimal Accent Lines (Optional, but adds a touch of elegance) */}
          <div className="absolute inset-4 border border-white/20 pointer-events-none rounded-sm"></div>
        </div>

        {/* Caption Styling */}
        {caption && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-center mt-8 md:mt-16"
          >
            <p className="text-2xl md:text-5xl text-red-800 tracking-[0.1em] font-serif italic leading-tight">
              {caption}
            </p>
            <div className="flex justify-center items-center gap-4 mt-8">
              <div className="w-12 md:w-24 h-px bg-red-100/60"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-red-600/40"></div>
              <div className="w-12 md:w-24 h-px bg-red-100/60"></div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};
