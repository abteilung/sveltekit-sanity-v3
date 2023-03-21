import {Storefront, ShareNetwork, AddressBook} from '@phosphor-icons/react'
import {defineType} from 'sanity'

export default defineType({
  name: 'settingsStore',
  title: 'Settings',
  type: 'document',
  icon: Storefront,
  fields: [
    // Contact
    {
      name: 'shopID',
      title: 'Shop ID',
      type: 'string',
      description: 'Enter your email address.'
    }
  ]
})
