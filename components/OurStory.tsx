import React from 'react';

const events = [
  {
    title: "The Beginning",
    description: "Our paths crossed and simple moments became cherished memories.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "The Bond",
    description: "A journey of laughter, shared dreams, and a connection that grew deeper with time.",
    image: "https://images.unsplash.com/photo-1522673607200-1648832cee98?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "The Promise",
    description: "The moment that changed forever into a beautiful reality we now share.",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800"
  }
];

export const OurStory: React.FC = () => {
  return (
    <section id="story" className="py-20 md:py-32 bg-white px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 md:mb-32">
          <span className="text-red-600 font-bold uppercase tracking-[0.5em] text-[10px] md:text-[11px] mb-4 block">
            Chronicles of Us
          </span>
          <h2 className="font-serif text-5xl md:text-7xl text-gray-900 mb-8">
            Our Story
          </h2>
          <div className="w-16 h-px bg-red-200 mx-auto"></div>
        </div>

        <div className="space-y-24 md:space-y-48">
          {events.map((event, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center gap-10 md:gap-24 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Image Container - Now flex-[1.6] to make it significantly larger */}
              <div className="flex-[1.6] w-full">
                <div className="relative border-2 md:border-4 border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-none overflow-hidden hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-700">
                  <div className="overflow-hidden aspect-[16/10] md:aspect-[4/3]">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover transition-all duration-1000"
                    />
                  </div>
                </div>
              </div>

              {/* Text Container - Reduced flex to emphasize photo */}
              <div className="flex-1 text-center md:text-left space-y-4">
                <h3 className="font-serif text-3xl md:text-5xl text-gray-900">{event.title}</h3>
                {/* Description - Made smaller as requested */}
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed italic font-light max-w-sm mx-auto md:mx-0">
                  "{event.description}"
                </p>
                <div className={`pt-6 flex ${index % 2 !== 0 ? 'md:justify-end' : 'md:justify-start'} justify-center`}>
                  <div className="w-12 h-px bg-red-200"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
