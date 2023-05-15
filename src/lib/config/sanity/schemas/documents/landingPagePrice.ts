import {Coins, Calendar} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'landingPagePrice',
  title: 'Landing Page Price',
  icon: Coins,
  type: 'document',
  groups: [
    {name: 'default', title: 'Default', description: 'Default fields', icon: Coins, default: true},
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
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      group: 'default'
    }),
    defineField({
      name: 'image',
      title: 'Service Main Image',
      type: 'image',
      group: 'default',
      options: {
        hotspot: false
      }
    }),
    defineField({
      name: 'body',
      title: 'Content',
      type: 'blockContent',
      group: 'default'
    })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      excerpt: 'body'
    },
    prepare({title, media, excerpt}) {
      return {
        title: title,
        subtitle: `${excerpt ? excerpt[0]?.children[0]?.text : ''}`,
        media
      }
    }
  }
})
