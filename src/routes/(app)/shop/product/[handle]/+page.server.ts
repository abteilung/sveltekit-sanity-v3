import {error} from '@sveltejs/kit'
import {shopify} from '$lib/shopify'

export const load = async ({params, parent}) => {
  const product = await shopify.product.one({handle: params.handle})
  let {cart} = await parent()

  if (product) {
    return {
      product,
      cart
    }
  } else {
    throw error(404)
  }
}