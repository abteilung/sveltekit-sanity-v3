import {getPreviewCookie} from './lib/utils'
import type {Handle} from '@sveltejs/kit'

export type Theme = 'light' | 'dark' | 'auto'

export const isValidTheme = (theme: FormDataEntryValue | null): theme is Theme =>
	!!theme && (theme === 'light' || theme === 'dark' || theme === 'auto')


export const handle: Handle = async ({event, resolve}) => {

	const theme = event.cookies.get('theme') ?? 'auto'
	if (isValidTheme(theme)) {
		event.locals.theme = theme
	}

  const previewModeCookie = getPreviewCookie(event.cookies)

  event.locals.previewMode = false

  if (previewModeCookie === 'true') {
    event.locals.previewMode = true
  }

  console.time('handle')

  const language = event.url.pathname.startsWith('/en') ? 'en' : 'de'
  
  const response = await resolve(event, {
    transformPageChunk: ({html}) =>
      html.replace('%lang%', language).replace('%THEME%', theme)
  })
  console.timeEnd('handle')

  return response
}