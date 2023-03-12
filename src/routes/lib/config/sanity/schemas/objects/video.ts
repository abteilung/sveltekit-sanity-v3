import {PlayCircle} from '@phosphor-icons/react'

// faq.js
export default {
  name: 'video',
  title: 'Video (Embed)',
  type: 'object',
  icon: PlayCircle,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'url',
      description: 'description'
    },
    prepare({title, subtitle, description}) {
      return {
        title,
        subtitle,
        description,
        icon: PlayCircle
      }
    }
  }
}
