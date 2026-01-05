import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (Rule) => Rule.integer().min(1900).max(2100),
    }),
    defineField({
      name: 'projectType',
      title: 'Project type',
      type: 'string',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover image',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'imageWithAlt' }],
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }, { type: 'imageWithAlt' }],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tag' }] }],
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'skill' }] }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
    },
  },
})
