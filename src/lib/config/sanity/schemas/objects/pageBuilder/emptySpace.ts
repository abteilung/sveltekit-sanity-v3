import {ArrowsOutLineVertical} from '@phosphor-icons/react'

export default {
  name: 'emptySpace',
  title: 'Empty Space',
  type: 'object',
  icon: ArrowsOutLineVertical,
  // Default Values
  initialValue: {
    value: 'small'
  },
  fields: [
    {
      title: 'Vertical Spacer',
      name: 'value',
      type: 'string',
      options: {
        list: [
          {
            title: 'Small',
            value: 'small'
          },
          {
            title: 'Large',
            value: 'large'
          }
        ]
      }
    }
  ],
  preview: {
    select: {
      title: 'value'
    },
    prepare({title: subtitle}) {
      return {
        title: 'Vertical Spacer',
        subtitle
      }
    }
  }
}
