import {getSanityServerClient} from '$lib/config/sanity/client'
import {getSiteConfig, getMenus, getDsgvoSettings, getAllServices, getAllProducts} from '$lib/config/sanity/queries'
import {shopify} from '$lib/shopify'
import {error} from '@sveltejs/kit'


export const load = async ({locals, cookies}) => {
  let cart = await shopify.cart.one({cart_id: locals.cart_id})
  if (cart === undefined) {
    cookies.delete('CART_ID')
    throw error(404, 'Cart not found')
  }

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
    cart,
    siteConfig: siteConfig(),
    menus: menus(),
    dsgvo: dsgvo(),
    services: services(),
    products: products()
  }
}
