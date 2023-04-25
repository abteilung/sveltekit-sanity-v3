import {Trophy} from '@phosphor-icons/react'

export default {
  name: 'casestudy',
  title: 'Case Studies',
  type: 'document',
  icon: Trophy,
  fields: [
    {
      name: 'subtitle',
      title: 'eyebrow (H1)',
      type: 'string'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'image',
      title: 'Main image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true
      }
    },
    {
      name: 'youtube',
      title: 'Youtube or Vimeo URL',
      type: 'url'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    }
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image'
    },
    prepare(selection) {
      const {subtitle} = selection
      return Object.assign({}, selection, {
        subtitle: subtitle && `${subtitle}`
      })
    }
  }
}
