'use client'; 

import React, { useEffect, useRef } from 'react';

const HeroParallax: React.FC<HeroParallaxProps> = ({ children }) => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const heroEl = heroRef.current;

      if (heroEl) {
        const translateY = scroll / 100;
        const scale = (100 - scroll / 100) / 100;
        heroEl.style.transform = `translate3d(0, ${translateY}%, 0) scale(${scale})`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={heroRef}
      className="hero"
      style={{
        transition: 'transform 0.1s ease-out',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};

export default HeroParallax;
