import {SquaresFour} from '@phosphor-icons/react'

export default {
    name: 'teaserGrid',
    title: 'Teaser (Grid, List, Carousel)',
    type: 'object',
    icon: SquaresFour,
    // Default Values
    initialValue: {
        typeSelector: 'services',
        itemSelector: 'latest',
        layout: 'grid',
        columns: 3,
    },
    fields: [
        {
        name: 'title',
        title: 'Title',
        type: 'string',
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
                    {title: 'Custom', value: 'custom'}
                ],
            }
        },
        {
        name: 'itemSelector',
        title: 'Items',
        type: 'string',
        options: {
            list: [
                {title: 'All', value: 'all'},
                {title: 'Latest', value: 'latest'},
                {title: 'Featured', value: 'featured'},
                {title: 'Custom', value: 'custom'}
            ],
        }
    },
      {
        name: 'maxItems',
        title: 'Max Items to show',
        type: 'number',
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
                {title: 'Carousel', value: 'carousel'}
            ],
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
            ],
        },
        
        },
    ],
    preview: {
        select: {
            title: 'title',
            typeSelector: 'typeSelector',
            itemSelector: 'itemSelector',
            maxItems: 'maxItems',
            layout: 'layout',
            columns: 'columns',
        },
        prepare({title, typeSelector, itemSelector, layout, columns, maxItems}) {
            return {
                title: title || 'Teaser Grid',
                subtitle: `${typeSelector} - ${itemSelector} - ${layout} - ${maxItems ? 'Max. ' + maxItems + ' Items in ' : ''} ${columns} columns`,
                icon: SquaresFour
            }
        }
    }
}