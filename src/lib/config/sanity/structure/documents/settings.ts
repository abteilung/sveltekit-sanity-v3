import {AddressBook, Gear, Binoculars, Storefront} from '@phosphor-icons/react'

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

          S.divider(),

          S.listItem()
            .title('Contact Settings')
            .icon(AddressBook)
            .child(
              S.document('settingsContact')
                .schemaType('settingsContact')
                .documentId('settingsContact')
                .title('Contact Settings')
            ),

          S.listItem()
            .title('Shop Settings')
            .icon(Storefront)
            .child(
              S.document('settingsStore')
                .schemaType('settingsStore')
                .documentId('settingsStore')
                .title('Contact Settings')
            ),

          S.listItem()
            .title('Analytics Settings')
            .icon(Binoculars)
            .child(
              S.document('settingsAnalytics')
                .schemaType('settingsAnalytics')
                .documentId('settingsAnalytics')
                .title('Contact Settings')
            ),

          S.divider()

          // S.listItem().title('Site Navigation').icon(Compass).child(S.documentTypeList('menu').title('Navigation')),
        ])
    )
}

export default settingsStructure
