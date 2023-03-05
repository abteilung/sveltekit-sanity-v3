import {GearSix} from 'phosphor-react'
import {defineType} from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: GearSix,
  groups: [
    {
      name: 'site',
      title: 'Site'
    },
    {
      name: 'social',
      title: 'Social'
    },
    {
      name: 'contact',
      title: 'Contact'
    },
    {
      name: 'analytics',
      title: 'Analytics'
    },
    {
      name: 'seo',
      title: 'SEO'
    }
  ],
  fields: [
    {
      name: 'title',
      description: 'This field is the title of your Site.',
      title: 'Title',
      type: 'string',
      initialValue: 'Blog.',
      group: 'site',
      validation: (rule) => rule.required()
    },
    {
      name: 'description',
      description: 'This field is the default description of your Site.',
      title: 'Description',
      type: 'string',
      initialValue: 'A blog built with Next.js and Sanity.io.',
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
      group: 'site',
      initialValue: 'https://blog.example.com/images/favicon.png',
      validation: (rule) => rule.required()
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
      name: 'googleAnalytics',
      title: 'Google Analytics',
      type: 'string',
      description: 'Enter your Google Analytics Tracking ID.',
      group: 'analytics'
    },
    {
      name: 'googleTagManager',
      title: 'Google Tag Manager',
      type: 'string',
      description: 'Enter your Google Tag Manager ID.',
      group: 'analytics'
    },
    {
      name: 'plausibleAnalytics',
      title: 'Plausible Analytics',
      type: 'string',
      description: 'Enter your Plausible Analytics domain.',
      group: 'analytics'
    },

    // SEO
	{
		name: 'themeColor',
		title: 'Theme Color',
		type: 'string',
		description: 'Enter your theme color.',
		group: 'seo',
		initialValue: '#ffffff'
	},
	{
		name: 'backgroundColor',
		title: 'Background Color',
		type: 'string',
		description: 'Enter your background color.',
		group: 'seo',
		initialValue: '#ffffff'
	},
	{
		name: 'display',
		title: 'Display',
		type: 'string',
		description: 'Enter your display.',
		group: 'seo',
		initialValue: 'standalone'
	},
    {
      name: 'googleSiteVerification',
      title: 'Google Site Verification',
      type: 'string',
      description: 'Enter your Google Site Verification ID.',
      group: 'seo'
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
