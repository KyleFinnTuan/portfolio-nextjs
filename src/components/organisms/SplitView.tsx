'use client';

import React, { useRef, useEffect, useCallback } from 'react';
import '../css/SplitView.css';

const SplitView: React.FC = () => {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const topPanelRef = useRef<HTMLDivElement | null>(null);
  const handleRef = useRef<HTMLDivElement | null>(null);

  const onMouseMove = useCallback((event: MouseEvent) => {
    if (!parentRef.current || !topPanelRef.current || !handleRef.current) return;

    const parent = parentRef.current;
    const topPanel = topPanelRef.current;
    const handle = handleRef.current;

    const isSkewed = parent.classList.contains('skewed');
    const skewHack = isSkewed ? 1000 : 0;

    const delta = (event.clientX - window.innerWidth / 2) * 0.5;

    const leftPos = event.clientX + skewHack + delta;
    handle.style.left = `${event.clientX + delta}px`;
    topPanel.style.width = `${leftPos}px`;
  }, []);

  useEffect(() => {
    const parent = parentRef.current;
    if (!parent) return;

    const onTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        onMouseMove(event.touches[0] as unknown as MouseEvent);
      }
    };

    parent.addEventListener('mousemove', onMouseMove);
    parent.addEventListener('touchmove', onTouchMove);

    return () => {
      parent.removeEventListener('mousemove', onMouseMove);
      parent.removeEventListener('touchmove', onTouchMove);
    };
  }, [onMouseMove]);

  return (
    <>
      {/* Mobile combined text */}
      <div className="mobile-intro">
        <h1 className="text-4xl font-extrabold mb-2 text-black text-center">
          System Integrator &lt;Coder&gt;
        </h1>
        <p className="text-lg text-center text-black">
          Helping you build systems that are easy to use and maintain, while writing clean, elegant, and efficient code.
        </p>
      </div>

      {/* Split view section */}
      <div className="splitview skewed" ref={parentRef}>
        <div className="panel bottom">
          <div className="content">
            <div className="description">
              <h1 className='text-5xl font-extrabold mb-2 text-black'>System Integrator</h1>
              <p className='text-xl text-center text-black'>Help you to build a system that is easy to use and maintain.</p>
            </div>
            <img
              className='rounded-md'
              src="/profile/kelvin-Avatar-Plain.png"
              alt="Original"
            />
          </div>
        </div>

        <div className="panel top" ref={topPanelRef}>
          <div className="content">
            <div className="description">
              <h1 className='text-5xl mb-2'>&lt;<span className='font-extrabold'>Coder</span>&gt;</h1>
              <p className='text-xl text-center'>Front end developer who writes clean, elegant and efficient code.</p>
            </div>
            <img className='rounded-md'
              src="/profile/kelvin-avatar-colorful.png"
              alt="Duotone"
            />
          </div>
        </div>

        <div className="handle" ref={handleRef}></div>
      </div>
    </>
  );
};

export default SplitView;
