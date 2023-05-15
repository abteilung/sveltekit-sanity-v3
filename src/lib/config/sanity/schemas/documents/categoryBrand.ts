import {Tag} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'categoryBrands',
  title: 'Categories (Brands)',
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
