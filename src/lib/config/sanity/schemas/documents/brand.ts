import {AppleLogo} from '@phosphor-icons/react'
import {defineType} from 'sanity'

export default {
  name: 'brand',
  title: 'Brand',
  icon: AppleLogo,
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
      title: 'Brand Logo Image',
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
      categories: 'categories'
    },
    prepare({title, url, image, description, categories}) {
      return {
        title: title,
        // Get Titles of References from Array of References
        subtitle: categories && categories.map((category) => category.title).join(', '),

        media: image
      }
    }
  }
}
