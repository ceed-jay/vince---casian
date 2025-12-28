import React from 'react';
import { motion } from 'framer-motion';

const events = [
  {
    title: "The Beginning",
    description: "Our paths crossed and simple moments became cherished memories. A journey that started with a hello and transformed into a lifetime of shared laughter.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "The Bond",
    description: "A journey of laughter, shared dreams, and a connection that grew deeper with every passing season. We found in each other a home for our souls.",
    image: "https://images.unsplash.com/photo-1522673607200-1648832cee98?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "The Promise",
    description: "The moment that changed forever into a beautiful reality we now share. With a simple 'Yes', we began the most beautiful chapter of our lives.",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800"
  }
];

export const OurStory: React.FC = () => {
  return (
    <section id="story" className="py-20 md:py-32 bg-white px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 md:mb-32">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-red-600 font-bold uppercase tracking-[0.5em] text-[10px] md:text-[11px] mb-4 block"
          >
            Chronicles of Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl text-gray-900 mb-8"
          >
            Our Story
          </motion.h2>
          <div className="w-16 h-px bg-red-200 mx-auto"></div>
        </div>

        <div className="space-y-24 md:space-y-48">
          {events.map((event, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row items-center gap-10 md:gap-24 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image Container - No shadow or border */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="flex-[1.6] w-full"
              >
                <div className="relative rounded-none overflow-hidden aspect-[4/3] bg-gray-50">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  />
                </div>
              </motion.div>

              {/* Text Container */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1 text-center md:text-left"
              >
                <h3 className="font-serif text-3xl md:text-5xl text-gray-900 mb-6">{event.title}</h3>
                <p className="text-gray-500 text-sm md:text-lg leading-relaxed font-light italic">
                  {event.description}
                </p>
                <div className={`flex justify-center md:justify-start items-center gap-4 mt-10`}>
                  <div className="w-8 h-px bg-red-100"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#710000]"></div>
                  <div className="w-8 h-px bg-red-100"></div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-red-50/20 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-red-50/20 rounded-full blur-[100px] -z-10"></div>
    </section>
  );
};
