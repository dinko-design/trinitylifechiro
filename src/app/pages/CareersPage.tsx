import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Send } from 'lucide-react';

export const CareersPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="bg-[#564972] text-white py-24 relative overflow-hidden">
        <img 
            src="/assets/images/chiropractor-patient-high-five-celebration.webp" 
            alt="Team Meeting" 
            className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Mission</h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            We are always looking for passionate individuals to join our village and help families live life at 100%.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
          <p className="text-gray-600">
            At Trinity Life Chiropractic, we aren't just co-workers; we are a family. We value growth, compassion, and excellence.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Chiropractic Assistant (CA)</h3>
                <p className="text-[#a68d60] font-medium">Full-Time • Allen, TX</p>
              </div>
              <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-bold uppercase">Open</span>
            </div>
            <p className="text-gray-600 mb-6">
              We are looking for a high-energy, organized individual to be the face of our front office. You will manage patient flow, scheduling, and create a welcoming environment for our families.
            </p>
            <button className="text-[#564972] font-bold hover:text-[#3d3350] flex items-center">
              Apply Now <Send className="w-4 h-4 ml-2" />
            </button>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow opacity-75">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Associate Chiropractor</h3>
                <p className="text-[#a68d60] font-medium">Full-Time • Allen, TX</p>
              </div>
              <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-bold uppercase">Future Opening</span>
            </div>
            <p className="text-gray-600 mb-6">
              We are always connecting with talented doctors who share our vision for pediatric and family wellness. Reach out to start a conversation for future opportunities.
            </p>
            <button className="text-gray-500 font-bold hover:text-gray-700 flex items-center">
              Learn More <Send className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>

        <div className="mt-20 bg-[#564972]/5 rounded-3xl p-10 text-center">
          <Briefcase className="w-12 h-12 text-[#564972] mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't see your role?</h3>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            We love meeting great people. If you think you'd be a perfect fit for our culture, send us your resume and tell us why.
          </p>
          <a href="mailto:drobrien@trinitylifechiro.com" className="bg-[#a68d60] text-white px-8 py-3 rounded-full font-bold hover:bg-[#8e7852] transition-colors inline-block">
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
};
