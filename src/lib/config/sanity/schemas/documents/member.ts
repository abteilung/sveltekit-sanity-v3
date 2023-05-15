import {UsersThree} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'member',
  title: 'Member',
  icon: UsersThree,
  type: 'document',
  fields: [
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}]
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'categories',
      title: 'Belongs to…',
      type: 'array',
      of: [{type: 'reference', to: {type: 'landingPage'}}]
    })
  ],

  preview: {
    select: {
      title: 'author.name',
      media: 'author.image.image',
      subtitle: 'author.email'
    }
  }
})
