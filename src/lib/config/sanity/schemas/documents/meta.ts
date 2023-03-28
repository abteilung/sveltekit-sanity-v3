import {FilePlus} from '@phosphor-icons/react'
import {defineType} from 'sanity'

export default defineType({
  name: 'meta',
  title: 'Meta Page',
  icon: FilePlus,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'body',
      title: 'Content',
      type: 'blockContent'
    },
    {
      name: 'publishedAt',
      title: 'Publishing Date',
      type: 'datetime'
    }
  ],
  preview: {
    select: {
      title: 'title',
      text: 'body'
    },
    prepare({title, text}) {
      return {
        title: title,
        subtitle: text ? text.map((block) => (block.children ? block.children[0].text : '')).join('') : ''
      }
    }
  }
})
