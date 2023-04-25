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

  const cartItemsCount = async () => {
    const {cart_id} = locals
    return await shopify.cart.products({cart_id})
  }

  return {
    cart,
    cartItemsCount: cartItemsCount(),
    layoutData: layoutStuff(),
    services: services(),
    products: products()
  }
}

// export const getCartItems = async () => {
//   let cartId = JSON.parse(localStorage.getItem('cartId'))

//   try {
//     const shopifyResponse = await shopify.cart.products(cartId)

//     let sum = 0
//     shopifyResponse.body?.data?.cart?.lines?.edges?.forEach((d) => {
//       sum += d.node.quantity
//     })
//     cartQuantity.set(sum)
//     return shopifyResponse
//   } catch (error) {
//     console.log(error)
//   }
// }
