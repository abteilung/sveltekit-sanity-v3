import {Binoculars} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'settingsAnalytics',
  title: 'Settings',
  type: 'document',
  icon: Binoculars,
  fields: [
    // Analytics
    // Information
    defineField({
      type: 'string',
      name: 'googleAnalytics',
      title: 'Google Analytics (UT)',
      description: 'Enter your Google Analytics Tracking ID.'
    }),
    defineField({
      type: 'string',
      name: 'googleAnalytics4',
      title: 'Google Analytics 4 (GA4)',
      description: 'To enable GA enter your Property ID'
    }),
    defineField({
      type: 'string',
      name: 'googleTagManager',
      title: 'Google Tag Manager',
      description: 'Enter your Google Tag Manager ID.'
    }),
    defineField({
      type: 'string',
      name: 'plausibleAnalytics',
      title: 'Plausible Analytics',
      description: 'Enter your Plausible Analytics domain.'
    }),
    defineField({
      type: 'string',
      name: 'sibTrackingV3',
      title: 'Sendinblue Tracking V3',
      description: 'Enter your Sendinblue Tracking ID.'
    })
  ]
})
