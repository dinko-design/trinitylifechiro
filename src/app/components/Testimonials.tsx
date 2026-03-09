import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const ReviewCard = ({ text, author, role, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true }}
    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full relative hover:shadow-lg transition-all duration-300"
  >
    <Quote className="w-10 h-10 text-brand-plum/6 absolute top-6 right-6" />
    <div className="flex space-x-1 text-brand-gold mb-6">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-current" />
      ))}
    </div>
    <p className="text-gray-600 mb-8 flex-grow leading-relaxed font-light italic">"{text}"</p>
    <div className="border-t border-gray-100 pt-5">
      <p className="font-display font-semibold text-gray-900">{author}</p>
      <p className="text-xs text-brand-plum-light tracking-wide uppercase font-semibold mt-0.5">{role}</p>
    </div>
  </motion.div>
);

export const Testimonials = () => {
  const reviews = [
    {
      text: "I was lucky to meet Dr. O'Brien... I had severe neck pain after a car accident. Avoiding potential surgery was my goal, and I've found significant relief.",
      author: "Verified Patient",
      role: "Chronic Pain Recovery",
      delay: 0.1
    },
    {
      text: "My children love coming here! We've seen improvements in sleep and immune function. The team treats us like family.",
      author: "Sarah M.",
      role: "Pediatric Care Mom",
      delay: 0.2
    },
    {
      text: "The team goes above and beyond. The office environment is so calm and peaceful, which helps when you're bringing a newborn.",
      author: "Jessica T.",
      role: "New Mother",
      delay: 0.3
    }
  ];

  return (
    <section className="py-28 bg-brand-cream/40 relative overflow-hidden">
      {/* Subtle decorative element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-brand-gold/20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-brand-gold font-bold tracking-[0.2em] uppercase text-xs">Testimonials</span>
          <h2 className="mt-4 font-display text-4xl font-medium text-gray-900 sm:text-5xl tracking-tight">
            Trusted by Allen Families
          </h2>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed">
            With over 200 five-star reviews, we are honored to serve our community with excellence and compassion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};
