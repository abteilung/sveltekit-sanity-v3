import {getSanityServerClient, overlayDrafts} from '$lib/config/sanity/client'
import {getServiceBySlug} from '$lib/config/sanity/queries'
import {error} from '@sveltejs/kit'
import {cachedQuery} from '$lib/utils/cachedQuery'

// export const prerender = 'auto'

export const load = async ({parent, params, locals}) => {
  const queryString = getSanityServerClient(false).fetch(getServiceBySlug, {slug: params.slug})
  const page = cachedQuery(true, `rendered:services:${params.slug}`, queryString, locals)

  if (page) {
    return {
      page
    }
  } else {
    throw error(404, 'Service not found')
  }
}
