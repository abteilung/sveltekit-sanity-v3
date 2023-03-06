import {ArrowSquareOut} from 'phosphor-react'

export default {
  title: 'Link',
  name: 'navLink',
  type: 'object',
  icon: ArrowSquareOut,
  // Default values for new documents
  initialValue: {
    target: '_blank'
  },
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Display Text'
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      description: 'enter an external URL',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel']
        })
    },
    {
      title: 'target',
      name: 'target',
      type: 'string',
      options: {
        list: [
          {title: 'Self', value: '_self'},
          {title: 'Blank', value: '_blank'},
          {title: 'Parent', value: '_parent'},
          {title: 'Top', value: '_top'}
        ],
        layout: 'radio',
        direction: 'horizontal'
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      url: 'url',
      target: 'target'
    },
    prepare({title, url, target}) {
      return {
        title: title + ' (target: ' + target + ')',
        subtitle: url
      }
    }
  }
}
