import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Baby, Users, Brain, Activity, CheckCircle, Heart, ShieldCheck, 
  ChevronDown, ChevronUp, Star, Calendar, ArrowRight, Info 
} from 'lucide-react';


// Import local assets
import imgHighFiveObj from '@/assets/images/chiropractor-patient-high-five.webp';
import imgSmilingObj from '@/assets/images/dr-obrien-smiling-patient-care.webp';
import imgChartObj from '@/assets/images/chiropractor-nervous-system-education.webp';
import imgBabyObj from '@/assets/images/pediatric-chiropractor-baby-care.webp';
const resolveImg = (img: any): string => typeof img === 'object' && img?.src ? img.src : img;
const imgHighFive = resolveImg(imgHighFiveObj);
const imgSmiling = resolveImg(imgSmilingObj);
const imgChart = resolveImg(imgChartObj);
const imgBaby = resolveImg(imgBabyObj);

// --- Components for the Landing Page Sections ---

const FAQSection = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto">
      <h3 className="text-3xl font-bold text-[#564972] mb-8 text-center">Common Questions</h3>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
            <button 
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="flex justify-between items-center w-full p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <span className="font-bold text-gray-800 text-lg">{faq.question}</span>
              {openIndex === idx ? <ChevronUp className="text-[#a68d60]" /> : <ChevronDown className="text-gray-400" />}
            </button>
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

const FeatureGrid = ({ items }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {items.map((item, idx) => (
      <div key={idx} className="flex items-start p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="flex-shrink-0 w-12 h-12 bg-[#564972]/10 rounded-full flex items-center justify-center mr-6">
           <CheckCircle className="w-6 h-6 text-[#564972]" />
        </div>
        <div>
          <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
          <p className="text-gray-600 leading-relaxed">{item.desc}</p>
        </div>
      </div>
    ))}
  </div>
);

// --- Content Data ---

const serviceData = {
  'pregnancy-chiropractic-care': {
    title: "Pregnancy Chiropractic",
    subtitle: "Empowering Mothers for a Better Birth Experience",
    heroImage: "/assets/images/pregnancy-chiropractic-adjustment-care.webp",
    
    introTitle: "Is Discomfort Clouding Your Joy?",
    introText: "Pregnancy should be a time of anticipation and happiness, but for many moms, it's overshadowed by sciatica, back pain, and anxiety about labor. Your body is undergoing massive changes, and it needs support to adapt correctly.",
    
    problems: [
      { title: "Sciatica & Back Pain", desc: "As your center of gravity shifts, stress on the lower back can cause shooting pains." },
      { title: "Round Ligament Pain", desc: "Tight ligaments can cause sharp discomfort in the abdomen." },
      { title: "Pelvic Misalignment", desc: "A twisted pelvis can reduce the room available for your baby to grow and turn." },
      { title: "Sleep Issues", desc: "Physical discomfort often makes getting rest nearly impossible." }
    ],

    solutionTitle: "The Webster Technique Difference",
    solutionText: "We are certified in the Webster Technique, a specific chiropractic analysis and adjustment that reduces interference to the nervous system and balances maternal pelvic muscles and ligaments. This optimizes neuro-biomechanical function in the pelvis.",
    solutionImage: imgSmiling, // Using one of the provided images

    benefits: [
      { title: "Optimal Fetal Positioning", desc: "By balancing the pelvis, we create the best environment for your baby to get head-down naturally." },
      { title: "Reduced Labor Times", desc: "Studies show that first-time moms under care experience 24% shorter labor times on average." },
      { title: "Postpartum Recovery", desc: "Realigning the spine after birth helps you heal faster and navigate the demands of new motherhood." },
      { title: "Drug-Free Relief", desc: "Safe, natural pain relief without medication that could affect your baby." }
    ],

    testimonial: {
      text: "I was told my baby was breech at 34 weeks. After starting care with Dr. Colton and using the Webster technique, my baby turned naturally, and I had the water birth I always dreamed of!",
      author: "Emily R.",
      role: "Patient"
    },

    faqs: [
      { question: "Is chiropractic safe during pregnancy?", answer: "Absolutely. We use specialized pillows and gentle techniques designed specifically for pregnant bodies. We avoid any unnecessary pressure on the abdomen." },
      { question: "When should I start care?", answer: "You can start at any time! However, many moms begin in the first trimester to prevent discomfort before it starts. It's never too late to benefit." },
      { question: "Can this help with breech babies?", answer: "While we do not 'turn' babies, the Webster Technique balances the pelvis and relaxes the ligaments, often giving the baby the room they need to turn themselves." }
    ],

    cta: "Schedule Your Prenatal Consult"
  },

  'pediatric-chiropractor-services': {
    title: "Pediatric Chiropractic",
    subtitle: "Because Healthy Kids Grow Into Healthy Adults",
    heroImage: imgBaby,
    
    introTitle: "Help Your Child Thrive from Day One",
    introText: "The birth process can be traumatic, even in 'normal' deliveries. This initial stress can create tension in a newborn's nervous system, leading to a host of common childhood struggles. We're here to help them unwind and grow.",
    
    problems: [
      { title: "Colic & Reflux", desc: "Digestive issues are often linked to vagus nerve irritation from neck tension." },
      { title: "Chronic Ear Infections", desc: "Poor drainage in the upper neck can lead to fluid buildup and recurrent infections." },
      { title: "Sleep Disturbances", desc: "A 'stuck' nervous system (fight or flight) makes it hard for kids to settle down." },
      { title: "Developmental Delays", desc: "Interference in the nervous system can slow down motor skills and milestone achievement." }
    ],

    solutionTitle: "Gentle Care for Tiny Spines",
    solutionText: "Our pediatric adjustments are incredibly gentle—using no more pressure than you'd use to check a tomato for ripeness. We focus on removing interference so your child's body can do what it was designed to do: heal and grow.",
    solutionImage: "/assets/images/pediatric-chiropractor-infant-care.webp",

    benefits: [
      { title: "Boosted Immunity", desc: "A clear nervous system communicates better with the immune system, helping fight off bugs." },
      { title: "Better Sleep", desc: "Shifting from 'fight or flight' to 'rest and digest' promotes deeper, more restorative sleep." },
      { title: "Improved Digestion", desc: "Gentle adjustments can help regulate bowel movements and reduce reflux symptoms." },
      { title: "Calmer Demeanor", desc: "Reducing internal stress helps children regulate their emotions and behavior." }
    ],

    testimonial: {
      text: "Our son screamed for 4 hours every night with colic. After just 3 adjustments, he was sleeping peacefully. We finally got our sanity back!",
      author: "Michael T.",
      role: "Dad of 3 month old"
    },

    faqs: [
      { question: "Do you 'crack' the baby's back?", answer: "No! Pediatric adjustments are very different from adult ones. They are sustained, light contacts that feel like a gentle touch." },
      { question: "Why would an infant need a chiropractor?", answer: "Birth is physically demanding. Twisting and pulling on the head and neck during delivery can cause misalignments that affect nursing, sleeping, and comfort." },
      { question: "Can you help with ADHD?", answer: "We support the nervous system. By reducing 'fight or flight' stress, many children with ADHD see improvements in focus, regulation, and calmness." }
    ],

    cta: "Book a Pediatric Exam"
  },

  'nervous-system-care': {
    title: "Nervous System Care",
    subtitle: "Measurable Results with INSiGHT Technology",
    heroImage: imgChart,
    
    introTitle: "Stop Guessing With Your Health",
    introText: "Most healthcare focuses on how you feel (symptoms). We focus on how you function. Your nervous system controls every cell in your body. If there is interference, you cannot be truly healthy.",
    
    problems: [
      { title: "Unexplained Fatigue", desc: "When your body is stuck in survival mode, it burns energy rapidly, leaving you drained." },
      { title: "Chronic Anxiety", desc: "A 'gas pedal' stuck on interferes with your ability to relax and cope with stress." },
      { title: "Digestive Issues", desc: "The gut and brain are connected. Nervous system stress shuts down digestion." },
      { title: "Brain Fog", desc: "Poor connection between the brain and body leads to lack of clarity and focus." }
    ],

    solutionTitle: "The INSiGHT Scan Difference",
    solutionText: "We don't guess—we test. We use NASA-certified technology to measure stress on your nervous system. This includes Thermal scans (organ function), sEMG (energy expenditure), and HRV (adaptability).",
    solutionImage: "/assets/images/insight-nervous-system-scan-hand.webp",

    benefits: [
      { title: "Visual Proof", desc: "See exactly where stress is stored in your body with easy-to-read color-coded scans." },
      { title: "Customized Care Plans", desc: "Your frequency of care is based on your objective neurological data, not just pain levels." },
      { title: "Track Your Progress", desc: "We re-scan regularly to objectively show you how your nervous system is healing." },
      { title: "Root Cause Resolution", desc: "We address the underlying neurological patterns, not just the surface symptoms." }
    ],

    testimonial: {
      text: "Seeing my scans was a lightbulb moment. I finally understood why I felt so terrible despite my bloodwork coming back 'normal'.",
      author: "Sarah J.",
      role: "Wellness Patient"
    },

    faqs: [
      { question: "Does the scan hurt?", answer: "Not at all. It is completely non-invasive, uses no radiation, and is safe for pregnant moms and infants." },
      { question: "How long does it take?", answer: "The entire scanning process takes about 10-15 minutes as part of your initial consultation." },
      { question: "What do the colors mean?", answer: "White is normal. Green is mild stress. Blue is moderate. Red is severe. Black is the most severe chronic stress. We'll explain it all in detail." }
    ],

    cta: "Get Your Nervous System Scanned"
  },
  
  // Fallback content for other services to use the template structure
  'family-chiropractic': {
    title: "Family Chiropractic",
    subtitle: "Wellness for the Whole Household",
    heroImage: imgHighFive,
    introTitle: "Health is a Family Affair",
    introText: "When one person in the family struggles, everyone feels it. Conversely, when everyone is functioning at their best, family life flows smoother. We love caring for whole families!",
    problems: [
        { title: "Parental Burnout", desc: "Constant stress affects your patience and energy." },
        { title: "Growing Pains", desc: "Kids bodies change rapidly and need support." },
        { title: "Tech Neck", desc: "Screens are creating posture epidemics in teens and adults." },
        { title: "Recurring Illness", desc: "Families often pass bugs around; boost everyone's immunity." }
    ],
    solutionTitle: "A Culture of Wellness",
    solutionText: "We make it easy and affordable for the whole family to get adjusted. It's not just about back pain; it's about raising a generation of drug-free, healthy kids.",
    solutionImage: "/assets/images/family-chiropractic-consultation-allen-tx.webp",
    benefits: [
        { title: "Convenient Scheduling", desc: "Bring everyone in one slot. We are efficient and family-friendly." },
        { title: "Cost-Effective Plans", desc: "We offer family plans to make wellness care accessible." },
        { title: "Prevention First", desc: "Catch small issues before they become big health crises." },
        { title: "Connected Community", desc: "Join a village of like-minded parents raising healthy kids." }
    ],
    testimonial: {
        text: "Our weekly visit is the highlight of our week. The kids run to the door! We are healthier and happier than ever.",
        author: "The Miller Family",
        role: "Practice Members"
    },
    faqs: [
        { question: "Do kids need the same care as adults?", answer: "The principles are the same, but the techniques and frequency are tailored to their age and developmental stage." },
        { question: "Can we all come together?", answer: "Yes! We love 'chaos' in the office. Our space is designed for families." },
    ],
    cta: "Start Your Family's Journey"
  },
  'kids-chiropractic': {
      title: "Kids & Teens",
      subtitle: "Navigating Growth Spurts and School Stress",
      heroImage: "/assets/images/kids-chiropractic-care-toddler.webp",
      introTitle: "Growing Up is Hard Work",
      introText: "From heavy backpacks to sports injuries and academic pressure, modern childhood is stressful. We help ensure their bodies can adapt to these demands.",
      problems: [
          { title: "Tech Neck", desc: "Looking down at devices changes spinal curves." },
          { title: "Sports Injuries", desc: "Keeping young athletes in the game and healing faster." },
          { title: "Focus & Behavior", desc: "Nervous system regulation helps with school performance." },
          { title: "Anxiety", desc: "Teens are under more pressure than ever; we help them cope." }
      ],
      solutionTitle: "Resilient Kids",
      solutionText: "We don't treat specific diseases; we build resilient bodies. A well-adjusted child bounces back faster from falls, fights off colds easier, and handles emotional stress better.",
      solutionImage: imgHighFive, // Reusing high five image
      benefits: [
          { title: "Better Posture", desc: "Correcting spinal curves early prevents lifetime issues." },
          { title: "Athletic Edge", desc: "Optimal nerve supply means better coordination and reaction time." },
          { title: "Emotional Regulation", desc: "Helping the body switch off 'fight or flight' mode." },
          { title: "Headache Relief", desc: "Natural solution for tension headaches and migraines." }
      ],
      testimonial: {
          text: "My teenager's anxiety and headaches have improved drastically. She actually asks to go to the chiropractor now.",
          author: "Karen P.",
          role: "Mom of 14yo"
      },
      faqs: [
          { question: "Is it safe for growing bones?", answer: "Yes, chiropractic is extremely safe for children and teens. We adjust our technique for their developing frames." },
          { question: "Do they have to keep coming forever?", answer: "We recommend maintenance care to support them through growth spurts, just like dental checkups." }
      ],
      cta: "Support Your Child's Growth"
  },
  'wellness-care': {
      title: "Wellness Care",
      subtitle: "Living Life at 100%",
      heroImage: "/assets/images/wellness-chiropractic-care-service.webp",
      introTitle: "Don't Wait for Pain",
      introText: "You brush your teeth to prevent cavities. Wellness chiropractic is the same concept for your spine and nervous system. Maintain your health rather than trying to recover it.",
      problems: [
          { title: "Silent Stress", desc: "Stress accumulates daily, often without immediate symptoms." },
          { title: "Loss of Mobility", desc: "Stiff joints lead to faster degeneration as we age." },
          { title: "Low Energy", desc: "Subluxations drain your battery." },
          { title: "Weakened Immunity", desc: "A stressed system can't fight off invaders as well." }
      ],
      solutionTitle: "Proactive Health",
      solutionText: "Our wellness members enjoy higher energy, better sleep, and stronger immune systems. They don't just 'get by'—they thrive. It is about optimal function, not just pain relief.",
      solutionImage: imgSmiling,
      benefits: [
          { title: "Healthy Aging", desc: "Keep moving freely well into your golden years." },
          { title: "Mental Clarity", desc: "A clear connection allows for better focus and mood." },
          { title: "Peak Performance", desc: "Whether in sports or career, function at your best." },
          { title: "Cost Savings", desc: "Prevention is always cheaper than crisis care." }
      ],
      testimonial: {
          text: "I haven't had 'back pain' in years, but I still come every two weeks. It keeps me feeling young, energized, and ready for anything.",
          author: "Robert L.",
          role: "Member for 5 years"
      },
      faqs: [
          { question: "How often do I need to come?", answer: "Wellness frequency varies, but many practice members find once every 2-4 weeks keeps them functioning optimally." },
          { question: "Is it expensive?", answer: "We offer affordable wellness memberships that make regular care cost-effective for individuals and families." }
      ],
      cta: "Join Our Wellness Community"
  },
  'postpartum-chiropractic': {
      title: "Postpartum Recovery",
      subtitle: "Healing Support for the 'Fourth Trimester'",
      heroImage: "/assets/images/family-chiropractor-newborn-care-allen-tx.webp",
      introTitle: "You've Birthed the Baby, Now Let's Heal the Mom",
      introText: "The postpartum period is physically demanding. You are recovering from birth while caring for a newborn 24/7. Your body needs support to realign, heal, and adapt to the new stresses of motherhood.",
      problems: [
          { title: "Nursing Back Pain", desc: "The 'hunch' from feeding and rocking creates immense upper back tension." },
          { title: "Pelvic Floor Issues", desc: "Lingering weakness or instability from delivery affects daily life." },
          { title: "Sleep Deprivation", desc: "Broken sleep patterns keep your nervous system in 'survival mode'." },
          { title: "Mommy Wrist", desc: "Repetitive strain from lifting and holding the baby causes wrist and thumb pain." }
      ],
      solutionTitle: "Restoring Balance After Birth",
      solutionText: "We gently realign the spine and pelvis to support your body's natural healing process. Our care focuses on calming the nervous system, helping you rest better when you can, and ensuring you have the physical resilience to care for your little one.",
      solutionImage: imgHighFive,
      benefits: [
          { title: "Faster Recovery", desc: "Proper alignment improves blood flow and nerve function for tissue healing." },
          { title: "Better Posture", desc: "Counteract the strain of carrying and feeding your baby." },
          { title: "Mood Support", desc: "Regulating the nervous system can help stabilize mood and reduce anxiety." },
          { title: "Energy Boost", desc: "Remove the 'power drains' of misalignment to maximize your energy." }
      ],
      testimonial: {
          text: "I was in so much pain after my delivery I could barely lift my son. Dr. Colton helped me get my strength back. I'm a better mom because I'm not in pain.",
          author: "Jessica M.",
          role: "Postpartum Mom"
      },
      faqs: [
          { question: "How soon can I come in after birth?", answer: "As soon as you feel ready! Many moms come in within the first week. We use very gentle techniques suitable for healing bodies." },
          { question: "Can I bring my baby?", answer: "Always. We love babies! We can even check them during the same visit." }
      ],
      cta: "Book Your Postpartum Checkup"
  },
  'adhd-sensory-processing': {
      title: "ADHD & Sensory Care",
      subtitle: "Quieting the Storm Inside",
      heroImage: "/assets/images/pediatric-chiropractor-toddler-adjustment.webp",
      introTitle: "Beyond Behavior Management",
      introText: "When a child struggles with focus, hyperactivity, or sensory overload, it's often a sign of a 'noisy' nervous system. We don't try to force better behavior; we help calm the internal storm so they can regulate themselves.",
      problems: [
          { title: "Inability to Focus", desc: "Brain-body disconnection makes it hard to filter out distractions." },
          { title: "Sensory Meltdowns", desc: "Clothing textures, loud noises, or transitions cause intense reactions." },
          { title: "Restlessness", desc: "A 'gas pedal' stuck on means the body literally cannot sit still." },
          { title: "Emotional Volatility", desc: "Zero-to-sixty emotional reactions to small triggers." }
      ],
      solutionTitle: "The Vagus Nerve Connection",
      solutionText: "We focus on the Vagus Nerve, the 'brake pedal' of the body. By removing subluxations (interference) in the upper neck, we help activate the parasympathetic nervous system, allowing the brain to calm down and focus.",
      solutionImage: imgChart,
      benefits: [
          { title: "Improved Focus", desc: "Better brain-body communication leads to longer attention spans." },
          { title: "Emotional Regulation", desc: "Fewer meltdowns and better ability to handle frustration." },
          { title: "Better Sleep", desc: "Calming the system allows for deeper, more restorative sleep." },
          { title: "Social Connection", desc: "A calmer child is better able to interact with peers and family." }
      ],
      testimonial: {
          text: "The teacher asked what changed. My son is sitting still, finishing his work, and actually happy going to school. Chiropractic gave us our boy back.",
          author: "Amanda T.",
          role: "Mom of 7yo"
      },
      faqs: [
          { question: "Do you cure ADHD?", answer: "We don't 'cure' conditions. We improve the function of the nervous system. When the brain can process information correctly, symptoms often diminish." },
          { question: "Is it medication-free?", answer: "Yes. Our approach is 100% natural and focuses on the body's internal ability to regulate itself." }
      ],
      cta: "Schedule an Assessment"
  },
  'colic-reflux-relief': {
      title: "Colic & Reflux Relief",
      subtitle: "Soothing the Unsettled Baby",
      heroImage: imgBaby,
      introTitle: "Is Your Baby Always Uncomfortable?",
      introText: "There is nothing more heartbreaking than a baby who cannot be soothed. Colic and reflux are not just 'normal phases'—they are often signs of tension in the nervous system caused by birth trauma.",
      problems: [
          { title: "Constant Crying", desc: "Unexplained screaming episodes that last for hours." },
          { title: "Spitting Up", desc: "Painful reflux that interrupts sleep and feeding." },
          { title: "Arching Back", desc: "Physical sign of tension and pain in the spine and gut." },
          { title: "Poor Latch", desc: "Difficulty nursing due to neck tension/inability to turn head comfortably." }
      ],
      solutionTitle: "Gentle Unwinding",
      solutionText: "The vagus nerve, which controls digestion, exits right at the top of the neck. Birth strain can irritate this nerve. We use feather-light contacts to release this tension, often providing immediate relief for digestive distress.",
      solutionImage: "/assets/images/baby-chiropractic-adjustment-smiling.webp",
      benefits: [
          { title: "Peaceful Sleep", desc: "No more waking up screaming in pain every hour." },
          { title: "Happy Digestion", desc: "Reduced gas, constipation, and spit-up." },
          { title: "Easier Feeding", desc: "Baby can turn head freely and latch without pain." },
          { title: "Restored Sanity", desc: "When baby sleeps and smiles, the whole family heals." }
      ],
      testimonial: {
          text: "We tried everything—drops, diet changes, inclines. One week of care here did what 3 months of medication couldn't. He is a completely different baby.",
          author: "David L.",
          role: "Dad"
      },
      faqs: [
          { question: "Is it safe for newborns?", answer: "Extremely. The pressure used is no more than you'd use to check a tomato's ripeness." },
          { question: "How fast will we see results?", answer: "Every baby is different, but many parents report improvements in sleep and comfort after just a few visits." }
      ],
      cta: "Help Your Baby Find Relief"
  },
  'ear-infections-immunity': {
      title: "Ear Infections & Immunity",
      subtitle: "Breaking the Antibiotic Cycle",
      heroImage: "/assets/images/gentle-pediatric-chiropractic-hands.webp",
      introTitle: "Sick of Being Sick?",
      introText: "Chronic ear infections and constant colds are a sign that the body isn't draining or defending itself properly. Before opting for tubes or another round of antibiotics, consider the mechanical cause.",
      problems: [
          { title: "Fluid Buildup", desc: "Tight muscles in the neck can block the Eustachian tubes from draining." },
          { title: "Recurring Infections", desc: "Stagnant fluid is a breeding ground for bacteria and viruses." },
          { title: "Antibiotic Side Effects", desc: "Repeated rounds can damage gut health and immunity." },
          { title: "Hearing Concerns", desc: "Chronic fluid can affect speech development and hearing." }
      ],
      solutionTitle: "Plumbing & Wiring",
      solutionText: "We address the 'plumbing' (drainage) by adjusting the upper neck, allowing the Eustachian tubes to open and drain naturally. We also boost the 'wiring' (nervous system) to ensure the immune system is firing on all cylinders.",
      solutionImage: imgSmiling,
      benefits: [
          { title: "Natural Drainage", desc: "Fluid drains without the need for surgical tubes." },
          { title: "Stronger Immunity", desc: "A clear nervous system coordinates a faster, better immune response." },
          { title: "Fewer Sick Days", desc: "Kids stay in school and parents stay at work." },
          { title: "Drug-Free Approach", desc: "Support the body's natural defenses." }
      ],
      testimonial: {
          text: "We were scheduled for tubes next month. After starting care, the fluid cleared completely. The ENT cancelled the surgery! We are so grateful.",
          author: "Rachel B.",
          role: "Mom of 3"
      },
      faqs: [
          { question: "Can adjustments help while they are sick?", answer: "Yes! Adjustments boost immune function and can help them get over the illness faster." },
          { question: "How does the neck affect the ears?", answer: "A small muscle (Tensor Veli Palatini) controls the ear tubes. It is innervated by nerves in the upper neck. Tension there locks the tubes shut." }
      ],
      cta: "Boost Their Immunity Naturally"
  }
};

export const ServiceTemplate = ({ slug: propSlug }: { slug?: string }) => {
  const slug = propSlug || (typeof window !== 'undefined' ? window.location.pathname.split('/').pop() : '');

  if (!slug || !serviceData[slug]) {
    return null;
  }

  const data = serviceData[slug];

  return (
    <div className="pt-24 min-h-screen bg-white font-sans">
      
      {/* 1. HERO SECTION */}
      <div className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${data.heroImage}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#564972]/90 to-[#564972]/40 mix-blend-multiply" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <motion.div 
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             className="max-w-2xl text-white"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="h-1 w-12 bg-[#a68d60] rounded-full"></span>
              <span className="text-[#a68d60] font-bold tracking-widest uppercase text-sm">Trinity Life Services</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {data.title}
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 font-light mb-10 leading-relaxed">
              {data.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://trinitylifechiro.janeapp.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#a68d60] text-white px-8 py-4 rounded-full font-bold hover:bg-[#8e7852] transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                {data.cta} <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#learn-more" 
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-colors text-center"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 2. INTRO / PAIN POINTS SECTION */}
      <section id="learn-more" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-[#564972] mb-6">{data.introTitle}</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {data.introText}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.problems.map((prob, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-[#a68d60] h-full"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{prob.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{prob.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SOLUTION / APPROACH SECTION */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 order-2 lg:order-1">
               <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                 <img src={data.solutionImage} alt="Treatment approach" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-[#564972]/10" />
               </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <span className="text-[#a68d60] font-bold tracking-widest uppercase text-sm mb-2 block">Our Approach</span>
              <h2 className="text-4xl font-bold text-[#564972] mb-6">{data.solutionTitle}</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {data.solutionText}
              </p>
              
              <div className="bg-[#564972]/5 p-6 rounded-2xl border-l-4 border-[#564972]">
                <div className="flex gap-4">
                  <Info className="w-6 h-6 text-[#564972] flex-shrink-0" />
                  <p className="text-gray-700 italic text-sm">
                    "We don't just treat the symptom; we correct the cause. By removing interference in the nervous system, your body can heal itself."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BENEFITS GRID */}
      <section className="py-24 bg-[#564972] text-white relative">
        <div className="absolute inset-0 opacity-10 pattern-grid-lg" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Improvement Looks Like</h2>
            <p className="text-purple-100">Real results we see in our practice members every day.</p>
          </div>
          <FeatureGrid items={data.benefits} />
        </div>
      </section>

      {/* 5. TESTIMONIAL & SOCIAL PROOF */}
      <section className="py-24 bg-[#a68d60]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 flex justify-center text-[#a68d60]">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-8 h-8 fill-current" />)}
          </div>
          <h2 className="text-3xl md:text-5xl font-serif italic text-[#564972] mb-8 leading-tight">
            "{data.testimonial.text}"
          </h2>
          <div>
            <p className="font-bold text-gray-900 text-lg">{data.testimonial.author}</p>
            <p className="text-[#a68d60]">{data.testimonial.role}</p>
          </div>
        </div>
      </section>

      {/* 6. PROCESS STEPS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#564972]">Your Path to Wellness</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="text-center p-6">
                <div className="w-16 h-16 bg-[#564972] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-[#564972]/30">1</div>
                <h3 className="text-xl font-bold mb-3">Consult & Scan</h3>
                <p className="text-gray-600">We start with a conversation and our advanced INSiGHT scans to see exactly what's going on.</p>
             </div>
             <div className="text-center p-6">
                <div className="w-16 h-16 bg-[#a68d60] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-[#a68d60]/30">2</div>
                <h3 className="text-xl font-bold mb-3">Custom Care Plan</h3>
                <p className="text-gray-600">We build a plan tailored to your nervous system's specific needs and goals.</p>
             </div>
             <div className="text-center p-6">
                <div className="w-16 h-16 bg-white border-2 border-[#564972] text-[#564972] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
                <h3 className="text-xl font-bold mb-3">Gentle Adjustments</h3>
                <p className="text-gray-600">Specific, gentle corrections to clear the interference and let the healing begin.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <FAQSection faqs={data.faqs} />
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-20 bg-[#564972] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl text-purple-100 mb-10">
            Appointments are filling up fast. Take the first step towards a healthier future today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a 
              href="https://trinitylifechiro.janeapp.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#a68d60] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#8e7852] transition-colors shadow-2xl transform hover:-translate-y-1"
            >
              <Calendar className="w-6 h-6 mr-3" />
              {data.cta}
            </a>
            <a 
              href="/services" 
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-colors"
            >
               Explore Other Services
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};