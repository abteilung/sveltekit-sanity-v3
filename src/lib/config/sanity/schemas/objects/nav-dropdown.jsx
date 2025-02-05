import {ArrowBendRightDown, WarningCircle} from '@phosphor-icons/react'

export default {
  title: 'Dropdown',
  name: 'navDropdown',
  type: 'object',
  icon: ArrowBendRightDown,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Text to Display'
    },
    {
      title: 'Dropdown Items',
      name: 'dropdownItems',
      type: 'array',
      // Allow Dropdown Items to be either a Page or a Link (or another Dropdown)
      of: [{type: 'navPage'}, {type: 'navLink'}, {type: 'navDropdown'}]
    },
    {
      name: 'featuredNote',
      type: 'note',
      options: {
        icon: WarningCircle,
        headline: 'Gotcha',
        message: `Featured products are only for menus that appear in desktop "mega-navs".`,
        tone: 'caution'
      }
    },
    {
      title: 'Featured Products',
      name: 'featured',
      type: 'array',
      of: [
        {
          title: 'Product',
          type: 'reference',
          to: [{type: 'product'}]
        }
      ],
      validation: (Rule) => Rule.unique().max(2)
    }
  ],
  preview: {
    select: {
      title: 'title',
      dropdownItems: 'dropdownItems',
      featured: 'featured'
    },
    prepare({title, dropdownItems, featured}) {
      return {
        title: title ?? 'Dropdown',
        subtitle: `${dropdownItems?.length ?? 0} items${featured?.length ? ` + ${featured.length} featured` : ''}`,
        media: ArrowBendRightDown
      }
    }
  }
}
