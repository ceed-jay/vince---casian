import React from 'react';
import { MapPin, Shirt, Baby, Navigation as NavIcon } from 'lucide-react';

const DetailCard: React.FC<{ icon: React.ReactNode, title: string, content: string, subContent?: string }> = ({ icon, title, content, subContent }) => (
  <div className="flex flex-col items-center text-center group transition-all py-8 h-full">
    <div className="flex flex-col items-center flex-grow">
      <div className="w-10 h-10 md:w-12 md:h-12 bg-red-700 rounded-full flex items-center justify-center text-white mb-6 md:mb-8 shadow-lg shadow-gray-200 transition-transform duration-500">
        {icon}
      </div>
      <h3 className="font-serif text-2xl md:text-3xl text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-500 font-light text-xs md:text-sm italic leading-relaxed max-w-xs mx-auto mb-8">{content}</p>
    </div>
    {subContent && (
      <div className="mt-auto pt-6 border-t border-red-50 w-full flex justify-center">
        <p className="text-red-700 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold whitespace-nowrap">{subContent}</p>
      </div>
    )}
  </div>
);

export const Details: React.FC = () => {
  return (
    <section id="details" className="py-20 md:py-32 relative overflow-hidden bg-white px-6">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-serif text-4xl md:text-6xl text-gray-900 mb-6">
            Celebration Details
          </h2>
          <div className="w-24 h-px bg-red-200 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-stretch">
          <DetailCard 
            icon={<MapPin size={18} />}
            title="The Venue"
            content="Our celebration will be hosted at the elegant Barisbis in Camalig, Albay. Our staff will be ready to guide you."
            subContent="Camalig, Albay 4502"
          />
          <DetailCard 
            icon={<Shirt size={18} />}
            title="Dress Code"
            content="We invite our guests to join us in Semi-Formal attire, reflecting the romance and elegance of the day."
            subContent="Semi-Formal / Formal"
          />
          <DetailCard 
            icon={<Baby size={18} />}
            title="Children"
            content="To allow all guests to relax and enjoy the evening, we have chosen for our wedding to be an adults-only occasion."
            subContent="Adults Only Reception"
          />
        </div>

        <div className="mt-16 md:mt-32 text-center border-t border-red-50 pt-16">
          <div className="flex justify-center mb-6">
            <div className="shrink-0 p-5 bg-red-700 text-white shadow-xl shadow-gray-200 rounded-full">
              <NavIcon size={20} />
            </div>
          </div>
          <h4 className="font-serif text-2xl text-gray-900 mb-2">Let's Get You There</h4>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-lg mx-auto mb-8">
            Follow the link for the most direct route to Barisbis. We can't wait to see you!
          </p>
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Barisbis+Camalig+Albay"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-red-700 text-white rounded-none text-xs font-bold uppercase tracking-widest hover:bg-red-800 transition-all shadow-lg shadow-red-200"
          >
            Open Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};
