import {writable} from 'svelte/store'
// import {shopify} from '$lib/shopify'

export const cart = writable([])
export const search = writable('')

export const cartOpen = writable(false)
export const cartPending = writable(false)

export const cartItemCount = writable(0)

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
