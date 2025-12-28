
import React from 'react';

interface FloralProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'inline';
  size: 'small' | 'medium' | 'large';
}

export const FloralDecoration: React.FC<FloralProps> = ({ position, size }) => {
  const sizeClasses = {
    small: 'w-12 h-12',
    medium: 'w-24 h-24',
    large: 'w-64 h-64'
  };

  const positionClasses = {
    'top-left': 'fixed top-0 left-0 rotate-0',
    'top-right': 'fixed top-0 right-0 -rotate-90',
    'bottom-left': 'fixed bottom-0 left-0 rotate-90',
    'bottom-right': 'fixed bottom-0 right-0 rotate-180',
    'inline': 'relative'
  };

  return (
    <div className={`${sizeClasses[size]} ${positionClasses[position]}`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-40">
        <path d="M50 0C50 0 45 20 40 30C35 40 20 50 20 50C20 50 40 45 50 40C60 35 80 50 80 50C80 50 65 40 60 30C55 20 50 0 50 0Z" fill="#DC2626" />
        <circle cx="50" cy="50" r="5" fill="#991B1B" />
        <path d="M50 50C50 50 40 60 40 70C40 80 50 90 50 90C50 90 60 80 60 70C60 60 50 50 50 50Z" fill="#EF4444" />
        <path d="M30 40C30 40 20 35 10 35C0 35 10 45 10 45C10 45 20 50 30 40Z" fill="#F87171" />
        <path d="M70 40C70 40 80 35 90 35C100 35 90 45 90 45C90 45 80 50 70 40Z" fill="#F87171" />
      </svg>
    </div>
  );
};
