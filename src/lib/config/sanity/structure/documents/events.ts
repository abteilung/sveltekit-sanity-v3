import {CalendarX, Calendar, Repeat} from '@phosphor-icons/react'

export function eventsStructure(S) {
  return S.listItem()
    .icon(Calendar)
    .title('Events')
    .child(
      S.list()
        .title('Frequently Asked Questions')
        .items([
          S.listItem().title('Future Events').icon(Calendar).child(S.documentTypeList('event').title('Events')),
          S.divider(),
          S.listItem()
            .title('Recurring Events')
            .icon(Repeat)
            .child(
              S.documentTypeList('event')
                .title('Recurring Events')
                .filter('_type == "event" && pub.unpublishedAt < now()')
            ),
          S.divider(),
          S.listItem()
            .title('Past Events')
            .icon(CalendarX)
            .child(
              S.documentTypeList('event').title('Past Events').filter('_type == "event" && pub.unpublishedAt < now()')
            )
        ])
    )
}

export default eventsStructure
