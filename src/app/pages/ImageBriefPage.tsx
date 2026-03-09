import React from 'react';
import { motion } from 'motion/react';
import {
  Camera,
  Baby,
  Users,
  Building2,
  Heart,
  Brain,
  Stethoscope,
  ImageIcon,
  ChevronDown,
  Layout,
  Flower2,
  Smile,
  TreePine,
  type LucideIcon,
} from 'lucide-react';
import { Card, CardContent } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '@/app/components/ui/collapsible';

interface ImageShot {
  id: number;
  title: string;
  description: string;
  width: number;
  height: number;
  orientation: 'Landscape' | 'Portrait';
  priority: 1 | 2 | 3 | 4;
  usedOn: string[];
  notes?: string;
  icon: LucideIcon;
}

const shots: ImageShot[] = [
  // Priority 1 — Hero & First Impressions
  {
    id: 1,
    title: 'Dr. Colton Adjusting a Patient',
    description:
      'Adult patient adjustment in the clinic with warm, natural lighting. Should convey expertise and gentle care.',
    width: 1920,
    height: 1080,
    orientation: 'Landscape',
    priority: 1,
    usedOn: ['Homepage hero background', 'Multiple service page heroes'],
    notes:
      'Full-bleed background — leave negative space on the left side for headline text overlay. Works with a dark gradient overlay.',
    icon: Stethoscope,
  },
  {
    id: 2,
    title: 'Dr. Colton with a Family',
    description:
      'Candid, natural moment with parents and kids in the clinic. Smiling, relaxed, and welcoming.',
    width: 1920,
    height: 1080,
    orientation: 'Landscape',
    priority: 1,
    usedOn: [
      'Homepage hero (alternate)',
      'Family Wellness service page',
      'Location pages ("Serving {city} families")',
    ],
    notes: 'Currently one high-five photo is reused in 10+ places — this replaces it.',
    icon: Users,
  },
  {
    id: 3,
    title: 'Dr. Colton Professional Headshot',
    description:
      'Clean, well-lit professional portrait. Friendly expression, branded polo or professional attire.',
    width: 800,
    height: 1067,
    orientation: 'Portrait',
    priority: 1,
    usedOn: [
      'Team page (3:4 portrait)',
      'About section avatar',
      'Location pages (circular avatar)',
      'Testimonial areas',
    ],
    notes: 'Aspect ratio 3:4 portrait. Also cropped to circle for avatar use.',
    icon: Camera,
  },
  {
    id: 4,
    title: 'Clinic Exterior',
    description:
      'Building exterior with signage clearly visible. Welcoming entrance, good curb appeal.',
    width: 1600,
    height: 900,
    orientation: 'Landscape',
    priority: 1,
    usedOn: ['Location pages', 'Contact section', 'Google Business Profile'],
    notes: 'Not currently on the site — this is a gap. Shoot during golden hour if possible.',
    icon: Building2,
  },
  {
    id: 5,
    title: 'Clinic Interior',
    description:
      'Adjustment room and/or waiting area. Clean, modern, family-friendly atmosphere.',
    width: 1600,
    height: 900,
    orientation: 'Landscape',
    priority: 1,
    usedOn: ['About section', 'Process page', 'Google Business Profile'],
    notes: 'Helps build trust before a first visit. Show the space is clean and welcoming.',
    icon: Building2,
  },

  // Priority 2 — Service-Specific Shots
  {
    id: 6,
    title: 'Pregnant Patient Adjustment',
    description:
      'Webster Technique adjustment in action. Gentle positioning, patient comfortable and at ease.',
    width: 1200,
    height: 800,
    orientation: 'Landscape',
    priority: 2,
    usedOn: ['Pregnancy Chiropractic service page', 'Webster Technique blog post'],
    notes: 'Replaces Unsplash stock photo. Patient should appear relaxed and comfortable.',
    icon: Heart,
  },
  {
    id: 7,
    title: 'Infant / Baby Adjustment',
    description:
      'Gentle pediatric adjustment on an infant. Reassuring, tender, showing how light-touch the care is.',
    width: 1200,
    height: 800,
    orientation: 'Landscape',
    priority: 2,
    usedOn: ['Pediatric services page', 'Colic & Reflux Relief page'],
    icon: Baby,
  },
  {
    id: 8,
    title: 'Child (Toddler / School-Age) Adjustment',
    description:
      'Older child being adjusted — kid smiling or calm, Dr. Colton engaged and friendly.',
    width: 1200,
    height: 800,
    orientation: 'Landscape',
    priority: 2,
    usedOn: ['Kids Chiropractic page', 'ADHD & Sensory Processing page'],
    icon: Smile,
  },
  {
    id: 9,
    title: 'INSiGHT Scan in Progress',
    description:
      'Technology shot showing the scanning equipment being used on a patient. Modern, clinical but not sterile.',
    width: 1200,
    height: 800,
    orientation: 'Landscape',
    priority: 2,
    usedOn: ['Nervous System Care page', 'Neurological scans section'],
    notes: 'Showcase the technology — the INSiGHT scanner should be clearly visible.',
    icon: Brain,
  },
  {
    id: 10,
    title: 'Scan Results Explanation',
    description:
      'Dr. Colton showing scan results on a screen to a patient. Conversational, educational moment.',
    width: 1200,
    height: 800,
    orientation: 'Landscape',
    priority: 2,
    usedOn: ['About section', 'Nervous system content', 'Process page'],
    icon: Brain,
  },
  {
    id: 11,
    title: 'Postpartum Mom with Baby in Clinic',
    description:
      'New mom holding or with baby in the clinic, post-adjustment. Calm, relieved, natural.',
    width: 1200,
    height: 800,
    orientation: 'Landscape',
    priority: 2,
    usedOn: ['Postpartum Chiropractic page'],
    notes: 'Replaces Unsplash stock. Should feel authentic, not staged.',
    icon: Flower2,
  },

  // Priority 3 — Lifestyle & Culture
  {
    id: 12,
    title: 'Team Group Photo',
    description:
      'All staff together — welcoming, professional, in branded or coordinated attire.',
    width: 1600,
    height: 900,
    orientation: 'Landscape',
    priority: 3,
    usedOn: ['Team page', 'Careers page', 'About section'],
    notes: 'Coordinate wardrobe with brand colors (plum, gold, or neutral tones).',
    icon: Users,
  },
  {
    id: 13,
    title: 'Front Desk / Check-In Moment',
    description:
      'Patient arriving and being greeted at the front desk. Warm, smiling, welcoming first impression.',
    width: 1200,
    height: 800,
    orientation: 'Landscape',
    priority: 3,
    usedOn: ['Process page (Step 1)', 'Contact section'],
    icon: Smile,
  },
  {
    id: 14,
    title: 'Consultation Conversation',
    description:
      'Dr. Colton talking with a patient (not adjusting) — seated, attentive, educational.',
    width: 1200,
    height: 800,
    orientation: 'Landscape',
    priority: 3,
    usedOn: ['Process page (Step 2)', 'Blog post imagery'],
    icon: Stethoscope,
  },
  {
    id: 15,
    title: 'Happy Family Leaving Clinic',
    description:
      'Candid shot of a family (with kids) leaving the clinic, smiling. Natural, not posed.',
    width: 1200,
    height: 800,
    orientation: 'Landscape',
    priority: 3,
    usedOn: ['Testimonials section', 'Location pages'],
    icon: Heart,
  },

  // Priority 4 — Blog & Content
  {
    id: 16,
    title: 'Child Playing / Thriving',
    description:
      'Active, energetic child outdoors — running, playing, full of life. Represents wellness outcomes.',
    width: 1200,
    height: 800,
    orientation: 'Landscape',
    priority: 4,
    usedOn: ['Blog thumbnails', 'Kids wellness content'],
    icon: TreePine,
  },
  {
    id: 17,
    title: 'Stress Relief / Wellness Lifestyle',
    description:
      'Calm, natural setting — someone relaxed, stretching, or in a peaceful moment.',
    width: 1200,
    height: 800,
    orientation: 'Landscape',
    priority: 4,
    usedOn: ['Blog: "5 Ways to Reduce Stress"', 'Wellness content'],
    icon: ImageIcon,
  },
  {
    id: 18,
    title: 'Family Activity Outdoors',
    description:
      'Family together at a park or outdoors — playing, walking, enjoying time together.',
    width: 1200,
    height: 800,
    orientation: 'Landscape',
    priority: 4,
    usedOn: ['Blog thumbnails', 'Family wellness content'],
    icon: Users,
  },
];

const priorityGroups = [
  {
    priority: 1 as const,
    label: 'Priority 1 — Hero & First Impressions',
    description:
      'The highest-impact images. These appear on the homepage hero, team page, and across all location pages.',
    color: 'bg-[var(--color-brand-plum)]',
    badgeColor: 'bg-[var(--color-brand-plum)] text-white',
  },
  {
    priority: 2 as const,
    label: 'Priority 2 — Service-Specific Shots',
    description:
      'These replace generic stock photos on each service detail page with authentic clinic imagery.',
    color: 'bg-[var(--color-brand-gold)]',
    badgeColor: 'bg-[var(--color-brand-gold)] text-white',
  },
  {
    priority: 3 as const,
    label: 'Priority 3 — Lifestyle & Culture',
    description:
      'Team photos, front desk moments, and candid family interactions that build trust.',
    color: 'bg-[var(--color-brand-plum-light)]',
    badgeColor: 'bg-[var(--color-brand-plum-light)] text-white',
  },
  {
    priority: 4 as const,
    label: 'Priority 4 — Blog & Content Marketing',
    description:
      'Supplementary lifestyle images for blog posts and ongoing content.',
    color: 'bg-[var(--color-brand-gold-light)]',
    badgeColor: 'bg-[var(--color-brand-gold-light)] text-white',
  },
];

const guidelines = [
  {
    title: 'Lighting',
    detail: 'Warm, natural light preferred. Avoid harsh clinical fluorescents.',
  },
  {
    title: 'Tone',
    detail: 'Welcoming, family-friendly, professional but not sterile.',
  },
  {
    title: 'Wardrobe',
    detail:
      'Dr. Colton in branded polo or clean professional attire. Patients in everyday clothing.',
  },
  {
    title: 'Brand Colors',
    detail:
      'Primary plum (#564972) and accent gold (#a68d60). Props or clothing in these tones help with cohesion.',
  },
  {
    title: 'Diversity',
    detail:
      'Include diverse families across age, ethnicity, and family structure.',
  },
  {
    title: 'Resolution',
    detail: 'Minimum 2400px on the longest edge for retina/hero backgrounds.',
  },
  {
    title: 'File Format',
    detail: 'Deliver as high-quality JPEG or PNG.',
  },
  {
    title: 'Orientation',
    detail:
      'Most shots are landscape (16:9). Headshots are portrait (3:4). See individual cards for specifics.',
  },
  {
    title: 'Composition',
    detail:
      'Hero shots need "text-safe" negative space on the left side — headlines and CTAs overlay there.',
  },
];

function ShotCard({ shot, index }: { shot: ImageShot; index: number }) {
  const Icon = shot.icon;
  const aspectLabel =
    shot.orientation === 'Portrait'
      ? '3:4'
      : shot.width === 1920
        ? '16:9'
        : '3:2';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Card className="h-full overflow-hidden">
        <div className="flex aspect-[16/10] items-center justify-center border-b border-dashed border-[var(--color-brand-sage)] bg-[var(--color-brand-cream)]">
          <Icon className="h-12 w-12 text-[var(--color-brand-plum-light)] opacity-60" />
        </div>
        <CardContent className="pt-5 space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-brand-gold)]">
              Shot #{shot.id}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-gray-900">
              {shot.title}
            </h3>
          </div>

          <p className="text-sm leading-relaxed text-gray-600">
            {shot.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            <Badge variant="outline" className="text-[11px]">
              {shot.width}x{shot.height}
            </Badge>
            <Badge variant="outline" className="text-[11px]">
              {shot.orientation}
            </Badge>
            <Badge variant="outline" className="text-[11px]">
              {aspectLabel}
            </Badge>
          </div>

          <div>
            <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Used on
            </p>
            <ul className="space-y-1">
              {shot.usedOn.map((location) => (
                <li
                  key={location}
                  className="flex items-start gap-1.5 text-sm text-gray-600"
                >
                  <Layout className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--color-brand-plum-light)]" />
                  {location}
                </li>
              ))}
            </ul>
          </div>

          {shot.notes && (
            <div className="rounded-lg bg-[var(--color-brand-cream)] px-3 py-2.5">
              <p className="text-xs leading-relaxed text-[var(--color-brand-plum)]">
                <span className="font-semibold">Note:</span> {shot.notes}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export const ImageBriefPage = () => {
  const [guidelinesOpen, setGuidelinesOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--color-brand-gold)]">
            Trinity Life Chiropractic
          </p>
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Image Brief
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            A complete shot list of every photo we need for the website.
            Each card describes the shot, its specifications, and where it will
            be used.
          </p>
          <div className="mx-auto mt-6 flex items-center justify-center gap-3 text-sm text-gray-500">
            <span className="rounded-full bg-[var(--color-brand-plum)] px-3 py-1 text-xs font-semibold text-white">
              {shots.length} total shots
            </span>
            <span className="text-gray-300">|</span>
            <span>4 priority levels</span>
          </div>
        </motion.div>

        {/* Photography Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <Collapsible open={guidelinesOpen} onOpenChange={setGuidelinesOpen}>
            <CollapsibleTrigger className="group flex w-full items-center justify-between rounded-xl border bg-white px-6 py-4 text-left transition-colors hover:bg-gray-50">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Photography Guidelines
                </h2>
                <p className="mt-0.5 text-sm text-gray-500">
                  General direction for lighting, tone, wardrobe, and technical
                  specs
                </p>
              </div>
              <ChevronDown className="h-5 w-5 shrink-0 text-gray-400 transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="mt-2 grid gap-3 rounded-xl border bg-white p-6 sm:grid-cols-2 lg:grid-cols-3">
                {guidelines.map((g) => (
                  <div key={g.title} className="rounded-lg bg-gray-50 p-4">
                    <p className="text-sm font-semibold text-[var(--color-brand-plum)]">
                      {g.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">
                      {g.detail}
                    </p>
                  </div>
                ))}
                <div className="rounded-lg border-2 border-dashed border-[var(--color-brand-gold-light)] bg-[var(--color-brand-cream)] p-4 sm:col-span-2 lg:col-span-3">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      <span className="inline-block h-8 w-8 rounded-full bg-[var(--color-brand-plum)]" />
                      <span className="inline-block h-8 w-8 rounded-full bg-[var(--color-brand-gold)]" />
                      <span className="inline-block h-8 w-8 rounded-full bg-[var(--color-brand-plum-light)]" />
                      <span className="inline-block h-8 w-8 rounded-full bg-[var(--color-brand-cream)] border" />
                    </div>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Brand palette:</span>{' '}
                      Plum #564972 &middot; Gold #a68d60 &middot; Lavender
                      #7b6d96 &middot; Cream #f8f5f0
                    </p>
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </motion.div>

        {/* Priority Groups */}
        {priorityGroups.map((group) => {
          const groupShots = shots.filter(
            (s) => s.priority === group.priority
          );
          return (
            <section key={group.priority} className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4 }}
                className="mb-8"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-block h-3 w-3 rounded-full ${group.color}`}
                  />
                  <h2 className="text-2xl font-bold text-gray-900">
                    {group.label}
                  </h2>
                  <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-500">
                    {groupShots.length} shots
                  </span>
                </div>
                <p className="mt-2 max-w-3xl text-gray-600">
                  {group.description}
                </p>
              </motion.div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {groupShots.map((shot, i) => (
                  <ShotCard key={shot.id} shot={shot} index={i} />
                ))}
              </div>
            </section>
          );
        })}

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border bg-white p-8"
        >
          <h2 className="mb-6 text-xl font-bold text-gray-900">Summary</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {priorityGroups.map((group) => {
              const count = shots.filter(
                (s) => s.priority === group.priority
              ).length;
              const pct = Math.round((count / shots.length) * 100);
              return (
                <div key={group.priority}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-700">
                      {group.label.split(' — ')[0]}
                    </span>
                    <span className="font-semibold text-gray-900">
                      {count}
                    </span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className={`h-full rounded-full ${group.color}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-8 flex items-center justify-between border-t pt-6">
            <span className="text-lg font-semibold text-gray-900">
              Total Photos Needed
            </span>
            <span className="text-3xl font-bold text-[var(--color-brand-plum)]">
              {shots.length}
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
