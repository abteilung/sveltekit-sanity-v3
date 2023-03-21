import {Signpost} from '@phosphor-icons/react'

export function redirectStructure(S) {
  return S.listItem()
    .icon(Signpost)
    .title('Redirects')
    .schemaType('redirect')
    .child(S.documentTypeList('redirect').title('Redirects'))
}

export default redirectStructure
