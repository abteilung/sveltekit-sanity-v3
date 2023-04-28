import {CalendarX, Calendar} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

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
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'default'
    },
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
      media: 'image',
      start: 'pub.publishedAt',
      end: 'pub.unpublishedAt',
      hidden: 'pub.isHidden'
    },
    prepare(selection) {
      const {title, subtitle, start, end, hidden, media} = selection
      return {
        title,
        subtitle: ` ${
          hidden == false ||
          (hidden != true &&
            new Date().toISOString().split('T')[0] > start &&
            new Date().toISOString().split('T')[0] < end) ||
          (hidden != true && start == null && end == null) ||
          (hidden != true && new Date().toISOString().split('T')[0] < end) ||
          (hidden != true && new Date().toISOString().split('T')[0] > start && end == null)
            ? ''
            : '🔴'
        } ${subtitle} ${start ? `from ${start.split('T')[0]}` : ''} ${end ? `until ${end.split('T')[0]}` : ''}`,
        media: media
      }
    }
  }
}
