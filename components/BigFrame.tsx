
import React from 'react';
import { motion } from 'framer-motion';

interface BigFrameProps {
  imgUrl: string;
  caption?: string;
}

export const BigFrame: React.FC<BigFrameProps> = ({ imgUrl, caption }) => {
  return (
    <section className="py-16 md:py-32 bg-white flex justify-center items-center px-4 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-5xl w-full"
      >
        {/* Ornate Frame Border */}
        <div className="relative p-4 md:p-12 bg-white shadow-[0_30px_100px_rgba(153,27,27,0.12)] rounded-sm border border-red-50/50">
          {/* Inner Decorative Line */}
          <div className="absolute inset-3 md:inset-8 border border-red-100/50 pointer-events-none"></div>
          
          {/* Floral Corners */}
          <div className="absolute top-0 left-0 w-12 h-12 md:w-32 md:h-32 text-red-600/10 -translate-x-1/4 -translate-y-1/4 pointer-events-none">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M0 0C40 0 60 20 60 60C60 40 40 40 0 0Z" />
            </svg>
          </div>
          <div className="absolute top-0 right-0 w-12 h-12 md:w-32 md:h-32 text-red-600/10 translate-x-1/4 -translate-y-1/4 rotate-90 pointer-events-none">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M0 0C40 0 60 20 60 60C60 40 40 40 0 0Z" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 w-12 h-12 md:w-32 md:h-32 text-red-600/10 -translate-x-1/4 translate-y-1/4 -rotate-90 pointer-events-none">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M0 0C40 0 60 20 60 60C60 40 40 40 0 0Z" />
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 w-12 h-12 md:w-32 md:h-32 text-red-600/10 translate-x-1/4 translate-y-1/4 rotate-180 pointer-events-none">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M0 0C40 0 60 20 60 60C60 40 40 40 0 0Z" />
            </svg>
          </div>

          {/* The Image */}
          <div className="relative overflow-hidden aspect-[16/11] bg-gray-50 group">
            <motion.img 
              src={imgUrl} 
              alt="Couples Portrait" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>
        </div>

        {/* Caption */}
        {caption && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-center mt-8 md:mt-12"
          >
            <p className="text-xl md:text-3xl text-red-700 tracking-[0.2em] font-medium font-serif italic">
              {caption}
            </p>
            <div className="flex justify-center items-center gap-3 mt-6">
              <div className="w-8 md:w-16 h-px bg-red-100"></div>
              <div className="w-1 h-1 rounded-full bg-red-600"></div>
              <div className="w-8 md:w-16 h-px bg-red-100"></div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};
