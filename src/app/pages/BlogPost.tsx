import React from 'react';

import { motion } from 'motion/react';
import { Calendar, User, ArrowLeft, Clock, Share2, Tag } from 'lucide-react';
import imgBaby from '@/assets/11c918fdd89fdab71e3738ff27a1d42c36311040.png';
import imgSmiling from '@/assets/023fbc767981ef2ecd3fbe4de658a30d5d662501.png';
import imgChart from '@/assets/b3f48ea3427a35b55e6c4b7f80bebb87b5929149.png';

const blogPosts = {
  'perfect-storm-development': {
    title: "Understanding the 'Perfect Storm' in Childhood Development",
    date: "Sep 15, 2025",
    author: "Dr. Colton O'Brien",
    category: "Neurology",
    readTime: "6 min read",
    image: imgChart,
    content: (
      <>
        <p className="lead text-xl text-gray-600 mb-8 font-serif italic">
          ADHD, sensory processing issues, and anxiety often have a common neurological root. We call this the "Perfect Storm," and understanding it is the first step toward hope and healing.
        </p>
        
        <h2 className="text-2xl font-bold text-[#564972] mb-4">It's Not Just "Bad Behavior"</h2>
        <p className="mb-6">
          Parents are often told their child will "grow out of it" or that they just need stricter discipline. But for many children, the challenges they face—whether it's an inability to focus, frequent meltdowns, or social anxiety—are not behavioral choices. They are physiological responses to a nervous system that is stuck in a state of stress.
        </p>

        <h2 className="text-2xl font-bold text-[#564972] mb-4">The 3 Stages of the Perfect Storm</h2>
        
        <h3 className="text-xl font-bold text-gray-800 mb-2">1. Pregnancy Stress</h3>
        <p className="mb-6">
          It starts earlier than most think. High levels of maternal stress during pregnancy can shift the developing baby's nervous system into a protective "fight or flight" mode before they are even born.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mb-2">2. Birth Trauma</h3>
        <p className="mb-6">
          Interventions like C-sections, forceps, or vacuum extraction can exert tremendous physical force on a baby's upper neck. This area, the brainstem, is the "fuse box" for the entire body. Misalignment here (subluxation) can irritate the Vagus Nerve, which controls rest, digestion, and regulation.
        </p>

        <h3 className="text-xl font-bold text-gray-800 mb-2">3. The "Colic to Chaos" Pathway</h3>
        <p className="mb-6">
          An unsettled baby (colic, reflux, constipation) often grows into a sensory-seeking toddler, and eventually a child with focus or behavioral challenges. The symptoms change, but the underlying neurological tension remains the same.
        </p>

        <h2 className="text-2xl font-bold text-[#564972] mb-4">Calming the Storm</h2>
        <p className="mb-6">
          The solution isn't to force the behavior to change, but to help the nervous system regulate. Neurologically focused chiropractic care specifically addresses the subluxations in the upper neck and spine, activating the parasympathetic (brake pedal) side of the nervous system.
        </p>
        <p>
          When the "storm" inside calms down, the child can finally focus, sleep, digest, and connect with the world around them.
        </p>
      </>
    )
  },
  'why-kids-need-chiro': {
    title: "Why Kids Need Chiropractic Care Too",
    date: "Oct 12, 2025",
    author: "Dr. Colton O'Brien",
    category: "Pediatric Health",
    readTime: "4 min read",
    image: imgBaby,
    content: (
      <>
        <p className="lead text-xl text-gray-600 mb-8 font-serif italic">
           Many parents are surprised to learn that children can benefit from chiropractic adjustments. But if you think about what a child's body goes through, it makes perfect sense.
        </p>
        
        <h2 className="text-2xl font-bold text-[#564972] mb-4">Trauma Starts Early</h2>
        <p className="mb-6">
          The birth process is one of the most physically traumatic events we undergo. The twisting and pulling on the neck during delivery can cause misalignments in the upper cervical spine, affecting nursing, sleeping, and comfort.
        </p>

        <h2 className="text-2xl font-bold text-[#564972] mb-4">Milestones & Micro-Traumas</h2>
        <p className="mb-6">
          Think about learning to walk. A child falls hundreds of times! Then comes the rough-and-tumble play of childhood, sports injuries, and heavy backpacks. These "micro-traumas" accumulate over time.
        </p>

        <h2 className="text-2xl font-bold text-[#564972] mb-4">The "Tech Neck" Epidemic</h2>
        <p className="mb-6">
          Today, children are looking down at screens more than ever. This reverses the natural curve of the neck, placing immense tension on the spinal cord and nerves. We are seeing spinal degeneration in teenagers that used to be seen only in 50-year-olds.
        </p>

        <h2 className="text-2xl font-bold text-[#564972] mb-4">Prevention is Key</h2>
        <p className="mb-6">
          We take our kids to the dentist to prevent cavities. Chiropractic is spinal hygiene. Checking and correcting misalignments early allows the nervous system to grow and develop without interference, setting the stage for a lifetime of optimal health.
        </p>
      </>
    )
  },
  'webster-technique-explained': {
    title: "The Webster Technique: Helping Moms Have Better Births",
    date: "Sep 28, 2025",
    author: "Dr. Colton O'Brien",
    category: "Pregnancy",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1561742139-4b0210a1894d?ixlib=rb-4.1.0&q=80&w=1920&auto=format&fit=crop",
    content: (
      <>
        <p className="lead text-xl text-gray-600 mb-8 font-serif italic">
          Pregnancy is a marathon, not a sprint. And like any athlete, your body needs to be in alignment to perform its best on race day.
        </p>

        <h2 className="text-2xl font-bold text-[#564972] mb-4">What is Webster?</h2>
        <p className="mb-6">
          The Webster Technique is a specific chiropractic analysis and adjustment that reduces interference to the nervous system and improves the function of the pelvic muscles and ligaments. It is not about "turning breech babies," but about restoring balance.
        </p>

        <h2 className="text-2xl font-bold text-[#564972] mb-4">The Three P's of Birth</h2>
        <p className="mb-6">
          Labor dystocia (difficult labor) is caused by the 3 P's:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li><strong>Power:</strong> The ability of the uterus to contract. This is controlled by the nervous system.</li>
            <li><strong>Passage:</strong> The mother's pelvis. If it is twisted or misaligned, the exit is smaller.</li>
            <li><strong>Passenger:</strong> The baby. If the baby is not in the optimal head-down position, labor is harder.</li>
        </ul>
        <p className="mb-6">
            Webster technique addresses all three by ensuring the nervous system is firing (Power), the pelvis is balanced (Passage), allowing the baby to move into the best position (Passenger).
        </p>

        <h2 className="text-2xl font-bold text-[#564972] mb-4">Benefits for Mom</h2>
        <p className="mb-6">
            Beyond the birth itself, Webster technique helps alleviate common pregnancy complaints like sciatica, round ligament pain, and lower back aches, making the 9 months of pregnancy much more enjoyable.
        </p>
      </>
    )
  },
  'reduce-stress-daily': {
    title: "5 Simple Ways to Reduce Stress Daily",
    date: "Aug 30, 2025",
    author: "Dr. Colton O'Brien",
    category: "Wellness",
    readTime: "3 min read",
    image: imgSmiling,
    content: (
      <>
        <p className="lead text-xl text-gray-600 mb-8 font-serif italic">
          We live in a high-stress world. While we can't always change our circumstances, we can change how our body adapts to them.
        </p>

        <h2 className="text-2xl font-bold text-[#564972] mb-4">1. Breathe</h2>
        <p className="mb-6">
          Box breathing (In 4, Hold 4, Out 4, Hold 4) is a quick way to hack your vagus nerve and signal safety to your brain. Do this for 2 minutes when you feel overwhelmed.
        </p>

        <h2 className="text-2xl font-bold text-[#564972] mb-4">2. Move Your Body</h2>
        <p className="mb-6">
          Motion is life. A 10-minute walk outside resets your visual field and gets blood flowing, helping to flush out stress hormones like cortisol.
        </p>

        <h2 className="text-2xl font-bold text-[#564972] mb-4">3. Prioritize Sleep</h2>
        <p className="mb-6">
          Sleep is when your brain "takes out the trash." Without it, emotional regulation is nearly impossible. Try to go to bed 30 minutes earlier this week.
        </p>

        <h2 className="text-2xl font-bold text-[#564972] mb-4">4. Gratitude</h2>
        <p className="mb-6">
          The brain cannot be in a state of fear and gratitude at the same time. Writing down 3 things you are thankful for every morning rewires your brain to look for the good.
        </p>

        <h2 className="text-2xl font-bold text-[#564972] mb-4">5. Get Adjusted</h2>
        <p className="mb-6">
          Physical stress (subluxation) in the spine creates background noise for your brain. Getting adjusted clears the static, allowing your nervous system to handle daily stressors with ease.
        </p>
      </>
    )
  }
};

export const BlogPost = ({ slug: propSlug }: { slug?: string }) => {
  const slug = propSlug || (typeof window !== 'undefined' ? window.location.pathname.split('/').pop() : '');

  // Handle case where post doesn't exist
  if (!slug || !blogPosts[slug]) {
    return null;
  }

  const post = blogPosts[slug];

  return (
    <div className="pt-24 min-h-screen bg-white">
        {/* Progress bar could go here */}
        
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            
            <div className="mb-8">
                <a href="/blog" className="inline-flex items-center text-gray-500 hover:text-[#564972] transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Journal
                </a>
                
                <div className="flex flex-wrap gap-4 items-center text-sm text-gray-500 mb-6">
                    <span className="bg-[#564972]/10 text-[#564972] px-3 py-1 rounded-full font-semibold flex items-center">
                        <Tag className="w-3 h-3 mr-2" /> {post.category}
                    </span>
                    <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {post.date}</span>
                    <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {post.readTime}</span>
                </div>

                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                    {post.title}
                </h1>

                <div className="flex items-center justify-between border-b border-gray-100 pb-8">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 mr-3">
                            <User className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="font-bold text-gray-900 text-sm">{post.author}</p>
                            <p className="text-gray-500 text-xs">Trinity Life Chiropractic</p>
                        </div>
                    </div>
                    <button className="text-gray-400 hover:text-[#564972] transition-colors">
                        <Share2 className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="mb-12 rounded-3xl overflow-hidden shadow-lg">
                <img src={post.image} alt={post.title} className="w-full h-auto object-cover max-h-[500px]" />
            </div>

            <div className="prose prose-lg prose-purple max-w-none text-gray-600 leading-relaxed">
                {post.content}
            </div>

            <div className="mt-16 pt-10 border-t border-gray-100">
                <div className="bg-[#564972]/5 rounded-3xl p-8 md:p-12 text-center">
                    <h3 className="text-2xl font-bold text-[#564972] mb-4">Ready to learn more?</h3>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        If this article resonated with you, we'd love to help you explore how neurologically based care can help your family thrive.
                    </p>
                    <a 
                        href="https://trinitylifechiro.janeapp.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block bg-[#a68d60] text-white px-8 py-4 rounded-full font-bold hover:bg-[#8e7852] transition-colors shadow-lg"
                    >
                        Book a Consultation
                    </a>
                </div>
            </div>

        </article>
    </div>
  );
};