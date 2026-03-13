import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Layers, Grid, ThermometerSun } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Flooring() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=2000" 
            alt="Premium Flooring" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-navy-900/70 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold-500 font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">
              Our Specialty
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-white leading-tight mb-6">
              Premium Flooring Installation
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto font-light">
              The foundation of luxury. We source and install the finest hardwood and tile materials for Calgary's most beautiful homes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800" alt="Hardwood Flooring" className="w-full h-64 object-cover rounded-sm" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800" alt="Tile Flooring" className="w-full h-64 object-cover rounded-sm mt-8" referrerPolicy="no-referrer" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-serif text-navy-900 mb-6">Flawless Execution from the Ground Up</h2>
              <p className="text-gray-600 mb-6 leading-relaxed font-light text-lg">
                High-end flooring requires more than just beautiful materials; it demands perfect subfloor preparation, precise leveling, and an artisan's eye for layout and transitions.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed font-light text-lg">
                Whether you are looking for wide-plank European oak or large-format Italian porcelain, Calgary Projects Inc. ensures a seamless installation that will stand the test of time.
              </p>
              
              <div className="space-y-4">
                {[
                  'Wide-Plank Engineered & Solid Hardwood',
                  'Large Format Porcelain & Natural Stone',
                  'Custom Staircases & Nosing',
                  'In-Floor Radiant Heating Systems',
                  'Subfloor Leveling & Preparation',
                  'Acoustic Underlayment Solutions'
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-gold-500 w-5 h-5 shrink-0" />
                    <span className="text-navy-800 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-navy-900 mb-4">Our Flooring Expertise</h2>
            <div className="w-16 h-1 bg-gold-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Layers className="w-8 h-8 text-gold-500" />, title: 'Hardwood', desc: 'We specialize in premium wide-plank engineered and solid hardwood, ensuring proper acclimation and flawless installation.' },
              { icon: <Grid className="w-8 h-8 text-gold-500" />, title: 'Tile & Stone', desc: 'From intricate mosaics to massive large-format porcelain slabs, our tile setters are true artisans.' },
              { icon: <ThermometerSun className="w-8 h-8 text-gold-500" />, title: 'Radiant Heating', desc: 'Experience ultimate comfort with custom in-floor heating systems, perfectly integrated beneath your new floors.' }
            ].map((step, i) => (
              <div key={i} className="bg-white p-8 shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-serif mb-3 text-navy-900">{step.title}</h3>
                <p className="text-gray-600 font-light text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy-900 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Ready to Upgrade Your Floors?</h2>
        <p className="text-white/70 mb-10 max-w-2xl mx-auto font-light">
          Projects start at $6,000. Contact us today to schedule your free, no-obligation estimate and consultation.
        </p>
        <Link to="/contact" className="inline-block px-8 py-4 bg-gold-500 text-white font-medium tracking-wide hover:bg-gold-600 transition-colors uppercase">
          Get a Free Estimate
        </Link>
      </section>
    </div>
  );
}
