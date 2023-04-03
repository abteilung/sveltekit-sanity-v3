import {getSanityServerClient, overlayDrafts} from '$lib/config/sanity/client'
import {getHomepage} from '$lib/config/sanity/queries'
import {error} from '@sveltejs/kit'

// export const prerender = 'auto';
export const load = async ({parent, params}) => {
  const page = async () => {
    return await getSanityServerClient(false).fetch(getHomepage)
  }

  if (page) {
    return {
      page: page(),
      dsgvo: dsgvo()
    }
  }
  throw error(404)
}
