import {getSanityServerClient, overlayDrafts} from '$lib/config/sanity/client'
import {getPageBySlug} from '$lib/config/sanity/queries'
import {redirect, error} from '@sveltejs/kit'

export const prerender = true

export const load = async ({parent, params}) => {
  const page = async () => {
    return await getSanityServerClient(false).fetch(getPageBySlug, {slug: params.slug})
  }

  if (page) {
    return {
      page: page()
    }
  }
  throw error(404)
}
