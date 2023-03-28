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
    },
    {
      title: 'Show Rule',
      name: 'showRule',
      type: 'boolean'
    }
  ],
  preview: {
    select: {
      title: 'value',
      subtitle: 'showRule'
    },
    prepare({title, subtitle}) {
      return {
        title: title + ' Vertical Spacer',
        // Show if the rule is shown
        subtitle: subtitle ? 'Rule' : 'No Rule'
      }
    }
  }
}
