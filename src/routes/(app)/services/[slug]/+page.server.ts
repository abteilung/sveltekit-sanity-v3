import {getSanityServerClient, overlayDrafts} from '$lib/config/sanity/client'
import {getServiceBySlug} from '$lib/config/sanity/queries'
import {error} from '@sveltejs/kit'

// export const prerender = 'auto';

export const load = async ({parent, params}) => {
  const page = await getSanityServerClient(false).fetch(getServiceBySlug, {slug: params.slug})

  if (page) {
    return {
      page
    }
  } else {
    throw error(404, 'Service not found')
  }
}
