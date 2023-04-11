import {Storefront, Handshake} from '@phosphor-icons/react'

export function productsStructure(S) {
  return S.listItem()
    .icon(Storefront)
    .title('Products & Services')
    .child(
      S.list()
        .title('Products & Services')
        .items([
          S.listItem().title('Products').icon(Storefront).child(S.documentTypeList('abteProduct').title('Products')),
          S.divider(),
          S.listItem().title('Services').icon(Handshake).child(S.documentTypeList('service').title('Services'))
        ])
    )
}

export default productsStructure
