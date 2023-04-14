import {FilePlus, Calendar} from '@phosphor-icons/react'
import {defineType} from 'sanity'

export default defineType({
  name: 'meta',
  title: 'Meta Page',
  icon: FilePlus,
  type: 'document',
  groups: [
    {name: 'default', title: 'Default', description: 'Default fields', default: true},
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'default',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'body',
      title: 'Content',
      type: 'blockContent',
      group: 'default'
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
