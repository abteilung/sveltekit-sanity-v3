import {IdentificationBadge} from '@phosphor-icons/react'
import {defineType} from 'sanity'

export default defineType({
  name: 'role',
  title: 'Role',
  icon: IdentificationBadge,
  type: 'document',
  fields: [
    {
      name: 'role',
      title: 'Role',
      type: 'string'
    }
  ],

  preview: {
    select: {
      title: 'role',
      subtitle: ''
      // media: IdentificationBadge
    }
  }
})
