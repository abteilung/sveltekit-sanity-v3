import {Gear, Compass} from 'phosphor-react'

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

          S.listItem().title('Site Navigation').icon(Compass).child(S.documentTypeList('menu').title('Navigation'))
        ])
    )
}

export default settingsStructure
