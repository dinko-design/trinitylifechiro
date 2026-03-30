import React from 'react';
import { motion } from 'motion/react';
import { ClipboardList, ScanLine, Activity, FileText } from 'lucide-react';
import { getBookingUrl } from '@/data/booking';

export const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description: "We sit down to discuss your health history, current concerns, and wellness goals. This is a time for us to listen to your story.",
      icon: ClipboardList
    },
    {
      number: "02",
      title: "INSiGHT Scans",
      description: "We use non-invasive technology (sEMG, Thermal, HRV) to measure nervous system stress and function objectively.",
      icon: ScanLine
    },
    {
      number: "03",
      title: "Examination",
      description: "A physical assessment of spinal alignment and tension. In most cases, you'll receive your first adjustment during this visit.",
      icon: Activity
    },
    {
      number: "04",
      title: "Report of Findings",
      description: "We review your results together and present a personalized care plan tailored to your specific neurological needs.",
      icon: FileText
    }
  ];

  return (
    <section id="process" className="py-28 bg-brand-plum text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-white blur-[120px]"></div>
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-brand-gold blur-[120px]"></div>
      </div>
      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-brand-gold-light font-bold tracking-[0.2em] uppercase text-xs">New Patient Journey</span>
          <h2 className="mt-4 font-display text-4xl font-medium text-white sm:text-5xl tracking-tight">
            Your First Visit Explained
          </h2>
          <p className="mt-5 text-lg text-white/60 leading-relaxed">
            Our thorough 45-60 minute initial process ensures we get to the root cause of your health concerns.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-white/8 backdrop-blur-sm border border-white/8 p-8 rounded-2xl h-full hover:bg-white/12 transition-all duration-300 hover:border-white/15">
                <div className="font-display text-5xl font-medium text-white/6 absolute top-4 right-6 group-hover:text-white/10 transition-colors">
                  {step.number}
                </div>
                <div className="w-13 h-13 bg-brand-gold/15 rounded-xl flex items-center justify-center mb-6 text-brand-gold-light">
                  <step.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-white/55 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white/5 backdrop-blur-md inline-block rounded-2xl p-10 max-w-2xl border border-white/8">
            <h4 className="font-display text-2xl font-medium text-white mb-2">Ready to get started?</h4>
            <p className="text-white/60 mb-7 leading-relaxed">
              Book your initial exam online. Appointments are highly recommended as we are closed on Wednesdays and weekends.
            </p>
            <a
              href={getBookingUrl('process', 'process_cta')}
              target="_blank"
              rel="noopener noreferrer"
              data-track="book-appointment"
              className="inline-block bg-brand-gold hover:bg-brand-gold-dark text-white px-8 py-3.5 rounded-full font-bold transition-all hover:scale-[1.03] shadow-lg shadow-black/20 tracking-wide"
            >
              Schedule Initial Exam
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
