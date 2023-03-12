import type {LayoutServerLoad} from './$types'
import {getSanityServerClient} from '../../lib/config/sanity/client'
import {getSiteConfig, getMenus} from '../../lib/config/sanity/queries'

// Types
/** @type {import('@sveltejs/kit').RequestHandler} */

export const load: LayoutServerLoad = async ({locals: {previewMode}, url}) => {
  const siteConfig = await getSanityServerClient(false).fetch(getSiteConfig)
  const menus = await getSanityServerClient(false).fetch(getMenus)

  return {
    siteConfig,
    menus
  }
}
