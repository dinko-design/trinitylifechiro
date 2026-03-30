import { config, fields, collection } from '@keystatic/core';

const isProd = import.meta.env.PROD;

export default config({
  storage: isProd
    ? { kind: 'cloud' }
    : { kind: 'local' },
  cloud: {
    project: 'dinko-design/trinitylifechiro',
  },
  ui: {
    brand: { name: 'Trinity Life Chiropractic' },
  },
  collections: {
    blog: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.text({ label: 'Date', description: 'e.g. "Sep 28, 2025"' }),
        author: fields.text({ label: 'Author', defaultValue: "Dr. Colton O'Brien" }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Pregnancy', value: 'Pregnancy' },
            { label: 'Pediatric Health', value: 'Pediatric Health' },
            { label: 'Family', value: 'Family' },
            { label: 'Wellness', value: 'Wellness' },
            { label: 'Neurology', value: 'Neurology' },
            { label: 'Chiropractic', value: 'Chiropractic' },
          ],
          defaultValue: 'Wellness',
        }),
        readTime: fields.text({ label: 'Read Time', defaultValue: '5 min read' }),
        image: fields.text({ label: 'Image Path', description: '/assets/images/filename.webp' }),
        excerpt: fields.text({ label: 'Excerpt', multiline: true }),
        metaTitle: fields.text({ label: 'Meta Title (optional)' }),
        metaDescription: fields.text({ label: 'Meta Description (optional)', multiline: true }),
        content: fields.mdx({ label: 'Content' }),
      },
    }),

    services: collection({
      label: 'Services',
      slugField: 'title',
      path: 'src/content/services/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        subtitle: fields.text({ label: 'Subtitle', multiline: true }),
        heroImage: fields.text({ label: 'Hero Image Path', description: '/assets/images/filename.webp' }),
        introTitle: fields.text({ label: 'Intro Title' }),
        introText: fields.text({ label: 'Intro Text', multiline: true }),
        problems: fields.array(
          fields.object({
            title: fields.text({ label: 'Title' }),
            desc: fields.text({ label: 'Description', multiline: true }),
          }),
          { label: 'Problems / Pain Points', itemLabel: (props) => props.fields.title.value },
        ),
        solutionTitle: fields.text({ label: 'Solution Title' }),
        solutionText: fields.text({ label: 'Solution Text', multiline: true }),
        solutionImage: fields.text({ label: 'Solution Image Path', description: '/assets/images/filename.webp' }),
        benefits: fields.array(
          fields.object({
            title: fields.text({ label: 'Title' }),
            desc: fields.text({ label: 'Description', multiline: true }),
          }),
          { label: 'Benefits', itemLabel: (props) => props.fields.title.value },
        ),
        testimonial: fields.object(
          {
            text: fields.text({ label: 'Quote', multiline: true }),
            author: fields.text({ label: 'Author' }),
            role: fields.text({ label: 'Role' }),
          },
          { label: 'Testimonial' },
        ),
        faqs: fields.array(
          fields.object({
            question: fields.text({ label: 'Question' }),
            answer: fields.text({ label: 'Answer', multiline: true }),
          }),
          { label: 'FAQs', itemLabel: (props) => props.fields.question.value },
        ),
        cta: fields.text({ label: 'CTA Button Text', defaultValue: 'Schedule Your Visit' }),
        metaTitle: fields.text({ label: 'Meta Title (optional)' }),
        metaDescription: fields.text({ label: 'Meta Description (optional)', multiline: true }),
        content: fields.mdx({ label: 'Additional Body Content (optional)' }),
      },
    }),

    locations: collection({
      label: 'Locations',
      path: 'src/content/locations/*',
      format: { data: 'yaml' },
      slugField: 'city',
      schema: {
        city: fields.slug({ name: { label: 'City' } }),
        state: fields.text({ label: 'State', defaultValue: 'TX' }),
        metaTitle: fields.text({ label: 'Meta Title' }),
        metaDescription: fields.text({ label: 'Meta Description', multiline: true }),
        heroHeadline: fields.text({ label: 'Hero Headline' }),
        heroSubheadline: fields.text({ label: 'Hero Subheadline', multiline: true }),
        heroImage: fields.text({ label: 'Hero Image Path' }),
        introTitle: fields.text({ label: 'Intro Title' }),
        introText: fields.text({ label: 'Intro Text', multiline: true }),
        introHighlights: fields.array(
          fields.object({
            label: fields.text({ label: 'Label' }),
            value: fields.text({ label: 'Value' }),
          }),
          { label: 'Intro Highlights', itemLabel: (props) => props.fields.label.value },
        ),
        whyChooseTitle: fields.text({ label: 'Why Choose Title' }),
        whyChooseText: fields.text({ label: 'Why Choose Text', multiline: true }),
        whyChooseReasons: fields.array(
          fields.object({
            title: fields.text({ label: 'Title' }),
            desc: fields.text({ label: 'Description', multiline: true }),
          }),
          { label: 'Why Choose Reasons', itemLabel: (props) => props.fields.title.value },
        ),
        communityTitle: fields.text({ label: 'Community Title' }),
        communityText: fields.text({ label: 'Community Text', multiline: true }),
        communityDetails: fields.array(
          fields.text({ label: 'Detail' }),
          { label: 'Community Details' },
        ),
        directionsTitle: fields.text({ label: 'Directions Title' }),
        directionsText: fields.text({ label: 'Directions Text', multiline: true }),
        driveTime: fields.text({ label: 'Drive Time' }),
        driveDistance: fields.text({ label: 'Drive Distance' }),
        directionsSteps: fields.array(
          fields.text({ label: 'Step' }),
          { label: 'Directions Steps' },
        ),
        nearbyLandmarks: fields.array(
          fields.text({ label: 'Landmark' }),
          { label: 'Nearby Landmarks' },
        ),
        testimonials: fields.array(
          fields.object({
            text: fields.text({ label: 'Quote', multiline: true }),
            author: fields.text({ label: 'Author' }),
            detail: fields.text({ label: 'Detail' }),
          }),
          { label: 'Testimonials', itemLabel: (props) => props.fields.author.value },
        ),
        faqs: fields.array(
          fields.object({
            question: fields.text({ label: 'Question' }),
            answer: fields.text({ label: 'Answer', multiline: true }),
          }),
          { label: 'FAQs', itemLabel: (props) => props.fields.question.value },
        ),
        nearbyAreas: fields.array(
          fields.object({
            name: fields.text({ label: 'Name' }),
            slug: fields.text({ label: 'Slug' }),
          }),
          { label: 'Nearby Areas', itemLabel: (props) => props.fields.name.value },
        ),
      },
    }),
  },
});
