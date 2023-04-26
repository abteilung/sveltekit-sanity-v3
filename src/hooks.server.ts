import {getPreviewCookie} from './lib/utils'
import type {Handle} from '@sveltejs/kit'

// Two Imports for Shopify and Date handling
import {shopify} from '$lib/shopify'
import {tomorrow} from '$lib/datetime'

export type Theme = 'light' | 'dark' | 'auto'

// Theme Configuration
export const isValidTheme = (theme: FormDataEntryValue | null): theme is Theme =>
  !!theme && (theme === 'light' || theme === 'dark' || theme === 'auto')

export const handle: Handle = async ({event, resolve}) => {
  // Theme Settings
  const theme = event.cookies.get('theme') ?? 'auto'
  if (isValidTheme(theme)) {
    event.locals.theme = theme
  }

  // Shopify Cart Stuff
  let cart_id = event.cookies.get('CART_ID')
  if (cart_id === undefined) {
    cart_id = await shopify.cart.create()
    event.cookies.set('CART_ID', cart_id, {path: '/', sameSite: 'strict', expires: tomorrow()})
  }
  event.locals.cart_id = cart_id

  // Preview Mode Stuf
  const previewModeCookie = getPreviewCookie(event.cookies)
  event.locals.previewMode = false
  if (previewModeCookie === 'true') {
    event.locals.previewMode = true
  }

  // Timer for Rendering Speed Measure
  console.time('handle')
  const language = event.url.pathname.startsWith('/en') ? 'en' : 'de'

  const response = await resolve(event, {
    transformPageChunk: ({html}) => html.replace('%lang%', language).replace('%THEME%', theme)
  })

  // End Timer for Speed Measurement
  console.timeEnd('handle')

  return response
}
