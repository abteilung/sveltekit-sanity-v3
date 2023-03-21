import {getSanityServerClient, overlayDrafts} from '$lib/config/sanity/client'
import {getAllPosts, getRedirects} from '$lib/config/sanity/queries'
import {error} from '@sveltejs/kit'

// export const prerender = 'auto';
export const load = async ({parent, params}) => {
  const posts = await getSanityServerClient(false).fetch(getAllPosts)
  
  if (!posts) {
    throw error(500, 'Posts not found')
  }

  return {
    posts
  }
}
