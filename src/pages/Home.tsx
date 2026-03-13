import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Star, ShieldCheck, Hammer, Ruler } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Bathroom Renovation" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-navy-900/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gold-500 font-semibold tracking-[0.2em] uppercase text-sm md:text-base mb-6 block">
              Calgary's Premier Renovations
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6 max-w-4xl mx-auto">
              Bespoke Spaces for the <span className="italic text-gold-400">Discerning</span> Homeowner
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light">
              Specializing in high-end washroom transformations and premium flooring installations that elevate your everyday living experience.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-gold-500 text-white font-medium tracking-wide hover:bg-gold-600 transition-colors flex items-center justify-center gap-2">
                Request a Consultation <ChevronRight size={18} />
              </Link>
              <Link to="/portfolio" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white font-medium tracking-wide hover:bg-white/10 transition-colors">
                View Our Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-navy-900 mb-4">The Calgary Projects Standard</h2>
            <div className="w-16 h-1 bg-gold-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all bg-cream"
            >
              <ShieldCheck className="w-12 h-12 text-gold-500 mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-serif mb-3">Fully Licensed & Insured</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Peace of mind is paramount. We carry comprehensive liability insurance and all necessary Calgary municipal licensing for high-end residential work.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all bg-cream"
            >
              <Hammer className="w-12 h-12 text-gold-500 mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-serif mb-3">Master Craftsmanship</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Led by our dedicated team of master craftsmen, we bring decades of specialized experience in intricate tile work, custom millwork, and flawless hardwood installation.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all bg-cream"
            >
              <Ruler className="w-12 h-12 text-gold-500 mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-serif mb-3">Transparent Process</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                From the initial 3D rendering to the final walkthrough, our communication is clear, our timelines are realistic, and our pricing is upfront.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-gold-500 font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">Our Expertise</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Specialized Luxury Services</h2>
              <p className="text-white/70 font-light text-lg">
                We focus on what we do best: creating breathtaking washrooms and installing pristine flooring that serves as the foundation of your home's aesthetic.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="group relative overflow-hidden h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=1000" 
                alt="Luxury Washroom" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <h3 className="text-3xl font-serif mb-4">Luxury Washrooms</h3>
                <p className="text-white/80 mb-6 font-light max-w-md">
                  Turn your bathroom into a spa-like retreat. We specialize in custom walk-in showers, freestanding tubs, heated flooring, and bespoke vanities.
                </p>
                <Link to="/bathrooms" className="inline-flex items-center gap-2 text-gold-500 font-medium hover:text-gold-400 transition-colors uppercase tracking-wide text-sm">
                  Explore Washrooms <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group relative overflow-hidden h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=1000" 
                alt="Premium Flooring" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <h3 className="text-3xl font-serif mb-4">Premium Flooring</h3>
                <p className="text-white/80 mb-6 font-light max-w-md">
                  The foundation of luxury. We source and install the finest materials, ensuring flawless transitions, perfect leveling, and enduring beauty.
                </p>
                <Link to="/flooring" className="inline-flex items-center gap-2 text-gold-500 font-medium hover:text-gold-400 transition-colors uppercase tracking-wide text-sm">
                  Explore Flooring <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-cream relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gold-500/30"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="flex justify-center gap-1 mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 fill-gold-500 text-gold-500" />
            ))}
          </div>
          <blockquote className="text-2xl md:text-4xl font-serif text-navy-900 leading-tight mb-8">
            "The team at Calgary Projects transformed our outdated master bath into a 5-star hotel experience. The attention to detail in the tile work is unmatched in Calgary. They were professional, clean, and delivered exactly what was promised."
          </blockquote>
          <div className="font-medium text-navy-800 tracking-wide uppercase text-sm">
            Sarah T. <span className="text-gray-400 mx-2">|</span> Mount Royal, Calgary
          </div>
        </div>
      </section>
    </>
  );
}
