import {Tag} from '@phosphor-icons/react'

export default {
  name: 'category',
  title: 'Categories',
  type: 'document',
  icon: Tag,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    }
  ]
}
