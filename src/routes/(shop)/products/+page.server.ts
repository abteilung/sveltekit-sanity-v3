// Importing
import {getProductDetails, cartCount} from '$lib/Stores/Shopify'
export async function load({params}) {
  // getting the full product from shopify

  let handle = params.handle
  const productDetails = await getProductDetails(handle)

  return {
    productDetails
  }
}
