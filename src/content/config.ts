import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    heroImage: z.string(),
    introTitle: z.string(),
    introText: z.string(),
    problems: z.array(z.object({ title: z.string(), desc: z.string() })),
    solutionTitle: z.string(),
    solutionText: z.string(),
    solutionImage: z.string(),
    benefits: z.array(z.object({ title: z.string(), desc: z.string() })),
    testimonial: z.object({
      text: z.string(),
      author: z.string(),
      role: z.string(),
    }),
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })),
    cta: z.string(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
  }),
});

const locations = defineCollection({
  type: 'data',
  schema: z.object({
    city: z.string(),
    state: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    heroHeadline: z.string(),
    heroSubheadline: z.string(),
    heroImage: z.string(),
    introTitle: z.string(),
    introText: z.string(),
    introHighlights: z.array(z.object({ label: z.string(), value: z.string() })),
    whyChooseTitle: z.string(),
    whyChooseText: z.string(),
    whyChooseReasons: z.array(z.object({ title: z.string(), desc: z.string() })),
    communityTitle: z.string(),
    communityText: z.string(),
    communityDetails: z.array(z.string()),
    directionsTitle: z.string(),
    directionsText: z.string(),
    driveTime: z.string(),
    driveDistance: z.string(),
    directionsSteps: z.array(z.string()),
    nearbyLandmarks: z.array(z.string()),
    testimonials: z.array(z.object({ text: z.string(), author: z.string(), detail: z.string() })),
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })),
    nearbyAreas: z.array(z.object({ name: z.string(), slug: z.string() })),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    author: z.string(),
    category: z.string(),
    readTime: z.string(),
    image: z.string(),
    excerpt: z.string(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
  }),
});

export const collections = { services, locations, blog };
