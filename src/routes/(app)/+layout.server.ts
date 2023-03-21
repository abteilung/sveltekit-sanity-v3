import {getSanityServerClient} from '$lib/config/sanity/client'
import {getSiteConfig, getMenus, getRedirects} from '$lib/config/sanity/queries'
import {redirect,error} from '@sveltejs/kit'

export const load = async ({parent, locals: {previewMode}, url}) => {
  const siteConfig = await getSanityServerClient(false).fetch(getSiteConfig)
  const redirects = await getSanityServerClient(false).fetch(getRedirects)

  const menus = await getSanityServerClient(false).fetch(getMenus)

  return {
    siteConfig,
    menus
  }
}
