import {File, EyeSlash} from '@phosphor-icons/react'
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
    }
  ],

  // 2 columns
  fieldsets: [
    {
      name: 'twoCols',
      title: '',
      options: {collapsible: false, columns: 2}
    }
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
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      group: 'default',
      options: {
        hotspot: true
      }
    },
    {
      name: 'content',
      title: 'Page Content',
      type: 'pageBuilder',
      group: 'default'
    },
    {
      name: 'body',
      title: 'Content',
      type: 'blockContent',
      group: 'default'
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
      name: 'pub',
      title: 'Visibility',
      type: 'visibility',
      group: 'visibility'
    }
    // {
    //   fieldset: 'twoCols',
    //   name: 'isHidden',
    //   title: 'Hidden',
    //   type: 'boolean',
    //   group: 'visibility'
    // },
    // {
    //   fieldset: 'twoCols',
    //   name: 'startDate',
    //   title: 'Start Date',
    //   type: 'datetime',
    //   group: 'visibility'
    // },
    // {
    //   name: 'endDate',
    //   fieldset: 'twoCols',
    //   title: 'End Date',
    //   type: 'datetime',
    //   group: 'visibility'
    // }
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'image',
      startDate: 'pub.startDate',
      endDate: 'pub.endDate',
      isHidden: 'pub.isHidden',
      isFeatured: 'pub.isFeatured'
    },
    prepare({title, author, media, isHidden, startDate, endDate, isFeatured}) {
      return {
        title: isFeatured ? `🔥 ${title}` : title,
        // Human readable short Date
        subtitle: `by ${author} ${startDate ? new Date(startDate).toLocaleDateString() : ''} ${
          endDate ? ' – ' + new Date(endDate).toLocaleDateString() : ''
        }`,
        // Use Icon instead of Image if isHidden is true
        media: isHidden ? EyeSlash : media
      }
    }
  }
})
