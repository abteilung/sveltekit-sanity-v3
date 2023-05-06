import {File, EyeSlash} from '@phosphor-icons/react'
import {defineType} from 'sanity'

import authorType from './author'
import {getVisibilityState} from '../../lib/helpers/visibility'

export default defineType({
  name: 'page',
  title: 'Page',
  icon: File,
  type: 'document',
  groups: [
    {
      title: 'Default',
      name: 'default',
      default: true
    },
    {
      title: 'Visibility',
      name: 'visibility'
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
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      author: 'author.name',
      excerpt: 'body',
      media: 'image',
      startDate: 'pub.publishedAt',
      endDate: 'pub.unpublishedAt',
      isHidden: 'pub.isHidden'
    },
    prepare({title, media, hidden, startDate, endDate, subtitle, excerpt}) {
      return {
        title: title,
        // Human readable short Date
        subtitle: getVisibilityState(startDate, endDate, hidden) + ` ${subtitle ? subtitle : ''}`,
        // Use Icon instead of Image if isHidden is true
        media
      }
    }
  }
})
