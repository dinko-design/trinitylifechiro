import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowRight, Phone, Calendar, CheckCircle, Car, Clock, Users, Baby, Brain } from 'lucide-react';


import imgSmilingObj from '@/assets/images/dr-obrien-smiling-patient-care.webp';
import imgHighFiveObj from '@/assets/images/chiropractor-patient-high-five.webp';
const resolveImg = (img: any): string => typeof img === 'object' && img?.src ? img.src : img;
const imgSmiling = resolveImg(imgSmilingObj);
const imgHighFive = resolveImg(imgHighFiveObj);

const locationPages = [
  {
    city: 'Allen',
    state: 'TX',
    slug: '/chiropractor-allen-tx',
    driveTime: 'Home Base',
    distance: '0 mi',
    highlight: 'Our office is located here',
    description: 'As our home city, Allen is where it all happens. Our office at 301 N Allen Dr is centrally located and easy to find.',
    featured: true,
  },
  {
    city: 'McKinney',
    state: 'TX',
    slug: '/chiropractor-mckinney-tx',
    driveTime: '~10 min',
    distance: '~7 mi',
    highlight: '150+ families served',
    description: 'McKinney families drive south on US-75 for specialized prenatal and pediatric care they can\'t find locally.',
  },
  {
    city: 'Plano',
    state: 'TX',
    slug: '/chiropractor-plano-tx',
    driveTime: '~15 min',
    distance: '~10 mi',
    highlight: '200+ families served',
    description: 'Plano\'s discerning families choose Trinity Life for our unique neurological specialization and INSiGHT scans.',
  },
  {
    city: 'Fairview',
    state: 'TX',
    slug: '/chiropractor-fairview-tx',
    driveTime: '~5 min',
    distance: '~3 mi',
    highlight: 'Closest community',
    description: 'Our next-door neighbors in Fairview enjoy the shortest commute to specialized prenatal and pediatric care.',
  },
  {
    city: 'Lucas',
    state: 'TX',
    slug: '/chiropractor-lucas-tx',
    driveTime: '~10 min',
    distance: '~5 mi',
    highlight: 'Active family care',
    description: 'Lucas families with active, outdoor lifestyles trust us for drug-free, neurological wellness care.',
  },
  {
    city: 'Parker',
    state: 'TX',
    slug: '/chiropractor-parker-tx',
    driveTime: '~15 min',
    distance: '~8 mi',
    highlight: 'Natural health aligned',
    description: 'Parker families who value natural living find our drug-free, holistic approach to be a perfect match.',
  },
  {
    city: 'Murphy',
    state: 'TX',
    slug: '/chiropractor-murphy-tx',
    driveTime: '~10 min',
    distance: '~6 mi',
    highlight: '80+ families served',
    description: 'Murphy\'s young, growing families drive north for specialized infant and pediatric chiropractic care.',
  },
  {
    city: 'Frisco',
    state: 'TX',
    slug: '/chiropractor-frisco-tx',
    driveTime: '~15 min',
    distance: '~10 mi',
    highlight: '120+ families served',
    description: 'Frisco families seeking specialized neurological care beyond general chiropractic find it at Trinity Life.',
  },
  {
    city: 'Richardson',
    state: 'TX',
    slug: '/chiropractor-richardson-tx',
    driveTime: '~20 min',
    distance: '~15 mi',
    highlight: 'Commuter-friendly',
    description: 'Richardson families and US-75 commuters access our specialized prenatal, pediatric, and family care.',
  },
];

export const ServiceAreasPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* HERO */}
      <div className="relative bg-[#564972] py-28 overflow-hidden">
        <img
          src="/assets/images/trinity-life-chiropractic-office-allen-texas.webp"
          alt="North Texas Community"
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-[#a68d60]" />
              <span className="text-[#a68d60] font-bold tracking-widest uppercase text-sm">Service Areas</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Serving Families Across Collin County
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-10">
              Trinity Life Chiropractic in Allen, TX is the trusted neurological chiropractic provider for families across North Texas. Our specialized prenatal, pediatric, and family care reaches communities throughout the region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://trinitylifechiro.janeapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#a68d60] text-white px-8 py-4 rounded-full font-bold hover:bg-[#8e7852] transition-colors shadow-lg inline-flex items-center justify-center gap-2"
              >
                Schedule Your Visit <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:2145097744"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" /> (214) 509-7744
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* INTRO SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#564972] mb-6">
                Your Family Chiropractor in Allen, Serving All of North Texas
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Finding a chiropractor who truly specializes in prenatal and pediatric care is challenging. 
                Dr. Colton O'Brien and his team at Trinity Life Chiropractic have built a reputation across 
                Collin County as the go-to provider for neurologically focused family care.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Located at 301 N Allen Dr in Allen, TX, our office is centrally positioned and easily 
                accessible from McKinney, Plano, Frisco, Fairview, Lucas, Parker, Murphy, and Richardson. 
                Whether you're an expecting mom, have a newborn struggling with colic, or want to keep your 
                whole family functioning at their best, we're here for you.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <img src={imgSmiling} alt="Dr. Colton O'Brien" className="w-16 h-16 rounded-full object-cover border-2 border-[#a68d60]" />
                <div>
                  <p className="font-bold text-gray-900">Dr. Colton O'Brien, D.C.</p>
                  <p className="text-sm text-gray-500">Webster Technique Certified | ICPA Member</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <Users className="w-6 h-6 text-[#564972] mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Prenatal Care</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <Baby className="w-6 h-6 text-[#564972] mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Pediatric Care</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <Brain className="w-6 h-6 text-[#564972] mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Neuro-Focused</p>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71540.07736878887!2d-96.67808302184342!3d33.110987609646465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c17f2bccf1899%3A0x628efbab75b36acd!2sTrinity%20Life%20Chiropractic!5e0!3m2!1sen!2sus!4v1774877528801!5m2!1sen!2sus"
                className="absolute inset-0 w-full h-full"
                title="Service Area Map - Trinity Life Chiropractic"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION GRID */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#a68d60] font-bold tracking-widest uppercase text-sm mb-2 block">Communities We Serve</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#564972] mb-4">
              Chiropractic Care Near You
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Click on your city below to learn about drive times, directions, and what
              families in your community are saying about Trinity Life Chiropractic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locationPages.map((location, idx) => (
              <motion.div
                key={location.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <a
                  href={location.slug}
                  className={`block group h-full rounded-2xl overflow-hidden border transition-all hover:shadow-xl ${
                    location.featured
                      ? 'bg-[#564972] text-white border-[#564972]'
                      : 'bg-white border-gray-100 hover:border-[#a68d60]'
                  }`}
                >
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className={`w-5 h-5 ${location.featured ? 'text-[#a68d60]' : 'text-[#a68d60]'}`} />
                        <h3 className={`text-xl font-bold ${location.featured ? 'text-white' : 'text-gray-900'}`}>
                          {location.city}, {location.state}
                        </h3>
                      </div>
                      {location.featured && (
                        <span className="bg-[#a68d60] text-white text-xs font-bold px-3 py-1 rounded-full">HOME</span>
                      )}
                    </div>

                    <p className={`text-sm mb-4 leading-relaxed ${location.featured ? 'text-purple-100' : 'text-gray-600'}`}>
                      {location.description}
                    </p>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1">
                        <Car className={`w-4 h-4 ${location.featured ? 'text-[#a68d60]' : 'text-[#564972]'}`} />
                        <span className={`text-sm font-bold ${location.featured ? 'text-white' : 'text-[#564972]'}`}>
                          {location.driveTime}
                        </span>
                      </div>
                      <span className={`text-xs ${location.featured ? 'text-purple-200' : 'text-gray-400'}`}>|</span>
                      <span className={`text-sm ${location.featured ? 'text-purple-200' : 'text-gray-500'}`}>
                        {location.distance}
                      </span>
                    </div>

                    <div className={`flex items-center gap-2 text-sm ${location.featured ? 'text-[#a68d60]' : 'text-[#a68d60]'}`}>
                      <CheckCircle className="w-4 h-4" />
                      <span className="font-medium">{location.highlight}</span>
                    </div>

                    <div className={`mt-6 flex items-center gap-1 font-bold text-sm group-hover:gap-2 transition-all ${
                      location.featured ? 'text-[#a68d60]' : 'text-[#564972]'
                    }`}>
                      View {location.city} Page <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFICE INFO STRIP */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#564972] rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Allen Office</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#a68d60] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Location</p>
                    <p className="text-purple-100 text-sm">301 N Allen Dr<br />Allen, TX 75013</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#a68d60] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Phone</p>
                    <p className="text-purple-100 text-sm">(214) 509-7744</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#a68d60] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Hours</p>
                    <p className="text-purple-100 text-sm">Mon-Tue: 9-6<br />Thu: 8-6 | Fri: 9-1</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://trinitylifechiro.janeapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#a68d60] text-white px-8 py-4 rounded-full font-bold hover:bg-[#8e7852] transition-colors shadow-lg inline-flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Calendar className="w-5 h-5" /> Book Online
              </a>
              <a
                href="tel:2145097744"
                className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-colors inline-flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Phone className="w-5 h-5" /> Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY FAMILIES DRIVE TO US */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src={imgHighFive} alt="Dr. Colton with family" className="w-full object-cover" />
            </div>
            <div>
              <span className="text-[#a68d60] font-bold tracking-widest uppercase text-sm mb-2 block">Our Difference</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#564972] mb-6">
                Why Families Across North Texas Drive to Trinity Life
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                There are chiropractors in every city. So why do families from McKinney, Plano, Frisco, 
                and beyond choose to drive to our Allen office? Because we offer something different.
              </p>
              <div className="space-y-4">
                {[
                  'Webster Technique certified for prenatal care — one of few in Collin County',
                  'Advanced pediatric training through the ICPA for gentle infant and child care',
                  'INSiGHT scanning technology for objective, data-driven nervous system assessment',
                  'Exclusive neurological focus — we don\'t do general pain management',
                  'Family-friendly village atmosphere with play area and nursing space',
                  'Trusted by 500+ families, midwives, doulas, and pediatricians across the region'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#a68d60] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-[#564972] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            No Matter Where You Are, We're Worth the Drive
          </h2>
          <p className="text-xl text-purple-100 mb-4">
            Families from across Collin County trust Trinity Life Chiropractic 
            for the specialized care their family deserves.
          </p>
          <p className="text-purple-200 mb-10">
            301 N Allen Dr, Allen, TX 75013 | (214) 509-7744
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://trinitylifechiro.janeapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#a68d60] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#8e7852] transition-colors shadow-2xl transform hover:-translate-y-1"
            >
              <Calendar className="w-6 h-6 mr-3" />
              Schedule Your Visit
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-colors"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};