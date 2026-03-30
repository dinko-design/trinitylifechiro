import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';


const BlogPostCard = ({ title, excerpt, date, category, image, slug }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-xl transition-all"
  >
    <div className="h-48 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-center text-xs text-gray-500 mb-4 space-x-3">
        <span className="bg-[#564972]/10 text-[#564972] px-2 py-1 rounded-md font-medium">{category}</span>
        <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {date}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{title}</h3>
      <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
        {excerpt}
      </p>
      <a href={`/blog/${slug}`} className="inline-flex items-center text-[#a68d60] font-bold hover:text-[#8e7852] text-sm mt-auto">
        Read Article <ArrowRight className="w-4 h-4 ml-1" />
      </a>
    </div>
  </motion.div>
);

export const BlogPage = () => {
  const posts = [
    {
      title: "Why Kids Need Chiropractic Care Too",
      excerpt: "Many parents are surprised to learn that children can benefit from chiropractic adjustments. From birth trauma to learning to walk, childhood is full of physical stress.",
      date: "Oct 12, 2025",
      category: "Pediatric Health",
      image: "/assets/images/pediatric-chiropractor-infant-care.webp",
      slug: "why-kids-need-chiro"
    },
    {
      title: "The Webster Technique: Helping Moms Have Better Births",
      excerpt: "Pregnancy is a time of massive change for your body. Discover how balancing the pelvis can lead to a more comfortable pregnancy and safer delivery.",
      date: "Sep 28, 2025",
      category: "Pregnancy",
      image: "/assets/images/pregnancy-chiropractic-adjustment-care.webp",
      slug: "webster-technique-explained"
    },
    {
      title: "Understanding the 'Perfect Storm' in Childhood Development",
      excerpt: "ADHD, sensory processing issues, and anxiety often have a common neurological root. We call this the Perfect Storm, and there is hope.",
      date: "Sep 15, 2025",
      category: "Neurology",
      image: "/assets/images/insight-nervous-system-scan-hand.webp",
      slug: "perfect-storm-development"
    },
    {
      title: "5 Simple Ways to Reduce Stress Daily",
      excerpt: "Stress puts your nervous system in a chronic state of fight-or-flight. Here are five simple, actionable tips to help your body reset.",
      date: "Aug 30, 2025",
      category: "Wellness",
      image: "/assets/images/family-chiropractic-consultation-allen-tx.webp",
      slug: "reduce-stress-daily"
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Wellness Journal</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights, tips, and stories to help your family live a neurologically focused life.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <BlogPostCard key={idx} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};