import {Lifebuoy} from '@phosphor-icons/react'

export function landingPageFeatureStructure(S) {
  return S.listItem()
    .icon(Lifebuoy)
    .title('Landing Page Features')
    .schemaType('landingPageFeature')
    .child(S.documentTypeList('landingPageFeature').title('Landing Page Features'))
}

export default landingPageFeatureStructure
