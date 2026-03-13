import React from 'react';
import { motion } from 'motion/react';

const projects = [
  { id: 1, img: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=800', category: 'Washroom', title: 'Mount Royal Master Bath' },
  { id: 2, img: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800', category: 'Flooring', title: 'Britannia Hardwood Install' },
  { id: 3, img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800', category: 'Washroom', title: 'Aspen Woods Ensuite' },
  { id: 4, img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800', category: 'Flooring', title: 'Elbow Park Main Floor' },
  { id: 5, img: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800', category: 'Washroom', title: 'Springbank Custom Vanity' },
  { id: 6, img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800', category: 'Flooring', title: 'Altadore Large Format Tile' },
];

export default function Portfolio() {
  return (
    <div className="pt-24 pb-20 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-navy-900 mb-6">Our Portfolio</h1>
          <div className="w-16 h-1 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto font-light text-lg">
            A selection of our recent high-end washroom transformations and premium flooring installations across Calgary's finest neighborhoods.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden bg-white shadow-sm"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <span className="text-gold-500 text-xs font-semibold tracking-widest uppercase mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-serif text-navy-900">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
