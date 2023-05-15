import React from 'react'
import {List} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Menu',
  name: 'menu',
  type: 'document',
  icon: () => <List />,
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string'
    }),
    defineField({
      title: 'Nav Items',
      name: 'items',
      type: 'array',
      of: [{type: 'navPage'}, {type: 'navLink'}, {type: 'navDropdown'}, {type: 'navSection'}]
    })
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
})
