import {Trophy} from '@phosphor-icons/react'

export function caseStudyStructure(S) {
  return S.listItem()
    .icon(Trophy)
    .title('Case Studies')
    .child(S.documentList('caseStudy').title('Our Cases').schemaType('caseStudy').filter('_type == "caseStudy"'))
}

export default caseStudyStructure
