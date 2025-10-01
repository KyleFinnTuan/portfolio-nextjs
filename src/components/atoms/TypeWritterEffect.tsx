"use client";
import React from 'react'
import { useEffect, useRef, useState } from "react";
import '../css/TypingEffect.css';
import { TypeWritterEffectProps } from '@/types/TypingEffect';

const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;

const TypeWritterEffect: React.FC<TypeWritterEffectProps> = ({textArray, colorArray}) => {
  const typedTextRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  const textArrayIndexRef = useRef(0);
  const charIndexRef = useRef(0);

   useEffect(() => {
    function type() {
      const currentIndex = textArrayIndexRef.current;
      const currentText = textArray[currentIndex];
      const currentColor = colorArray?.[currentIndex] || "#000";

      if (charIndexRef.current < currentText.length) {
        cursorRef.current?.classList.add("typing");

        if (typedTextRef.current) {
          const typedPortion = currentText.substring(0, charIndexRef.current + 1);
          typedTextRef.current.innerHTML = `<span style="color: ${currentColor}">${typedPortion}</span>`;
        }

        charIndexRef.current++;
        setTimeout(type, typingDelay);
      } else {
        cursorRef.current?.classList.remove("typing");
        setTimeout(erase, newTextDelay);
      }
    }

    function erase() {
      const currentIndex = textArrayIndexRef.current;
      const currentText = textArray[currentIndex];
      const currentColor = colorArray?.[currentIndex] || "#000";

      if (charIndexRef.current > 0) {
        cursorRef.current?.classList.add("typing");

        charIndexRef.current--;
        const typedPortion = currentText.substring(0, charIndexRef.current);

        if (typedTextRef.current) {
          typedTextRef.current.innerHTML = `<span style="color: ${currentColor}">${typedPortion}</span>`;
        }

        setTimeout(erase, erasingDelay);
      } else {
        cursorRef.current?.classList.remove("typing");
        textArrayIndexRef.current++;
        if (textArrayIndexRef.current >= textArray.length) textArrayIndexRef.current = 0;
        setTimeout(type, typingDelay + 1100);
      }
    }

    if (textArray.length) {
      setTimeout(type, newTextDelay + 250);
    }
  }, [textArray, colorArray]);

  return (
    <span>
      <span className="typed-text" ref={typedTextRef}></span>
      <span className="cursor" ref={cursorRef}>|</span>
    </span>
  );
};

export default TypeWritterEffect;
