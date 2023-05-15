import {CalendarX, Calendar} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

import {getVisibilityState} from '../../lib/helpers/visibility'

export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: CalendarX,
  groups: [
    {name: 'default', title: 'Default', description: 'Default fields', default: true},
    {name: 'publication', title: 'Publication', description: 'Publication settings', icon: Calendar}
  ],
  fields: [
    {
      name: 'seats',
      title: 'Seats',
      type: 'number',
      hidden: false,
      group: 'default'
    },
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
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96
      },
      group: 'default'
    },
    {
      name: 'teaser',
      title: 'Teaser',
      type: 'blockContent',
      group: 'default'
    },
    {
      name: 'image',
      title: 'Main image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true
      },
      group: 'default'
    },
    {
      name: 'content',
      title: 'Page Content',
      type: 'pageBuilder',
      group: 'default'
    },

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
      subtitle: 'seats',
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
}
