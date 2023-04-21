import {error} from '@sveltejs/kit'
import {shopify} from '$lib/shopify'

// export const load = async ({parent}) => {
//   const res = await shopify.product.all()

//   if (res.status === 200) {
//     const products = res.body?.data?.products

//     if (products) {
//       return {
//         body: {products}
//       }
//     }

//     throw error(404)
//   } else {
    

//   throw error(404, 'Products not found')
// }



export const load = async ({parent}) => {
  const allProducts = await shopify.product.all()

  if (allProducts) {
    return {
       allProducts
    }
  } else {
    throw error(404)
  }
}
 