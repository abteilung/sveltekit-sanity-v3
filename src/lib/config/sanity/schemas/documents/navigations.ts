import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Naviation Settings',
  name: 'navigationSettings',
  type: 'document',
  fields: [
    defineField({
      name: 'navMenuHeader',
      title: 'Main Menu',
      type: 'reference',
      to: [{type: 'menu'}]
    }),
    defineField({
      name: 'navMenuFooter',
      title: 'Footer Menu',
      type: 'reference',
      to: [{type: 'menu'}]
    }),
    defineField({
      name: 'navMenuMeta',
      title: 'Meta Menu',
      type: 'reference',
      to: [{type: 'menu'}]
    }),
    defineField({
      name: 'navMenuMobile',
      title: 'Mobile Menu',
      type: 'reference',
      to: [{type: 'menu'}]
    })
  ]
})
