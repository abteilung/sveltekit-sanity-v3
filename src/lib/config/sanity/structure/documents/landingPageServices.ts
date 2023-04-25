import {Lifebuoy} from '@phosphor-icons/react'

export function landingPageServicesStructure(S) {
  return S.listItem()
    .icon(Lifebuoy)
    .title('Landing Page Services')
    .schemaType('landingPageService')
    .child(S.documentTypeList('landingPageService').title('Landing Page Services'))
}

export default landingPageServicesStructure
