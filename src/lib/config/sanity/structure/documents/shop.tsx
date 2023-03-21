import {Cube, Option, Copy, Gift, Sliders, ShoppingCart, LinkBreak} from '@phosphor-icons/react'
// import { standardViews } from '../previews/standard'

export function collectionsMenu(S) {
  return S.list()
  .title('Collections')
  .child(
    S.documentTypeList('collection')
      .title('Collections')
      .filter(
        `_type == "collection" && !(_id in [
      *[_type == "settings"][0].shop._ref,
    ]) && !(_id in path("drafts.**"))`
      )
      .child(documentId =>
        S.document()
          .documentId(documentId)
          .schemaType('collection')
          // .views(standardViews)
      )
      .canHandleIntent(
        (intent, { type }) =>
          ['create', 'edit'].includes(intent) && type === 'collection'
      )
  )
}



export function productsMenu(S) {
  return S.documentTypeList('product')
      .title('Products')
      .filter(
        `_type == "product" && !(_id in [
      *[_type == "settings"][0].shop._ref,
    ]) && !(_id in path("drafts.**"))`
      )
      .child(documentId =>
        S.document()
          .documentId(documentId)
          .schemaType('product')
          // .views(standardViews)
      )
      .canHandleIntent(
        (intent, { type }) =>
          ['create', 'edit'].includes(intent) && type === 'product'
      )
}



export function productVariantsMenu(S) {
  return S.listItem()
  .title('Product Variants')
  .icon(Copy)
  .child(
    S.list()
      .title('Product Variants')
      .items([
        S.listItem()
          .title('By Product')
          .icon(Gift)
          .child(
            S.documentTypeList('product')
              .title('By Product')
              .menuItems(S.documentTypeList('product').getMenuItems())
              .filter('_type == $type')
              .params({ type: 'product' })
              .child(productID =>
                S.documentList()
                  .title('Variants')
                  .menuItems(
                    S.documentTypeList('productVariant').getMenuItems()
                  )
                  .filter('_type == $type && productID == $id')
                  .params({
                    type: 'productVariant',
                    id: Number(productID.replace('product-', ''))
                  })
                  .child(documentId =>
                    S.document()
                      .documentId(documentId)
                      .schemaType('productVariant')
                      // .views(standardViews)
                  )
              )
          ),
        S.listItem()
          .title('Unattached Variants')
          .icon(LinkBreak)
          .child(async () => {
            const productIDs = await sanityClient.fetch(`
          *[_type == "product"][].productID
        `)

            return S.documentTypeList('productVariant')
              .title('Unattached Variants')
              .filter('_type == $type && !(productID in $ids)')
              .params({
                type: 'productVariant',
                ids: productIDs
              })
          })
      ])
  )
}



export function filtersmenu(S) {
  return S.listItem()
  .title('Filters')
  .icon(Sliders)
  .child(
    S.documentTypeList('filter')
      .title('Filters')
      .child(documentId =>
        S.document()
          .documentId(documentId)
          .schemaType('filter')
      )
      .canHandleIntent(
        (intent, { type }) =>
          ['create', 'edit'].includes(intent) && type === 'filter'
      )
  )
}




export function shopMenu(S) {
  return S.listItem()
  .title('Shop')
  .icon(ShoppingCart)
  .child(
    S.list()
      .title('Shop')
      .items([
        S.listItem()
          .title('Collections')
          .icon(Cube)
          .child(collectionsMenu(S)),

        S.listItem()
          .title('Products')
          .icon(Gift)
          .child(productsMenu(S)),

        S.listItem()
          .title('Product Variants')
          .icon(Copy)
          .child(productVariantsMenu(S)),
        S.divider(),
        S.listItem()
          .title('Filters')
          .icon(Sliders)
          .child(filtersmenu(S))
      ])
  )

}

export default shopMenu