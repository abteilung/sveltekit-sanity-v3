import {GearSix, Globe, ShareNetwork, Palette, AddressBook, MagnifyingGlass, ChartLineUp} from '@phosphor-icons/react'
import {defineType} from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: GearSix,
  groups: [
    {name: 'site', title: 'Site', description: 'Site settings', default: true, icon: Globe},
    {name: 'general', title: 'General', description: 'General settings',  icon: Globe},
    {name: 'theme', title: 'Theme', description: 'Theme settings', icon: Palette},
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
      name: 'error',
      description: 'This field is the Error page of your Site.',
      title: 'Error',
      type: 'reference',
      to: [{type: 'page'}],
      group: 'site',
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
