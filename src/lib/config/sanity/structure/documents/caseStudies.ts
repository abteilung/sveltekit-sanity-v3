import {Trophy} from '@phosphor-icons/react'

export function casestudyStructure(S) {
  return S.listItem()
    .icon(Trophy)
    .title('Case Studies')
    .child(S.documentList('casestudy').title('Our Cases').schemaType('casestudy').filter('_type == "casestudy"'))
}

export default casestudyStructure
