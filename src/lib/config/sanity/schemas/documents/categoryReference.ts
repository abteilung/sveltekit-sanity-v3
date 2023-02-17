import { Tag } from 'phosphor-react'

export default {
  name: 'categoryReference',
  title: 'Categories (References)',
  type: 'document',
  icon: Tag,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
  ],
}