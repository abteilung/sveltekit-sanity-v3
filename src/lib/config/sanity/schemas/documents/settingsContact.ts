import {GearSix, ShareNetwork, AddressBook, Factory} from '@phosphor-icons/react'
import {defineType} from 'sanity'

export default defineType({
  name: 'settingsContact',
  title: 'Settings',
  type: 'document',
  icon: GearSix,
  groups: [
    {name: 'contact', title: 'Contact', description: 'Your contact information', icon: AddressBook, default: true},
    {name: 'social', title: 'Social', description: 'Social settings', icon: ShareNetwork}
  ],
  fields: [
    // Contact
    {
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      description: 'Enter your company name.',
      group: 'contact'
    },
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
      name: 'locations',
      title: 'Locations',
      type: 'array',
      // Build an array of objects
      of: [
        {
          type: 'object',
          icon: Factory,
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
              description: 'Enter the name of the location.'
            },
            {
              name: 'address',
              title: 'Address',
              type: 'string',
              description: 'Enter the address of the location.'
            },
            {
              name: 'city',
              title: 'City',
              type: 'string',
              description: 'Enter the city of the location.'
            },
            {
              name: 'zip',
              title: 'ZIP',
              type: 'string',
              description: 'Enter the ZIP of the location.'
            },
            {
              name: 'country',
              title: 'Country',
              type: 'string',
              description: 'Enter the country of the location.'
            },
            {
              name: 'availability',
              type: 'availability'
            }
          ]
        }
      ],
      description: 'Enter your Business Locations.',
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
    }
  ]
})
