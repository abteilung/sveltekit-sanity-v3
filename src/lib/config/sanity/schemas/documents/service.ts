import {Handshake, EyeSlash} from '@phosphor-icons/react'

export default {
  name: 'service',
  title: 'Services',
  type: 'document',
  icon: Handshake,
  groups: [
    {
      title: 'Default',
      name: 'default',
      options: {collapsible: true},
      default: true
    },
    {
      title: 'Visibility',
      name: 'visibility',
      options: {collapsible: true}
    }
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
      name: 'subtitle',
      title: 'eyebrow (H1)',
      type: 'string',
      group: 'default'
    },
    {
      name: 'title',
      title: 'Title',
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
        source: 'subtitle',
        maxLength: 96
      }
    },
    {
      name: 'teaser',
      title: 'Teaser',
      type: 'blockContent',
      group: 'default'
    },
    {
      name: 'image',
      title: 'Main image',
      type: 'image',
      group: 'default',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true
      }
    },
    {
      name: 'youtube',
      title: 'Youtube or Vimeo URL',
      type: 'url',
      group: 'default'
    },
    {
      name: 'productIcon',
      title: 'Product Icon',
      type: 'customImage',
      group: 'default'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      group: 'default'
    },

    // Visibility
    {
      name: 'pub',
      title: 'Visibility',
      type: 'visibility',
      group: 'visibility'
    },
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
}
