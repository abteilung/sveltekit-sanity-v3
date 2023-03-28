import {LinkSimpleHorizontal} from '@phosphor-icons/react'

export default {
  title: 'Pagebuilder',
  name: 'pageBuilder',
  type: 'object',
  icon: LinkSimpleHorizontal,
  fields: [
    {
      title: 'Page Builder',
      name: 'pageBuilder',
      type: 'array',
      description: 'Build your Page Blocks',
      of: [
        {type: 'richEditor'},
        {type: 'teaserGrid'},
        {type: 'customImage'}
        // {type: 'accordions'},
        // {type: 'gallery'},
        // {type: 'cta'},
        // {type: 'pricing'},
        // {type: 'testimonials'},
        // {type: 'faq'},
        // {type: 'team'},
        // {type: 'contact'},
      ]
    }
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
}
