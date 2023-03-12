import {HandsClapping} from '@phosphor-icons/react'

export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  icon: HandsClapping,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'testimonial',
      title: 'Testimonial',
      type: 'text',
      rows: 5
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}]
    }
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
}
