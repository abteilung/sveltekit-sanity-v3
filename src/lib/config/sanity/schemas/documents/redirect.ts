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
      from: 'fromPath',
      to: 'toPath',
      type: 'statusCode',
      hidden: 'pub.isHidden',
      start: 'pub.publishedAt',
      end: 'pub.unpublishedAt'
    },
    prepare(selection) {
      const {from, to, type, start, end, hidden} = selection
      return {
        title: `${from.current} 👉 ${to}`,
        // Format iso date to readable date
        // today's Date
        // const now = new Date().toISOString().split('T')[0]
        // subtitle: `${type} ${start ? `from ${start.split('T')[0]}` : ''} ${end ? `until ${end.split('T')[0]}` : ''}`
        // Check if now() is within start and end
        subtitle: ` ${
          (hidden != true &&
            new Date().toISOString().split('T')[0] > start &&
            new Date().toISOString().split('T')[0] < end) ||
          (hidden != true && start == null && end == null) ||
          (hidden != true && new Date().toISOString().split('T')[0] < end) ||
          (hidden != true && new Date().toISOString().split('T')[0] > start && end == null)
            ? '🟢'
            : '🔴'
        } ${type} ${start ? `from ${start.split('T')[0]}` : ''} ${end ? `until ${end.split('T')[0]}` : ''}`
      }
    }
  }
}
