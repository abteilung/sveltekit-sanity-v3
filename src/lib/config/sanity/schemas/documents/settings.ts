import {GearSix} from 'phosphor-react'
import {defineType} from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: GearSix,
  fields: [
    {
      name: 'title',
      description: 'This field is the title of your Site.',
      title: 'Title',
      type: 'string',
      initialValue: 'Blog.',
      validation: (rule) => rule.required()
    },
    {
      name: 'description',
      description: 'This field is the fallback description of your Site.',
      title: 'Description',
      type: 'string',
      initialValue: 'A blog built with Next.js and Sanity.io.',
      validation: (rule) => rule.required()
    },
    {
      name: 'author',
      description: 'This field is the fallback author of your Site.',
      title: 'Author',
      type: 'string',
      initialValue: 'John Doe',
      validation: (rule) => rule.required()
    },
    {
      name: 'keywords',
      description: 'This field is the fallback keywords of your Site.',
      title: 'Keywords',
      type: 'string',
      initialValue: 'blog, nextjs, sanity',
      validation: (rule) => rule.required()
    },
    {
      name: 'siteUrl',
      description: 'This field is the fallback siteUrl of your Site.',
      title: 'Site URL',
      type: 'url',
      initialValue: 'https://blog.example.com',
      validation: (rule) => rule.required()
    },
    {
      name: 'siteImage',
      description: 'This field is the fallback siteImage of your Site.',
      title: 'Site Image',
      type: 'image',
      initialValue: 'https://blog.example.com/images/site-image.png',
      validation: (rule) => rule.required()
    }
  ]
})
