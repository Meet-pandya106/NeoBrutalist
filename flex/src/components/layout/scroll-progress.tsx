'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/cn';

interface ScrollProgressProps {
  showCounter?: boolean;
  totalSections?: number;
}

export function ScrollProgress({ showCounter = false, totalSections = 5 }: ScrollProgressProps) {
  const [progress, setProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      
      const p = Math.min(100, Math.max(0, (scrolled / documentHeight) * 100));
      setProgress(p);

      if (showCounter) {
        // Simple heuristic for current section based on scroll position
        const sectionSize = documentHeight / totalSections;
        const current = Math.min(totalSections, Math.max(1, Math.ceil(scrolled / sectionSize)));
        setCurrentSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showCounter, totalSections]);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
        <div 
          className="h-full bg-accent transition-all duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {showCounter && (
        <div className="fixed bottom-8 right-8 z-50 font-display font-bold text-xl mix-blend-difference text-paper pointer-events-none">
          {String(currentSection).padStart(2, '0')} / {String(totalSections).padStart(2, '0')}
        </div>
      )}
    </>
  );
}
