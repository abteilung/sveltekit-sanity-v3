import {getSanityServerClient, overlayDrafts} from '$lib/config/sanity/client'
import {getPageBySlug, getRedirectBySlug} from '$lib/config/sanity/queries'
import {error, redirect} from '@sveltejs/kit'

// export const prerender = 'auto';
export const load = async ({parent, params}) => {
  const page = await getSanityServerClient(false).fetch(getPageBySlug, {slug: params.slug})
  const pageRedirects = await getSanityServerClient(false).fetch(getRedirectBySlug, {slug: params.slug})

  if (pageRedirects) {
    throw redirect(pageRedirects.statusCode, pageRedirects.toPath)
  }

  if (!page || !pageRedirects) {
    throw error(404, 'Page not found')
  } else {
    return {
      page
    }
  }
}
