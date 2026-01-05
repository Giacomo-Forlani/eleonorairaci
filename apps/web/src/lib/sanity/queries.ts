import { groq } from 'next-sanity'

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]{
    title,
    description,
    colors,
    fonts,
    socials
  }
`

export const homePageQuery = groq`
  *[_type == "homePage"][0]{
    title,
    intro,
    heroImage,
    featuredProjects[]->
  }
`

export const projectListQuery = groq`
  *[_type == "project"] | order(year desc, _createdAt desc){
    title,
    slug,
    summary,
    year,
    coverImage,
    tags[]->,
    skills[]->
  }
`
