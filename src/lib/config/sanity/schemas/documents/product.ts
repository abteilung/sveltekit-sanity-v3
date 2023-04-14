import {Storefront, Calendar} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

import {getVisibilityState} from '../../lib/helpers'

export default {
  name: 'product',
  title: 'Products',
  type: 'document',
  icon: Storefront,
  groups: [
    {
      name: 'default',
      title: 'Default',
      description: 'Default fields',
      default: true
    },
    {
      name: 'shopifySync',
      title: 'Shopify Sync',
      description: 'Fields that are synced from Shopify'
    },
    {name: 'publication', title: 'Publication', description: 'Publication settings', icon: Calendar}
  ],
  fields: [
    {
      name: 'likes',
      title: 'Likes',
      type: 'number',
      hidden: false,
      group: 'default'
    },
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

    defineField({
      name: 'store',
      title: 'Shopify',
      type: 'shopifyProduct',
      description: 'Product data from Shopify (read-only)',
      group: 'shopifySync'
    }),
    {
      name: 'teaser',
      title: 'Teaser',
      type: 'blockContent',
      group: 'default'
    },
    {
      name: 'youtube',
      title: 'Youtube or Vimeo URL',
      type: 'string',
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
      name: 'productIcon',
      title: 'Product Icon',
      type: 'customImage',
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
      title: 'Body',
      type: 'blockContent'
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
      subTitle: 'subtitle',
      media: 'image'
    },
    prepare(selection) {
      const {subTitle} = selection
      return Object.assign({}, selection, {
        subtitle: subTitle && `${subTitle}`
      })
    }
  }
}
