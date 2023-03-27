import {File} from '@phosphor-icons/react'
import {defineType} from 'sanity'

import authorType from './author'

export default defineType({
  name: 'page',
  title: 'Page',
  icon: File,
  type: 'document',
  groups: [
    {
      title: 'Default',
      name: 'default',
      options: {collapsible: true},
      default: true
    },
    {
      title: 'Visibility',
      name: 'visibility',
      options: {collapsible: true}
    },
  ],

  // 2 columns
  fieldsets: [
    {
      name: 'dateColumns',
      title: 'Date Settings',
      options: {collapsible: false, columns: 2}
    }, 
    {
      name: 'publicationSettings',
      title: 'Publication Settings',
      options: {collapsible: false, columns: 2}
    },
  ],

  fields: [
    {
      name: 'subtitle',
      title: 'eyebrow (H1)',
      type: 'string',
      group: 'default'
    },
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
      name: 'mainImage',
      title: 'Cover Image',
      type: 'image',
      group: 'default',
      options: {
        hotspot: true
      }
    },
    {
      name: 'body',
      title: 'Content',
      type: 'blockContent',
      group: 'default'
    },
    {
      name: 'publishedAt',
      title: 'Date',
      type: 'datetime',
      group: 'default',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      group: 'default',
      to: [{type: authorType.name}]
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      group: 'default',
      of: [{type: 'reference', to: {type: 'category'}}]
    },


    // Visibility
    {
      fieldset: 'publicationSettings',
      name: 'isFeatured',
      title: 'Featured',
      type: 'boolean',
      group: 'visibility'
    },
    {
      fieldset: 'publicationSettings',
      name: 'isHidden',
      title: 'Hidden',
      type: 'boolean',
      group: 'visibility'
    },
    {
      fieldset: 'dateColumns',
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime',
      group: 'visibility'
    },
    {
      name: 'endDate',
      fieldset: 'dateColumns',
      title: 'End Date',
      type: 'datetime',
      group: 'visibility'
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
