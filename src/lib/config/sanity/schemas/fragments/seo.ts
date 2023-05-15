import {
  ProjectorScreenChart,
  Clock,
  Hourglass,
  CalendarX,
  NumberCircleSeven,
  Calendar,
  Champagne,
  Prohibit
} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO',
  icon: ProjectorScreenChart,
  type: 'object',
  fieldsets: [
    {
      name: 'indexing',
      title: 'Indexing',
      options: {collapsible: false, columns: 2}
    },
    {
      name: 'meta',
      title: 'Meta Tags',
      options: {collapsible: true, columns: 1}
    },
    {
      name: 'metaExtended',
      title: 'Extended Meta Tags',
      options: {collapsible: true, columns: 1}
    },
    {
      name: 'xmlSitemap',
      title: 'XML Sitemap',
      options: {collapsible: false, columns: 2}
    }
  ],
  initialValue: () => ({
    noIndex: false,
    noFollow: false,
    excludeFromSitemap: false,
    author: document?.author,
    metaTitle: document?.title,
    xmlSitemapChangeFrequency: 'monthly',
    xmlSitemapPriority: 0.5,
    publishedAt: new Date().toISOString()
  }),
  fields: [
    // INDEXING
    defineField({
      fieldset: 'indexing',
      name: 'noIndex',
      title: 'Disallow Indexing',
      type: 'boolean'
    }),
    defineField({
      fieldset: 'indexing',
      name: 'noFollow',
      title: "Don't follow links (robots)",
      type: 'boolean'
    }),
    defineField({
      fieldset: 'indexing',
      name: 'excludeFromSitemap',
      title: 'Exclude form Sitemap',
      type: 'boolean'
    }),
    // META TAGS
    defineField({
      fieldset: 'meta',
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      validation: (Rule) => Rule.max(70)
    }),
    defineField({
      fieldset: 'meta',
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'string',
      validation: (Rule) => Rule.max(160)
    }),
    defineField({
      fieldset: 'meta',
      name: 'metaKeywords',
      title: 'Meta Keywords',
      type: 'string',
      validation: (Rule) => Rule.max(250)
    }),
    defineField({
      fieldset: 'metaExtended',
      name: 'canonicalLink',
      title: 'Canonical Link',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ['https']
        })
    }),
    defineField({
      fieldset: 'metaExtended',
      name: 'publishedAt',
      title: 'Publishing Date',
      type: 'datetime'
    }),
    defineField({
      fieldset: 'metaExtended',
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}]
    }),
    // XML SITEMAP
    defineField({
      fieldset: 'xmlSitemap',
      name: 'xmlSitemapChangeFrequency',
      title: 'Sitemap Change Frequency',
      type: 'string',
      options: {
        list: [
          {title: 'Always', value: 'always', icon: Clock},
          {title: 'Hourly', value: 'hourly', icon: Hourglass},
          {title: 'Daily', value: 'daily', icon: CalendarX},
          {title: 'Weekly', value: 'weekly', icon: NumberCircleSeven},
          {title: 'Monthly', value: 'monthly', icon: Calendar},
          {title: 'Yearly', value: 'yearly', icon: Champagne},
          {title: 'Never', value: 'never', icon: Prohibit}
        ],
        layout: 'dropdown'
      }
    }),
    defineField({
      fieldset: 'xmlSitemap',
      name: 'xmlSitemapPriority',
      title: 'Sitemap Priority',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(1).precision(1)
    })
  ]
})
