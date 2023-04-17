import type {PageServerLoad} from './$types'
import {error} from '@sveltejs/kit'
import {shopify} from '$lib/shopify'

export const load = async ({parent}) => {
  const products = await shopify.product.some()

  let {cart} = await parent()

  if (products) {
    return {
      products,
      cart
    }
  }
  throw error(404, 'Products not found')
}
