import {Planet, Calendar, Crown, CallBell} from '@phosphor-icons/react'
import {defineType} from 'sanity'

import {getVisibilityState} from '../../lib/helpers'
import {getSwatch} from '../../lib/helpers'

export default defineType({
  name: 'landingPage',
  title: 'Landing Page (Product)',
  icon: Planet,
  type: 'document',
  groups: [
    {name: 'default', title: 'Default', description: 'Default fields', default: true},
    {name: 'features', title: 'Features', description: 'Features', icon: Crown},
    {name: 'services', title: 'Services', description: 'Services', icon: CallBell},
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
      name: 'url',
      title: 'URL',
      type: 'url',
      group: 'default',
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
      name: 'color',
      title: 'Color',
      type: 'color',
      group: 'default'
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

    // Content of Landing Page
    {
      name: 'featuresTitle',
      title: 'Features Title',
      type: 'string',
      group: 'features'
    },
    {
      name: 'featuresIntro',
      title: 'Features Intro',
      type: 'blockContent',
      group: 'features'
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{type: 'reference', to: {type: 'landingPageFeature'}}],
      group: 'features'
    },
    {
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{type: 'reference', to: {type: 'service'}}],
      group: 'services'
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
      url: 'url',
      color: 'color',
      media: 'image',
      startDate: 'pub.publishedAt',
      endDate: 'pub.unpublishedAt',
      hidden: 'pub.isHidden'
    },
    prepare({title, url, media, hidden, startDate, endDate, color}) {
      return {
        title: title,
        // Human readable short Date
        subtitle: getVisibilityState(startDate, endDate, hidden) + ` ${url}`,
        // Use Icon instead of Image if isHidden is true
        media: color?.hex ? getSwatch(color.hex.toUpperCase()) : media
      }
    }
  }
})
