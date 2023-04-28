import {User, UsersThree, UserCircle} from '@phosphor-icons/react'

export function personsStructure(S) {
  return S.listItem()
    .icon(User)
    .title('Persons')
    .child(
      S.list()
        .title('Frequently Asked Questions')
        .items([
          S.listItem().title('Authors').icon(User).child(S.documentTypeList('author').title('Authors')),
          S.divider(),
          S.listItem().title('Team Members').icon(UsersThree).child(S.documentTypeList('member').title('Team Members'))
        ])
    )
}

export default personsStructure
