import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-navy-900 mb-6">Request a Free Estimate</h1>
          <div className="w-16 h-1 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto font-light text-lg">
            We take on a limited number of projects each year to ensure uncompromising quality. Fill out the form below to see if we're a good fit for your vision.
          </p>
          <p className="text-navy-700 font-medium mt-4">
            * Please note: Our minimum project engagement starts at $6,000.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-10">
            <div className="bg-cream p-8 border border-gray-100">
              <h3 className="text-2xl font-serif text-navy-900 mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full shrink-0 shadow-sm">
                    <Phone className="w-4 h-4 text-gold-500" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-navy-900">Call Us Directly</h4>
                    <p className="text-gray-500 font-light">(403) 555-0198</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full shrink-0 shadow-sm">
                    <Mail className="w-4 h-4 text-gold-500" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-navy-900">Email</h4>
                    <p className="text-gray-500 font-light">estimates@calgaryprojects.ca</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full shrink-0 shadow-sm">
                    <MapPin className="w-4 h-4 text-gold-500" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-navy-900">Service Area</h4>
                    <p className="text-gray-500 font-light">Calgary & Surrounding Areas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pre-qualifying Form */}
          <div className="lg:col-span-2 bg-navy-900 p-8 md:p-12 shadow-2xl">
            <h3 className="text-2xl font-serif text-white mb-8">Project Details</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/60 mb-2">First Name</label>
                  <input type="text" className="w-full bg-navy-800 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/60 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-navy-800 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/60 mb-2">Email</label>
                  <input type="email" className="w-full bg-navy-800 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/60 mb-2">Phone</label>
                  <input type="tel" className="w-full bg-navy-800 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-white/60 mb-2">Project Type</label>
                <select className="w-full bg-navy-800 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors appearance-none">
                  <option>Luxury Washroom Remodel</option>
                  <option>Premium Flooring Installation</option>
                  <option>Multiple Rooms / Full Home</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-white/60 mb-2">Estimated Budget (Minimum $6,000)</label>
                <select className="w-full bg-navy-800 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors appearance-none">
                  <option>$6,000 - $15,000</option>
                  <option>$15,000 - $30,000</option>
                  <option>$30,000 - $60,000</option>
                  <option>$60,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-white/60 mb-2">Project Description</label>
                <textarea rows={4} className="w-full bg-navy-800 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors placeholder:text-white/30" placeholder="Tell us a bit about your vision..."></textarea>
              </div>

              <button className="w-full bg-gold-500 text-white font-medium tracking-wide uppercase py-4 hover:bg-gold-600 transition-colors mt-4">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
