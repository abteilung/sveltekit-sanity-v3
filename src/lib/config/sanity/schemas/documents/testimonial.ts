import {HandsClapping} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  icon: HandsClapping,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'testimonial',
      title: 'Testimonial',
      type: 'text',
      rows: 5
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}]
    })
  ],

  preview: {
    select: {
      title: 'title',
      subTitle: 'author.name',
      media: 'author.image'
    },
    prepare(selection) {
      const {title, subTitle, media} = selection
      return {
        title: title,
        subtitle: subTitle,
        media: media
      }
    }
  }
})
