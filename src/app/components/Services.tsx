import React from 'react';
import { motion } from 'motion/react';
import { Baby, Users, Brain, Activity, CheckCircle, Plus } from 'lucide-react';


const ServiceCard = ({ title, description, icon: Icon, delay, link }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true }}
    className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col h-full hover:border-brand-gold/20"
  >
    <div className="w-14 h-14 bg-brand-cream rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-plum transition-colors duration-300">
      <Icon className="w-7 h-7 text-brand-plum group-hover:text-white transition-colors duration-300" />
    </div>
    <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-500 leading-relaxed mb-4 flex-grow">{description}</p>
    <a href={link} className="mt-4 flex items-center text-brand-gold font-bold hover:text-brand-gold-dark transition-colors text-sm tracking-wide group/link">
      Learn More <span className="ml-2 group-hover/link:translate-x-1 transition-transform">&rarr;</span>
    </a>
  </motion.div>
);

export const Services = () => {
  const services = [
    {
      title: "Pediatric Care",
      description: "Gentle adjustments for infants and children to address colic, sleep issues, ear infections, and developmental challenges.",
      icon: Baby,
      delay: 0.1,
      link: "/pediatric-chiropractor-services"
    },
    {
      title: "Prenatal & Postpartum",
      description: "Webster Technique certified care to optimize pelvic alignment, reduce discomfort, and support healthy delivery.",
      icon: Users,
      delay: 0.2,
      link: "/pregnancy-chiropractic-care"
    },
    {
      title: "Neuro-Spinal Care",
      description: "Advanced neurological scanning to detect and correct spinal subluxations that disrupt brain-body communication.",
      icon: Brain,
      delay: 0.3,
      link: "/nervous-system-care"
    },
    {
      title: "Family Wellness",
      description: "Preventative care for the whole family to boost immune function, manage stress, and improve overall vitality.",
      icon: Activity,
      delay: 0.4,
      link: "/family-chiropractic"
    }
  ];

  const techniques = [
    "Upper Cervical Care",
    "Webster Technique",
    "Thompson Drop-Table",
    "Neuro-Tonal (SOT)",
    "Spinal Decompression",
    "Craniosacral Therapy"
  ];

  return (
    <section id="services" className="py-28 bg-brand-cream/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-brand-gold font-bold tracking-[0.2em] uppercase text-xs">Our Expertise</span>
          <h2 className="mt-4 font-display text-4xl font-medium text-gray-900 sm:text-5xl tracking-tight">
            Holistic Care for Every Stage of Life
          </h2>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed">
            We utilize advanced technology and gentle techniques to help your family function at its best.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-brand-plum rounded-3xl overflow-hidden shadow-2xl shadow-brand-plum/30 relative"
        >
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
          <div className="relative z-10 px-8 py-14 md:p-16 flex flex-col md:flex-row items-center justify-between gap-14">
            <div className="md:w-1/2">
              <h3 className="font-display text-3xl font-medium text-white mb-5 tracking-tight">
                Advanced Techniques <span className="text-brand-gold-light">&amp; Modalities</span>
              </h3>
              <p className="text-white/70 mb-8 leading-relaxed">
                Our clinic offers a variety of specialized methods tailored to individual needs, ensuring the most effective and gentle care possible.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {techniques.map((tech, idx) => (
                  <div key={idx} className="flex items-center text-white bg-white/8 px-4 py-3 rounded-lg border border-white/8 hover:bg-white/12 transition-colors">
                    <Plus className="w-4 h-4 text-brand-gold-light mr-3 flex-shrink-0" />
                    <span className="text-sm font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 relative h-72 w-full rounded-2xl overflow-hidden shadow-lg border-2 border-white/10">
              <img
                src="/assets/images/insight-nervous-system-scan-hand.webp"
                alt="Advanced Neurological Scans"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-plum/40 flex items-center justify-center">
                <span className="bg-white text-brand-plum px-6 py-3 rounded-full font-bold shadow-xl text-sm tracking-wide">
                  INSiGHT Technology
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
