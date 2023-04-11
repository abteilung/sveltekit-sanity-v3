import {fail, type Actions} from '@sveltejs/kit'
import {isValidTheme} from '../../hooks.server'

import {getSanityServerClient} from '$lib/config/sanity/client'
import {getSiteConfig, getMenus, getDsgvoSettings, getAllServices, getAllProducts} from '$lib/config/sanity/queries'

export const load = async () => {
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
  const services = async () => {
    return await getSanityServerClient(false).fetch(getAllServices)
  }
  const products = async () => {
    return await getSanityServerClient(false).fetch(getAllProducts)
  }

  return {
    siteConfig: siteConfig(),
    menus: menus(),
    dsgvo: dsgvo(),
    services: services(),
    products: products()
  }
}