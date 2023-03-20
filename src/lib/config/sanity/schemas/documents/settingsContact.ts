import {GearSix, ShareNetwork, AddressBook} from '@phosphor-icons/react'
import {defineType} from 'sanity'

export default defineType({
  name: 'settingsContact',
  title: 'Settings',
  type: 'document',
  icon: GearSix,
  groups: [
    {name: 'contact', title: 'Contact', description: 'Your contact information', icon: AddressBook, default: true},
    {name: 'social', title: 'Social', description: 'Social settings', icon: ShareNetwork},
  ],
  fields: [
    // Contact
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Enter your email address.',
      validation: (Rule) => Rule.regex(/.+@.+\..+/, {name: 'email'}),
      group: 'contact'
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
      description: 'Enter your phone number (+41 xx xxx xx xx).',
      group: 'contact'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'blockContent',
      description: 'Enter your address.',
      group: 'contact'
    },
    
    // Social
    {
      name: 'twitter',
      title: 'Twitter',
      type: 'string',
      group: 'social'
    },
    {
      name: 'facebook',
      title: 'Facebook',
      type: 'string',
      group: 'social'
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'string',
      group: 'social'
    },
    {
      name: 'github',
      title: 'GitHub',
      type: 'string',
      group: 'social'
    },
    {
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'string',
      group: 'social'
    },
    {
      name: 'youtube',
      title: 'YouTube',
      type: 'string',
      group: 'social'
    },
  ]
})
