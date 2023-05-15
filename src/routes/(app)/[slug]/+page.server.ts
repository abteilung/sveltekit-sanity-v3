import {getSanityServerClient, overlayDrafts} from '$lib/config/sanity/client'
import {getPageBySlug} from '$lib/config/sanity/queries'
import {error} from '@sveltejs/kit'
import {cachedQuery} from '$lib/utils/cachedQuery'

// export const prerender = 'auto'

export const load = async ({parent, params, locals}) => {
  const queryString = getSanityServerClient(false).fetch(getPageBySlug, {slug: params.slug})
  const page = cachedQuery(`rendered:services:${params.slug}`, queryString, locals)

  if (page) {
    return {
      page: page
    }
  }
  throw error(404)
}
