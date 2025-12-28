import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1522673607200-1648832cee98?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1465495910483-0d674b0b7a05?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1520854221256-17451cc35dbe?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&q=80&w=1200"
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '50%' : '-50%',
    opacity: 0,
    scale: 0.7,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? '50%' : '-50%',
    opacity: 0,
    scale: 0.7,
  }),
};

const swipeConfidenceThreshold = 5000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const PhotoGallery: React.FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = ((page % images.length) + images.length) % images.length;

  const paginate = useCallback((newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  }, [page]);

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000); 
    return () => clearInterval(timer);
  }, [paginate]);

  const getAdjacentIndex = (offset: number) => {
    const idx = page + offset;
    return ((idx % images.length) + images.length) % images.length;
  };

  return (
    <section id="gallery" className="py-16 md:py-32 bg-[#fffdfd] overflow-hidden border-y border-red-50/50">
      <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-16 text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-red-600 font-bold uppercase tracking-[0.4em] text-[9px] md:text-[11px] mb-3 block"
        >
          Gallery of Love
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-6xl text-gray-900 mb-4 md:mb-6"
        >
          Cherished Moments
        </motion.h2>
        <div className="w-12 md:w-16 h-px bg-red-100 mx-auto"></div>
      </div>

      <div className="relative h-[280px] sm:h-[450px] md:h-[650px] flex items-center justify-center">
        {/* Navigation - Hidden on small mobile */}
        <button 
          className="absolute left-2 md:left-8 lg:left-12 z-50 p-3 md:p-4 bg-white/95 shadow-xl rounded-full text-red-800 hover:bg-red-700 hover:text-white transition-all backdrop-blur-sm hidden md:flex"
          onClick={() => paginate(-1)}
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} className="md:w-6 md:h-6" />
        </button>
        <button 
          className="absolute right-2 md:right-8 lg:right-12 z-50 p-3 md:p-4 bg-white/95 shadow-xl rounded-full text-red-800 hover:bg-red-700 hover:text-white transition-all backdrop-blur-sm hidden md:flex"
          onClick={() => paginate(1)}
          aria-label="Next slide"
        >
          <ChevronRight size={20} className="md:w-6 md:h-6" />
        </button>

        <div className="relative w-full max-w-6xl flex justify-center items-center h-full px-2 sm:px-4">
          {/* Static Peaks to reduce simultaneous animations */}
          <div className="absolute left-[-25%] sm:left-[-18%] xl:left-[-12%] w-[45%] h-[60%] md:h-[75%] overflow-hidden pointer-events-none z-0 opacity-10">
             <img src={images[getAdjacentIndex(-1)]} className="w-full h-full object-cover grayscale-[30%]" alt="" />
          </div>

          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30, mass: 0.8 },
                scale: { type: "spring", stiffness: 300, damping: 30, mass: 0.8 },
                opacity: { duration: 0.3 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.5}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="relative w-[70%] sm:w-[80%] md:w-[75%] lg:w-[65%] h-full z-20 shadow-[0_15px_50px_rgba(153,27,27,0.12)] md:shadow-[0_40px_100px_rgba(0,0,0,0.15)] border-2 md:border-4 border-white overflow-hidden cursor-grab active:cursor-grabbing will-change-transform"
              style={{ borderRadius: '0px' }}
            >
              <img 
                src={images[imageIndex]} 
                className="w-full h-full object-cover pointer-events-none" 
                alt="Gallery"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Mobile-only subtle hints */}
              <div className="absolute inset-y-0 left-0 w-8 flex items-center justify-center md:hidden pointer-events-none opacity-20">
                <ChevronLeft className="text-white" size={20} />
              </div>
              <div className="absolute inset-y-0 right-0 w-8 flex items-center justify-center md:hidden pointer-events-none opacity-20">
                <ChevronRight className="text-white" size={20} />
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute right-[-25%] sm:right-[-18%] xl:right-[-12%] w-[45%] h-[60%] md:h-[75%] overflow-hidden pointer-events-none z-0 opacity-10">
             <img src={images[getAdjacentIndex(1)]} className="w-full h-full object-cover grayscale-[30%]" alt="" />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8 md:mt-14 gap-1.5 flex-wrap max-w-[240px] sm:max-w-md mx-auto px-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              const diff = i - imageIndex;
              if (diff !== 0) paginate(diff);
            }}
            className={`h-1 transition-all duration-500 rounded-full ${
              imageIndex === i ? 'w-5 md:w-8 bg-red-700' : 'w-1 md:w-2 bg-red-100 hover:bg-red-200'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
