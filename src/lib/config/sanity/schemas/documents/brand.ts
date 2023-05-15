import {AppleLogo, Calendar} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'brand',
  title: 'Brand',
  icon: AppleLogo,
  type: 'document',
  groups: [
    {name: 'default', title: 'Default', description: 'Default fields', default: true},
    {name: 'publication', title: 'Publication', description: 'Publication settings', icon: Calendar}
  ],
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
      group: 'default',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'image',
      title: 'Brand Logo Image',
      type: 'image',
      group: 'default',
      options: {
        hotspot: true
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      group: 'default'
    },
    {
      name: 'categories',
      title: 'Belongs to…',
      type: 'array',
      group: 'default',
      of: [{type: 'reference', to: {type: 'landingPage'}}]
    },
    // Visibility
    {
      name: 'pub',
      title: 'Visibility',
      type: 'visibility',
      group: 'publication'
    }
  ],

  preview: {
    select: {
      title: 'title',
      url: 'url',
      image: 'image',
      categories: 'categories'
    },
    prepare({title, url, image, description, categories}) {
      return {
        title: title,
        // Get Titles of References from Array of References
        subtitle: categories && categories.map((category) => category.title).join(', '),

        media: image
      }
    }
  }
})
