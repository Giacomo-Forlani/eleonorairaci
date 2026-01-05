import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'title',
      title: 'Site title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Site description',
      type: 'text',
    }),
    defineField({
      name: 'colors',
      title: 'Colors',
      type: 'object',
      fields: [
        defineField({
          name: 'background',
          title: 'Background',
          type: 'string',
        }),
        defineField({
          name: 'text',
          title: 'Text',
          type: 'string',
        }),
        defineField({
          name: 'primary',
          title: 'Primary',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'fonts',
      title: 'Fonts',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
        }),
        defineField({
          name: 'body',
          title: 'Body',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'socials',
      title: 'Social links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
})
