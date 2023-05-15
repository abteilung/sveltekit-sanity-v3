import {SquaresFour} from '@phosphor-icons/react'

export default {
  name: 'teaserGrid',
  title: 'Teaser (Grid, List, Carousel)',
  type: 'object',
  icon: SquaresFour,
  // Default Values
  fieldsets: [
    {
      name: 'itemsSettings',
      title: 'Count and Offset',
      options: {
        columns: 2
      }
    }
  ],
  initialValue: () => ({
    typeSelector: 'services',
    itemSelector: 'latest',
    layout: 'grid',
    container: true,
    bgColor: 'white',
    columns: 3,
    maxItems: 999
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'typeSelector',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Services', value: 'service'},
          {title: 'Products', value: 'product'},
          {title: 'Posts', value: 'post'},
          {title: 'Events', value: 'event'},
          {title: 'Brands', value: 'brand'},
          {title: 'Custom', value: 'custom'}
        ]
      }
    },
    {
      name: 'maxItems',
      title: 'Max Items to show',
      type: 'number',
      options: {
        list: [
          {title: 'Show 4 Items', value: 4},
          {title: 'Show 12 Items', value: 12},
          {title: 'Show 24', value: 24},
          {title: 'Show all Items', value: 999}
        ]
      }
    },
    //   {
    //     title: 'Limit to Categories',
    //     name: 'categoryLimit',
    //     type: 'array',
    //     of: [
    //       {
    //         type: 'reference',
    //         to: [{type: 'category'}]
    //       }
    //     ]
    //   },
    {
      title: 'Layout',
      name: 'layout',
      type: 'string',
      options: {
        list: [
          {title: 'Grid', value: 'grid'},
          {title: 'List', value: 'list'},
          {title: 'Carousel', value: 'carousel'},
          {title: 'Large Slider', value: 'sliderLarge'}
        ]
      }
    },
    {
      name: 'columns',
      title: 'Columns',
      type: 'number',
      hidden: ({parent}) => parent.layout !== 'grid',
      options: {
        list: [
          {title: '1', value: 1},
          {title: '2', value: 2},
          {title: '3', value: 3},
          {title: '4', value: 4}
        ]
      }
    },
    {
      name: 'container',
      title: 'Container',
      type: 'boolean'
    },
    {
      name: 'bgColor',
      title: 'Background Color',
      type: 'string',
      options: {
        list: [
          {title: 'White', value: 'white'},
          {title: 'Gray', value: 'gray'},
          {title: 'Dark', value: 'dark'},
          {title: 'Black', value: 'black'},
          {title: 'Primary', value: 'primary'},
          {title: 'Accent', value: 'accent'},
          {title: 'Alert', value: 'alert'}
        ]
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      typeSelector: 'typeSelector',
      maxItems: 'maxItems',
      layout: 'layout',
      columns: 'columns'
    },
    prepare({title, typeSelector, layout, columns, maxItems}) {
      return {
        title: title || 'Teaser',
        subtitle: `${typeSelector} - ${layout} - ${
          maxItems ? 'Max. ' + maxItems + ' Items in ' : ''
        } ${columns} columns`,
        icon: SquaresFour
      }
    }
  }
}
