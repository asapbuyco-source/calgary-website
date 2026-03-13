import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Droplets, Maximize, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Bathrooms() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Bathroom" 
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
              Luxury Washroom Transformations
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto font-light">
              We design and build bespoke, spa-like retreats tailored to your lifestyle and aesthetic preferences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-navy-900 mb-6">The Ultimate Spa Experience at Home</h2>
              <p className="text-gray-600 mb-6 leading-relaxed font-light text-lg">
                Your washroom should be more than just a functional space; it should be a sanctuary. At Calgary Projects Inc., we specialize in complete washroom overhauls, focusing on premium materials, flawless execution, and innovative design.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed font-light text-lg">
                From curbless walk-in showers with linear drains to freestanding soaker tubs and custom double vanities, every element is meticulously planned and installed by our master craftsmen.
              </p>
              
              <div className="space-y-4">
                {[
                  'Custom Tile & Stone Sourcing',
                  'Frameless Glass Enclosures',
                  'Radiant Heated Flooring',
                  'High-End Fixture Installation (Kohler, Brizo, etc.)',
                  'Custom Millwork & Cabinetry',
                  'Integrated Lighting Solutions'
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-gold-500 w-5 h-5 shrink-0" />
                    <span className="text-navy-800 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=800" alt="Bathroom detail" className="w-full h-64 object-cover rounded-sm" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800" alt="Bathroom vanity" className="w-full h-64 object-cover rounded-sm mt-8" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-navy-900 mb-4">Our Remodeling Process</h2>
            <div className="w-16 h-1 bg-gold-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Sparkles className="w-8 h-8 text-gold-500" />, title: '1. Consultation', desc: 'We discuss your vision, budget (starting at $6,000), and timeline.' },
              { icon: <Maximize className="w-8 h-8 text-gold-500" />, title: '2. Design & 3D', desc: 'Detailed layouts and material selections are finalized before any work begins.' },
              { icon: <Droplets className="w-8 h-8 text-gold-500" />, title: '3. Demolition & Prep', desc: 'Clean, safe removal of old fixtures and rigorous waterproofing.' },
              { icon: <CheckCircle2 className="w-8 h-8 text-gold-500" />, title: '4. Installation', desc: 'Flawless execution by our master craftsmen, ending with a final walkthrough.' }
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
        <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Ready to Start Your Washroom Project?</h2>
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
