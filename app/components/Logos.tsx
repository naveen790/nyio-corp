'use client';
import { motion } from 'framer-motion';
import { CLIENT_LOGOS } from '../data';

export default function Logos() {
  return (
    <section className="bg-brand-cream py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Heading */}
        <div className="mb-20 md:mb-28 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4 md:mb-6"
          >
            <div className="w-8 md:w-12 h-[1px] bg-brand-gold/40"></div>
            <p className="text-brand-gold text-[10px] uppercase tracking-[0.8em] font-bold">
              Strategic Partners
            </p>
            <div className="w-8 md:w-12 h-[1px] bg-brand-gold/40"></div>
          </motion.div>
          
          <h3 className="font-serif text-4xl md:text-7xl text-brand-dark tracking-tighter leading-tight">
            Trusted by the industry
            <span className="italic font-light text-brand-gold/80"> vanguard</span>
          </h3>
        </div>

        {/* Grid Logic:
            - grid-cols-2: Large logos for mobile (2 per row)
            - sm:grid-cols-3: Tablet view
            - lg:grid-cols-5: Exact 5 per row for Desktop
        */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 md:gap-x-16 md:gap-y-20 items-center justify-items-center">
          {CLIENT_LOGOS.map((logo, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0.6, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.05 }}
              className="w-full flex justify-center items-center group"
            >
              <div className="relative py-4 w-full flex justify-center items-center h-20 md:h-32">
                <img 
                  src={`/logos/${logo.toLowerCase().replace(/\s+/g, '')}.png`} 
                  alt={logo}
                  className="h-auto w-auto max-h-[45px] md:max-h-[65px] max-w-[120px] md:max-w-[160px] 
                             object-contain opacity-85 transition-all duration-500 ease-out
                             group-hover:opacity-100 group-hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-24 md:mt-32 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-sand/40 to-transparent" />
      </div>
    </section>
  );
}