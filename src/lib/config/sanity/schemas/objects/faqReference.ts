import { Question } from '@phosphor-icons/react'
// faq.js
export default {
  name: 'faqReference',
  title: 'Frequently Asked Questions',
  type: 'object',
  icon: Question,
  fields: [
    {
      name: 'category',
      type: 'reference',
      title: 'Category',
      to: [{type: 'faqCategory'}]
    },
    {
      name: 'answer',
      type: 'text',
      title: 'Answer'
    }
  ],

}
