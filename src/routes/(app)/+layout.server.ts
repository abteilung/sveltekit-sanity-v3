import {getSanityServerClient} from '$lib/config/sanity/client'
import {getSiteConfig, getMenus} from '$lib/config/sanity/queries'

// Types
/** @type {import('@sveltejs/kit').RequestHandler} */

export const load = async ({locals: {previewMode}, url}) => {
  const siteConfig = await getSanityServerClient(false).fetch(getSiteConfig)
  const menus = await getSanityServerClient(false).fetch(getMenus)

  return {
    siteConfig,
    menus
  }
}
