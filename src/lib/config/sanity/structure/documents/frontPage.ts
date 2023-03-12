import {Globe} from '@phosphor-icons/react'

export function frontPageStructure(S) {
  return S.documentListItem()
    .icon(Globe)
    .title('Front Page')
    .schemaType('page')
    .child(S.document().title('Front Page').schemaType('page').documentId('frontPage'))
}

export default frontPageStructure
