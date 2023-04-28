import {UserCircle} from '@phosphor-icons/react'

export function closedUserGroup(S) {
  return S.listItem()
    .icon(UserCircle)
    .title('User Access')

    .child(S.documentTypeList('user').title('Granted Users'))
}

export default closedUserGroup
