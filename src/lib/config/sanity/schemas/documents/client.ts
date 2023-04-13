import {ShootingStar} from '@phosphor-icons/react'
import {defineType} from 'sanity'

export default defineType({
  name: 'client',
  title: 'Client',
  icon: ShootingStar,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'image',
      title: 'Client Logo Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
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
      title: 'title',
      url: 'url',
      image: 'image',
      description: 'description',
      categories: 'categories'
    },
    prepare({title, url, image, description, categories}) {
      return {
        title,
        subtitle: categories && categories.map((category) => category.title).join(', '),
        description: description,
        media: image
      }
    }
  }
})
