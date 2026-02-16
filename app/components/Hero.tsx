'use client';
import { motion } from 'framer-motion';
import Link from 'next/link'; 

export default function Hero() {
  return (
    // Changed h-screen to min-h-screen for better mobile handling
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-cream py-20">
      {/* Texture Overlay - Keeping your premium touch */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>

      <div className="relative z-10 text-center px-6">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-brand-gold text-[9px] md:text-xs uppercase tracking-[0.8em] mb-8 block font-bold"
        >
          Est. 2011 • Sourcing Excellence
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          // Adjusted mobile text from 6xl to 5xl to ensure no clipping
          className="font-heading text-5xl md:text-9xl text-brand-slate leading-[1.1] md:leading-[0.9] mb-10"
        >
          The Art of <br /> 
          <span className="italic font-light text-brand-gold">Apparel.</span>
        </motion.h1>

        {/* Animated Divider */}
        <div className="flex justify-center mb-10">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-[1px] bg-brand-gold"
          ></motion.div>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          // Slightly smaller text on mobile to keep the "breathe"
          className="max-w-md mx-auto text-zinc-500 text-xs md:text-base leading-relaxed tracking-wide font-body"
        >
          Bridging the gap between visionary design and <br className="hidden md:block" /> global manufacturing scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12"
        >
          <Link href="#gallery" className="btn-premium inline-block w-full md:w-auto">
            Explore Collection
          </Link>
        </motion.div>
      </div>

      {/* Side Element - Hidden on mobile, visible on desktop */}
      <div className="absolute left-6 bottom-24 hidden lg:block">
        <div className="relative">
          <p className="absolute left-0 bottom-0 whitespace-nowrap text-[10px] uppercase tracking-[0.5em] text-brand-gold/40 -rotate-90 origin-bottom-left">
            Manufacturing Scale • 2026
          </p>
        </div>
      </div>
    </section>
  );
}