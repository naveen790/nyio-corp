'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  // Smooth scroll to top for the "Back to Home" transition
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`fixed w-full z-[1000] transition-all duration-500 px-6 md:px-12 ${
        scrolled || isOpen ? 'py-4 bg-white/95 backdrop-blur-md shadow-sm' : 'py-8 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo with Smooth Scroll transition */}
          <Link 
            href="/" 
            onClick={scrollToTop}
            className="flex items-center gap-3 z-[1001] group"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full border border-brand-gold/20 group-hover:border-brand-gold transition-colors duration-500"
            >
              <Image 
                src="/favicon1.ico" 
                alt="Nyio Corp Logo"
                fill
                className="object-cover p-1.5"
              />
            </motion.div>
            <span className="font-heading text-xl md:text-2xl italic text-brand-slate transition-colors duration-300 group-hover:text-brand-gold">
              Nyio <span className="text-brand-gold not-italic font-light tracking-tight group-hover:text-brand-slate">Corp</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-12">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-[11px] uppercase tracking-[0.4em] font-bold text-brand-slate hover:text-brand-gold transition-colors relative group"
              >
                {link.name}
                <motion.span 
                  className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-gold"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-[1001] p-2 -mr-2"
            aria-label="Toggle Menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <motion.span 
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-full h-[1.5px] bg-brand-slate block"
              />
              <motion.span 
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-[1.5px] bg-brand-slate block"
              />
              <motion.span 
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-full h-[1.5px] bg-brand-slate block"
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Full-screen Mobile Menu with Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-cream z-[1000] flex flex-col items-center justify-center px-6 md:hidden"
          >
            {/* Background Decorative Logo */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
               <h1 className="text-[30vw] font-heading italic select-none">Nyio</h1>
            </div>

            <div className="flex flex-col gap-12 text-center relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.3, ease: "circOut" }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-heading italic text-6xl text-brand-slate hover:text-brand-gold transition-colors active:scale-95 block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-10"
              >
                <div className="h-[1px] w-12 bg-brand-gold mx-auto mb-6"></div>
                <p className="text-[10px] uppercase tracking-[0.5em] text-brand-gold font-bold">
                  Tiruppur • Global
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}