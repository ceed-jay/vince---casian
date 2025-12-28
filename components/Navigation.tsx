import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Details', href: '#details' },
    { label: 'Our Story', href: '#story' },
    { label: 'RSVP', href: '#rsvp' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 py-6 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-red-50' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-symphony text-3xl text-red-800"
        >
          V&C
        </motion.div>
        
        <div className="flex space-x-8 md:space-x-12">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-gray-800 hover:text-red-700 transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-red-600 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};