import type { StructureResolver } from 'sanity/desk'

import { singletonTypes } from './schemaTypes/singletons'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .id('siteSettings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),
      S.listItem()
        .title('Home Page')
        .id('homePage')
        .child(S.document().schemaType('homePage').documentId('homePage')),
      S.listItem()
        .title('About Page')
        .id('aboutPage')
        .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
      S.listItem()
        .title('CV Page')
        .id('cvPage')
        .child(S.document().schemaType('cvPage').documentId('cvPage')),
      S.divider(),
      ...S.documentTypeListItems().filter((item) => {
        const id = item.getId()
        return id ? !singletonTypes.has(id) : true
      }),
    ])
