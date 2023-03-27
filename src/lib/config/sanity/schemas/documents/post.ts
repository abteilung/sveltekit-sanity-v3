import {Article} from '@phosphor-icons/react'
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
  name: 'post',
  title: 'Post',
  icon: Article,
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
      group: 'default'
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: authorType.name}],
      group: 'default'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      group: 'default'
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
