import {copyPaste} from '@superside-oss/sanity-plugin-copy-paste'
import {defineField, defineType} from 'sanity'
import {LinkSimpleHorizontal} from '@phosphor-icons/react'

export default defineType({
  title: 'Pagebuilder',
  name: 'pageBuilder',
  type: 'object',
  icon: LinkSimpleHorizontal,
  fields: [
    // defineField(copyPaste),

    defineField({
      title: 'Page Builder',
      name: 'pageBuilder',
      type: 'array',
      description: 'Build your Page Blocks',
      of: [
        {type: 'richEditor'},
        {type: 'teaserGrid'},
        {type: 'customImage'},
        {type: 'emptySpace'},
        {type: 'columns'},
        {type: 'testimonialReference'},
        {type: 'video'},
        {type: 'accordion'}
        // {type: 'accordions'},
        // {type: 'gallery'},
        // {type: 'cta'},
        // {type: 'pricing'},
        // {type: 'testimonials'},
        // {type: 'faq'},
        // {type: 'team'},
        // {type: 'contact'},
      ]
    })
  ],
  preview: {
    select: {
      pageBuilder: 'pageBuilder'
    },
    prepare({pageBuilder}) {
      return {
        title: 'Page Builder',
        subtitle: `${pageBuilder.length} item(s)`,
        icon: LinkSimpleHorizontal
      }
    }
  }
})
