import {Handshake, EyeSlash, Calendar} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  icon: Handshake,
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
      group: 'default',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'subtitle',
        maxLength: 96
      }
    }),
    defineField({
      name: 'teaser',
      title: 'Teaser',
      type: 'blockContent',
      group: 'default'
    }),
    defineField({
      name: 'image',
      title: 'Main image',
      type: 'image',
      group: 'default',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'youtube',
      title: 'Youtube or Vimeo URL',
      type: 'url',
      group: 'default'
    }),
    defineField({
      name: 'productIcon',
      title: 'Product Icon',
      type: 'customImage',
      group: 'default'
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      group: 'default'
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
      subTitle: 'subtitle',
      media: 'image',
      isHidden: 'pub.isHidden'
    },
    prepare({title, subTitle, isHidden, media}) {
      return {
        title,
        subtitle: subTitle && `${subTitle}`,
        media: isHidden ? EyeSlash : media
      }
    }
  }
})
