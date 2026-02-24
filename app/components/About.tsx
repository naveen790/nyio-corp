'use client';
import { motion } from 'framer-motion';

const sustainabilityPillars = [
  { title: "Ethical Sourcing", subtitle: "Integrity", desc: "We mandate uncompromising labor standards across our global manufacturing network, ensuring social responsibility." },
  { title: "Product Safety", subtitle: "Quality", desc: "Rigorous testing and auditing guarantee apparel that honors the quality of product and physical well-being." },
  { title: "On-time Everytime", subtitle: "Punctuality", desc: "We respect your deadlines as much as our fabric quality. Our team ensures every order arrives exactly when promised." },  
  { title: "Eco Friendly", subtitle: "Sustainability", desc: "From regenerative cotton to natural dyes, our manufacturing is incentivized to reduce environmental impact." }
];

const certifications = [
  { name: "GOTS", label: "Organic Textile Standard", icon: "🍃" },
  { name: "OEKO-TEX", label: "Confidence in Textiles", icon: "🛡️" },
  { name: "BSCI", label: "Business Social Compliance", icon: "🤝" },
  { name: "WRAP", label: "Responsible Production", icon: "🌎" }
];

export default function About() {
  return (
    <section id="about" className="bg-brand-cream pt-10 md:pt-20 pb-20 md:pb-48 px-6">
      <div className="max-w-7xl mx-auto">
        
        <header className="mb-12 md:mb-24">
          <span className="text-brand-gold text-[10px] uppercase tracking-[0.6em] font-bold block mb-4 md:mb-6">
            Our Philosophy
          </span>
          <h3 className="font-serif text-4xl md:text-8xl tracking-tighter text-brand-dark leading-[1.1] md:leading-none">
            Strategic Sourcing Excellence
          </h3>
        </header>

        {/* NARRATIVE SECTION */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-24 mb-20 md:mb-40"> 
          <div className="lg:col-span-5 order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square md:aspect-[4/5] bg-white shadow-xl overflow-hidden border-[8px] md:border-[12px] border-white"
            >
              <img 
                src="/factory-floor1.jpg" 
                alt="GreenLink Quality Apparel" 
                className="w-full h-full object-cover" 
              />
            </motion.div>
          </div>

          <div className="lg:col-span-7 order-2 lg:order-1"> 
            <motion.div className="space-y-8 text-base md:text-lg text-brand-sage font-light leading-relaxed max-w-2xl">
              <p>
                <span className="font-medium italic text-brand-dark">Greenlink Apparel</span> is a premier strategic sourcing house that has shaped the United States retail landscape for over 15 years. Our reach spans every major U.S. market, delivering a comprehensive portfolio of organic and conventional cotton apparels. 
              </p>
              <p>
                We design for <span className="text-brand-dark font-normal">Men, Women, Juniors & Infants</span>—ranging from essential tees and hoodies to specialized infant wear and performance sportswear. Each collection is rooted in our commitment to <span className="text-brand-dark font-normal">environmental friendliness</span>, utilizing organic cotton and sustainable practices to meet global ecological benchmarks.
              </p> 
              <p>
                By maintaining <span className="text-brand-dark font-normal">strict quality control and rigorous compliance</span> protocols, we ensure that every garment honors both craft and conscience. We strive to the highest quality standards, ensuring on-time delivery through a supply chain built on transparency and ethical integrity.
              </p> 
            </motion.div> 
          </div> 
        </div> 

        {/* PILLARS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 border-t border-brand-sand/40 pt-16 md:pt-20 mb-32">
          {sustainabilityPillars.map((pillar, i) => (
            <motion.div key={i} transition={{ delay: i * 0.1 }} className="flex flex-col group">
              <span className="text-brand-gold text-[9px] uppercase tracking-[0.4em] font-black mb-4">{pillar.subtitle}</span>
              <h5 className="text-xl md:text-2xl font-serif italic mb-4 text-brand-dark">{pillar.title}</h5>
              <p className="text-sm font-light text-brand-sage italic">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CERTIFICATIONS SECTION */}
        <div className="border-t border-brand-sand/40 pt-16">
          <span className="text-brand-gold text-[10px] uppercase tracking-[0.4em] font-bold block mb-12 text-center">
            Compliance & Certifications
          </span>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            {certifications.map((cert) => (
              <div key={cert.name} className="flex flex-col items-center group">
                <span className="text-3xl mb-4 group-hover:scale-110 transition-transform">{cert.icon}</span>
                <span className="text-brand-dark font-bold text-xs tracking-widest">{cert.name}</span>
                <span className="text-[9px] text-brand-gold uppercase tracking-tighter mt-1">{cert.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}