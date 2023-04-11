import {getSanityServerClient, overlayDrafts} from '$lib/config/sanity/client'
import {getProductBySlug} from '$lib/config/sanity/queries'
import {error} from '@sveltejs/kit'

// export const prerender = 'auto';

export const load = async ({parent, params}) => {
  const page = async () => {
    return await getSanityServerClient(false).fetch(getProductBySlug, {slug: params.slug})
  }

  if (page) {
    return {
      page: page()
    }
  } else {
    throw error(404, 'Page not found')
  }
}
