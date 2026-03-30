import React from 'react';
import { motion } from 'motion/react';
import { Baby, Users, Brain, Activity, Plus, CheckCircle, ShieldCheck, Heart } from 'lucide-react';
import { getBookingUrl } from '@/data/booking';


// Import local assets
import imgHighFiveObj from '@/assets/images/chiropractor-patient-high-five.webp';
import imgChartObj from '@/assets/images/chiropractor-nervous-system-education.webp';
import imgBabyObj from '@/assets/images/pediatric-chiropractor-baby-care.webp';
const resolveImg = (img: any): string => typeof img === 'object' && img?.src ? img.src : img;
const imgHighFive = resolveImg(imgHighFiveObj);
const imgChart = resolveImg(imgChartObj);
const imgBaby = resolveImg(imgBabyObj);

const ServiceDetailCard = ({ title, description, benefits, icon: Icon, image, link }) => (
  <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row mb-12 last:mb-0 group hover:shadow-xl transition-all duration-300">
    <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-[#564972]/10"></div>
    </div>
    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
      <div className="w-14 h-14 bg-[#564972]/10 rounded-xl flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-[#564972]" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">
        {description}
      </p>
      <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
      <ul className="space-y-3">
        {benefits.map((benefit, idx) => (
          <li key={idx} className="flex items-start text-gray-600">
            <CheckCircle className="w-5 h-5 text-[#a68d60] mr-3 flex-shrink-0 mt-0.5" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex gap-4">
        <a href={link} className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#564972] text-base font-medium rounded-full text-[#564972] hover:bg-[#564972] hover:text-white transition-all">
          Learn More
        </a>
        <a href={getBookingUrl('services_page', 'services_cta')} target="_blank" rel="noopener noreferrer" data-track="book-appointment" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[#a68d60] hover:bg-[#8e7852] transition-all">
          Book Appointment
        </a>
      </div>
    </div>
  </div>
);

const ConditionCard = ({ title, subtitle, link }) => (
  <a href={link} className="block group">
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full hover:border-[#a68d60] hover:shadow-md transition-all">
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-purple-50 rounded-full group-hover:bg-[#564972] transition-colors">
          <ShieldCheck className="w-6 h-6 text-[#564972] group-hover:text-white" />
        </div>
        <div className="p-2 rounded-full border border-gray-200 group-hover:bg-[#a68d60] group-hover:border-[#a68d60] transition-colors">
          <Plus className="w-4 h-4 text-gray-400 group-hover:text-white" />
        </div>
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#564972] transition-colors">{title}</h3>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </div>
  </a>
);

export const ServicesPage = () => {
  const services = [
    {
      title: "Pregnancy (Webster Technique)",
      description: "We specialize in the Webster Technique to balance the pelvis and reduce tension during pregnancy. This supports a more comfortable pregnancy and optimal fetal positioning.",
      benefits: [
        "Relieves sciatica and round ligament pain",
        "Optimizes pelvic balance for birth",
        "Shortens labor times",
        "Supports postpartum recovery"
      ],
      icon: Users,
      image: "/assets/images/pregnancy-chiropractic-adjustment-care.webp",
      link: "/pregnancy-chiropractic-care"
    },
    {
      title: "Pediatric Chiropractic Care",
      description: "Our gentle adjustments for infants and children address common developmental challenges. By balancing the nervous system, we help growing bodies function optimally.",
      benefits: [
        "Relief from colic and reflux",
        "Improved sleep patterns",
        "Support for ear infections and immune health",
        "Assistance with sensory processing & ADHD"
      ],
      icon: Baby,
      image: imgBaby,
      link: "/pediatric-chiropractor-services"
    },
    {
      title: "Nervous System Care (Neuro-Spinal)",
      description: "Using advanced scanning technology, we identify and correct subluxations—misalignments that interfere with brain-body communication. This is the foundation of true healing.",
      benefits: [
        "Reduces chronic pain and tension",
        "Improves organ function",
        "Enhances mental clarity and focus",
        "Regulates the stress response (Fight or Flight)"
      ],
      icon: Brain,
      image: imgChart,
      link: "/nervous-system-care"
    },
    {
      title: "Family Wellness Care",
      description: "Health is a family affair. Our wellness plans are designed to keep your whole family functioning at 100%, preventing illness before it starts.",
      benefits: [
        "Proactive immune support",
        "Stress management for busy parents",
        "Healthy aging for seniors",
        "Better energy and vitality"
      ],
      icon: Activity,
      image: imgHighFive,
      link: "/family-chiropractic"
    }
  ];

  const conditions = [
    { title: "Postpartum Care", subtitle: "Recovery & Pelvic Health", link: "/postpartum-chiropractic" },
    { title: "Colic & Reflux", subtitle: "Infant Digestive Relief", link: "/colic-reflux-relief" },
    { title: "ADHD & Sensory", subtitle: "Focus & Regulation", link: "/adhd-sensory-processing" },
    { title: "Ear Infections", subtitle: "Immunity & Drainage", link: "/ear-infections-immunity" },
    { title: "Kids & Teens", subtitle: "Posture & Sports", link: "/kids-chiropractic" },
    { title: "General Wellness", subtitle: "Maintenance Care", link: "/wellness-care" },
  ];

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="bg-[#564972] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Services
          </motion.h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Comprehensive neurological care designed to help every member of your family thrive.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Main Services */}
        {services.map((service, index) => (
          <ServiceDetailCard key={index} {...service} />
        ))}
        
        {/* Conditions Grid */}
        <div className="mt-20">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-gray-900 mb-4">Specific Conditions We Help</h2>
             <p className="text-gray-600 max-w-2xl mx-auto">
               Our neurologically focused approach is effective for a wide range of challenges facing families today.
             </p>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
             {conditions.map((item, idx) => (
               <ConditionCard key={idx} {...item} />
             ))}
           </div>
        </div>

        {/* Techniques Section */}
        <div className="mt-20 bg-white p-12 rounded-3xl shadow-sm text-center border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Specialized Techniques We Use</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Upper Cervical", "Thompson Drop", "Diversified", "SOT (Sacro Occipital Technique)", "Activator Methods", "Cranial Work"].map((tech) => (
              <span key={tech} className="bg-gray-100 text-gray-700 px-6 py-3 rounded-full font-medium border border-gray-200">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};