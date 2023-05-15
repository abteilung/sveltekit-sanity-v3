import {React} from 'react'
import {Storefront, Calendar} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'
import {color} from '@sanity/color-input'
import type {SanityImageSource} from '@sanity/image-url/lib/types/types'

export default {
  name: 'abteProduct',
  title: 'Products',
  type: 'document',
  icon: Storefront,
  groups: [
    {name: 'default', title: 'Default', description: 'Default fields', default: true},
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
      subtitle: 'subtitle',
      media: 'image',
      imgUrl: 'image.asset.url',
      start: 'pub.publishedAt',
      end: 'pub.unpublishedAt',
      hidden: 'pub.isHidden'
    },
    prepare(selection) {
      const {title, subtitle, start, end, hidden, media, imgUrl} = selection
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
        // overlay icon based on visibility
        media: media
      }
    }
  }
}
