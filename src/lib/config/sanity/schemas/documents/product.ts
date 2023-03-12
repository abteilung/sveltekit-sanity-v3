import {Storefront} from '@phosphor-icons/react'

export default {
  name: 'product',
  title: 'Products',
  type: 'document',
  icon: Storefront,
  fields: [
    {
      name: 'subtitle',
      title: 'eyebrow (H1)',
      type: 'string'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'teaser',
      title: 'Teaser',
      type: 'blockContent'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true
      },
    },
    {
      name: 'youtube',
      title: 'Youtube-Movie',
      type: 'url'
    },
    {
      name: 'productIcon',
      title: 'Product Icon',
      type: 'customImage'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    }
  ],

  preview: {
    select: {
      title: 'title',
      subTitle: 'subtitle',
      media: 'mainImage'
    },
    prepare(selection) {
      const {subTitle} = selection
      return Object.assign({}, selection, {
        subtitle: subTitle && `${subTitle}`
      })
    }
  }
}
