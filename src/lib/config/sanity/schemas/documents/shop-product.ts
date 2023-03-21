import {Storefront} from '@phosphor-icons/react'
import {defineField} from 'sanity'

export default {
  name: 'product',
  title: 'Products',
  type: 'document',
  icon: Storefront,
  groups: [
    {name: 'default' , title: 'Default', description: 'Default fields', default: true},
    {name: 'shopifySync', title: 'Shopify Sync', description: 'Synced data from Shopify'},
    {name: 'productVariant', title: 'Product Variants', description: 'Synced data from Shopify'},
    {name: 'shopify', title: 'Shopify', description: 'Shopify data'},
  ],
  fieldsets: [
    {
      title: '',
      name: '2up',
      options: { columns: 2 }
    },
    {
      title: 'Product Cards',
      name: 'cards',
      description:
        'Define how this product should appear on collection pages and the cart',
      options: { columns: 2 }
    }
  ],

  fields: [
      {
        name: 'store',
      title: 'Shopify',
      type: 'shopifyProduct',
      description: 'Product data from Shopify (read-only)',
      group: 'shopifySync',
},

{
        name: 'vars',
      title: 'Shopify',
      type: 'shopifyProductVariant',
      description: 'Product data from Shopify (read-only)',
      group: 'productVariant',
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
      group: 'default'
    },
   
    {
      name: 'teaser',
      title: 'Teaser',
      type: 'blockContent', 
      group: 'default'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true
      },
      group: 'default'
    },
    {
      name: 'youtube',
      title: 'Youtube-Movie',
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
