import {Question, SealQuestion} from '@phosphor-icons/react'

export function faqStructure(S) {
  return S.listItem()
    .icon(Question)
    .title('FAQ')
    .child(
      S.list()
        .title('Frequently Asked Questions')
        .items([
          S.listItem().title('FAQ').icon(Question).child(S.documentTypeList('faq').title('FAQ')),
          S.divider(),
          S.listItem().title('FAQ Categories').icon(SealQuestion).child(S.documentTypeList('faqCategory').title('FAQ Categories'))
        ])
    )
}

export default faqStructure
