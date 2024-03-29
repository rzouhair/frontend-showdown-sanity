import { defineType } from "sanity";

export const pageType = defineType({
  name: 'HomePage',
  title: 'Landing Page Content',
  type: 'document',
  fields: [
    {
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        { name: 'h1', title: 'H1 Heading', type: 'array', of: [{ type: 'block' }] },
        { name: 'paragraph', title: 'Paragraph Text', type: 'text' },
        { name: 'callToAction', title: 'Call to Action Text', type: 'string' },
      ],
    },
    {
      name: 'lessonsAndCourses',
      title: 'Lessons & Courses',
      type: 'object',
      fields: [
        { name: 'videos', title: 'Video lessons', type: 'number' },
        { name: 'courses', title: 'Courses', type: 'number' },
        { name: 'hours', title: 'Total hours', type: 'number' }, // Adjust type if needed (e.g., number for weeks)
      ]
    },
  ],
})