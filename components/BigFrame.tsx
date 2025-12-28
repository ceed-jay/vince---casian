import React from 'react';

interface BigFrameProps {
  imgUrl: string;
  caption?: string;
}

export const BigFrame: React.FC<BigFrameProps> = ({ imgUrl, caption }) => {
  return (
    <section className="py-10 md:py-24 bg-white flex justify-center items-center px-4 md:px-12 overflow-hidden">
      <div className="relative max-w-7xl w-full">
        {/* Cinematic Wide Photo Container - Shadow removed */}
        <div className="relative rounded-none overflow-hidden aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/9] bg-gray-50 group">
          <img 
            src={imgUrl} 
            alt="Couples Portrait" 
            className="w-full h-full object-cover"
          />
          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
        </div>

        {/* Caption Styling */}
        {caption && (
          <div className="text-center mt-8 md:mt-16">
            <p className="text-2xl md:text-5xl text-red-800 tracking-[0.1em] font-serif italic leading-tight">
              {caption}
            </p>
            <div className="w-24 md:w-48 h-px bg-red-100/60 mx-auto mt-8"></div>
          </div>
        )}
      </div>
    </section>
  );
};
