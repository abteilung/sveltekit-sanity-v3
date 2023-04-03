import {AppleLogo} from '@phosphor-icons/react'
import {defineType} from 'sanity'

export default defineType({
  name: 'brand',
  title: 'Brand',
  icon: AppleLogo,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
        name: 'url',
        title: 'URL',
        type: 'url',
        validation: (Rule) => Rule.required()
    },
    {
        name: 'image',
        title: 'Cover Image',
        type: 'image',
        options: {
          hotspot: true
        },
        validation: (Rule) => Rule.required()
      },
      {
      name: 'description',
      title: 'Description',
      type: 'text',
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: 'image',
      subtitle: 'description'
    }
  }
})
