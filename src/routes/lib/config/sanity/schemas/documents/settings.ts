import {GearSix, Globe, ShareNetwork, Palette, AddressBook, MagnifyingGlass, ChartLineUp} from '@phosphor-icons/react'
import {defineType} from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: GearSix,
  groups: [
    {name: 'site', title: 'Site', description: 'Site settings', default: true, icon: Globe},
    {name: 'theme', title: 'Theme', description: 'Theme settings', icon: Palette},
    {name: 'social', title: 'Social', description: 'Social settings', icon: ShareNetwork},
    {name: 'contact', title: 'Contact', description: 'Your contact information', icon: AddressBook},
    {name: 'analytics', title: 'Analytics', description: 'Analytics settings', icon: ChartLineUp},
    {name: 'seo', title: 'SEO', description: 'SEO settings', icon: MagnifyingGlass}
  ],
  fields: [
    {
      name: 'title',
      description: 'This field is the title of your Site.',
      title: 'Title',
      type: 'string',
      initialValue: 'Site Title',
      group: 'site',
      validation: (rule) => rule.required()
    },
    {
      name: 'description',
      description: 'This field is the default description of your Site.',
      title: 'Description',
      type: 'string',
      initialValue: 'A blog built with SvelteKit and Sanity.io.',
      group: 'site',
      validation: (rule) => rule.required()
    },
    {
      name: 'siteUrl',
      description: 'This field is the default siteUrl of your Site.',
      title: 'Site URL',
      type: 'url',
      group: 'site',
      initialValue: 'https://blog.example.com',
      validation: (rule) => rule.required()
    },
    {
      name: 'favicon',
      description: 'Add transparent PNG for favicon (min. 512px x 512px).',
      title: 'Favicon',
      type: 'image',
      options: {
        hotspot: true
      },
      group: 'site',
      initialValue: 'https://blog.example.com/images/favicon.png',
      validation: (rule) => rule.required()
    },
    // Theme
    {
      name: 'themeColor',
      title: 'Theme Color',
      type: 'string',
      description: 'Enter your theme color.',
      group: 'theme',
      initialValue: '#ffffff'
    },
    {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      description: 'Enter your background color.',
      group: 'theme',
      initialValue: '#ffffff'
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
      type: 'text',
      description: 'Enter your address.',
      group: 'contact'
    },

    // Analytics
    // Information
    {
      type: 'string',
      name: 'googleAnalytics',
      title: 'Google Analytics (UT)',
      description: 'Enter your Google Analytics Tracking ID.',
      group: 'analytics'
    },
    {
      type: 'string',
      name: 'googleAnalytics4',
      title: 'Google Analytics 4 (GA4)',
      description: 'To enable GA enter your Property ID',
      group: 'analytics'
    },
    {
      type: 'string',
      name: 'googleTagManager',
      title: 'Google Tag Manager',
      description: 'Enter your Google Tag Manager ID.',
      group: 'analytics'
    },
    {
      type: 'string',
      name: 'plausibleAnalytics',
      title: 'Plausible Analytics',
      description: 'Enter your Plausible Analytics domain.',
      group: 'analytics'
    },

    // SEO
    {
      name: 'display',
      title: 'Display',
      type: 'string',
      description: 'Enter your display.',
      group: 'seo',
      initialValue: 'standalone'
    },
    {
      name: 'bingSiteVerification',
      title: 'Bing Site Verification',
      type: 'string',
      description: 'Enter your Bing Site Verification ID.',
      group: 'seo'
    }
  ]
})
