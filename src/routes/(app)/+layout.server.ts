import {getSanityServerClient} from '$lib/config/sanity/client'
import {getLayoutData} from '$lib/config/sanity/queries'
import {shopify} from '$lib/shopify'
import {error} from '@sveltejs/kit'

import {cachedQuery} from '$lib/utils/cachedQuery'

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

  const queryString = getSanityServerClient(false).fetch(getLayoutData)
  const layoutData = cachedQuery(`rendered:v1:layoutData`, queryString, locals)

  return {
    cart,
    cartItemsCount: cartItemsCount(),
    layoutData: layoutData
  }
}

// const {...headers} = response
// const responseHeaders = new Headers(headers)
// return new Response(response, {headers: responseHeaders})
