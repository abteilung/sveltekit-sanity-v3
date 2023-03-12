import {HandsClapping} from '@phosphor-icons/react'

export default {
  name: 'testimonialReference',
  title: 'Testimonial',
  type: 'object',
  icon: HandsClapping,
  fields: [
    {
      name: 'testimonial',
      type: 'reference',
      title: 'testimonial',
      to: {type: 'testimonial'}
    }
  ],
  preview: {
    select: {
      title: 'testimonial.title',
      subtitle: 'testimonial.author.name',
      media: 'testimonial.author.image'
    },
    prepare({title, subtitle, media}) {
      return {
        title: `Testimonial: ${title}`,
        subtitle: `by ${subtitle}`,
        media,
        icon: HandsClapping
      }
    }
  }
}
