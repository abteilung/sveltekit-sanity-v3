import {Files} from 'phosphor-react'

export function pageStructure(S) {
  return S.listItem().icon(Files).title('Pages').schemaType('page').child(
    S.documentTypeList('page')
      .title('Content Pages')
      // Exclude frontPage. Also if it is in Draft State
      .filter('_type == "page" && (_id != "frontPage")')
  )
}

export default pageStructure
