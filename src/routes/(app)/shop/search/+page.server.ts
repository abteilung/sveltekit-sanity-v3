import {getAllProducts} from '$lib/shopify'
import {error} from '@sveltejs/kit'
import {shopify} from '$lib/shopify'

export async function load() {
  const res = await shopify.product.all()

  if (res.status === 200) {
    const allProducts = res.body?.data?.products

    if (allProducts) {
      return {
        body: {allProducts}
      }
    }

    throw error(404)
  } else {
    throw error(res.status)
  }
}
