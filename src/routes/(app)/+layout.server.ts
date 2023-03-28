import {getSanityServerClient} from '$lib/config/sanity/client'
import {getSiteConfig, getMenus, getDsgvoSettings} from '$lib/config/sanity/queries'

export const load = async ({parent, locals: {previewMode}, url}) => {
  // Load these asynchronously for better performance
  const siteConfig = async () => {
    return await getSanityServerClient(false).fetch(getSiteConfig)
  }
  const menus = async () => {
    return await getSanityServerClient(false).fetch(getMenus)
  }
  const dsgvo = async () => {
    return await getSanityServerClient(false).fetch(getDsgvoSettings)
  }

  return {
    siteConfig: siteConfig(),
    menus: menus(),
    dsgvo: dsgvo()
  }
}
