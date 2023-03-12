import {File} from '@phosphor-icons/react'
import {defineType} from 'sanity'

import authorType from './author'

/**
 * This file is the schema definition for a post.
 *
 * Here you'll be able to edit the different fields that appear when you
 * create or edit a post in the studio.
 *
 * Here you can see the different schema types that are available:

  https://www.sanity.io/docs/schema-types

 */

export default defineType({
  name: 'page',
  title: 'Page',
  icon: File,
  type: 'document',
  fields: [
    {
      name: 'subtitle',
      title: 'eyebrow (H1)',
      type: 'string'
    },
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
      name: 'mainImage',
      title: 'Cover Image',
      type: 'customImage'
    },
    {
      name: 'body',
      title: 'Content',
      type: 'blockContent'
    },
    {
      name: 'publishedAt',
      title: 'Date',
      type: 'datetime'
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: authorType.name}]
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}]
    }
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage'
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    }
  }
})
