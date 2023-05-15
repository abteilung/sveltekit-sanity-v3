import {Article, Calendar} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

import authorType from './author'
import {getVisibilityState} from '../../lib/helpers/visibility'

export default defineType({
  name: 'post',
  title: 'Post',
  icon: Article,
  type: 'document',
  groups: [
    {name: 'default', title: 'Default', description: 'Default fields', default: true},
    {name: 'publication', title: 'Publication', description: 'Publication settings', icon: Calendar}
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
    }
  ],

  fields: [
    defineField({
      name: 'subtitle',
      title: 'eyebrow (H1)',
      type: 'string',
      group: 'default',
      validation: (Rule) => [
        (Rule) => Rule.required(),
        (Rule) => Rule.min(10).warning('Ein Titel sollte mindestens 10 Zeichen lang sein!'),
        (Rule) => Rule.max(120).warning('Bitte kurz fassen!')
      ]
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'default',
      validation: (Rule) => [
        (Rule) => Rule.required(),
        (Rule) => Rule.min(10).warning('Ein Titel sollte mindestens 10 Zeichen lang sein!'),
        (Rule) => Rule.max(120).warning('Bitte kurz fassen!')
      ]
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'default',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      group: 'default',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'content',
      title: 'Page Content',
      type: 'pageBuilder',
      group: 'default'
    }),
    defineField({
      name: 'body',
      title: 'Content',
      type: 'blockContent',
      group: 'default'
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: authorType.name}],
      group: 'default'
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      group: 'default'
    }),

    // Visibility
    {
      name: 'pub',
      title: 'Visibility',
      type: 'visibility',
      group: 'publication'
    }
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'image',
      startDate: 'pub.publishedAt',
      endDate: 'pub.unpublishedAt',
      hidden: 'pub.isHidden'
    },
    prepare({title, author, media, hidden, startDate, endDate}) {
      return {
        title: title,

        subtitle: getVisibilityState(startDate, endDate, hidden) + ` by ${author}`,
        // Human readable short Date
        // subtitle: `by ${author} ${startDate ? new Date(startDate).toLocaleDateString() : ''} ${
        //   endDate ? ' – ' + new Date(endDate).toLocaleDateString() : ''
        // }`,
        // Use Icon instead of Image if hidden is true
        media: media
      }
    }
  }
})
