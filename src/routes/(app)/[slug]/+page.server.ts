import {getSanityServerClient, overlayDrafts} from '../../lib/config/sanity/client'
import {getPageBySlug} from '../../lib/config/sanity/queries'
import {error} from '@sveltejs/kit'
import type {PageServerLoad} from './$types'

// export const prerender = 'auto';
export const load: PageServerLoad = async ({parent, params}) => {
  const page = await getSanityServerClient(false).fetch(getPageBySlug, {slug: params.slug})

  if (!page) {
    throw error(500, 'Page not found')
  }

  return {
    page
  }
}
