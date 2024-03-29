import { defineType } from "sanity";

export const plansType = defineType({
  name: 'bulletPoint',
  title: 'Bullet Point',
  type: 'object',
  fields: [
    { name: 'text', title: 'Text', type: 'string' },
    { name: 'included', title: 'Included', type: 'boolean' },
    { name: 'highlighted', title: 'Highlighted', type: 'boolean' },
  ],
})
