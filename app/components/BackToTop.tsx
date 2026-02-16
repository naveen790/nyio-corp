'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show slightly earlier on mobile (300px) vs desktop (500px)
      const threshold = window.innerWidth < 768 ? 300 : 500;
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          // Responsive positioning: closer to edge on mobile, more breathing room on desktop
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[9999] active:scale-90 transition-transform"
          aria-label="Back to top"
        >
          {/* Size: 12 (48px) on mobile, 14 (56px) on desktop */}
          <div className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-white/90 backdrop-blur-md border border-brand-gold/30 rounded-full shadow-premium group transition-all duration-500 hover:border-brand-gold">
            
            <svg 
              className="w-5 h-5 text-brand-gold transition-transform duration-500 group-hover:-translate-y-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
            </svg>
            
            {/* Desktop-only decorative ring (hidden on touch devices to save performance) */}
            <div className="absolute inset-0 border border-transparent md:group-hover:border-brand-gold/20 rounded-full scale-110 opacity-0 md:group-hover:opacity-100 transition-all duration-700"></div>
          </div>
          
          {/* Mobile indicator - small text only visible on desktop hover */}
          <span className="hidden md:block absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-brand-slate text-white text-[9px] uppercase tracking-[0.2em] px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            Top
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}