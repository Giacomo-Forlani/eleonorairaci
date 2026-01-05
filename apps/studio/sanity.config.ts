import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

import { structure } from './deskStructure'
import { schemaTypes } from './schemaTypes'
import { singletonTypes } from './schemaTypes/singletons'

const projectId = process.env.SANITY_PROJECT_ID || ''
const dataset = process.env.SANITY_DATASET || 'production'
const apiVersion = process.env.SANITY_API_VERSION || '2024-01-01'

export default defineConfig({
  name: 'portfolio',
  title: 'Portfolio',
  projectId,
  dataset,
  apiVersion,
  plugins: [deskTool({ structure }), visionTool()],
  schema: {
    types: schemaTypes,
  },
  document: {
    newDocumentOptions: (prev, { creationContext }) =>
      creationContext.type === 'global'
        ? prev.filter((option) => !singletonTypes.has(option.schemaType))
        : prev,
    actions: (prev, context) =>
      singletonTypes.has(context.schemaType)
        ? prev.filter(({ action }) => action !== 'delete' && action !== 'duplicate')
        : prev,
  },
})
