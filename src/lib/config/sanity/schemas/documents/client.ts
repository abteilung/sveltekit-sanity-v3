import {ShootingStar} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'client',
  title: 'Client',
  icon: ShootingStar,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'default',
      validation: (Rule) => [
        (Rule) => Rule.required(),
        (Rule) => Rule.min(10).warning('Ein Titel sollte mindestens 10 Zeichen lang sein!'),
        (Rule) => Rule.max(120).warning('Bitte kurz fassen!')
      ]
    }),
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'image',
      title: 'Client Logo Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'categories',
      title: 'Belongs to…',
      type: 'array',
      of: [{type: 'reference', to: {type: 'landingPage'}}]
    }
  ],

  preview: {
    select: {
      title: 'title',
      url: 'url',
      image: 'image',
      description: 'description',
      categories: 'categories'
    },
    prepare({title, url, image, description, categories}) {
      return {
        title,
        subtitle: categories && categories.map((category) => category.title).join(', '),
        description: description,
        media: image
      }
    }
  }
})
