import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

import logoWhiteObj from '@/assets/logo-horizontal-white.png';

const resolveImg = (img: any): string => typeof img === 'object' && img?.src ? img.src : img;
const logoWhite = resolveImg(logoWhiteObj);

const services = [
  { name: 'Pregnancy Chiropractic', href: '/pregnancy-chiropractic-care' },
  { name: 'Postpartum Recovery', href: '/postpartum-chiropractic' },
  { name: 'Pediatric Chiropractic', href: '/pediatric-chiropractor-services' },
  { name: 'Kids & Teens', href: '/kids-chiropractic' },
  { name: 'Family Chiropractic', href: '/family-chiropractic' },
  { name: 'Nervous System Care', href: '/nervous-system-care' },
  { name: 'Wellness Care', href: '/wellness-care' },
  { name: 'ADHD & Sensory', href: '/adhd-sensory-processing' },
  { name: 'Colic & Reflux', href: '/colic-reflux-relief' },
  { name: 'Ear Infections', href: '/ear-infections-immunity' },
  { name: 'Back Pain', href: '/back-pain-chiropractic' },
  { name: 'Knee Pain', href: '/knee-pain-chiropractic' },
];

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Meet The Team', href: '/team' },
  { name: 'Our Process', href: '/process' },
  { name: 'All Services', href: '/services' },
  { name: 'Service Areas', href: '/locations' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact Us', href: '/#contact' },
  { name: 'Careers', href: '/careers' },
];

const serviceAreas = [
  { name: 'Allen', href: '/chiropractor-allen-tx' },
  { name: 'McKinney', href: '/chiropractor-mckinney-tx' },
  { name: 'Plano', href: '/chiropractor-plano-tx' },
  { name: 'Frisco', href: '/chiropractor-frisco-tx' },
  { name: 'Fairview', href: '/chiropractor-fairview-tx' },
  { name: 'Lucas', href: '/chiropractor-lucas-tx' },
  { name: 'Murphy', href: '/chiropractor-murphy-tx' },
  { name: 'Parker', href: '/chiropractor-parker-tx' },
  { name: 'Richardson', href: '/chiropractor-richardson-tx' },
];

export const Footer = () => {
  return (
    <footer className="bg-brand-plum text-white pt-16 pb-8 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand */}
          <div className="space-y-5">
            <a href="/" aria-label="Trinity Life Chiropractic home">
              <img
                src={logoWhite}
                alt="Trinity Life Chiropractic"
                className="h-11 w-auto opacity-90"
                loading="lazy"
              />
            </a>
            <p className="text-white/70 leading-relaxed text-sm">
              Neurologically focused family chiropractic care in Allen, Texas.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/trinitylifechiro/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/trinitylifechiro/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <nav aria-label="Services">
            <h4 className="text-white font-bold tracking-wide uppercase text-sm mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {services.map(service => (
                <li key={service.href}>
                  <a href={service.href} className="text-white/70 hover:text-white transition-colors">{service.name}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: Quick Links */}
          <nav aria-label="Quick links">
            <h4 className="text-white font-bold tracking-wide uppercase text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/70 hover:text-white transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-bold tracking-wide uppercase text-sm mb-4">Contact</h4>
            <address className="space-y-3 text-sm not-italic text-white/70">
              <p>
                <a
                  href="https://maps.google.com/?q=301+N+Allen+Dr+Allen+TX+75013"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  301 N Allen Dr<br />Allen, TX 75013
                </a>
              </p>
              <p>
                <a href="tel:2145097744" className="hover:text-white transition-colors">(214) 509-7744</a>
              </p>
              <div className="text-white/70 text-sm space-y-1">
                <p>Mon & Tue: 9am &ndash; 6pm</p>
                <p>Thu: 8am &ndash; 6pm</p>
                <p>Fri: 9am &ndash; 1pm</p>
              </div>
              <a
                href="https://trinitylifechiro.janeapp.com?utm_source=footer&utm_medium=cta&utm_campaign=footer_cta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-5 py-2.5 bg-brand-gold text-white text-sm font-semibold rounded-lg hover:bg-brand-gold/90 transition-colors"
                data-track="book-appointment"
              >
                Schedule Online
              </a>
            </address>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mb-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71540.07736878887!2d-96.67808302184342!3d33.110987609646465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c17f2bccf1899%3A0x628efbab75b36acd!2sTrinity%20Life%20Chiropractic!5e0!3m2!1sen!2sus!4v1774877528801!5m2!1sen!2sus"
            width="100%"
            height={250}
            style={{ border: 0, borderRadius: '0.75rem' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Trinity Life Chiropractic location"
          />
        </div>

        {/* Service Areas SEO Links */}
        <nav aria-label="Service areas" className="border-t border-white/10 pt-8 mb-8">
          <h4 className="text-xs font-bold text-brand-gold uppercase tracking-[0.2em] mb-4">Proudly Serving</h4>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-white/35 text-xs">
            {serviceAreas.map(area => (
              <a key={area.href} href={area.href} className="hover:text-white/70 transition-colors">
                Chiropractor {area.name === 'Allen' ? 'in' : 'near'} {area.name}, TX
              </a>
            ))}
          </div>
        </nav>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-white/30 text-xs">
          <p>&copy; 2026 Trinity Life Chiropractic. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
