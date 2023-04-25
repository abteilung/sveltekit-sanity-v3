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
  initialValue: () => ({
    isHidden: false,
    publishedAt: new Date().toISOString()
  }),
  fields: [
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
