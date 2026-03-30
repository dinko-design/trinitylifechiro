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
             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet The Doctor</h1>
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


         </div>
       </div>
    </div>
  );
};
