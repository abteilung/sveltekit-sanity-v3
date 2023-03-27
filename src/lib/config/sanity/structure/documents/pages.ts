import {Files} from '@phosphor-icons/react'

export function pageStructure(S) {
  return S.listItem()
    .icon(Files)
    .title('Pages')
    .child(
      S.list()
        .title('Pages')
        .items([
          S.listItem()
            .title('Pages')
            .icon(Files)
            .child(S.documentTypeList('page').title('Pages').filter('_type == "page" && (_id != "frontPage")'))
          ,
          S.divider(),
          S.listItem()
            .title('Meta Pages')
            .icon(Files)
            .child(S.documentTypeList('meta').title('Meta Pages'))
        ])
    )
}

export default pageStructure
