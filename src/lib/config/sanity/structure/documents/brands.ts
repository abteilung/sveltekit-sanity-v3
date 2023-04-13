import {AppleLogo} from '@phosphor-icons/react'

export function brandsStructure(S) {
  return S.listItem()
    .icon(AppleLogo)
    .title('Brands')
    .child(S.documentList('brand').title('Brands we are working with').schemaType('brand').filter('_type == "brand"'))
}

export default brandsStructure
