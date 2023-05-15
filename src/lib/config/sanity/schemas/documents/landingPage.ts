import {Planet, Calendar, Users, CallBell, Flask, Article, AppleLogo, CurrencyDollar, Info} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

import {getVisibilityState} from '../../lib/helpers/visibility'
import {getSwatch} from '../../lib/helpers'

export default defineType({
  name: 'landingPage',
  title: 'Landing Page (Product)',
  icon: Planet,
  type: 'document',
  groups: [
    {name: 'default', title: 'Default', description: 'Default fields', default: true},
    {name: 'services', title: 'Services', description: 'Services', icon: CallBell},
    {name: 'team', title: 'Team', description: 'This Landing Pages Team', icon: Users},
    {name: 'expertise', title: 'Expertise', description: 'Expertise for this Landing Page', icon: Flask},
    {name: 'posts', title: 'Posts', description: 'Posts for this Landing Page', icon: Article},
    {
      name: 'prices',
      title: 'Prices (Default)',
      description: 'Price Objects for this Landing Page',
      icon: CurrencyDollar
    },
    {name: 'brands', title: 'Brands', description: 'Brands we are working for', icon: AppleLogo},
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
      name: 'buttonText',
      title: 'Button Text (CTA), short!',
      type: 'string',
      group: 'default'
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      group: 'default',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      group: 'default',
      options: {
        hotspot: false
      }
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
      name: 'color',
      title: 'Color',
      type: 'color',
      group: 'default'
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

    // Content of Landing Page
    defineField({
      name: 'featuresTitle',
      title: 'Features Title',
      type: 'string',
      group: 'services'
    }),
    defineField({
      name: 'featuresSubtitle',
      title: 'Features Subtitle',
      type: 'string',
      group: 'services'
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{type: 'reference', to: {type: 'landingPageService'}}],
      group: 'services'
    }),
    defineField({
      name: 'posts',
      title: 'Posts',
      type: 'array',
      of: [{type: 'reference', to: {type: 'post'}}],
      group: 'posts'
    }),
    defineField({
      name: 'team',
      title: 'Team',
      type: 'array',
      of: [{type: 'reference', to: {type: 'author'}}],
      group: 'team'
    }),
    defineField({
      name: 'expertiseInformation',
      title: 'Expertise Information',
      type: 'note',
      group: 'expertise',
      options: {
        tone: 'caution',
        icon: Info
      },
      description: 'Expertise is a list of icons, e.g. of Tools & Software we are professionally working with.'
    }),
    defineField({
      name: 'expertiseTitle',
      title: 'Expertise Title',
      type: 'string',
      group: 'expertise'
    }),
    defineField({
      name: 'expertiseSubtitle',
      title: 'Expertise Subtitle',
      type: 'string',
      group: 'expertise'
    }),
    defineField({
      name: 'expertiseIcons',
      title: 'Expertise Icons',
      type: 'array',
      of: [{type: 'image', fields: [{name: 'alt', type: 'string'}]}],
      group: 'expertise'
    }),
    defineField({
      name: 'expertiseShort',
      title: 'Expertise Short',
      type: 'blockContent',
      group: 'expertise'
    }),
    defineField({
      name: 'pricesInformation',
      title: 'Pricing Information',
      description:
        'Default Prices. Will display on the Landing Page if available. Prices on the Services will override these.',
      type: 'note',
      group: 'prices',
      options: {
        tone: 'caution',
        icon: Info
      }
    }),
    defineField({
      name: 'pricesTitle',
      title: 'Prices Title',
      type: 'string',
      group: 'prices'
    }),
    defineField({
      name: 'prices',
      title: 'Prices',
      group: 'prices',
      type: 'array',
      of: [{type: 'reference', to: {type: 'landingPagePrice'}}]
    }),
    defineField({
      name: 'pricesInfo',
      title: 'Prices Info',
      type: 'string',
      group: 'prices'
    }),

    defineField({
      name: 'brandsTitle',
      title: 'Brands Title',
      type: 'string',
      group: 'brands'
    }),
    defineField({
      name: 'brandsSubtitle',
      title: 'Brands Subtitle',
      type: 'string',
      group: 'brands'
    }),
    defineField({
      name: 'brands',
      title: 'Brands',
      type: 'array',
      of: [{type: 'reference', to: {type: 'brand'}}],
      group: 'brands'
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
