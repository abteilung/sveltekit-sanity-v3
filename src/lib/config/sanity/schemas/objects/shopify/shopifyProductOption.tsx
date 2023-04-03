import {Option} from '@phosphor-icons/react'

import {defineField} from 'sanity'

export default defineField({
  title: 'Product option',
  name: 'productOption',
  type: 'object',
  icon: Option,
  readOnly: true,
  fields: [
    // Name
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string'
    }),
    // Values
    defineField({
      title: 'Values',
      name: 'values',
      type: 'array',
      of: [{type: 'string'}]
    })
  ],
  preview: {
    select: {
      name: 'name'
    },
    prepare(selection) {
      const {name} = selection

      return {
        title: name
      }
    }
  }
})
