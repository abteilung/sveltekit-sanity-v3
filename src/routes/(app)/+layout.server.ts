import {getSanityServerClient} from '$lib/config/sanity/client'
import {getLayoutData} from '$lib/config/sanity/queries'
import {shopify} from '$lib/shopify'
import {redis} from '$lib/server/redis'
import {error} from '@sveltejs/kit'

export const load = async ({locals, cookies}) => {
  let cart = await shopify.cart.one({cart_id: locals.cart_id})
  if (cart === undefined) {
    cookies.delete('CART_ID')
    throw error(404, 'Cart not found')
  }

  const cartItemsCount = async () => {
    const {cart_id} = locals
    return await shopify.cart.products({cart_id})
  }

  const layoutData = async () => {
    const key = 'layoutData'
    let cached = await redis.get(key)
    if (!cached) {
      console.log('🟥 Cache.Miss')
      const response = await getSanityServerClient(false).fetch(getLayoutData, {
        // Set Headers for Cache-Control
        headers: {
          'Cache-Control': 'max-age=0, s-maxage=86400'
        }
      })

      // Convert response to JSON
      redis.set(key, JSON.stringify(response), {
        EX: 86400,
        NX: true
      })

      // const {...headers} = response
      // const responseHeaders = new Headers(headers)
      // return new Response(response, {headers: responseHeaders})

      return response
    } else {
      console.log('🟩 Cache.Hit')
      return JSON.parse(cached)
    }
  }

  return {
    cart,
    cartItemsCount: cartItemsCount(),
    layoutData: layoutData()
  }
}
