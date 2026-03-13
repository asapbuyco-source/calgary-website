import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-cream font-sans text-navy-900 selection:bg-gold-500 selection:text-white flex flex-col">
      <ScrollToTop />
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gold-500 flex items-center justify-center text-white font-serif font-bold text-xl">C</div>
            <span className={`font-serif font-semibold text-xl tracking-wide ${isScrolled ? 'text-navy-900' : 'text-white'}`}>
              Calgary Projects Inc.
            </span>
          </Link>
          
          {/* Desktop Nav */}
          <div className={`hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase ${isScrolled ? 'text-navy-800' : 'text-white/90'}`}>
            <Link to="/bathrooms" className="hover:text-gold-500 transition-colors">Bathrooms</Link>
            <Link to="/flooring" className="hover:text-gold-500 transition-colors">Flooring</Link>
            <Link to="/portfolio" className="hover:text-gold-500 transition-colors">Portfolio</Link>
            <Link to="/contact" className="px-6 py-2.5 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white transition-all duration-300">
              Free Estimate
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden ${isScrolled ? 'text-navy-900' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-navy-900 pt-24 px-6"
          >
            <div className="flex flex-col gap-6 text-2xl font-serif text-white">
              <Link to="/">Home</Link>
              <Link to="/bathrooms">Bathrooms</Link>
              <Link to="/flooring">Flooring</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/contact" className="text-gold-500 mt-4">Get a Quote</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-navy-900 border-t border-white/10 py-12 text-center">
        <div className="w-12 h-12 bg-gold-500 mx-auto flex items-center justify-center text-white font-serif font-bold text-2xl mb-6">C</div>
        <p className="text-white/60 text-sm mb-2">© {new Date().getFullYear()} Calgary Projects Inc. All rights reserved.</p>
        <p className="text-white/40 text-xs">Fully Licensed & Insured in Calgary, AB.</p>
      </footer>
    </div>
  );
}
