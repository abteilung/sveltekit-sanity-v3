import {Question} from '@phosphor-icons/react'
import {defineField, defineType} from 'sanity'

// faq.js
export default defineType({
  name: 'faq',
  title: 'Frequently Asked Questions',
  type: 'document',
  icon: Question,
  fields: [
    defineField({
      name: 'question',
      type: 'string',
      title: 'Question'
    }),
    defineField({
      name: 'answer',
      type: 'text',
      title: 'Answer',
      rows: 5
    }),
    defineField({
      name: 'categories',
      type: 'array',
      title: 'Categories',
      description:
        'Select all categories that apply to this question. If no categories are selected, this question will not be displayed.',
      // Initialvalue for Category
      of: [{type: 'reference', to: [{type: 'faqCategory'}]}]
    })
  ],
  preview: {
    select: {
      title: 'question',
      categories: 'categories'
    },
    prepare({title, categories}) {
      return {
        title: title ? title : 'No question',
        // Todo: display Categories Title if there's only one category
        subtitle: categories ? categories.map((category) => category.title).join(', ') : 'No categories',
        icon: Question
      }
    }
  }
})
