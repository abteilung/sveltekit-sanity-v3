import {AppleLogo, SealQuestion} from '@phosphor-icons/react'

export function brandsStructure(S) {
  return S.listItem()
    .icon(AppleLogo)
    .title('Brands')
    .child(
      S.documentList('brand')
        .title('Brands we are working for')
        .schemaType('brand')
        .filter('_type == "brand"')
    )
}

export default brandsStructure


