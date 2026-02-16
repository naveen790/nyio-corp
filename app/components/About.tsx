'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="bg-brand-cream py-32 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Core Experience Section */}
        <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-gold text-[10px] uppercase tracking-[0.6em] font-bold block mb-6">
              Our Legacy
            </span>
            <h2 className="font-heading italic text-brand-slate mb-8 leading-tight">
              15 Years of <br />Manufacturing Mastery.
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-8 font-body">
              Nyio Corp is a specialized apparel sourcing agent with a deep focus on high-quality production. For over a decade, we have bridged the gap between global retailers and specialized manufacturing hubs in Tiruppur.
            </p>
            <div className="border-l-2 border-brand-gold pl-6 py-2">
              <p className="text-brand-slate/60 text-sm italic font-heading">
                "We don't just source; we manage the lifecycle of the garment from yarn selection to final retail distribution."
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] md:aspect-square bg-white shadow-premium overflow-hidden border-8 border-white"
          >
             {/* Note: Ensure this image exists in your public folder or use a placeholder */}
             <img 
               src="/factory-floor.jpg" 
               alt="Nyio Corp Factory" 
               className="w-full h-full object-cover transition-transform duration-[3s] hover:scale-110" 
             />
             <div className="absolute inset-0 bg-brand-slate/5"></div>
          </motion.div>
        </div>

        {/* Vision & Values Cards */}
        <div id="vision" className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Precision Sourcing",
              desc: "We build clear and honest supply chains that turn your creative designs into high-quality products at any scale.",
              label: "Vision"
            },
            {
              title: "On-Time Delivery",
              desc: "We respect your deadlines as much as the quality of our fabric. Our team ensures every order arrives exactly when promised.",
              label: "Punctuality"
            },
            {
              title: "Total Quality Control",
              desc: "From the first thread to the final package, we inspect every detail to make sure every garment is perfect.",
              label: "Quality"
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="card-surface p-12 group hover:border-brand-gold/30 transition-all"
            >
              <span className="text-brand-gold text-[10px] uppercase tracking-[0.4em] mb-6 block font-bold">
                {item.label}
              </span>
              <h3 className="font-heading italic text-brand-slate mb-4 group-hover:text-brand-gold transition-colors">
                {item.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-body">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}