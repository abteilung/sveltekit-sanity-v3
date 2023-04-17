import {getSanityServerClient} from '$lib/config/sanity/client'
import {getLayoutData, getAllServices, getAllProducts} from '$lib/config/sanity/queries'
import {shopify} from '$lib/shopify'
import {error} from '@sveltejs/kit'

export const load = async ({locals, cookies}) => {
  let cart = await shopify.cart.one({cart_id: locals.cart_id})
  if (cart === undefined) {
    cookies.delete('CART_ID')
    throw error(404, 'Cart not found')
  }

  // Load these asynchronously for better performance
  const layoutStuff = async () => {
    return await getSanityServerClient(false).fetch(getLayoutData)
  }

  const services = async () => {
    return await getSanityServerClient(false).fetch(getAllServices)
  }
  const products = async () => {
    return await getSanityServerClient(false).fetch(getAllProducts)
  }

  return {
    cart,
    layoutData: layoutStuff(),
    services: services(),
    products: products()
  }
}
