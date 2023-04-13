import {ShootingStar, SealQuestion} from '@phosphor-icons/react'

export function clientsStructure(S) {
  return S.listItem()
    .icon(ShootingStar)
    .title('Clients')
    .child(
      S.documentList('client').title('Clients we are working for').schemaType('client').filter('_type == "client"')
    )
}

export default clientsStructure
