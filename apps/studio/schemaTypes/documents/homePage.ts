import { defineField, defineType } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'intro',
      title: 'Intro',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero image',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'featuredProjects',
      title: 'Featured projects',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
    }),
  ],
})
