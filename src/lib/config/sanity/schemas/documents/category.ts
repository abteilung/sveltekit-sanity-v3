import {Tag} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Categories',
  type: 'document',
  icon: Tag,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    })
  ]
})
