import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { ContactForm } from '@/app/components/ContactForm';

export const Contact = () => {
  return (
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-5">
              <span className="h-px w-10 bg-brand-gold"></span>
              <span className="text-brand-gold font-bold tracking-[0.2em] uppercase text-xs">Get in Touch</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-gray-900 mb-8 tracking-tight">
              Visit Us in <span className="text-brand-plum">Allen</span>
            </h2>
            <p className="text-lg text-gray-500 mb-10 leading-relaxed">
              We are conveniently located on North Allen Drive.
              Our office is designed to be accessible and comfortable for families.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-cream rounded-xl flex items-center justify-center text-brand-plum">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-gray-900 mb-1">Our Location</h3>
                  <p className="text-gray-500">301 N Allen Dr,<br />Allen, TX 75013</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-cream rounded-xl flex items-center justify-center text-brand-plum">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                  <a href="tel:2145097744" className="text-gray-500 hover:text-brand-gold transition-colors">(214) 509-7744</a>
                  <p className="text-sm text-gray-400 mt-0.5">Free discovery calls available.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-cream rounded-xl flex items-center justify-center text-brand-plum">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="w-full max-w-xs">
                  <h3 className="font-display text-lg font-semibold text-gray-900 mb-4">Office Hours</h3>
                  <div className="space-y-2.5 text-sm">
                    {[
                      { day: 'Monday', hours: '9:00 AM \u2013 6:00 PM' },
                      { day: 'Tuesday', hours: '9:00 AM \u2013 6:00 PM' },
                      { day: 'Wednesday', hours: 'Closed', closed: true },
                      { day: 'Thursday', hours: '8:00 AM \u2013 6:00 PM' },
                      { day: 'Friday', hours: '9:00 AM \u2013 1:00 PM' },
                      { day: 'Sat \u2013 Sun', hours: 'Closed', closed: true },
                    ].map(({ day, hours, closed }) => (
                      <div key={day} className="flex justify-between items-center">
                        <span className="text-gray-600 font-medium">{day}</span>
                        <span className={closed ? 'text-gray-300' : 'text-gray-500'}>{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form + Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg shadow-brand-plum/10 border border-brand-sage">
              <h3 className="font-display text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h3>
              <ContactForm />
            </div>

            <div className="h-[300px] rounded-2xl overflow-hidden shadow-lg shadow-brand-plum/10 border border-brand-sage bg-brand-cream relative">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71540.07736878887!2d-96.67808302184342!3d33.110987609646465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c17f2bccf1899%3A0x628efbab75b36acd!2sTrinity%20Life%20Chiropractic!5e0!3m2!1sen!2sus!4v1774877528801!5m2!1sen!2sus"
                className="absolute inset-0 w-full h-full"
                title="Trinity Life Chiropractic Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
