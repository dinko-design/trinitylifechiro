import React from 'react';
import { Facebook, Instagram, Mail } from 'lucide-react';

import logoWhite from '@/assets/logo-horizontal-white.png';

export const Footer = () => {
  return (
    <footer className="bg-brand-plum-dark text-white pt-20 pb-10 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <img
              src={logoWhite}
              alt="Trinity Life Chiropractic"
              className="h-11 w-auto opacity-90"
            />
            <p className="text-white/50 leading-relaxed text-sm">
              Neurologically focused chiropractic care tailored for the entire family. Serving Allen, McKinney, Plano, Frisco, and surrounding communities.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center hover:bg-brand-gold transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center hover:bg-brand-gold transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="mailto:drobrien@trinitylifechiro.com" className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center hover:bg-brand-gold transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold mb-6 text-brand-gold tracking-[0.15em] uppercase">Quick Links</h4>
            <ul className="space-y-3 text-white/50 text-sm">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/team" className="hover:text-white transition-colors">Meet the Team</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold mb-6 text-brand-gold tracking-[0.15em] uppercase">Services</h4>
            <ul className="space-y-3 text-white/50 text-sm">
              <li><a href="/pregnancy-chiropractic-care" className="hover:text-white transition-colors">Pregnancy Chiropractic</a></li>
              <li><a href="/pediatric-chiropractor-services" className="hover:text-white transition-colors">Pediatric Care</a></li>
              <li><a href="/family-chiropractic" className="hover:text-white transition-colors">Family Wellness</a></li>
              <li><a href="/nervous-system-care" className="hover:text-white transition-colors">INSiGHT Scans</a></li>
              <li><a href="/locations" className="hover:text-white transition-colors">All Service Areas</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold mb-6 text-brand-gold tracking-[0.15em] uppercase">Contact Us</h4>
            <ul className="space-y-3 text-white/50 text-sm">
              <li>301 N Allen Dr</li>
              <li>Allen, TX 75013</li>
              <li><a href="tel:2145097744" className="hover:text-white transition-colors">(214) 509-7744</a></li>
              <li><a href="mailto:drobrien@trinitylifechiro.com" className="hover:text-white transition-colors">drobrien@trinitylifechiro.com</a></li>
            </ul>
          </div>
        </div>

        {/* Service Areas - SEO Footer Links */}
        <div className="border-t border-white/8 pt-8 mb-8">
          <h4 className="text-xs font-bold text-brand-gold uppercase tracking-[0.2em] mb-4">Proudly Serving</h4>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-white/35 text-xs">
            <a href="/chiropractor-allen-tx" className="hover:text-white/70 transition-colors">Chiropractor in Allen, TX</a>
            <a href="/chiropractor-mckinney-tx" className="hover:text-white/70 transition-colors">Chiropractor near McKinney, TX</a>
            <a href="/chiropractor-plano-tx" className="hover:text-white/70 transition-colors">Chiropractor near Plano, TX</a>
            <a href="/chiropractor-frisco-tx" className="hover:text-white/70 transition-colors">Chiropractor near Frisco, TX</a>
            <a href="/chiropractor-fairview-tx" className="hover:text-white/70 transition-colors">Chiropractor near Fairview, TX</a>
            <a href="/chiropractor-lucas-tx" className="hover:text-white/70 transition-colors">Chiropractor near Lucas, TX</a>
            <a href="/chiropractor-murphy-tx" className="hover:text-white/70 transition-colors">Chiropractor near Murphy, TX</a>
            <a href="/chiropractor-parker-tx" className="hover:text-white/70 transition-colors">Chiropractor near Parker, TX</a>
            <a href="/chiropractor-richardson-tx" className="hover:text-white/70 transition-colors">Chiropractor near Richardson, TX</a>
          </div>
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row justify-between items-center text-white/30 text-xs">
          <p>&copy; {new Date().getFullYear()} Trinity Life Chiropractic. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
