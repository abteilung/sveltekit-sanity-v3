import {User} from '@phosphor-icons/react'
import {defineType} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  icon: User,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'image',
      title: 'Portrait Image',
      type: 'customImage',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'email',
      title: 'E-Mail',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'twitter',
      title: 'Twitter',
      type: 'string'
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: []
        }
      ]
    }
  ],

  preview: {
    select: {
      title: 'name',
      media: 'image',
      subtitle: 'email'
    }
  }
})
