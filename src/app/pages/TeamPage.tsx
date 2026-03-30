import React from 'react';
import { motion } from 'motion/react';
import { Award, GraduationCap } from 'lucide-react';
import imgSmilingObj from '@/assets/images/dr-obrien-smiling-patient-care.webp';
const imgSmiling = typeof imgSmilingObj === 'object' && imgSmilingObj?.src ? imgSmilingObj.src : imgSmilingObj;

export const TeamPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
       <div className="bg-white pb-16">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
           <div className="text-center mb-20">
             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet The Team</h1>
             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
               Passionate experts dedicated to restoring health and hope for families in our community.
             </p>
           </div>

           {/* Dr. Colton */}
           <div className="flex flex-col md:flex-row gap-12 items-start mb-24">
             <div className="md:w-1/3">
               <div className="rounded-3xl overflow-hidden shadow-xl aspect-[3/4]">
                  <img 
                    src={imgSmiling} 
                    alt="Dr. Colton O'Brien" 
                    className="w-full h-full object-cover"
                  />
               </div>
             </div>
             <div className="md:w-2/3">
               <h2 className="text-3xl font-bold text-gray-900 mb-2">Dr. Colton O'Brien, DC</h2>
               <p className="text-[#a68d60] font-semibold mb-6 text-lg">Founder & Lead Chiropractor</p>
               
               <div className="prose prose-lg text-gray-600 mb-8">
                 <p className="mb-4">
                   Dr. Colton is a Texas native who grew up in the small panhandle town of Dimmitt. His journey into chiropractic care began after a severe basketball injury left him seeking alternatives to surgery.
                 </p>
                 <p className="mb-4">
                   Coupled with a lifelong struggle with ADHD, Dr. Colton found that neurologically based chiropractic care not only healed his back but allowed him to feel "at home" in his mind and body for the first time.
                 </p>
                 <p>
                   He graduated from Parker University and has since dedicated his life to helping families achieve the same level of healing. He specializes in pediatric developmental care and is Webster Certified for prenatal care.
                 </p>
               </div>

               <div className="flex gap-4 flex-wrap">
                 <div className="bg-[#564972]/10 px-4 py-2 rounded-full text-[#564972] text-sm font-semibold flex items-center">
                   <GraduationCap className="w-4 h-4 mr-2" /> Parker University
                 </div>
                 <div className="bg-[#564972]/10 px-4 py-2 rounded-full text-[#564972] text-sm font-semibold flex items-center">
                   <Award className="w-4 h-4 mr-2" /> ICPA Member
                 </div>
                 <div className="bg-[#564972]/10 px-4 py-2 rounded-full text-[#564972] text-sm font-semibold flex items-center">
                   <Award className="w-4 h-4 mr-2" /> Webster Certified
                 </div>
               </div>
             </div>
           </div>

           {/* Divider */}
           <hr className="my-20 border-gray-200" />

           {/* Staff Section */}
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
               The people behind the scenes who make every visit feel like coming home.
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
             {/* Jaimie Graves */}
             <div className="flex flex-col items-center text-center">
               <div className="rounded-3xl overflow-hidden shadow-xl aspect-[3/4] w-full max-w-sm mb-8">
                 <img src="/assets/images/jaimie-graves-chiropractic-assistant.webp" alt="Jaimie Graves, Chiropractic Assistant at Trinity Life Chiropractic in Allen, TX" className="w-full h-full object-cover" />
               </div>
               <h3 className="text-2xl font-bold text-gray-900 mb-1">Jaimie Graves</h3>
               <p className="text-[#a68d60] font-semibold mb-4 text-lg">Chiropractic Assistant</p>
               <div className="prose text-gray-600">
                 <p>Jaimie is the hands-on heart of every appointment at Trinity Life. She works closely with Dr. O'Brien to prepare patients for their adjustments, assists with scans and assessments, and makes sure each visit runs smoothly from start to finish. Her calm, reassuring presence puts even the littlest patients at ease, and her genuine passion for helping families feel comfortable and cared for is evident the moment you walk through the door.</p>
               </div>
             </div>

             {/* Alexis Tappe */}
             <div className="flex flex-col items-center text-center">
               <div className="rounded-3xl overflow-hidden shadow-xl aspect-[3/4] w-full max-w-sm mb-8">
                 <img src="/assets/images/alexis-tappe-care-coordinator.webp" alt="Alexis Tappe, Care Coordinator at Trinity Life Chiropractic in Allen, TX" className="w-full h-full object-cover" />
               </div>
               <h3 className="text-2xl font-bold text-gray-900 mb-1">Alexis Tappe</h3>
               <p className="text-[#a68d60] font-semibold mb-4 text-lg">Care Coordinator</p>
               <div className="prose text-gray-600">
                 <p>Alexis is the friendly face and warm voice that greets every family at Trinity Life. She manages scheduling, handles new patient intake, coordinates care plans, and ensures every detail of your experience is seamless from the very first phone call to each follow-up visit. Her organizational skills and genuine care for people mean that families always feel heard, supported, and well taken care of throughout their entire wellness journey.</p>
               </div>
             </div>
           </div>

         </div>
       </div>
    </div>
  );
};
