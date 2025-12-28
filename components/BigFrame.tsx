import React from 'react';

interface BigFrameProps {
  imgUrl: string;
  caption?: string;
}

export const BigFrame: React.FC<BigFrameProps> = ({ imgUrl, caption }) => {
  return (
    <section className="py-10 md:py-24 bg-white flex justify-center items-center px-4 md:px-12 overflow-hidden">
      <div className="relative max-w-7xl w-full">
        {/* Cinematic Wide Photo Container */}
        <div className="relative shadow-2xl rounded-none overflow-hidden aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/9] bg-gray-50 group">
          <img 
            src={imgUrl} 
            alt="Couples Portrait" 
            className="w-full h-full object-cover"
          />
          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          
          {/* Minimal Accent Lines */}
          <div className="absolute inset-4 border border-white/20 pointer-events-none rounded-none"></div>
        </div>

        {/* Caption Styling */}
        {caption && (
          <div className="text-center mt-8 md:mt-16">
            <p className="text-2xl md:text-5xl text-red-800 tracking-[0.1em] font-serif italic leading-tight">
              {caption}
            </p>
            <div className="flex justify-center items-center gap-4 mt-8">
              <div className="w-12 md:w-24 h-px bg-red-100/60"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-red-600/40"></div>
              <div className="w-12 md:w-24 h-px bg-red-100/60"></div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
