// Importing
import {getProductDetails, cartCount, products, getProducts} from '$lib/Stores/Shopify'

export async function load({params}) {
  // getting the full product from shopify

  let handle = params.handle
  const productDetails = await getProductDetails(handle)

  await getProducts()
  const productType = ctx.page.query.get('type')
  if (productType) {
    products.update((items) => {
      const updated = items.filter((product) => product.node.productType === productType)
      return updated
    })
  }

  return {
    productDetails,
    products
  }
}

// import { products, getProducts } from '../../store';
// export async function load(ctx) {
//     await getProducts();
//     const productType = ctx.page.query.get('type');
//     if (productType) {
//         products.update((items) => {
//             const updated = items.filter((product) => product.node.productType === productType);
//             return updated;
//         });
//     }
//     return { props: { products} };
// }
