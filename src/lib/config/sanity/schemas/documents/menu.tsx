import React from 'react'
import {List} from '@phosphor-icons/react'

export default {
  title: 'Menu',
  name: 'menu',
  type: 'document',
  icon: () => <List />,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Nav Items',
      name: 'items',
      type: 'array',
      of: [{type: 'navPage'}, {type: 'navLink'}, {type: 'navDropdown'}]
    }
  ],
  preview: {
    select: {
      title: 'title',
      items: 'items'
    },
    prepare({title = 'Untitled', items = []}) {
      return {
        title,
        subtitle: `${items.length} link${items.length > 1 ? 's' : ''}`,
        media: List
      }
    }
  }
}
