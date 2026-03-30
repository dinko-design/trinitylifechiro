import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import imgHighFiveObj from '@/assets/images/chiropractor-patient-high-five.webp';
const imgHighFive = typeof imgHighFiveObj === 'object' && imgHighFiveObj?.src ? imgHighFiveObj.src : imgHighFiveObj;

export const Hero = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url('${imgHighFive}')`,
          backgroundPosition: 'center 30%'
        }}
      >
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#564972]/90 via-[#564972]/70 to-[#3d3351]/80" />
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-white max-w-7xl pt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-block py-1.5 px-4 rounded-full bg-white/10 border border-white/20 text-brand-gold-light text-xs font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-sm"
          >
            Serving Allen, Texas & Surrounding Communities
          </motion.span>

          <h1 className="font-display text-5xl md:text-6xl lg:text-[5.5rem] font-medium leading-[1.05] mb-6 tracking-tight">
            Neurologically{' '}
            <br className="hidden md:block" />
            Focused{' '}
            <span className="text-brand-gold-light">Family Care</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-xl leading-relaxed font-light"
          >
            Specializing in prenatal, pediatric, and family wellness. We use advanced
            technology to help your family thrive from the inside out.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://trinitylifechiro.janeapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#8a7347] hover:bg-brand-gold-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-[1.03] shadow-xl shadow-black/20 flex items-center justify-center gap-2.5 tracking-wide"
            >
              Book Appointment <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#services"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center hover:border-white/40"
            >
              Our Services
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-white/40"
        >
          <ChevronDown className="w-7 h-7" />
        </motion.div>
      </motion.div>
    </div>
  );
};
