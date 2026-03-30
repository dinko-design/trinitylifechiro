import React from 'react';
import { motion } from 'motion/react';
import { User, Award } from 'lucide-react';

import imgChartObj from '@/assets/images/chiropractor-nervous-system-education.webp';
const imgChart = typeof imgChartObj === 'object' && imgChartObj?.src ? imgChartObj.src : imgChartObj;

export const About = () => {
  return (
    <section id="about" className="py-28 bg-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-cream/60 skew-x-12 transform translate-x-20 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-5">
              <span className="h-px w-10 bg-brand-gold"></span>
              <span className="text-brand-gold font-bold tracking-[0.2em] uppercase text-xs">About Us</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-gray-900 mb-6 leading-tight tracking-tight">
              A Family-Oriented Clinic <br className="hidden md:block" />
              Led by <span className="text-brand-plum">Compassion</span>
            </h2>
            <p className="text-lg text-gray-500 mb-10 leading-relaxed">
              Trinity Life Chiropractic is more than just a clinic; it's a supportive village for families in Allen, Texas.
              We specialize in neurologically focused care, helping everyone from newborns to grandparents live their best lives.
            </p>

            <div className="space-y-6">
              <a href="/team" className="block bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-5 hover:shadow-lg transition-all hover:border-brand-gold/20 group">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-plum/8 rounded-xl flex items-center justify-center text-brand-plum group-hover:bg-brand-plum group-hover:text-white transition-colors">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-gray-900 mb-0.5">Meet Our Team</h3>
                  <p className="text-sm text-brand-gold font-semibold mb-2">Led by Dr. Colton O'Brien</p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    A Parker University graduate with a personal journey through ADHD and spinal injury,
                    supported by a dedicated team passionate about family wellness.
                  </p>
                </div>
              </a>

            </div>

            <div className="mt-10">
              <a
                href="/process"
                className="inline-flex items-center text-brand-plum font-semibold hover:text-brand-gold transition-colors group"
              >
                Learn about our process <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-plum/15 aspect-[4/5] lg:aspect-square border-4 border-white">
              <img
                src={imgChart}
                alt="Dr. Colton explaining nervous system"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-plum-dark/70 via-transparent to-transparent">
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-brand-gold" />
                    <span className="font-semibold text-brand-gold-light text-sm tracking-wide">Award Winning Care</span>
                  </div>
                  <p className="text-sm opacity-80 italic font-light">
                    "The office environment is calm, peaceful, and professional."
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-xl shadow-brand-plum/10 max-w-xs hidden md:block border border-brand-sage">
              <p className="text-gray-900 font-display font-semibold text-lg mb-0.5">Open 4 Days/Week</p>
              <p className="text-gray-400 text-sm">Plus select Fridays. Closed Wed & Weekends.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
