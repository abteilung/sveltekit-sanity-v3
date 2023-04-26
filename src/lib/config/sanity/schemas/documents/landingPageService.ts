import {Lifebuoy, Calendar, CurrencyDollar} from '@phosphor-icons/react'
import {defineType} from 'sanity'

import {getVisibilityState} from '../../lib/helpers/visibility'

export default defineType({
  name: 'landingPageService',
  title: 'Landing Page Service',
  icon: Lifebuoy,
  type: 'document',
  groups: [
    {name: 'default', title: 'Default', description: 'Default fields', default: true},
    {name: 'prices', title: 'Prices', description: 'Price Objects for this Landing Page', icon: CurrencyDollar},
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
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      group: 'default'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'default',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'image',
      title: 'Service Main Image',
      type: 'image',
      group: 'default',
      options: {
        hotspot: false
      }
    },
    {
      name: 'icon',
      title: 'Icon Image',
      type: 'image',
      group: 'default'
    },
    {
      name: 'buttonText',
      title: 'Button Text (CTA), short!',
      type: 'string',
      group: 'default'
    },
    {
      name: 'body',
      title: 'Content',
      type: 'blockContent',
      group: 'default'
    },

    {
      name: 'prices',
      title: 'Prices',
      description: 'Prices for this Service. Overwrite the default prices in the Landing Page.',
      type: 'array',
      of: [{type: 'reference', to: {type: 'landingPagePrice'}}],
      group: 'prices'
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
        subtitle: getVisibilityState(startDate, endDate, hidden) + ` ${excerpt ? excerpt[0]?.children[0]?.text : ''}`,
        // Use Icon instead of Image if isHidden is true
        media
      }
    }
  }
})
