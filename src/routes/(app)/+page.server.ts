import {getSanityServerClient, overlayDrafts} from '$lib/config/sanity/client'
import {getAllPosts, getHomepage} from '$lib/config/sanity/queries'
import {error} from '@sveltejs/kit'

// export const prerender = 'auto';
export const load = async ({parent, params}) => {
  const page = async () => {
    return await getSanityServerClient(false).fetch(getHomepage)
  }
  
  if (!page) {
    throw error(404, 'Page not found')
  }

  return {
    page: page()
  }
}
