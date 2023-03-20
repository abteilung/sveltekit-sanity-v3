import {Gear, Compass, NavigationArrow} from '@phosphor-icons/react'

export function settingsStructure(S) {
  return S.listItem()
    .icon(Gear)
    .title('Settings')
    .child(
      S.list()
        .title('Settings')
        .items([
          S.listItem()
            .title('Site Settings')
            .icon(Gear)
            .child(S.document('settings').schemaType('settings').documentId('settings').title('Settings')),

          // S.listItem().title('Site Navigation').icon(Compass).child(S.documentTypeList('menu').title('Navigation')),

          S.listItem()
            .title('Navigations')
            .icon(Compass)
            .child(
              S.editor()
                .title('Navigation Settings')
                .id('navigationSettings')
                .schemaType('navigationSettings')
                .documentId('navigationSettings')
            )
        ])
    )
}

export default settingsStructure
