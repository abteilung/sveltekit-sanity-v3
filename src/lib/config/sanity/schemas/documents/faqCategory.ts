import { SealQuestion } from '@phosphor-icons/react'
// faq.js
export default {
  name: 'faqCategory',
  title: 'FAQ Category',
  type: 'document',
  icon: SealQuestion,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Category',
    },
  ],
}