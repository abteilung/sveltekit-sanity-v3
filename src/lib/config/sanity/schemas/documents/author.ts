import {User} from 'phosphor-react'
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
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'alt',
          title: 'Accessibility label for the image',
          description:
            'Help make the site more accessible & SEO-friendly with a short textual description of the image, such as "screenshot of the dashboard app"',
          type: 'string',
          validation: (Rule) => Rule.required(),
          options: {
            isHighlighted: true
          }
        }
      ]
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
