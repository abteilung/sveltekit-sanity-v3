import {getSanityServerClient, overlayDrafts} from '$lib/config/sanity/client'
import {getPageBySlug, getRedirectBySlug} from '$lib/config/sanity/queries'
import {redirect, error} from '@sveltejs/kit'

// export const prerender = 'auto';

export const load = async ({parent, params}) => {
  const page = async () => {
    return await getSanityServerClient(false).fetch(getPageBySlug, {slug: params.slug})
  }

  const pageRedirect = await getSanityServerClient(false).fetch(getRedirectBySlug, {slug: params.slug})

  if (pageRedirect) {
    throw redirect(pageRedirect.statusCode, pageRedirect.toPath)
  } else if (page) {
    return {
      page: page()
    }
  } else {
    throw error(404, 'Page not found')
  }
}
