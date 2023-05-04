// redirects.js

import {Signpost, Calendar} from '@phosphor-icons/react'
import {getVisibilityState} from '../../lib/helpers/visibility'

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
      description: 'Original page path (without https://yoursite.com)',
      type: 'slug',
      group: 'redirect',
      validation: (Rule) =>
        Rule.required()
          .custom((slug) => (slug.current.startsWith('/') ? true : 'Must start with a slash'))
          .warning()
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
      group: 'redirect',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {title: '301 - Permanent', value: '301'},
          {title: '302 - Temporary', value: '302'}
        ]
      }
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
      startDate: 'pub.publishedAt',
      endDate: 'pub.unpublishedAt'
    },
    prepare(selection) {
      const {from, to, type, startDate, endDate, hidden} = selection
      return {
        title: `${from.current} 👉 ${to}`,
        // Format iso date to readable date
        // today's Date
        // const now = new Date().toISOString().split('T')[0]
        // subtitle: `${type} ${start ? `from ${start.split('T')[0]}` : ''} ${end ? `until ${end.split('T')[0]}` : ''}`
        // Check if now() is within start and end

        subtitle:
          getVisibilityState(startDate, endDate, hidden) +
          `(${type}) ${startDate ? `from ${startDate.split('T')[0]}` : ''} ${
            endDate ? `until ${endDate.split('T')[0]}` : ''
          }`
      }
    }
  }
}
