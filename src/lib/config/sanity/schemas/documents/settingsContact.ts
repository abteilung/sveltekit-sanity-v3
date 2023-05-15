import {GearSix, ShareNetwork, AddressBook, Factory} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

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
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      description: 'Enter your company name.',
      group: 'contact'
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Enter your email address.',
      validation: (Rule) => Rule.regex(/.+@.+\..+/, {name: 'email'}),
      group: 'contact'
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      description: 'Enter your phone number (+41 xx xxx xx xx).',
      group: 'contact'
    }),
    defineField({
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
              name: 'geolocation',
              title: 'Geolocation',
              type: 'geopoint',
              description: 'Enter the geolocation of the location.'
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
    }),

    // Social
    defineField({
      name: 'socialChannels',
      title: 'Social Channels',
      type: 'array',
      // Build an array of objects
      of: [
        {
          type: 'object',
          icon: ShareNetwork,
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
              description: 'Enter the name of the social channel.'
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              description: 'Enter the URL of the social channel.'
            },
            {
              name: 'image',
              title: 'Icon Image',
              type: 'image',
              description: 'Enter the icon of the social channel.'
            }
          ],
          preview: {
            select: {
              title: 'name',
              media: 'image',
              subtitle: 'url'
            }
          }
        }
      ],
      description: 'Enter your social channels.',
      group: 'social'
    })
  ]
})
