import { defineType } from "sanity";

export const plansType = defineType({
  name: 'plan',
  title: 'Plans',
  type: 'document',
  fields: [
    { name: 'title', title: 'Card Title', type: 'string' },
    { name: 'price', title: 'Price per seat $', type: 'number' },
    {
      name: 'bulletPoints',
      title: 'Bullet Points',
      type: 'array',
      of: [{
        title: 'Bullet Point',
        type: 'object',
        fields: [
          { name: 'text', title: 'Text', type: 'string' },
          {
            name: 'included',
            title: 'Included',
            type: 'boolean',
            description: 'Is this feature included in this plan?',
          },
          {
            name: 'highlighted',
            title: 'Highlighted',
            type: 'boolean',
            description: 'Highlight this bullet point?',
          },
        ],
      },],
    },
    { name: 'suggestedCourse', title: 'Suggested Course', type: 'string' },
  ],
})
