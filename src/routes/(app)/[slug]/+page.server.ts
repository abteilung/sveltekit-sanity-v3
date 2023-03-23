import {getSanityServerClient, overlayDrafts} from '$lib/config/sanity/client'
import {getPageBySlug, getRedirectBySlug} from '$lib/config/sanity/queries'
import {error, redirect} from '@sveltejs/kit'

// export const prerender = 'auto';
export const load = async ({parent, params}) => {
  const page = await getSanityServerClient(false).fetch(getPageBySlug, {slug: params.slug})
  const pageRedirect = await getSanityServerClient(false).fetch(getRedirectBySlug, {slug: params.slug})

  if (pageRedirect && pageRedirect.fromPath === slug) {
    throw redirect(pageRedirect.statusCode, pageRedirect.toPath)
  }

  if (!page) {
    throw error(500, 'Page not found')
  }

  return {
    page
  }
}