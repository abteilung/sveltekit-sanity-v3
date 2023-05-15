import {Tag} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'categoryReference',
  title: 'Categories (References)',
  type: 'document',
  icon: Tag,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    })
  ]
})
