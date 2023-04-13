import {UsersThree} from '@phosphor-icons/react'
import {defineType} from 'sanity'

export default defineType({
  name: 'member',
  title: 'Member',
  icon: UsersThree,
  type: 'document',
  fields: [
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}]
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'categories',
      title: 'Belongs to…',
      type: 'array',
      of: [{type: 'reference', to: {type: 'landingPage'}}]
    }
  ],

  preview: {
    select: {
      title: 'author.name',
      media: 'author.image.image',
      subtitle: 'author.email'
    }
  }
})
