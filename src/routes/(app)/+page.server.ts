import {getSanityServerClient, overlayDrafts} from '../lib/config/sanity/client'
import {getAllPosts} from '../lib/config/sanity/queries'
import {error} from '@sveltejs/kit'
import type {PageServerLoad} from './$types'

// export const prerender = 'auto';
export const load: PageServerLoad = async ({parent, params}) => {
  const posts = await getSanityServerClient(false).fetch(getAllPosts)

  if (!posts) {
    throw error(500, 'Posts not found')
  }

  return {
    posts
  }
}
