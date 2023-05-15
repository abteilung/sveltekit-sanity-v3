import {GearSix, Globe, ShareNetwork, Palette, AddressBook, MagnifyingGlass, Scales} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: GearSix,
  // Initialvalue for display
  initialValue: {
    title: 'Site Title',
    description: 'A blog built with SvelteKit and Sanity.io.',
    siteUrl: 'https://example.com',

    // DSGVO
    cookieBanner: true,
    cookieBannerText: 'This website uses cookies to ensure you get the best experience on our website.',
    cookieBannerLinkText: 'Accept',
    cookieExpires: 21
  },

  groups: [
    {name: 'site', title: 'Site', description: 'Site settings', default: true, icon: Globe},
    {name: 'general', title: 'General', description: 'General settings', icon: Globe},
    {name: 'entryPages', title: 'Entry Pages', description: 'Entry Pages settings', icon: ShareNetwork},
    {name: 'theme', title: 'Theme', description: 'Theme settings', icon: Palette},
    {name: 'seo', title: 'SEO', description: 'SEO settings', icon: MagnifyingGlass},
    {name: 'dsgvo', title: 'DSGVO', description: 'DSGVO settings', icon: Scales}
  ],
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your Site.',
      title: 'Title',
      type: 'string',
      initialValue: 'Site Title',
      group: 'site',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'description',
      description: 'This field is the default description of your Site.',
      title: 'Description',
      type: 'string',
      initialValue: 'A blog built with SvelteKit and Sanity.io.',
      group: 'site',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'siteUrl',
      description: 'This field is the default siteUrl of your Site.',
      title: 'Site URL',
      type: 'url',
      group: 'site',
      initialValue: 'https://blog.example.com',
      validation: (rule) => rule.required()
    }),
    defineField({
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
    }),

    // Theme
    // {
    //   name: 'themeColor',
    //   title: 'Theme Color',
    //   type: 'string',
    //   description: 'Enter your theme color.',
    //   group: 'theme',
    //   initialValue: '#ffffff'
    // },
    // {
    //   name: 'backgroundColor',
    //   title: 'Background Color',
    //   type: 'string',
    //   description: 'Enter your background color.',
    //   group: 'theme',
    //   initialValue: '#ffffff'
    // },

    // SEO
    // {
    //   name: 'display',
    //   title: 'Display',
    //   type: 'string',
    //   description: 'Enter your display.',
    //   group: 'seo'
    // },
    // EntryPages
    defineField({
      name: 'home',
      title: 'Home Page',
      type: 'reference',
      to: [{type: 'page'}],
      description: 'Add Home Page.',
      group: 'entryPages'
    }),
    defineField({
      name: 'shop',
      title: 'Shop Page',
      type: 'reference',
      to: [{type: 'page'}],
      description: 'Add Shop Page.',
      group: 'entryPages'
    }),
    // DSGVO
    defineField({
      name: 'imprint',
      title: 'Imprint Page',
      type: 'reference',
      to: [{type: 'page'}, {type: 'meta'}],
      description: 'Add Imprint Page.',
      group: 'dsgvo'
    }),
    defineField({
      name: 'privacy',
      title: 'Privacy Page',
      type: 'reference',
      to: [{type: 'page'}, {type: 'meta'}],
      description: 'Add Privacy Page.',
      group: 'dsgvo'
    }),
    defineField({
      name: 'terms',
      title: 'Terms Page',
      type: 'reference',
      to: [{type: 'page'}, {type: 'meta'}],
      description: 'Add Terms Page.',
      group: 'dsgvo'
    }),
    defineField({
      name: 'cookieBanner',
      title: 'Cookie Banner',
      type: 'boolean',
      description: 'Add Cookie Banner.',
      group: 'dsgvo'
    }),
    defineField({
      name: 'cookeExpires',
      title: 'Cooke Expires',
      type: 'number',
      description: 'Add Cooke Expires.',
      group: 'dsgvo',
      // Show only if cookieBanner is set
      hidden: ({parent}) => !parent.cookieBanner
    }),
    defineField({
      name: 'cookieBannerText',
      title: 'Cookie Banner Text',
      type: 'string',
      description: 'Add Cookie Banner Text.',
      group: 'dsgvo',
      // Show only if cookieBanner is set
      hidden: ({parent}) => !parent.cookieBanner
    }),
    defineField({
      name: 'cookieBannerLink',
      title: 'Cookie Banner Link',
      type: 'reference',
      to: [{type: 'page'}],
      description: 'Show Cookie Banner Link.',
      group: 'dsgvo',
      // Show only if cookieBanner is set
      hidden: ({parent}) => !parent.cookieBanner
    }),
    defineField({
      name: 'cookieBannerLinkText',
      title: 'Cookie Banner Link Text',
      type: 'string',
      description: 'Add Cookie Banner Link Text.',
      group: 'dsgvo',
      // Show only if cookieBanner is set
      hidden: ({parent}) => !parent.cookieBanner || !parent.cookieBannerLink
    }),
    defineField({
      name: 'cookieBannerMoreLink',
      title: 'Cookie Banner More Link',
      type: 'reference',
      to: [{type: 'page'}],
      description: 'Show Cookie Banner More Link.',
      group: 'dsgvo',
      // Show only if cookieBanner is set
      hidden: ({parent}) => !parent.cookieBanner
    }),
    {
      name: 'cookieBannerMoreLinkText',
      title: 'Cookie Banner More Link Text',
      type: 'string',
      description: 'Add Cookie Banner More Link Text.',
      group: 'dsgvo',
      // Show only if cookieBanner is set
      hidden: ({parent}) => !parent.cookieBanner || !parent.cookieBannerMoreLink
    }
  ]
})
