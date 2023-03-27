import {getSanityServerClient, overlayDrafts} from '$lib/config/sanity/client'
import {getPageBySlug} from '$lib/config/sanity/queries'
import {error} from '@sveltejs/kit'

// export const prerender = 'auto';

export const load = async ({parent, params}) => {
  const page = await getSanityServerClient(false).fetch(getPageBySlug, {slug: params.slug})

  if (!page) {
    throw error(404, 'Page not found')
  } else {
    return {
      page
    }
  }
}
