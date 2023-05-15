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
    defineField({
      name: 'likes',
      title: 'Likes',
      type: 'number',
      hidden: false,
      group: 'default'
    }),
    defineField({
      name: 'subtitle',
      title: 'eyebrow (H1)',
      type: 'string',
      group: 'default',
      validation: (Rule) => [
        (Rule) => Rule.required(),
        (Rule) => Rule.min(10).warning('Ein Titel sollte mindestens 10 Zeichen lang sein!'),
        (Rule) => Rule.max(120).warning('Bitte kurz fassen!')
      ]
    }),
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96
      },
      group: 'default'
    }),
    defineField({
      name: 'teaser',
      title: 'Teaser',
      type: 'blockContent',
      group: 'default'
    }),
    defineField({
      name: 'youtube',
      title: 'Youtube or Vimeo URL',
      type: 'string',
      group: 'default'
    }),
    defineField({
      name: 'image',
      title: 'Main image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true
      },
      group: 'default'
    }),
    defineField({
      name: 'productIcon',
      title: 'Product Icon',
      type: 'customImage',
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
      title: 'Body',
      type: 'blockContent'
    }),

    // Visibility
    defineField({
      name: 'pub',
      title: 'Visibility',
      type: 'visibility',
      group: 'publication'
    })
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
