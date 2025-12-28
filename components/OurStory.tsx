import React from 'react';

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
            <div 
              key={index} 
              className={`flex flex-col md:flex-row items-center gap-10 md:gap-24 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image Container - Static with no animation */}
              <div className="flex-[1.6] w-full">
                <div className="relative rounded-none overflow-hidden aspect-[4/3] bg-gray-50">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text Container - Static with smaller description font */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-serif text-3xl md:text-5xl text-gray-900 mb-6">{event.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  {event.description}
                </p>
                <div className="w-16 h-px bg-red-100 mt-10 mx-auto md:mx-0"></div>
              </div>
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
