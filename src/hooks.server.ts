import {getPreviewCookie} from './routes/lib/utils'
import type {Handle} from '@sveltejs/kit'

export const handle: Handle = async ({event, resolve}) => {
  const previewModeCookie = getPreviewCookie(event.cookies)

  event.locals.previewMode = false

  if (previewModeCookie === 'true') {
    event.locals.previewMode = true
  }

  console.time('handle')
  const response = await resolve(event, {
    transformPageChunk: ({html}) =>
      event.url.pathname.startsWith('/en') ? html.replace('%lang%', 'en') : html.replace('%lang%', 'de')
  })
  console.timeEnd('handle')

  return response
}
