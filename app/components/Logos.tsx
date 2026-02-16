'use client';
import { motion } from 'framer-motion';
import { CLIENT_LOGOS } from '../data';

export default function Logos() {
  return (
    <section className="bg-brand-cream py-16 md:py-24 px-6 border-t border-brand-gold/10">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex items-center gap-4 md:gap-8 mb-12 md:mb-20">
          <div className="h-[1px] flex-1 bg-brand-gold/30"></div>
          <p className="text-[9px] md:text-[11px] uppercase tracking-[0.5em] md:tracking-[0.7em] text-brand-gold font-bold whitespace-nowrap">
            Manufacturing Partners
          </p>
          <div className="h-[1px] flex-1 bg-brand-gold/30"></div>
        </div>

        {/* Responsive Grid: 2 cols on mobile, 3 on tablets/desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-16">
          {CLIENT_LOGOS.map((logo, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="relative group"
            >
              <div className="bg-white aspect-[16/9] flex items-center justify-center p-6 md:p-12 shadow-sm border border-brand-gold/5 transition-all duration-700 group-hover:shadow-premium group-hover:border-brand-gold/20 group-hover:-translate-y-2">
                <img 
                  src={`/logos/${logo.toLowerCase().replace(/\s+/g, '')}.png`} 
                  alt={logo}
                  className="max-h-full max-w-full object-contain filter brightness-95 group-hover:brightness-100 transition-all duration-500"
                />
              </div>
              
              {/* Labels only visible on hover or desktop to keep mobile clean */}
              <div className="mt-3 text-center md:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-brand-gold font-semibold">
                  Verified Partner
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}