import {error} from '@sveltejs/kit'
import {shopify} from '$lib/shopify'

export const load = async () => {
  const allProducts = await shopify.product.all()

  if (allProducts) {
    return {
       allProducts
    }
  } else {
    throw error(404)
  }
}
 