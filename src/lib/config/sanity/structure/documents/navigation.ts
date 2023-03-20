import {Compass} from '@phosphor-icons/react'

export function navigationStructure(S) {
  return S.listItem()
    .icon(Compass)
    .title('Navigations')
    .child(
        S.editor()
        .title('Navigation Settings')
        .id('navigationSettings')
        .schemaType('navigationSettings')
        .documentId('navigationSettings')
        )
}

export default navigationStructure