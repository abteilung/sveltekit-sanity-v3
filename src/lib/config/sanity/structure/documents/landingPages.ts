import {Planet} from '@phosphor-icons/react'

export function landingPageStructure(S) {
  return S.listItem()
    .icon(Planet)
    .title('Landing Pages')
    .schemaType('landingPage')
    .child(S.documentTypeList('landingPage').title('Landing Pages'))
}

export default landingPageStructure
