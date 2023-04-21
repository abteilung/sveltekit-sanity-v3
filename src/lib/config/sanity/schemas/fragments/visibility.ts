import {Info} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

export default {
  name: 'visibility',
  title: 'Visiblity',
  type: 'object',
  fieldsets: [
    {
      name: 'dateSettings',
      title: 'Date Settings',
      options: {collapsible: false, columns: 2}
    },
    {
      name: 'visibility',
      title: 'Visibility Settings',
      options: {collapsible: false, columns: 2}
    }
  ],
  fields: [
    {
      name: 'pubInfo',
      title: 'Publication Information',
      description:
        'Publication Settings. Use Publish Date and Unpublish Date to schedule publication. Use Hidden to hide the document from the site.',
      type: 'note',
      options: {
        tone: 'caution',
        icon: Info
      }
    },
    {
      name: 'publishedAt',
      title: 'Publishing Date',
      fieldset: 'dateSettings',
      type: 'datetime'
    },
    {
      name: 'unpublishedAt',
      fieldset: 'dateSettings',
      title: 'Unpublishing Date',
      type: 'datetime'
    },
    {
      fieldset: 'visibility',
      name: 'isHidden',
      title: 'Hidden',
      type: 'boolean'
    }
  ]
}
