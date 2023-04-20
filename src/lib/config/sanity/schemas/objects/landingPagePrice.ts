import {Coins, Calendar} from '@phosphor-icons/react'
import {defineType} from 'sanity'

export default defineType({
  name: 'landingPagePrice',
  title: 'Landing Page Price',
  icon: Coins,
  type: 'object',
  groups: [
    {name: 'default', title: 'Default', description: 'Default fields', icon: Coins, default: true},
    {name: 'publication', title: 'Publication', description: 'Publication settings', icon: Calendar}
  ],

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'default',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
      group: 'default',
    },
    {
      name: 'image',
      title: 'Service Main Image',
      type: 'image',
      group: 'default',
      options: {
        hotspot: false
      }
    },
    {
      name: 'body',
      title: 'Content',
      type: 'blockContent',
      group: 'default'
    },
    
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      excerpt: 'body',
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
