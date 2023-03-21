// redirects.js

import {Signpost, Calendar} from '@phosphor-icons/react'

export default {
  name: 'redirect',
  title: 'Redirect',
  type: 'document',
  icon: Signpost,
  // Default value for statusCode
  initialValue: {
    statusCode: '301'
  },
  groups: [
    {name: 'redirect', title: 'Redirect', description: 'Redirect settings', default: true, icon: Signpost},
    {name: 'publication', title: 'Publication', description: 'Publication settings', icon: Calendar}
  ],
  fields: [
    {
      name: 'fromPath',
      title: 'From',
      descriptioin: 'Original page path (without https://yoursite.com)',
      type: 'slug',
      group: 'redirect'
    },
    {
      name: 'toPath',
      title: 'To',
      type: 'string',
      group: 'redirect'
    },
    {
      name: 'statusCode',
      title: 'Type',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {title: 'Permanent', value: '301'},
          {title: 'Temporary', value: '302'}
        ]
      },
      group: 'redirect'
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      group: 'publication'
    },
    {
      name: 'unpublishedAt',
      title: 'Unpublished at',
      type: 'datetime',
      group: 'publication'
    }
  ],
  preview: {
    select: {
      from: 'fromPath',
      to: 'toPath',
      type: 'statusCode',
      start: 'publishedAt',
      end: 'unpublishedAt'
    },
    prepare(selection) {
      const {from, to, type, start, end} = selection
      return {
        title: `${from.current} 👉 ${to}`,
        // Format iso date to readable date
        subtitle: `${type} ${start ? `from ${start.split('T')[0]}` : ''} ${end ? `until ${end.split('T')[0]}` : ''}`
      }
    }
  }
}
