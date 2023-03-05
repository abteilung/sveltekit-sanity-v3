import {GearSix} from 'phosphor-react'
import {defineType} from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: GearSix,
  fields: [
    {
      name: 'title',
      description: 'This field is the title of your Site.',
      title: 'Title',
      type: 'string',
      initialValue: 'Blog.',
      validation: (rule) => rule.required()
    },
    {
      name: 'description',
      description: 'This field is the default description of your Site.',
      title: 'Description',
      type: 'string',
      initialValue: 'A blog built with Next.js and Sanity.io.',
      validation: (rule) => rule.required()
    },
    {
      name: 'siteUrl',
      description: 'This field is the default siteUrl of your Site.',
      title: 'Site URL',
      type: 'url',
      initialValue: 'https://blog.example.com',
      validation: (rule) => rule.required()
    },
	{ 
		name: 'logo',
		description: 'This field is the default logo of your Site.',
		title: 'Logo',
		type: 'image',
		initialValue: 'https://blog.example.com/images/logo.png',
		validation: (rule) => rule.required()
	},
	{
		  name: 'favicon',
		  description: 'This field is the default favicon of your Site.',
		  title: 'Favicon',
		  type: 'image',
		  initialValue: 'https://blog.example.com/images/favicon.png',
		  validation: (rule) => rule.required()
	},
	
    {
      name: 'siteImage',
      description: 'This field is the default siteImage of your Site.',
      title: 'Site Image',
      type: 'image',
      initialValue: 'https://blog.example.com/images/site-image.png',
      validation: (rule) => rule.required()
    }
  ]
})
