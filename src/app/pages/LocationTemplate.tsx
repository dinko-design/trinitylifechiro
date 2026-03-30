import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, Clock, Phone, Calendar, ArrowRight, CheckCircle, Star, 
  ChevronDown, ChevronUp, Navigation, Car, Baby, Users, Brain, 
  Activity, Heart
} from 'lucide-react';


import imgHighFiveObj from '@/assets/images/chiropractor-patient-high-five.webp';
import imgSmilingObj from '@/assets/images/dr-obrien-smiling-patient-care.webp';
const resolveImg = (img: any): string => typeof img === 'object' && img?.src ? img.src : img;
const imgHighFive = resolveImg(imgHighFiveObj);
const imgSmiling = resolveImg(imgSmilingObj);

// --- FAQ Accordion ---
const LocationFAQ = ({ faqs }: { faqs: { question: string; answer: string }[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => (
        <div key={idx} className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="flex justify-between items-center w-full p-6 text-left hover:bg-gray-50 transition-colors"
          >
            <span className="font-bold text-gray-800 text-lg pr-4">{faq.question}</span>
            {openIndex === idx ? <ChevronUp className="text-[#a68d60] flex-shrink-0" /> : <ChevronDown className="text-gray-400 flex-shrink-0" />}
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
  );
};

// --- Location Data ---

interface LocationData {
  city: string;
  state: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroImage: string;

  introTitle: string;
  introText: string;
  introHighlights: { label: string; value: string }[];

  whyChooseTitle: string;
  whyChooseText: string;
  whyChooseReasons: { title: string; desc: string }[];

  communityTitle: string;
  communityText: string;
  communityDetails: string[];

  directionsTitle: string;
  directionsText: string;
  driveTime: string;
  driveDistance: string;
  directionsSteps: string[];
  nearbyLandmarks: string[];

  testimonials: { text: string; author: string; detail: string }[];

  faqs: { question: string; answer: string }[];

  nearbyAreas: { name: string; slug: string }[];
}

const locationData: Record<string, LocationData> = {
  'chiropractor-allen-tx': {
    city: 'Allen',
    state: 'TX',
    metaTitle: 'Chiropractor in Allen, TX | Trinity Life Chiropractic',
    metaDescription: 'Trinity Life Chiropractic in Allen, TX offers neurologically focused prenatal, pediatric, and family chiropractic care. Conveniently located on N Allen Dr. Schedule today.',
    heroHeadline: 'Your Allen, TX Chiropractor',
    heroSubheadline: 'Neurologically focused prenatal, pediatric, and family chiropractic care — right here in the heart of Allen.',
    heroImage: '/assets/images/trinity-life-chiropractic-office-allen-texas.webp',

    introTitle: 'Allen\'s Premier Family Chiropractic Office',
    introText: 'Trinity Life Chiropractic is proud to call Allen home. Located at 301 N Allen Dr, our office is the go-to destination for families across Collin County seeking a different approach to healthcare — one rooted in neurology, not medication. Dr. Colton O\'Brien and his team specialize in prenatal care using the Webster Technique, gentle pediatric adjustments for newborns through teens, and nervous system-focused wellness care for the whole family.',
    introHighlights: [
      { label: 'Years Serving Allen', value: '5+' },
      { label: 'Families Under Care', value: '500+' },
      { label: 'Google Reviews', value: '5.0★' },
      { label: 'Specialized Techniques', value: '6+' }
    ],

    whyChooseTitle: 'Why Allen Families Choose Trinity Life',
    whyChooseText: 'We\'re not just another chiropractic office — we\'re a part of the Allen community. From sponsoring local events to supporting Allen ISD families, our mission is to raise the standard of health care right here in our own backyard.',
    whyChooseReasons: [
      { title: 'Located in the Heart of Allen', desc: 'Our office on N Allen Dr is central to everything — just minutes from Allen Premium Outlets, Celebration Park, and Allen ISD schools.' },
      { title: 'Specialized in Prenatal & Pediatric Care', desc: 'Dr. Colton is Webster Technique certified and has advanced training in pediatric neurology through the ICPA.' },
      { title: 'INSiGHT Scanning Technology', desc: 'We use NASA-certified scans to objectively measure your nervous system function — no guessing, just data-driven care plans.' },
      { title: 'A Village, Not Just an Office', desc: 'We host workshops, community events, and create a supportive environment where families connect and grow together.' },
      { title: 'Same-Week Availability', desc: 'We know life with kids is unpredictable. We offer flexible scheduling and same-week new patient appointments.' },
      { title: 'Family-Friendly Environment', desc: 'Our open-concept adjusting area, play space, and nursing-friendly office means the whole family can come together.' }
    ],

    communityTitle: 'Deeply Rooted in the Allen Community',
    communityText: 'Allen is more than just our office address — it\'s where our team lives, shops, and raises their families. We\'re invested in the health of this community because it\'s our community too.',
    communityDetails: [
      'Active supporter of Allen ISD school wellness programs',
      'Regular workshops at Watters Creek and The Village at Allen',
      'Partnerships with local midwives, doulas, and birth centers',
      'Member of the Allen-Fairview Chamber of Commerce',
      'Sponsor of local youth sports teams and family events',
      'Participant in Allen Community Health Fair events'
    ],

    directionsTitle: 'Easy to Find in Allen',
    directionsText: 'Our office is located at 301 N Allen Dr, Allen, TX 75013 — right off US-75 (Central Expressway) and easy to reach from anywhere in Allen.',
    driveTime: '0-10 min',
    driveDistance: 'Central Allen',
    directionsSteps: [
      'From US-75, take the McDermott Dr exit',
      'Head east on McDermott Dr toward N Allen Dr',
      'Turn left (north) onto N Allen Dr',
      'Our office is on the right at 301 N Allen Dr'
    ],
    nearbyLandmarks: [
      'Allen Premium Outlets (3 min)',
      'Celebration Park (5 min)',
      'Allen Event Center (4 min)',
      'Bethany Lakes Park (6 min)',
      'Allen High School (7 min)'
    ],

    testimonials: [
      {
        text: 'We moved to Allen from out of state and finding Dr. Colton was the best thing that happened to our family. Both kids are healthier than ever and I had the best pregnancy of my life under his care.',
        author: 'Brittany M.',
        detail: 'Allen resident, mom of 3'
      },
      {
        text: 'We live right down the road and bring all 4 kids in weekly. The team knows us by name, the kids love going, and we have seen incredible changes in sleep, behavior, and immunity.',
        author: 'Jason & Kristin P.',
        detail: 'Allen family, members for 2 years'
      }
    ],

    faqs: [
      { question: 'Where exactly is Trinity Life Chiropractic located in Allen?', answer: 'We are located at 301 N Allen Dr, Allen, TX 75013. Our office is just east of US-75 (Central Expressway), easily accessible from McDermott Dr. We\'re near Allen Premium Outlets and Celebration Park.' },
      { question: 'What are your office hours in Allen?', answer: 'We are open Monday and Tuesday from 9 AM to 6 PM, Thursday from 8 AM to 6 PM, and Friday from 9 AM to 1 PM. We are closed on Wednesday, Saturday, and Sunday.' },
      { question: 'Do you accept insurance at your Allen office?', answer: 'We are an out-of-network provider, which means we prioritize your care plan based on what your body needs, not what insurance dictates. We do provide superbills that you can submit to your insurance for potential reimbursement.' },
      { question: 'Is there parking available?', answer: 'Yes! We have a dedicated parking lot right in front of our office with plenty of free parking spaces, including spots close to the entrance for pregnant moms.' },
      { question: 'Do you offer same-day appointments in Allen?', answer: 'We do our best to accommodate urgent needs. Same-day availability depends on our schedule, but we typically have same-week openings for new patients. Call us at (214) 509-7744 to check availability.' },
      { question: 'What makes Trinity Life different from other chiropractors in Allen?', answer: 'We are a neurologically focused office specializing in prenatal and pediatric care. We use INSiGHT scanning technology to objectively measure nervous system function, and our adjustments are tailored to each patient\'s unique neurological needs — not a one-size-fits-all approach.' }
    ],

    nearbyAreas: [
      { name: 'McKinney', slug: 'chiropractor-mckinney-tx' },
      { name: 'Plano', slug: 'chiropractor-plano-tx' },
      { name: 'Fairview', slug: 'chiropractor-fairview-tx' },
      { name: 'Lucas', slug: 'chiropractor-lucas-tx' },
      { name: 'Murphy', slug: 'chiropractor-murphy-tx' },
      { name: 'Frisco', slug: 'chiropractor-frisco-tx' }
    ]
  },

  'chiropractor-mckinney-tx': {
    city: 'McKinney',
    state: 'TX',
    metaTitle: 'Chiropractor Near McKinney, TX | Trinity Life Chiropractic',
    metaDescription: 'Looking for a prenatal or pediatric chiropractor near McKinney, TX? Trinity Life Chiropractic in Allen is just 10 minutes away. Webster Technique certified. Book today.',
    heroHeadline: 'Chiropractor Near McKinney, TX',
    heroSubheadline: 'McKinney families trust Trinity Life Chiropractic for neurologically focused prenatal, pediatric, and family care — just a short drive south on US-75.',
    heroImage: '/assets/images/trinity-life-chiropractic-treatment-room.webp',

    introTitle: 'Serving McKinney Families from Nearby Allen',
    introText: 'McKinney is one of the fastest-growing cities in Texas, and its families deserve access to specialized chiropractic care that goes beyond pain relief. Trinity Life Chiropractic, located just 10 minutes south in Allen, has become the trusted neurological chiropractor for hundreds of McKinney families. Whether you\'re a pregnant mom in Stonebridge Ranch, a family in Craig Ranch, or have a child struggling with colic in Prosper-adjacent McKinney, our office is an easy drive down US-75.',
    introHighlights: [
      { label: 'Drive from McKinney', value: '~10 min' },
      { label: 'McKinney Families Served', value: '150+' },
      { label: 'Google Rating', value: '5.0★' },
      { label: 'Pediatric Focus', value: '60%' }
    ],

    whyChooseTitle: 'Why McKinney Families Drive to Trinity Life',
    whyChooseText: 'McKinney parents are some of our most dedicated practice members. They value the specialized care we offer and appreciate that a short drive gives them access to a level of chiropractic expertise that\'s hard to find locally.',
    whyChooseReasons: [
      { title: 'Only 10 Minutes from McKinney', desc: 'A quick drive south on US-75 brings you right to our door at 301 N Allen Dr — often faster than crossing McKinney itself during peak hours.' },
      { title: 'Prenatal Expertise (Webster Technique)', desc: 'Expecting moms in McKinney trust us for Webster Technique care to reduce pregnancy discomfort and optimize fetal positioning.' },
      { title: 'Pediatric Neurological Focus', desc: 'From newborn assessments to ADHD and sensory support for school-age kids, our gentle pediatric approach is why McKinney families seek us out.' },
      { title: 'Worth the Short Drive', desc: 'Our specialized nervous system scanning technology, family-friendly environment, and results-driven approach make the trip from McKinney well worth it.' },
      { title: 'Partnerships with McKinney Birth Providers', desc: 'We work alongside midwives, doulas, and OBs in the McKinney area to provide coordinated prenatal and postpartum care.' },
      { title: 'Community Connection', desc: 'Many of our team members live in McKinney. We attend McKinney farmers markets, community events, and are invested in the health of this growing community.' }
    ],

    communityTitle: 'Connected to the McKinney Community',
    communityText: 'McKinney\'s motto is "Unique by Nature," and we love serving this vibrant, family-oriented city. From historic downtown to the newest subdivisions, McKinney families are a cornerstone of our practice.',
    communityDetails: [
      'Regularly attend McKinney Farmers Market at Chestnut Square',
      'Partnerships with McKinney-area midwives and birth centers',
      'Support McKinney ISD wellness initiatives',
      'Workshop hosts at McKinney community venues',
      'Serve families from Stonebridge Ranch, Craig Ranch, Tucker Hill, and Adriatica',
      'Active in Collin County family wellness advocacy'
    ],

    directionsTitle: 'Driving to Trinity Life from McKinney',
    directionsText: 'Getting to our Allen office from anywhere in McKinney is simple. Most McKinney residents reach us in about 10 minutes via US-75 South.',
    driveTime: '8-12 min',
    driveDistance: '~7 miles',
    directionsSteps: [
      'From downtown McKinney, head south on US-75 (Central Expressway)',
      'Take the McDermott Dr exit in Allen',
      'Turn left (east) onto McDermott Dr',
      'Turn left (north) onto N Allen Dr',
      'Arrive at 301 N Allen Dr on the right'
    ],
    nearbyLandmarks: [
      'McKinney Town Center (12 min)',
      'Craig Ranch (8 min)',
      'Stonebridge Ranch (10 min)',
      'McKinney Medical Center (11 min)',
      'Adriatica Village (9 min)'
    ],

    testimonials: [
      {
        text: 'We drive from McKinney every week and it\'s the best 10 minutes we spend. Our daughter\'s chronic ear infections stopped after just a month of care. No more antibiotics!',
        author: 'The Rodriguez Family',
        detail: 'McKinney (Craig Ranch), members for 18 months'
      },
      {
        text: 'I was seeing a chiropractor in McKinney but it wasn\'t specialized for pregnancy. The difference at Trinity Life was night and day. Dr. Colton helped me have the unmedicated birth I wanted.',
        author: 'Lauren K.',
        detail: 'McKinney resident, first-time mom'
      }
    ],

    faqs: [
      { question: 'How far is Trinity Life Chiropractic from McKinney?', answer: 'Our office in Allen is approximately 7 miles south of downtown McKinney, which typically takes 8-12 minutes via US-75 South. We\'re closer to McKinney than many offices within McKinney itself due to our proximity to the highway.' },
      { question: 'Do many McKinney families come to your Allen office?', answer: 'Absolutely! McKinney families make up a significant portion of our practice. Many drive from Stonebridge Ranch, Craig Ranch, Tucker Hill, and other McKinney neighborhoods because of our specialized prenatal and pediatric focus.' },
      { question: 'Is it worth the drive from McKinney for specialized care?', answer: 'Our McKinney families consistently tell us yes. The specialized prenatal, pediatric, and neurological care we offer — including INSiGHT scanning technology and Webster Technique certification — is difficult to find in the McKinney area, making the short drive well worth it.' },
      { question: 'Do you work with any McKinney birth providers?', answer: 'Yes! We have established relationships with midwives, doulas, OBs, and birth centers in the McKinney area. We love coordinating care to give expecting moms the best possible support system.' },
      { question: 'What if my child gets sick and needs a same-day appointment?', answer: 'We understand that McKinney families need flexibility. We offer same-week availability and do our best to accommodate urgent needs. Call us at (214) 509-7744 and we\'ll work to get you in quickly.' },
      { question: 'Can my whole family be seen during one visit?', answer: 'Yes! We love seeing whole families together. Our open-concept adjusting area makes it easy and efficient for everyone — from infants to grandparents — to be seen in the same appointment block.' }
    ],

    nearbyAreas: [
      { name: 'Allen', slug: 'chiropractor-allen-tx' },
      { name: 'Fairview', slug: 'chiropractor-fairview-tx' },
      { name: 'Plano', slug: 'chiropractor-plano-tx' },
      { name: 'Frisco', slug: 'chiropractor-frisco-tx' },
      { name: 'Lucas', slug: 'chiropractor-lucas-tx' },
      { name: 'Parker', slug: 'chiropractor-parker-tx' }
    ]
  },

  'chiropractor-plano-tx': {
    city: 'Plano',
    state: 'TX',
    metaTitle: 'Chiropractor Near Plano, TX | Prenatal & Pediatric | Trinity Life',
    metaDescription: 'Plano families choose Trinity Life Chiropractic in Allen for expert prenatal, pediatric, and family chiropractic care. Just 15 min north on US-75. Book your visit.',
    heroHeadline: 'Chiropractor Near Plano, TX',
    heroSubheadline: 'Plano\'s growing families trust Trinity Life for specialized prenatal, pediatric, and nervous system chiropractic care — just minutes north on US-75.',
    heroImage: '/assets/images/trinity-life-chiropractic-office-allen-texas.webp',

    introTitle: 'The Plano-Area Chiropractor Families Recommend',
    introText: 'Plano is home to some of the best schools, parks, and neighborhoods in Texas — and its families deserve equally exceptional healthcare. Trinity Life Chiropractic, located just 15 minutes north in Allen, serves as the trusted neurological chiropractic provider for families across West Plano, East Plano, and everywhere in between. Our specialized focus on prenatal care, pediatric neurology, and whole-family wellness is what sets us apart from general chiropractic offices in the Plano area.',
    introHighlights: [
      { label: 'Drive from Plano', value: '~15 min' },
      { label: 'Plano Families Served', value: '200+' },
      { label: 'Patient Satisfaction', value: '5.0★' },
      { label: 'Years Experience', value: '7+' }
    ],

    whyChooseTitle: 'Why Plano Families Choose Trinity Life',
    whyChooseText: 'Plano has no shortage of chiropractors, but families who want specialized neurological care — particularly for pregnancy, infants, and children — choose to make the short trip to our Allen office.',
    whyChooseReasons: [
      { title: 'Quick Drive from Anywhere in Plano', desc: 'From West Plano or Legacy, it\'s a straight shot north on the Dallas North Tollway or US-75. Most Plano families reach us in 12-18 minutes.' },
      { title: 'Specialization You Won\'t Find in Plano', desc: 'While Plano has many general chiropractors, our exclusive focus on prenatal Webster Technique and pediatric neurology makes us unique in the North Texas corridor.' },
      { title: 'INSiGHT Neurological Scans', desc: 'Our objective scanning technology shows exactly where stress is stored in your nervous system — providing proof of what\'s happening and tracking real progress over time.' },
      { title: 'Trusted by Plano Pediatricians', desc: 'Several Plano-area pediatricians and OBs refer patients to our office because they trust our specialized approach and see the results in their patients.' },
      { title: 'Convenient for Plano Commuters', desc: 'If you commute through Allen on US-75, our office is right off McDermott Dr — making it easy to stop in on your way to or from work.' },
      { title: 'Results That Speak for Themselves', desc: 'Our Plano families consistently report improvements in pregnancy comfort, infant sleep and digestion, children\'s focus and behavior, and whole-family immunity.' }
    ],

    communityTitle: 'Serving the Plano Community',
    communityText: 'Plano\'s reputation as a top city for families aligns perfectly with our mission. We\'re proud to serve families from across Plano\'s diverse neighborhoods and school districts.',
    communityDetails: [
      'Serve families from West Plano, Legacy, East Plano, and North Plano',
      'Relationships with Plano ISD and Plano-area pediatric providers',
      'Workshop presentations for Plano mom groups and parent organizations',
      'Partnerships with Plano and Richardson-area birth professionals',
      'Accessible from both US-75 and Dallas North Tollway',
      'Many Plano commuters stop in on their daily route'
    ],

    directionsTitle: 'Getting to Trinity Life from Plano',
    directionsText: 'Our Allen office is a quick drive north from anywhere in Plano. The easiest routes are via US-75 North or the Dallas North Tollway.',
    driveTime: '12-18 min',
    driveDistance: '~10 miles',
    directionsSteps: [
      'From Plano, head north on US-75 (Central Expressway)',
      'Pass through the Spring Creek Pkwy and Parker Rd exits',
      'Take the McDermott Dr exit in Allen',
      'Turn right (east) onto McDermott Dr',
      'Turn left (north) onto N Allen Dr',
      'Arrive at 301 N Allen Dr on the right'
    ],
    nearbyLandmarks: [
      'The Shops at Legacy (16 min)',
      'Plano Town Center (14 min)',
      'Arbor Hills Nature Preserve (20 min)',
      'Children\'s Medical Center Plano (12 min)',
      'Oak Point Park (18 min)'
    ],

    testimonials: [
      {
        text: 'I tried three chiropractors in Plano before finding Trinity Life. None of them specialized in pregnancy the way Dr. Colton does. The 15-minute drive is nothing compared to the quality of care we receive.',
        author: 'Christina S.',
        detail: 'West Plano, pregnant with 2nd child'
      },
      {
        text: 'Our pediatrician in Plano actually recommended Dr. Colton for our son\'s reflux issues. After just a few weeks, the constant spit-up and crying stopped. We drive up from Plano happily every week now.',
        author: 'Derek & Amy W.',
        detail: 'Plano (Legacy area), parents of 4-month-old'
      }
    ],

    faqs: [
      { question: 'How long does it take to drive from Plano to your office?', answer: 'Most Plano residents reach our office in 12-18 minutes, depending on which part of Plano you\'re coming from. We\'re located right off US-75 at McDermott Dr in Allen, making it a very convenient drive.' },
      { question: 'Why should I drive to Allen when there are chiropractors in Plano?', answer: 'Great question! While Plano has many excellent general chiropractors, our practice is exclusively focused on prenatal (Webster Technique), pediatric, and neurological chiropractic care. This specialization, combined with our INSiGHT scanning technology, provides a level of targeted care that\'s unique in the North Texas area.' },
      { question: 'Do you see many families from Plano?', answer: 'Yes! Plano families represent one of the largest groups in our practice. We see families from West Plano, Legacy, East Plano, and North Plano regularly. Many were referred by their Plano-area pediatricians or OBs.' },
      { question: 'Is your office easy to get to from the Dallas North Tollway?', answer: 'Yes. From the Tollway, you can take Bethany Dr or McDermott Dr east to reach our office. It typically adds only a few minutes compared to the US-75 route.' },
      { question: 'Can I schedule around my commute through Allen?', answer: 'Absolutely! Many of our Plano patients stop in on their commute. We have morning, midday, and afternoon availability to accommodate work schedules.' },
      { question: 'Do you offer virtual consultations for Plano families?', answer: 'We offer complimentary phone consultations for Plano families who want to learn more before making the drive. Call us at (214) 509-7744 to speak with our team and find out if we\'re the right fit.' }
    ],

    nearbyAreas: [
      { name: 'Allen', slug: 'chiropractor-allen-tx' },
      { name: 'Richardson', slug: 'chiropractor-richardson-tx' },
      { name: 'Murphy', slug: 'chiropractor-murphy-tx' },
      { name: 'Frisco', slug: 'chiropractor-frisco-tx' },
      { name: 'McKinney', slug: 'chiropractor-mckinney-tx' },
      { name: 'Fairview', slug: 'chiropractor-fairview-tx' }
    ]
  },

  'chiropractor-lucas-tx': {
    city: 'Lucas',
    state: 'TX',
    metaTitle: 'Chiropractor Near Lucas, TX | Family & Pediatric Care | Trinity Life',
    metaDescription: 'Lucas, TX families choose Trinity Life Chiropractic in Allen for specialized prenatal, pediatric, and nervous system care. Just 10 min away. Schedule your visit.',
    heroHeadline: 'Chiropractor Near Lucas, TX',
    heroSubheadline: 'Families in Lucas love the small-town feel — and they love having specialized neurological chiropractic care just 10 minutes away in Allen.',
    heroImage: '/assets/images/trinity-life-chiropractic-treatment-room.webp',

    introTitle: 'The Chiropractor Lucas Families Trust',
    introText: 'Lucas is known for its spacious lots, equestrian lifestyle, and tight-knit community — it\'s the kind of place where families put health and quality of life first. That\'s exactly why so many Lucas families have made Trinity Life Chiropractic their healthcare home. Located just east down Bethany Dr or McDermott Dr in Allen, our office provides the specialized neurological care that active Lucas families need.',
    introHighlights: [
      { label: 'Drive from Lucas', value: '~10 min' },
      { label: 'Lucas Families Served', value: '75+' },
      { label: 'Care Approach', value: 'Neurological' },
      { label: 'Kid-Friendly', value: '100%' }
    ],

    whyChooseTitle: 'Why Lucas Families Choose Trinity Life',
    whyChooseText: 'Lucas families value a holistic, natural approach to health — which aligns perfectly with our philosophy. Our specialized care helps active families stay strong, healthy, and thriving.',
    whyChooseReasons: [
      { title: 'Just Minutes from Lucas', desc: 'Head west on Bethany Dr or Angel Pkwy and you\'re at our door in about 10 minutes. No highway required.' },
      { title: 'Perfect for Active Families', desc: 'Lucas kids are athletes, equestrians, and outdoor enthusiasts. Chiropractic care keeps them performing at their best and recovering faster from bumps and falls.' },
      { title: 'Natural Healthcare Approach', desc: 'We know Lucas families often prefer a natural, drug-free approach. Our neurological focus aligns with that philosophy — supporting the body\'s own healing ability.' },
      { title: 'Prenatal Care for Rural Moms', desc: 'Whether you\'re planning a home birth or hospital delivery, our Webster Technique care helps you prepare for the healthiest birth possible.' },
      { title: 'Whole-Family Wellness', desc: 'From newborns to grandparents, we see the whole family. Many Lucas families bring everyone in on the same visit for convenience.' },
      { title: 'Small Practice, Big Results', desc: 'Like Lucas itself, we\'re intentionally small — which means you get personalized attention and genuine relationships with your care team.' }
    ],

    communityTitle: 'Neighbors to the Lucas Community',
    communityText: 'Lucas\'s rural charm and family values make it one of our favorite communities to serve. We understand the lifestyle and health needs unique to Lucas families.',
    communityDetails: [
      'Serve families from Lucas, including Briarwood, Stinson Estates, and Southfork area',
      'Support for equestrian and athletic families with performance care',
      'Relationships with Lovejoy ISD families and staff',
      'Partnership with local natural health practitioners',
      'Convenient for families who also visit Allen for shopping and schools',
      'Understanding of rural family lifestyles and activity-related needs'
    ],

    directionsTitle: 'Getting to Trinity Life from Lucas',
    directionsText: 'Lucas to Allen is an easy, scenic drive. No highway needed — just a quick trip west on local roads.',
    driveTime: '8-12 min',
    driveDistance: '~5 miles',
    directionsSteps: [
      'From Lucas, head west on Bethany Dr or Angel Pkwy',
      'Continue west through Fairview',
      'Turn south on N Allen Dr (or continue to McDermott Dr)',
      'Arrive at 301 N Allen Dr, Allen, TX'
    ],
    nearbyLandmarks: [
      'Lovejoy High School (6 min)',
      'Lucas Community Park (8 min from office)',
      'Southfork Ranch area (12 min from office)',
      'Fairview Town Center (5 min)',
      'Allen Premium Outlets (3 min from office)'
    ],

    testimonials: [
      {
        text: 'We\'re a ranching family in Lucas and our kids are always climbing, riding, and falling. Dr. Colton keeps them aligned and healthy. The drive is easy and totally worth it.',
        author: 'The Harrison Family',
        detail: 'Lucas residents, 4 kids under care'
      },
      {
        text: 'I chose Trinity Life because I wanted a natural approach for my pregnancy. Living in Lucas, the short drive to Allen felt like going to a neighbor\'s house. The care has been incredible.',
        author: 'Megan R.',
        detail: 'Lucas, expecting mom (36 weeks)'
      }
    ],

    faqs: [
      { question: 'How far is your office from Lucas, TX?', answer: 'Our office is approximately 5 miles west of Lucas — about an 8-12 minute drive on local roads like Bethany Dr or Angel Pkwy. No highway driving required.' },
      { question: 'Is chiropractic care good for active/equestrian kids?', answer: 'Absolutely. Many of our Lucas families bring their athletic and equestrian kids in for regular care. Chiropractic helps with injury prevention, faster recovery, better coordination, and keeping growing bodies aligned during intense physical activity.' },
      { question: 'Do you understand the needs of rural families?', answer: 'Yes! Several of our Lucas families live on acreage and have unique physical demands. We tailor care to support active, outdoor lifestyles — from kids who ride horses to parents managing property.' },
      { question: 'Can I bring multiple kids in at once?', answer: 'Of course! We love it when the whole family comes. Our office is designed for families, and we can see everyone efficiently during the same visit.' },
      { question: 'Do you work with Lovejoy ISD families?', answer: 'Yes, we see many families in the Lovejoy ISD district. Students, athletes, teachers, and parents — we serve the whole Lovejoy community.' },
      { question: 'What\'s the easiest route from eastern Lucas?', answer: 'From eastern Lucas, take Country Club Rd or FM 1378 south to Bethany Dr, then head west. You\'ll reach our office in about 12-15 minutes depending on your exact location.' }
    ],

    nearbyAreas: [
      { name: 'Allen', slug: 'chiropractor-allen-tx' },
      { name: 'Fairview', slug: 'chiropractor-fairview-tx' },
      { name: 'Parker', slug: 'chiropractor-parker-tx' },
      { name: 'McKinney', slug: 'chiropractor-mckinney-tx' },
      { name: 'Murphy', slug: 'chiropractor-murphy-tx' },
      { name: 'Plano', slug: 'chiropractor-plano-tx' }
    ]
  },

  'chiropractor-fairview-tx': {
    city: 'Fairview',
    state: 'TX',
    metaTitle: 'Chiropractor Near Fairview, TX | Trinity Life Chiropractic Allen',
    metaDescription: 'Fairview, TX families are just 5 minutes from Trinity Life Chiropractic in Allen. Specializing in prenatal, pediatric, and family wellness care. Book today.',
    heroHeadline: 'Chiropractor Near Fairview, TX',
    heroSubheadline: 'Fairview\'s closest specialized prenatal and pediatric chiropractor is right next door in Allen — just 5 minutes away.',
    heroImage: '/assets/images/trinity-life-chiropractic-office-allen-texas.webp',

    introTitle: 'Fairview\'s Neighborhood Chiropractor',
    introText: 'Fairview is a small, close-knit community nestled between Allen and McKinney — and Trinity Life Chiropractic is practically right next door. At just 5 minutes from our Allen office, Fairview families enjoy the shortest commute of any community we serve. Our specialized prenatal, pediatric, and nervous system care is perfectly suited for Fairview\'s family-oriented lifestyle.',
    introHighlights: [
      { label: 'Drive from Fairview', value: '~5 min' },
      { label: 'Fairview Families', value: '60+' },
      { label: 'Closest Specialist', value: 'Yes' },
      { label: 'Same-Week Appts', value: 'Available' }
    ],

    whyChooseTitle: 'Why Fairview Families Love Trinity Life',
    whyChooseText: 'Being just minutes from Fairview means our office feels like an extension of the community. Fairview families enjoy unparalleled convenience along with world-class specialized care.',
    whyChooseReasons: [
      { title: 'Closest Specialized Office', desc: 'At just 5 minutes away, we\'re likely closer than your grocery store. No other prenatal/pediatric specialist is this convenient for Fairview residents.' },
      { title: 'Share Your Community Values', desc: 'Fairview families value quality of life, natural health, and strong family bonds — exactly what our practice is built around.' },
      { title: 'Prenatal & Postpartum Expertise', desc: 'Expecting and new moms in Fairview benefit from our Webster Technique certification and specialized postpartum recovery care.' },
      { title: 'Support for Growing Families', desc: 'From first-time parents to families with multiple children, we provide age-appropriate care for every stage of growth.' },
      { title: 'Fairview-Allen Connection', desc: 'Many Fairview families already shop, dine, and attend school in Allen. Adding chiropractic care to your Allen routine is effortless.' },
      { title: 'Genuine Relationships', desc: 'Our practice is small enough to know every family by name. Fairview families appreciate the personal touch and continuity of care.' }
    ],

    communityTitle: 'Part of the Fairview-Allen Family',
    communityText: 'Fairview and Allen share schools, shopping, and community events. Trinity Life is a natural extension of the Fairview family lifestyle.',
    communityDetails: [
      'Member of the Allen-Fairview Chamber of Commerce',
      'Serve families from Heritage Ranch, The Estates, and Fairview Farms',
      'Support Allen-Fairview area schools and community events',
      'Connected with Fairview-area birth professionals and pediatricians',
      'Quick access from Stacy Rd and SH-5 corridors',
      'Many Fairview families walk in our doors within their first week of hearing about us'
    ],

    directionsTitle: 'A Quick Trip from Fairview',
    directionsText: 'Fairview residents enjoy the shortest drive to our office. Multiple routes make it easy from any Fairview neighborhood.',
    driveTime: '4-7 min',
    driveDistance: '~3 miles',
    directionsSteps: [
      'From Fairview, head south on SH-5 (Greenville Ave) or west on Stacy Rd',
      'Turn south on N Allen Dr or use McDermott Dr',
      'Arrive at 301 N Allen Dr, Allen, TX 75013'
    ],
    nearbyLandmarks: [
      'Fairview Town Center (4 min from office)',
      'Heritage Ranch Golf & Country Club (6 min from office)',
      'Heard Natural Science Museum (5 min)',
      'Allen Premium Outlets (3 min from office)',
      'Watters Creek (7 min from office)'
    ],

    testimonials: [
      {
        text: 'We live in Heritage Ranch and it takes us less time to get to Dr. Colton than it does to get to the grocery store. Our whole family is under care and we couldn\'t be happier with the results.',
        author: 'Sarah & Mike L.',
        detail: 'Fairview (Heritage Ranch), family of 5'
      },
      {
        text: 'As a Fairview mom with a newborn and a toddler, convenience matters. Trinity Life is so close and the team makes it so easy to bring both kids. My toddler actually runs in excited!',
        author: 'Katie D.',
        detail: 'Fairview resident, mom of 2'
      }
    ],

    faqs: [
      { question: 'How close is Trinity Life to Fairview?', answer: 'We\'re practically neighbors! Our office is about 3 miles from most Fairview neighborhoods, making it a 4-7 minute drive. We\'re the closest specialized prenatal and pediatric chiropractic office to Fairview.' },
      { question: 'Do you serve the Heritage Ranch area?', answer: 'Yes! Heritage Ranch is one of our most well-represented neighborhoods. Many Heritage Ranch families are long-term practice members.' },
      { question: 'Is there a prenatal chiropractor closer to Fairview?', answer: 'Our Allen office is the closest Webster Technique certified, prenatal-specialized chiropractic office to Fairview. At just 5 minutes away, you won\'t find specialized prenatal care any closer.' },
      { question: 'What\'s the best route from Fairview to your office?', answer: 'The quickest route is typically to head south on SH-5 to Allen and then west on McDermott Dr to N Allen Dr. Alternatively, you can take Stacy Rd west to Allen.' },
      { question: 'Do Fairview families need to worry about traffic?', answer: 'Not at all. The drive from Fairview to our Allen office avoids major highway traffic. Even during peak hours, you should reach us in under 10 minutes.' },
      { question: 'Can I combine my office visit with Allen errands?', answer: 'Many Fairview families do exactly that! They combine their appointment with a trip to Allen Premium Outlets, Watters Creek, or other Allen shopping and dining. It\'s a win-win.' }
    ],

    nearbyAreas: [
      { name: 'Allen', slug: 'chiropractor-allen-tx' },
      { name: 'McKinney', slug: 'chiropractor-mckinney-tx' },
      { name: 'Lucas', slug: 'chiropractor-lucas-tx' },
      { name: 'Parker', slug: 'chiropractor-parker-tx' },
      { name: 'Plano', slug: 'chiropractor-plano-tx' },
      { name: 'Murphy', slug: 'chiropractor-murphy-tx' }
    ]
  },

  'chiropractor-parker-tx': {
    city: 'Parker',
    state: 'TX',
    metaTitle: 'Chiropractor Near Parker, TX | Trinity Life Chiropractic',
    metaDescription: 'Parker, TX families trust Trinity Life Chiropractic in Allen for specialized prenatal, pediatric, and family chiropractic care. About 15 min drive. Book today.',
    heroHeadline: 'Chiropractor Near Parker, TX',
    heroSubheadline: 'Parker families seeking specialized prenatal and pediatric chiropractic care find exactly what they need at Trinity Life — just a short drive west in Allen.',
    heroImage: '/assets/images/trinity-life-chiropractic-treatment-room.webp',

    introTitle: 'Specialized Chiropractic Care Near Parker',
    introText: 'The city of Parker is known for its wide-open spaces, one-acre lots, and families who value a natural way of life. Trinity Life Chiropractic in Allen is the perfect match for Parker families who want a holistic, drug-free approach to healthcare. Our office specializes in the exact kind of care that active, nature-loving Parker families need — from prenatal support to pediatric wellness to whole-family nervous system care.',
    introHighlights: [
      { label: 'Drive from Parker', value: '~15 min' },
      { label: 'Parker Families Served', value: '40+' },
      { label: 'Natural Approach', value: 'Drug-Free' },
      { label: 'Family-Centered', value: '100%' }
    ],

    whyChooseTitle: 'Why Parker Families Drive to Trinity Life',
    whyChooseText: 'Parker residents appreciate quality and intention in everything they do — from the properties they choose to the healthcare providers they trust. Our specialized, purpose-driven approach resonates with Parker\'s community values.',
    whyChooseReasons: [
      { title: 'Aligned with Natural Living', desc: 'Parker families often embrace a natural lifestyle. Our drug-free, neurological approach to health fits right in with that philosophy.' },
      { title: 'Worth the Short Drive', desc: 'The 15-minute drive via FM 1378 or Spring Creek Pkwy brings you to the most specialized prenatal and pediatric office in the Collin County area.' },
      { title: 'Care for Country Kids', desc: 'Kids who ride horses, play in creeks, and climb trees need a chiropractor who understands active lifestyles. We help them stay strong and resilient.' },
      { title: 'Pregnancy Preparation', desc: 'Whether you\'re planning a natural birth, home birth, or hospital delivery, our Webster Technique care helps your body prepare for the best possible outcome.' },
      { title: 'Family Scheduling', desc: 'Bring the whole crew in one visit — we know Parker families are busy with activities, animals, and adventures.' },
      { title: 'Trusted by Your Neighbors', desc: 'Many Parker families found us through word-of-mouth referrals from other Parker residents. When your neighbor says it works, it carries weight.' }
    ],

    communityTitle: 'Supporting Parker\'s Way of Life',
    communityText: 'Parker\'s community spirit and emphasis on family life mirrors our own values. We\'re honored to serve families from this unique community.',
    communityDetails: [
      'Serve families from Parker\'s acreage communities and neighborhoods',
      'Support for equestrian families and young athletes',
      'Convenient location via FM 1378 and Spring Creek corridors',
      'Relationships with Parker-area homeschool families',
      'Understanding of rural family healthcare needs',
      'Referral network with natural health practitioners in the Parker-Lucas area'
    ],

    directionsTitle: 'Getting to Trinity Life from Parker',
    directionsText: 'Parker to Allen is a straightforward drive west. Scenic roads bring you right to our door.',
    driveTime: '12-18 min',
    driveDistance: '~8 miles',
    directionsSteps: [
      'From Parker, head west on FM 1378 or Spring Creek Pkwy',
      'Continue through Lucas toward Allen',
      'Turn south on N Allen Dr or use McDermott Dr',
      'Arrive at 301 N Allen Dr, Allen, TX 75013'
    ],
    nearbyLandmarks: [
      'Southfork Ranch (10 min from office)',
      'Lucas Community Park (8 min from office)',
      'Allen Premium Outlets (3 min from office)',
      'Celebration Park (5 min from office)',
      'Heard Natural Science Museum (6 min from office)'
    ],

    testimonials: [
      {
        text: 'Finding a specialized chiropractor near Parker seemed impossible until we found Trinity Life. The drive through Lucas is peaceful, and the care Dr. Colton provides is second to none.',
        author: 'Stephanie & Brandon J.',
        detail: 'Parker residents, homeschool family of 6'
      },
      {
        text: 'Our daughter rides competitively and was having constant back pain. Since starting care at Trinity Life, she rides pain-free and has better focus at school too.',
        author: 'Kim A.',
        detail: 'Parker, mom of teen equestrian'
      }
    ],

    faqs: [
      { question: 'Is Trinity Life the closest specialized chiropractor to Parker?', answer: 'For prenatal and pediatric specialization, yes. While there are general chiropractors closer, our Webster Technique certification and pediatric neurological focus make us uniquely qualified — and we\'re just a 15-minute drive away.' },
      { question: 'What\'s the best route from Parker to your office?', answer: 'Most Parker residents take FM 1378 west through Lucas to Allen, or Spring Creek Pkwy west. Both routes are scenic, low-traffic, and bring you to our office in 12-18 minutes.' },
      { question: 'Do you see equestrian athletes?', answer: 'Yes! We love working with equestrian athletes. Horseback riding creates specific spinal patterns, and regular adjustments help maintain alignment, prevent injuries, and improve riding performance.' },
      { question: 'Can you help with homeschool families\' health needs?', answer: 'Absolutely. We see many homeschool families from the Parker-Lucas area. We can accommodate flexible scheduling that works with your homeschool calendar.' },
      { question: 'Is the drive worth it for weekly visits?', answer: 'Our Parker families consistently say yes. The specialized care, family-friendly environment, and tangible results make the 15-minute drive feel effortless. Many combine their visit with Allen errands.' },
      { question: 'Do you offer family plans for large families?', answer: 'Yes! We understand that Parker families are often larger families, and we offer plans that make it affordable to bring everyone in for regular care.' }
    ],

    nearbyAreas: [
      { name: 'Lucas', slug: 'chiropractor-lucas-tx' },
      { name: 'Allen', slug: 'chiropractor-allen-tx' },
      { name: 'Fairview', slug: 'chiropractor-fairview-tx' },
      { name: 'McKinney', slug: 'chiropractor-mckinney-tx' },
      { name: 'Murphy', slug: 'chiropractor-murphy-tx' },
      { name: 'Plano', slug: 'chiropractor-plano-tx' }
    ]
  },

  'chiropractor-murphy-tx': {
    city: 'Murphy',
    state: 'TX',
    metaTitle: 'Chiropractor Near Murphy, TX | Prenatal & Pediatric | Trinity Life',
    metaDescription: 'Murphy, TX families choose Trinity Life Chiropractic in Allen for expert prenatal, pediatric, and family care. Just 10 min away. Schedule your appointment today.',
    heroHeadline: 'Chiropractor Near Murphy, TX',
    heroSubheadline: 'Murphy families enjoy close-knit community living — and quick access to specialized prenatal and pediatric chiropractic care at Trinity Life in Allen.',
    heroImage: '/assets/images/trinity-life-chiropractic-office-allen-texas.webp',

    introTitle: 'The Go-To Chiropractor for Murphy Families',
    introText: 'Murphy has quickly become one of the most desirable family communities in Collin County — with top-rated schools, safe neighborhoods, and a growing population of young families. These families deserve specialized healthcare, and Trinity Life Chiropractic in Allen provides exactly that. Located just 10 minutes north via FM 544 or US-75, we\'re the prenatal and pediatric chiropractic destination for Murphy parents who want more than a general adjustment.',
    introHighlights: [
      { label: 'Drive from Murphy', value: '~10 min' },
      { label: 'Murphy Families', value: '80+' },
      { label: 'Young Families Focus', value: 'Core' },
      { label: 'Infant Specialization', value: 'Expert' }
    ],

    whyChooseTitle: 'Why Murphy Parents Trust Trinity Life',
    whyChooseText: 'Murphy is full of young, growing families — first-time parents, families with toddlers, and expecting moms who want the best for their children. Our specialized focus is exactly what Murphy needs.',
    whyChooseReasons: [
      { title: 'Quick Access from Murphy', desc: 'Head north on FM 544 or hop on US-75 and you\'re at our Allen office in about 10 minutes. Easy for busy Murphy parents.' },
      { title: 'Specialized for Young Families', desc: 'Murphy\'s booming population of young families is our sweet spot. We specialize in the exact challenges new and growing families face.' },
      { title: 'Prenatal Care That Changes Birth Outcomes', desc: 'Murphy moms rave about the difference Webster Technique care makes in their pregnancy comfort, labor preparation, and postpartum recovery.' },
      { title: 'Newborn & Infant Expertise', desc: 'Colic, reflux, latching issues, and sleep struggles — we see these daily and help Murphy babies find relief through gentle, precise care.' },
      { title: 'Plano ISD Families Welcome', desc: 'Many Murphy families are in the Plano ISD system. We see students, teachers, and families from across the district.' },
      { title: 'Growing with Murphy', desc: 'As Murphy grows, so does our practice. We\'re committed to being a long-term health partner for this community.' }
    ],

    communityTitle: 'Growing with the Murphy Community',
    communityText: 'Murphy is one of the fastest-growing family communities in North Texas, and we\'re proud to be the specialized chiropractic provider these families turn to.',
    communityDetails: [
      'Serve families from Murphy\'s newest neighborhoods and established communities',
      'Support for Plano ISD families in the Murphy area',
      'Connections with Murphy-area pediatricians and family doctors',
      'Understanding of young family healthcare needs and budgets',
      'Easy access from FM 544, Maxwell Creek, and surrounding roads',
      'Many Murphy families are multi-year practice members'
    ],

    directionsTitle: 'Driving to Trinity Life from Murphy',
    directionsText: 'Murphy to Allen is a quick, straightforward drive. Multiple routes keep it convenient no matter where in Murphy you live.',
    driveTime: '8-12 min',
    driveDistance: '~6 miles',
    directionsSteps: [
      'From Murphy, head north on FM 544 toward Allen',
      'Alternatively, take US-75 North to the McDermott Dr exit',
      'Head east on McDermott Dr to N Allen Dr',
      'Turn left (north) to arrive at 301 N Allen Dr'
    ],
    nearbyLandmarks: [
      'Murphy City Hall (10 min from office)',
      'Murphy Marketplace (8 min from office)',
      'Central Park Murphy (9 min from office)',
      'Allen Premium Outlets (3 min from office)',
      'Celebration Park (5 min from office)'
    ],

    testimonials: [
      {
        text: 'We moved to Murphy with a newborn who wouldn\'t stop screaming. A neighbor recommended Dr. Colton. Three visits later, our baby was sleeping through the night. We tell every new parent in Murphy about Trinity Life.',
        author: 'Amanda & Chris B.',
        detail: 'Murphy residents, parents of 6-month-old'
      },
      {
        text: 'My husband was skeptical, but after seeing the scan results and watching our son\'s behavior improve at school, he became a believer. We all go now — the whole family, every week.',
        author: 'Nicole T.',
        detail: 'Murphy, family of 4'
      }
    ],

    faqs: [
      { question: 'How long is the drive from Murphy to Trinity Life?', answer: 'Most Murphy residents reach us in 8-12 minutes via FM 544 North or US-75 North. Our office is right off McDermott Dr in Allen — very accessible from Murphy.' },
      { question: 'Do you see a lot of families from Murphy?', answer: 'Yes! Murphy families are one of our largest community groups. The city\'s young family demographic aligns perfectly with our prenatal and pediatric specialization.' },
      { question: 'My baby has colic — can you help?', answer: 'Colic is one of the most common reasons Murphy families bring their infants to us. Our gentle approach focuses on reducing tension in the nervous system, often providing significant relief within the first few visits.' },
      { question: 'Is chiropractic safe for newborns?', answer: 'Absolutely. Our pediatric adjustments use no more pressure than you\'d use to check a tomato for ripeness. It\'s extremely gentle and safe for newborns as young as a few days old.' },
      { question: 'Do you accept families from the Plano ISD part of Murphy?', answer: 'Of course! We serve families from all parts of Murphy regardless of school district. Many of our Murphy families are in Plano ISD, and we\'re familiar with the community.' },
      { question: 'Can I bring my stroller and diaper bag?', answer: 'Yes! Our office is designed for families. We have plenty of room for strollers, a play area for siblings, and a nursing-friendly environment. You\'ll feel right at home.' }
    ],

    nearbyAreas: [
      { name: 'Allen', slug: 'chiropractor-allen-tx' },
      { name: 'Plano', slug: 'chiropractor-plano-tx' },
      { name: 'Richardson', slug: 'chiropractor-richardson-tx' },
      { name: 'Lucas', slug: 'chiropractor-lucas-tx' },
      { name: 'Fairview', slug: 'chiropractor-fairview-tx' },
      { name: 'McKinney', slug: 'chiropractor-mckinney-tx' }
    ]
  },

  'chiropractor-frisco-tx': {
    city: 'Frisco',
    state: 'TX',
    metaTitle: 'Chiropractor Near Frisco, TX | Prenatal & Pediatric | Trinity Life',
    metaDescription: 'Frisco, TX families drive to Trinity Life Chiropractic in Allen for specialized prenatal, pediatric, and nervous system care. Just 15 min east. Book now.',
    heroHeadline: 'Chiropractor Near Frisco, TX',
    heroSubheadline: 'Frisco families who want more than a general adjustment find specialized prenatal, pediatric, and neurological care at Trinity Life — just 15 minutes east in Allen.',
    heroImage: '/assets/images/trinity-life-chiropractic-treatment-room.webp',

    introTitle: 'The Specialized Chiropractor Frisco Families Trust',
    introText: 'Frisco is one of the fastest-growing cities in America, known for its world-class sports facilities, thriving economy, and vibrant family culture. With rapid growth comes a demand for specialized healthcare — and that\'s where Trinity Life Chiropractic stands out. While Frisco has many chiropractors, families seeking specialized neurological care for pregnancy, infants, and children choose to make the short drive to our Allen office for expertise they can\'t find locally.',
    introHighlights: [
      { label: 'Drive from Frisco', value: '~15 min' },
      { label: 'Frisco Families', value: '120+' },
      { label: 'Specialization', value: 'Neuro-Focused' },
      { label: 'Webster Certified', value: 'Yes' }
    ],

    whyChooseTitle: 'Why Frisco Families Make the Drive',
    whyChooseText: 'Frisco families are discerning — they research, compare, and choose the best. When it comes to prenatal and pediatric chiropractic care, our specialized approach wins their trust time and again.',
    whyChooseReasons: [
      { title: 'Specialization That\'s Hard to Find', desc: 'Frisco has many chiropractors, but few (if any) are exclusively focused on prenatal, pediatric, and neurological care with INSiGHT scanning technology.' },
      { title: 'Easy 15-Minute Drive', desc: 'From most of Frisco, head east on Main St/Stacy Rd or south to US-75 and north to Allen. It\'s quick, against traffic, and stress-free.' },
      { title: 'Trusted by Frisco Birth Professionals', desc: 'Midwives, doulas, and lactation consultants in the Frisco area regularly refer their clients to our practice.' },
      { title: 'Results-Driven Care', desc: 'Our INSiGHT scans provide objective proof of nervous system improvement — not just symptom relief. Frisco families appreciate seeing measurable data.' },
      { title: 'Perfect for Frisco\'s Young Families', desc: 'Frisco\'s population skews young and family-oriented. Our prenatal and pediatric expertise is exactly what this demographic needs.' },
      { title: 'A Calmer Pace', desc: 'Frisco families often appreciate the more intimate, community-feel of our Allen office compared to the larger medical complexes in Frisco.' }
    ],

    communityTitle: 'Connected to Frisco\'s Family Culture',
    communityText: 'Frisco\'s explosive growth has created a vibrant community of young families. We\'re proud to serve this dynamic city and support its families\' health goals.',
    communityDetails: [
      'Serve families from Frisco Square, Starwood, Phillips Creek Ranch, and Lawler Park',
      'Relationships with Frisco-area midwives, doulas, and birth centers',
      'Support for Frisco ISD and Prosper ISD families',
      'Workshop presentations for Frisco mom groups',
      'Accessible from Dallas North Tollway, US-75, and Stacy Rd',
      'Growing Frisco patient base with strong referral network'
    ],

    directionsTitle: 'Getting to Trinity Life from Frisco',
    directionsText: 'The drive from Frisco to Allen is quick and easy — often against traffic flow for a stress-free trip.',
    driveTime: '12-18 min',
    driveDistance: '~10 miles',
    directionsSteps: [
      'From Frisco, head east on Main St or Stacy Rd toward Allen',
      'Alternatively, take US-75 South to the McDermott Dr exit',
      'Head east on McDermott Dr to N Allen Dr',
      'Turn left (north) to arrive at 301 N Allen Dr'
    ],
    nearbyLandmarks: [
      'Frisco Square (18 min from office)',
      'The Star (Frisco) (16 min from office)',
      'Stonebriar Centre (14 min from office)',
      'Dr Pepper Ballpark (15 min from office)',
      'Frisco Medical Center (13 min from office)'
    ],

    testimonials: [
      {
        text: 'I saw 2 chiropractors in Frisco before someone told me about Trinity Life. Within the first visit, I knew the difference. They actually scanned my nervous system and showed me exactly what was going on. Game changer.',
        author: 'Rachel W.',
        detail: 'Frisco (Starwood), wellness patient'
      },
      {
        text: 'Our twins were born premature and had developmental delays. Dr. Colton\'s gentle approach has been transformative. Both girls are hitting milestones now. The drive from Frisco is nothing compared to these results.',
        author: 'Mark & Jennifer H.',
        detail: 'Frisco, parents of twin toddlers'
      }
    ],

    faqs: [
      { question: 'Why would I drive from Frisco when there are chiropractors here?', answer: 'Frisco has excellent general chiropractors, but our practice is exclusively focused on prenatal (Webster Technique), pediatric neurology, and nervous system care using INSiGHT scanning technology. If you\'re looking for specialized care — particularly for pregnancy, infants, or children — our expertise is worth the 15-minute drive.' },
      { question: 'What\'s the fastest route from Frisco to your Allen office?', answer: 'The fastest route depends on where in Frisco you\'re starting. From central/south Frisco, take Stacy Rd or Main St east directly into Allen. From north Frisco, US-75 South to McDermott Dr is typically quickest. Both routes are 12-18 minutes.' },
      { question: 'Do you see many Frisco families?', answer: 'Yes! Frisco is one of our top referring cities. We see families from across Frisco — from the Tollway corridor to east Frisco neighborhoods. Many were referred by their Frisco-area midwife, doula, or pediatrician.' },
      { question: 'Can I get a consultation before making the drive?', answer: 'Absolutely. We offer complimentary phone consultations for families who want to learn more before visiting. Call (214) 509-7744 to speak with our team.' },
      { question: 'Is the drive against traffic?', answer: 'Generally yes! If you\'re coming from Frisco during morning or evening hours, you\'re typically heading against the main traffic flow on US-75, making it a smooth drive.' },
      { question: 'Do you work with any Frisco birth professionals?', answer: 'Yes, we have strong relationships with midwives, doulas, lactation consultants, and OBs in the Frisco area. Co-managed care helps ensure the best outcomes for expecting moms.' }
    ],

    nearbyAreas: [
      { name: 'Allen', slug: 'chiropractor-allen-tx' },
      { name: 'McKinney', slug: 'chiropractor-mckinney-tx' },
      { name: 'Plano', slug: 'chiropractor-plano-tx' },
      { name: 'Fairview', slug: 'chiropractor-fairview-tx' },
      { name: 'Lucas', slug: 'chiropractor-lucas-tx' },
      { name: 'Murphy', slug: 'chiropractor-murphy-tx' }
    ]
  },

  'chiropractor-richardson-tx': {
    city: 'Richardson',
    state: 'TX',
    metaTitle: 'Chiropractor Near Richardson, TX | Trinity Life Chiropractic Allen',
    metaDescription: 'Richardson, TX families drive to Trinity Life Chiropractic in Allen for specialized prenatal, pediatric, and family care. About 20 min on US-75. Book today.',
    heroHeadline: 'Chiropractor Near Richardson, TX',
    heroSubheadline: 'Richardson families seeking specialized prenatal and pediatric chiropractic care find it at Trinity Life — a straightforward drive north on US-75.',
    heroImage: '/assets/images/trinity-life-chiropractic-office-allen-texas.webp',

    introTitle: 'Specialized Care Worth the Drive from Richardson',
    introText: 'Richardson is an established, diverse city with excellent schools and a strong community identity. Richardson families who are looking for more than general chiropractic — specifically, neurologically focused care for pregnancy, infants, and children — choose Trinity Life Chiropractic in Allen. While we\'re about 20 minutes north on US-75, the specialized expertise our office provides is difficult to find in the Richardson-Plano corridor, making the drive a worthwhile investment in your family\'s health.',
    introHighlights: [
      { label: 'Drive from Richardson', value: '~20 min' },
      { label: 'Richardson Families', value: '50+' },
      { label: 'Expertise Level', value: 'Specialist' },
      { label: 'Commuter-Friendly', value: 'On US-75' }
    ],

    whyChooseTitle: 'Why Richardson Families Choose Trinity Life',
    whyChooseText: 'Richardson families are well-educated and health-conscious. They do their research and choose providers who deliver real, measurable results. Our data-driven, specialized approach earns their trust.',
    whyChooseReasons: [
      { title: 'Straight Shot on US-75', desc: 'From Richardson, it\'s a direct drive north on US-75 to our Allen office. No complicated turns, no toll roads required. Easy and predictable.' },
      { title: 'Specialization Not Available in Richardson', desc: 'Richardson has many general chiropractors, but finding a prenatal and pediatric neurological specialist with scanning technology is rare. That\'s what we offer.' },
      { title: 'Great for Richardson Commuters', desc: 'If you commute north on US-75 for work, our office is right off the highway at McDermott Dr. Fit your appointment into your daily routine.' },
      { title: 'Science-Based Approach', desc: 'Richardson\'s educated, tech-savvy families appreciate our INSiGHT scanning technology that provides objective nervous system data — not just subjective assessments.' },
      { title: 'Diverse Family Support', desc: 'We proudly serve Richardson\'s diverse community, welcoming families of all backgrounds and tailoring care to individual needs.' },
      { title: 'Long-Term Health Partnership', desc: 'Many Richardson families have been with us for years, driving up regularly because the results speak for themselves.' }
    ],

    communityTitle: 'Serving Richardson\'s Diverse Families',
    communityText: 'Richardson\'s cultural diversity and emphasis on education create a community that values evidence-based, specialized healthcare. We\'re honored to serve families from across this vibrant city.',
    communityDetails: [
      'Serve families from North Richardson, Far North Richardson, and central Richardson',
      'Accessible via US-75 and the Dallas North Tollway',
      'Connections with Richardson ISD families and healthcare providers',
      'Support for UTD-area families and staff',
      'Understanding of diverse family healthcare needs',
      'Many Richardson families combine visits with Plano or Allen errands'
    ],

    directionsTitle: 'Driving to Trinity Life from Richardson',
    directionsText: 'Richardson to Allen is a direct, easy drive north on US-75. No toll roads required.',
    driveTime: '18-25 min',
    driveDistance: '~15 miles',
    directionsSteps: [
      'From Richardson, head north on US-75 (Central Expressway)',
      'Continue through Plano on US-75 North',
      'Take the McDermott Dr exit in Allen',
      'Turn right (east) onto McDermott Dr',
      'Turn left (north) onto N Allen Dr',
      'Arrive at 301 N Allen Dr on the right'
    ],
    nearbyLandmarks: [
      'CityLine Richardson (22 min from office)',
      'UTD campus (20 min from office)',
      'Richardson Civic Center (23 min from office)',
      'Plano Town Center (14 min from office, on the way)',
      'Allen Premium Outlets (3 min from office)'
    ],

    testimonials: [
      {
        text: 'We live in Richardson and tried several chiropractors closer to home. None specialized in what our son needed — he has sensory processing challenges. Trinity Life has been transformational for him and our whole family.',
        author: 'David & Priya S.',
        detail: 'Richardson, parents of 5-year-old with SPD'
      },
      {
        text: 'I commute through Allen every day for work, so stopping at Trinity Life on my way home just makes sense. The prenatal care during my pregnancy was incredible, and now my baby goes too.',
        author: 'Jennifer L.',
        detail: 'Richardson, new mom & commuter'
      }
    ],

    faqs: [
      { question: 'Is it worth driving from Richardson for chiropractic care?', answer: 'Our Richardson families consistently say yes. The specialized prenatal, pediatric, and neurological care we provide — complete with INSiGHT scanning technology — isn\'t readily available in the Richardson area. Many say the 20-minute drive is a small price for the quality of care they receive.' },
      { question: 'What\'s the best time to drive from Richardson to avoid traffic?', answer: 'Midday (10 AM - 2 PM) offers the quickest drive. If you commute north for work, our afternoon appointments work well for a stop on your way home. Morning appointments before 9 AM are also typically smooth.' },
      { question: 'Do you see families from the UTD area?', answer: 'Yes! We serve families and staff from the UTD area. Our office is a straight shot north on US-75, making it accessible for anyone in that corridor.' },
      { question: 'How is your care different from chiropractors in Richardson?', answer: 'While Richardson has excellent general chiropractors, our practice is exclusively focused on neurological chiropractic care for prenatal, pediatric, and family wellness. We use INSiGHT scanning technology and are certified in the Webster Technique — a level of specialization that\'s unique in the area.' },
      { question: 'Can I combine my visit with other errands?', answer: 'Many Richardson families combine their Trinity Life appointment with shopping at Allen Premium Outlets, lunch in Allen, or other errands in the Plano-Allen corridor. It makes the trip multi-purpose and efficient.' },
      { question: 'Do you offer early morning or evening hours?', answer: 'Our Thursday hours start at 8 AM, which works well for Richardson commuters heading north. We\'re open until 6 PM on Monday, Tuesday, and Thursday for afternoon flexibility.' }
    ],

    nearbyAreas: [
      { name: 'Plano', slug: 'chiropractor-plano-tx' },
      { name: 'Allen', slug: 'chiropractor-allen-tx' },
      { name: 'Murphy', slug: 'chiropractor-murphy-tx' },
      { name: 'McKinney', slug: 'chiropractor-mckinney-tx' },
      { name: 'Frisco', slug: 'chiropractor-frisco-tx' },
      { name: 'Fairview', slug: 'chiropractor-fairview-tx' }
    ]
  }
};

// --- Services Data for Internal Linking ---
const servicesOffered = [
  { name: 'Pregnancy Chiropractic (Webster Technique)', slug: '/pregnancy-chiropractic-care', icon: Users, desc: 'Specialized prenatal care for a healthier pregnancy and better birth outcomes.' },
  { name: 'Pediatric Chiropractic', slug: '/pediatric-chiropractor-services', icon: Baby, desc: 'Gentle, neurological care for infants, children, and teens.' },
  { name: 'Family Chiropractic', slug: '/family-chiropractic', icon: Heart, desc: 'Whole-family wellness care for every stage of life.' },
  { name: 'Nervous System / INSiGHT Scans', slug: '/nervous-system-care', icon: Brain, desc: 'Objective nervous system assessment with NASA-certified technology.' },
  { name: 'Colic & Reflux Relief', slug: '/colic-reflux-relief', icon: Baby, desc: 'Drug-free relief for infant digestive distress.' },
  { name: 'ADHD & Sensory Support', slug: '/adhd-sensory-processing', icon: Activity, desc: 'Neurological support for focus, regulation, and calm.' },
];

// --- Template Component ---

export const LocationTemplate = ({ slug: propSlug }: { slug?: string }) => {
  const slug = propSlug || (typeof window !== 'undefined' ? window.location.pathname.replace(/^\//, '') : '');

  if (!slug || !locationData[slug]) {
    return null;
  }

  const data = locationData[slug];

  return (
    <div className="pt-24 min-h-screen bg-white font-sans">

      {/* 1. HERO SECTION */}
      <div className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${data.heroImage}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#564972]/95 to-[#564972]/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-[#a68d60]" />
              <span className="text-[#a68d60] font-bold tracking-widest uppercase text-sm">Serving {data.city}, {data.state}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {data.heroHeadline}
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 font-light mb-10 leading-relaxed">
              {data.heroSubheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://trinitylifechiro.janeapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#a68d60] text-white px-8 py-4 rounded-full font-bold hover:bg-[#8e7852] transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                Schedule Your Visit <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:2145097744"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-colors text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" /> (214) 509-7744
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 2. INTRO / STATS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <h2 className="text-3xl md:text-4xl font-bold text-[#564972] mb-6">{data.introTitle}</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">{data.introText}</p>
              <div className="flex items-center gap-4">
                <img src={imgSmiling} alt="Dr. Colton O'Brien" className="w-16 h-16 rounded-full object-cover border-2 border-[#a68d60]" />
                <div>
                  <p className="font-bold text-gray-900">Dr. Colton O'Brien, D.C.</p>
                  <p className="text-sm text-gray-500">Webster Technique Certified | ICPA Member</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              {data.introHighlights.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gray-50 p-6 rounded-2xl text-center border border-gray-100"
                >
                  <p className="text-2xl md:text-3xl font-bold text-[#564972]">{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US - FOR THIS CITY */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#a68d60] font-bold tracking-widest uppercase text-sm mb-2 block">Why Choose Trinity Life</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#564972] mb-4">{data.whyChooseTitle}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{data.whyChooseText}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.whyChooseReasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-[#564972]/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-5 h-5 text-[#564972]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES WE OFFER - INTERNAL LINKS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#a68d60] font-bold tracking-widest uppercase text-sm mb-2 block">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#564972] mb-4">
              Chiropractic Services Available to {data.city} Families
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every service we offer is available to families from {data.city}. Click to learn more about each area of care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesOffered.map((service, idx) => (
              <a
                key={idx}
                href={service.slug}
                className="group bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-[#a68d60] hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-[#564972]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#564972] transition-colors">
                  <service.icon className="w-6 h-6 text-[#564972] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#564972] transition-colors">{service.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
                <span className="inline-flex items-center text-[#a68d60] text-sm font-bold mt-4 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COMMUNITY CONNECTION */}
      <section className="py-20 bg-[#564972] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#a68d60] font-bold tracking-widest uppercase text-sm mb-2 block">Community</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{data.communityTitle}</h2>
              <p className="text-purple-100 text-lg leading-relaxed mb-8">{data.communityText}</p>
              <ul className="space-y-4">
                {data.communityDetails.map((detail, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#a68d60] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-purple-100">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src={imgHighFive} alt={`Serving ${data.city} families`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#564972]/10" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. DIRECTIONS & MAP */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#a68d60] font-bold tracking-widest uppercase text-sm mb-2 block">Directions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#564972] mb-4">{data.directionsTitle}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{data.directionsText}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {/* Drive Info Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
                  <Car className="w-8 h-8 text-[#a68d60] mx-auto mb-2" />
                  <p className="text-2xl font-bold text-[#564972]">{data.driveTime}</p>
                  <p className="text-sm text-gray-500">Drive Time</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
                  <Navigation className="w-8 h-8 text-[#a68d60] mx-auto mb-2" />
                  <p className="text-2xl font-bold text-[#564972]">{data.driveDistance}</p>
                  <p className="text-sm text-gray-500">Distance</p>
                </div>
              </div>

              {/* Step-by-step directions */}
              <div className="bg-white p-8 rounded-2xl border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-[#564972]" /> Step-by-Step Directions
                </h3>
                <ol className="space-y-3">
                  {data.directionsSteps.map((step, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-[#564972] text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-gray-600">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Nearby landmarks */}
              <div className="bg-white p-8 rounded-2xl border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#a68d60]" /> Nearby Landmarks
                </h3>
                <ul className="space-y-2">
                  {data.nearbyLandmarks.map((landmark, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-1.5 h-1.5 bg-[#a68d60] rounded-full mr-3 flex-shrink-0" />
                      {landmark}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Map + Office Info */}
            <div className="space-y-6">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src={`https://maps.google.com/maps?q=301%20N%20Allen%20Dr%2C%20Allen%2C%20TX%2075013&t=&z=11&ie=UTF8&iwloc=&output=embed`}
                  className="absolute inset-0 w-full h-full"
                  title={`Map - ${data.city} to Trinity Life Chiropractic`}
                />
              </div>

              <div className="bg-[#564972] p-8 rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-6">Office Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#a68d60] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Address</p>
                      <p className="text-purple-100">301 N Allen Dr, Allen, TX 75013</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#a68d60] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Phone</p>
                      <p className="text-purple-100">(214) 509-7744</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#a68d60] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold mb-2">Hours</p>
                      <div className="text-purple-100 text-sm space-y-1">
                        <div className="flex justify-between gap-8"><span>Mon</span><span>9 AM – 6 PM</span></div>
                        <div className="flex justify-between gap-8"><span>Tue</span><span>9 AM – 6 PM</span></div>
                        <div className="flex justify-between gap-8"><span>Wed</span><span className="text-[#a68d60]">Closed</span></div>
                        <div className="flex justify-between gap-8"><span>Thu</span><span>8 AM – 6 PM</span></div>
                        <div className="flex justify-between gap-8"><span>Fri</span><span>9 AM – 1 PM</span></div>
                        <div className="flex justify-between gap-8"><span>Sat-Sun</span><span className="text-[#a68d60]">Closed</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="py-20 bg-[#a68d60]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#a68d60] font-bold tracking-widest uppercase text-sm mb-2 block">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#564972]">
              What {data.city} Families Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="flex mb-4 text-[#a68d60]">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-700 italic leading-relaxed mb-6">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-[#a68d60]">{testimonial.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#a68d60] font-bold tracking-widest uppercase text-sm mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#564972] mb-4">
              Questions from {data.city} Families
            </h2>
            <p className="text-lg text-gray-600">
              Common questions we hear from families in {data.city} about visiting our Allen office.
            </p>
          </div>
          <LocationFAQ faqs={data.faqs} />
        </div>
      </section>

      {/* 9. NEARBY AREAS - INTERNAL LINKS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#564972] mb-2">Also Serving Nearby Communities</h2>
            <p className="text-gray-600">We proudly serve families from across the Collin County and North Texas area.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {data.nearbyAreas.map((area, idx) => (
              <a
                key={idx}
                href={`/${area.slug}`}
                className="bg-white px-6 py-3 rounded-full border border-gray-200 text-[#564972] font-bold hover:border-[#a68d60] hover:bg-[#a68d60]/5 transition-all"
              >
                {area.name}, TX
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="py-20 bg-[#564972] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Trinity Life?
          </h2>
          <p className="text-xl text-purple-100 mb-4">
            {data.city} families — we'd love to welcome you to our village.
          </p>
          <p className="text-purple-200 mb-10">
            301 N Allen Dr, Allen, TX 75013 | Just {data.driveTime} from {data.city}
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
              href="tel:2145097744"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-colors"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call (214) 509-7744
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
