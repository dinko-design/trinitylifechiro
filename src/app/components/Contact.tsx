import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock } from 'lucide-react';

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

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="h-full min-h-[450px] rounded-2xl overflow-hidden shadow-lg shadow-brand-plum/10 border border-brand-sage bg-brand-cream relative"
          >
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?q=301%20N%20Allen%20Dr%2C%20Allen%2C%20TX%2075013&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 w-full h-full"
              title="Trinity Life Chiropractic Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
