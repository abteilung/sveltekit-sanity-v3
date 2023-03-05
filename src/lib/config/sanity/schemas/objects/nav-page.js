import { LinkSimpleHorizontal } from 'phosphor-react'

import { getStaticRoute, getDynamicRoute } from '../../lib/helpers'

export default {
  title: 'Page',
  name: 'navPage',
  type: 'object',
  icon: LinkSimpleHorizontal,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Display Text'
    },
    {
      title: 'Page',
      name: 'page',
      type: 'reference',
      to: [{ type: 'page' }, { type: 'product' }, { type: 'post' }, { type: 'service' }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      referenceTitle: 'page.title',
      referenceImage: 'page.mainImage',
      pageType: 'page._type',
      pageSlug: 'page.slug.current'
    },
    prepare({ title, referenceTitle, referenceImage, pageType, pageSlug }) {
      const isStatic = getStaticRoute(pageType)
      const isDynamic = getDynamicRoute(pageType)

      return {
        title:  title || referenceTitle,
        subtitle:
          isStatic !== false
            ? `/${isStatic}`
            : `/${isDynamic ? `${isDynamic}/` : ''}${pageSlug}`,
        media: referenceImage
      }
    }
  }
}