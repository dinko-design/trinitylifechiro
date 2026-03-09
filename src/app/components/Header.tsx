import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Facebook, Instagram, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { serviceCategories, serviceAreas, mainNav } from '@/data/navigation';

import logoHorizontal from '@/assets/logo-horizontal.png';

export const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const [mobileAreaOpen, setMobileAreaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMobile = () => {
    setIsMobileOpen(false);
    setMobileServiceOpen(false);
    setMobileAreaOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col font-body">
      {/* Top Bar */}
      <div className={`bg-brand-plum text-white py-2 px-4 transition-all duration-300 ${scrolled ? 'py-1 text-xs' : 'text-sm'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-brand-gold transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-brand-gold transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
          <div className="flex items-center gap-2 font-semibold tracking-wide">
            <Phone className="w-3.5 h-3.5" />
            <a href="tel:2145097744" className="hover:text-brand-gold transition-colors">(214) 509-7744</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`bg-white/95 backdrop-blur-md border-b transition-all duration-300 ${scrolled ? 'border-brand-plum/10 shadow-lg shadow-brand-plum/5' : 'border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-300 ${scrolled ? 'h-18' : 'h-22'}`}>
            <a href="/" className="flex-shrink-0">
              <img
                src={logoHorizontal}
                alt="Trinity Life Chiropractic"
                className={`w-auto object-contain transition-all duration-300 ${scrolled ? 'h-11' : 'h-14'}`}
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Services Mega Menu */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-brand-plum font-semibold text-sm hover:text-brand-gold transition-colors uppercase tracking-widest px-4 py-2">
                  Services <ChevronDown className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[640px] pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white shadow-2xl shadow-brand-plum/10 border border-brand-plum/5 rounded-xl overflow-hidden">
                    <div className="h-0.5 bg-gradient-to-r from-brand-gold to-brand-gold-light" />
                    <div className="grid grid-cols-2 gap-0 p-6">
                      {serviceCategories.map((cat) => (
                        <div key={cat.label} className="pb-4">
                          <p className="text-xs font-bold text-brand-gold tracking-[0.15em] uppercase mb-2">{cat.label}</p>
                          {cat.items.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="block py-1.5 text-brand-plum hover:text-brand-gold text-sm font-medium transition-colors"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-gray-100 px-6 py-3 bg-brand-cream/30">
                      <a href="/services" className="text-brand-gold font-bold text-sm hover:text-brand-gold-dark transition-colors flex items-center gap-1">
                        View All Services <span>&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Areas Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-brand-plum font-semibold text-sm hover:text-brand-gold transition-colors uppercase tracking-widest px-4 py-2">
                  Areas <ChevronDown className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                </button>
                <div className="absolute top-full -left-4 w-64 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white shadow-xl shadow-brand-plum/10 border border-brand-plum/5 rounded-xl py-2 overflow-hidden">
                    <div className="h-0.5 bg-gradient-to-r from-brand-gold to-brand-gold-light" />
                    <a
                      href="/locations"
                      className="block px-5 py-2.5 text-brand-gold hover:bg-brand-cream text-sm font-bold transition-colors"
                    >
                      All Service Areas
                    </a>
                    {serviceAreas.map((area) => (
                      <a
                        key={area.name}
                        href={area.href}
                        className="block px-5 py-2 text-brand-plum hover:bg-brand-cream hover:text-brand-gold text-sm font-medium transition-colors"
                      >
                        {area.name}, TX
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {mainNav.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-brand-plum font-semibold text-sm hover:text-brand-gold transition-colors uppercase tracking-widest px-4 py-2"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="https://trinitylifechiro.janeapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 bg-brand-gold text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-brand-gold-dark transition-all shadow-md shadow-brand-gold/20 hover:shadow-lg hover:shadow-brand-gold/30 tracking-wide"
              >
                Schedule Here
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden text-brand-plum hover:text-brand-gold focus:outline-none p-2"
            >
              {isMobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-brand-plum/10 overflow-hidden"
            >
              <div className="px-5 py-6 space-y-4">
                {/* Mobile Services */}
                <div>
                  <button
                    onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
                    className="flex items-center justify-between w-full text-lg font-bold text-brand-plum font-display"
                  >
                    Services <ChevronDown className={`w-5 h-5 transform transition-transform ${mobileServiceOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileServiceOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 mt-3 border-l-2 border-brand-gold/30 space-y-4"
                      >
                        {serviceCategories.map((cat) => (
                          <div key={cat.label}>
                            <p className="text-xs font-bold text-brand-gold tracking-[0.15em] uppercase mb-1">{cat.label}</p>
                            {cat.items.map((item) => (
                              <a key={item.name} href={item.href} onClick={closeMobile} className="block text-brand-plum py-1 text-sm">
                                {item.name}
                              </a>
                            ))}
                          </div>
                        ))}
                        <a href="/services" onClick={closeMobile} className="block text-brand-gold font-bold py-1 text-sm">
                          View All Services &rarr;
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Areas */}
                <div>
                  <button
                    onClick={() => setMobileAreaOpen(!mobileAreaOpen)}
                    className="flex items-center justify-between w-full text-lg font-bold text-brand-plum font-display"
                  >
                    Service Areas <ChevronDown className={`w-5 h-5 transform transition-transform ${mobileAreaOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileAreaOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 mt-2 border-l-2 border-brand-gold/30 space-y-3"
                      >
                        <a href="/locations" onClick={closeMobile} className="block text-brand-gold py-1 font-bold">
                          All Service Areas
                        </a>
                        {serviceAreas.map((area) => (
                          <a key={area.name} href={area.href} onClick={closeMobile} className="block text-brand-plum py-1">
                            {area.name}, TX
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {mainNav.map((item) => (
                  <a key={item.name} href={item.href} onClick={closeMobile} className="block text-lg font-bold text-brand-plum font-display">
                    {item.name}
                  </a>
                ))}

                <div className="pt-4">
                  <a
                    href="https://trinitylifechiro.janeapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-brand-gold text-white px-4 py-4 rounded-xl font-bold hover:bg-brand-gold-dark transition-colors"
                  >
                    Schedule Here
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
};
