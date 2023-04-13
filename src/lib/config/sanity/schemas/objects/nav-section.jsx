import {SelectionAll} from '@phosphor-icons/react'

export default {
  title: 'Section',
  name: 'navSection',
  type: 'object',
  icon: SelectionAll,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Text to Display above the Section'
    },
    {
      title: 'Section Items',
      // Information Text
      description: 'Add Sections only if needed (e.g. Footer)',
      name: 'sectionItems',
      type: 'array',
      // Allow Dropdown Items to be either a Page or a Link (or another Dropdown)
      of: [{type: 'navPage'}, {type: 'navLink'}, {type: 'navDropdown'}]
    }
  ],
  preview: {
    select: {
      title: 'title',
      sectionItems: 'sectionItems',
      featured: 'featured'
    },
    prepare({title, sectionItems, featured}) {
      return {
        title: title ?? 'Dropdown',
        subtitle: `${sectionItems?.length ?? 0} Items`,
        media: SelectionAll
      }
    }
  }
}
