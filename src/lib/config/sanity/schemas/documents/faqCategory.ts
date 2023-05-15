import {SealQuestion} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

// faq.js
export default defineType({
  name: 'faqCategory',
  title: 'FAQ Category',
  type: 'document',
  icon: SealQuestion,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Category'
    })
  ]
})
