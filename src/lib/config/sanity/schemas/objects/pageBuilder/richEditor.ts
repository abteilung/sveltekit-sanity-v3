import {Textbox} from '@phosphor-icons/react'

export default {
  name: 'richEditor',
  title: 'Rich Editor',
  type: 'object',
  icon: Textbox,
  fields: [
    {
      name: 'content',
      title: 'Rich Editor',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      content: 'content'
    },
    prepare({ content }) {
      return {
        title: 'Rich Editor',
        subtitle: content ? content[0].children[0].text : '',
      }
    }
  }
}