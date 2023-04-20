import {Lifebuoy, Calendar} from '@phosphor-icons/react'
import {defineType} from 'sanity'

import {getVisibilityState} from '../../lib/helpers'

export default defineType({
  name: 'landingPageFeature',
  title: 'Landing Page Feeature',
  icon: Lifebuoy,
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
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'default',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'image',
      title: 'Icon Image',
      type: 'image',
      group: 'default',
      options: {
        hotspot: false
      }
    },
    {
      name: 'body',
      title: 'Content',
      type: 'blockContent',
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
      media: 'image',
      excerpt: 'body',
      startDate: 'pub.publishedAt',
      endDate: 'pub.unpublishedAt',
      hidden: 'pub.isHidden'
    },
    prepare({title, media, hidden, startDate, endDate, color, excerpt}) {
      return {
        title: title,
        // Human readable short Date
        subtitle: getVisibilityState(startDate, endDate, hidden) + ` ${excerpt[0]?.children[0]?.text}`,
        // Use Icon instead of Image if isHidden is true
        media: color?.hex ? getSwatch(color.hex.toUpperCase()) : media
      }
    }
  }
})
