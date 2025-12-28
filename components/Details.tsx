import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Shirt, Baby, Navigation } from 'lucide-react';

const DetailCard: React.FC<{ icon: React.ReactNode, title: string, content: string, subContent?: string, delay: number }> = ({ icon, title, content, subContent, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay }}
    whileHover={{ y: -5 }}
    className="flex flex-col items-center text-center group transition-all py-8"
  >
    <div className="w-12 h-12 md:w-14 md:h-14 bg-red-700 flex items-center justify-center text-white mb-6 md:mb-8 shadow-lg shadow-red-100 group-hover:scale-110 transition-transform duration-500">
      {icon}
    </div>
    <h3 className="font-serif text-2xl md:text-3xl text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-500 font-normal text-base md:text-lg leading-relaxed max-w-xs mx-auto">{content}</p>
    {subContent && (
      <div className="mt-6 pt-6 border-t border-red-50 w-full flex justify-center">
        <p className="text-red-700 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold whitespace-nowrap">{subContent}</p>
      </div>
    )}
  </motion.div>
);

export const Details: React.FC = () => {
  return (
    <section id="details" className="py-20 md:py-32 relative overflow-hidden bg-white px-6">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-6xl text-gray-900 mb-6"
          >
            Celebration Details
          </motion.h2>
          <div className="flex justify-center items-center gap-4">
            <div className="w-12 h-px bg-red-200"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-red-700"></div>
            <div className="w-12 h-px bg-red-200"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          <DetailCard 
            icon={<MapPin size={20} />}
            title="The Venue"
            content="Our celebration will be hosted at the elegant Barisbis in Camalig, Albay. Our staff will be ready to guide you."
            subContent="Camalig, Albay 4502"
            delay={0.1}
          />
          <DetailCard 
            icon={<Shirt size={20} />}
            title="Dress Code"
            content="We invite our guests to join us in Semi-Formal attire, reflecting the romance and elegance of the day."
            subContent="Semi-Formal / Formal"
            delay={0.2}
          />
          <DetailCard 
            icon={<Baby size={20} />}
            title="Children"
            content="To allow all guests to relax and enjoy the evening, we have chosen for our wedding to be an adults-only occasion."
            subContent="Adults Only Reception"
            delay={0.3}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-32 flex flex-col md:flex-row items-center gap-8 border-t border-red-50 pt-16"
        >
          <div className="shrink-0 p-5 bg-red-700 text-white shadow-xl shadow-red-200">
            <Navigation size={24} />
          </div>
          <div className="text-center md:text-left">
            <h4 className="font-serif text-2xl text-gray-900 mb-2">Navigation</h4>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">Follow the link to find the most direct route to Barisbis. We can't wait to see you there!</p>
          </div>
          <motion.a 
            href="https://www.google.com/maps/search/?api=1&query=Barisbis+Camalig+Albay"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="w-full md:w-auto md:ml-auto px-10 py-4 bg-gray-900 text-white rounded-none text-xs font-bold uppercase tracking-widest hover:bg-red-800 transition-all shadow-lg flex items-center justify-center gap-2"
          >
            Get Directions
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
