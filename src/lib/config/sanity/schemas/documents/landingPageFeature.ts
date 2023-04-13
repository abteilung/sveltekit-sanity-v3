import {Lifebuoy, EyeSlash} from '@phosphor-icons/react'
import {defineType} from 'sanity'

export default defineType({
  name: 'landingPageFeature',
  title: 'Landing Page Feeature',
  icon: Lifebuoy,
  type: 'document',
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
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'default',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'image',
      title: 'Icon Image',
      type: 'image',
      group: 'default',
      options: {
        hotspot: false
      }
    },
    {
      name: 'body',
      title: 'Content',
      type: 'blockContent',
      group: 'default'
    },
    {
      name: 'categories',
      title: 'Belongs to…',
      type: 'array',
      group: 'default',
      of: [{type: 'reference', to: {type: 'landingPage'}}]
    },
    // Visibility
    {
      fieldset: 'publicationSettings',
      name: 'isFeatured',
      title: 'Featured',
      type: 'boolean',
      group: 'visibility'
    },
    {
      fieldset: 'publicationSettings',
      name: 'isHidden',
      title: 'Hidden',
      type: 'boolean',
      group: 'visibility'
    },
    {
      fieldset: 'dateColumns',
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime',
      group: 'visibility'
    },
    {
      name: 'endDate',
      fieldset: 'dateColumns',
      title: 'End Date',
      type: 'datetime',
      group: 'visibility'
    }
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'image',
      startDate: 'startDate',
      endDate: 'endDate',
      isHidden: 'isHidden',
      isFeatured: 'isFeatured',
      categories: 'categories'
    },
    prepare({title, author, media, isHidden, startDate, endDate, isFeatured, categories}) {
      return {
        title: isFeatured ? `🔥 ${title}` : title,
        // Human readable short Date
        subtitle: categories && categories.map((category) => category.title).join(', '),
        // Use Icon instead of Image if isHidden is true
        media: isHidden ? EyeSlash : media
      }
    }
  }
})
