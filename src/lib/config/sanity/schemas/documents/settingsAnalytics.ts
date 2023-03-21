import {Binoculars} from '@phosphor-icons/react'
import {defineType} from 'sanity'

export default defineType({
  name: 'settingsAnalytics',
  title: 'Settings',
  type: 'document',
  icon: Binoculars,
  fields: [
    // Analytics
    // Information
    {
      type: 'string',
      name: 'googleAnalytics',
      title: 'Google Analytics (UT)',
      description: 'Enter your Google Analytics Tracking ID.'
    },
    {
      type: 'string',
      name: 'googleAnalytics4',
      title: 'Google Analytics 4 (GA4)',
      description: 'To enable GA enter your Property ID'
    },
    {
      type: 'string',
      name: 'googleTagManager',
      title: 'Google Tag Manager',
      description: 'Enter your Google Tag Manager ID.'
    },
    {
      type: 'string',
      name: 'plausibleAnalytics',
      title: 'Plausible Analytics',
      description: 'Enter your Plausible Analytics domain.'
    }
  ]
})
