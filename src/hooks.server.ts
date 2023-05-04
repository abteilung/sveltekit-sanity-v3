// Can we do this???
// https://www.captaincodeman.com/speed-up-sveltekit-pages-with-a-redis-cache

import {getPreviewCookie} from './lib/utils'
import {sequence} from '@sveltejs/kit/hooks'
import type {Handle, HandleFetch} from '@sveltejs/kit'

//Import for Redirects
import {getRedirectByPathname} from '$lib/config/sanity/queries'

// Import for Authentication
import {getSanityServerClient} from '$lib/config/sanity/client'
import {getUserByEmail} from '$lib/config/sanity/queries'
import JWT_ACCESS_SECRET from '$env/static/private'
import jwt from 'jsonwebtoken'

// Imports for Shopify and Date handling
import {shopify} from '$lib/shopify'
import {tomorrow} from '$lib/datetime'

export type Theme = 'light' | 'dark' | 'auto'

export const isValidTheme = (theme: FormDataEntryValue | null): theme is Theme =>
  !!theme && (theme === 'light' || theme === 'dark' || theme === 'auto')

export const handleFetch: HandleFetch = async ({request, fetch}) => {
  // https redirect
  if (request.url.startsWith('http')) {
    const url = request.url.replace('http://', 'https://')
    request = new Request(url, request)
  }
  console.log('handleFetch')
  return fetch(request)
}

const responseTime: Handle = async ({event, resolve}) => {
  // Initial server response time
  const route = event.url
  const start = performance.now()
  const response = await resolve(event)
  const end = performance.now()
  const responseTime = end - start

  if (responseTime > 2000) {
    console.log(`🐢 ${route} took ${responseTime.toFixed(2)} ms`)
  }
  if (responseTime < 1000) {
    console.log(`🚀 ${route} took ${responseTime.toFixed(2)} ms`)
  }
  return response
}

const sequenceTimeStart: Handle = async ({event, resolve}) => {
  // Server handling time start
  console.log('init hook sequence time start')
  console.time('renderTime')
  return await resolve(event)
}

const sequenceTimeEnd: Handle = async ({event, resolve}) => {
  // Server handling time end
  console.log('init hook sequence time end')
  console.timeEnd('renderTime')
  return await resolve(event)
}

const previewMode: Handle = async ({event, resolve}) => {
  // Preview mode
  console.log('init hook preview mode')
  const previewModeCookie = getPreviewCookie(event.cookies)
  event.locals.previewMode = false
  if (previewModeCookie === 'true') {
    event.locals.previewMode = true
  }
  return await resolve(event)
}

const lang: Handle = async ({event, resolve}) => {
  // Language switch
  console.log('init hook lang')
  const response = await resolve(event, {
    // pass through any other props
    transformPageChunk: ({html}) =>
      event.url.pathname.startsWith('/en') ? html.replace('%lang%', 'en') : html.replace('%lang%', 'de')
  })
  return response
}

const auth: Handle = async ({event, resolve}) => {
  // Authentication
  console.log('init hook auth')
  const {headers} = event.request
  const session = event.cookies.get('AuthorizationToken')
  if (session) {
    // console.log('session', session)
    const token = session.split(' ')[1] // Remove Bearer prefix
    const jwtUser = jwt.verify(token, JWT_ACCESS_SECRET)
    if (jwtUser) {
      const user = await getSanityServerClient(false).fetch(getUserByEmail, {email: jwtUser.email})

      if (user) {
        event.locals.user = {
          id: user._id,
          email: user.email,
          role: 'Admin'
        }
      }
    }
  }
  return await resolve(event)
}

const redirects: Handle = async ({event, resolve}) => {
  // Redirects
  console.log('init hook redirects')
  // console.log(' - ', event.url.pathname)
  if (
    event.url.pathname.length > 1 &&
    !event.url.pathname.startsWith('/studio') &&
    !event.url.pathname.startsWith('/api')
  ) {
    const redirect = await getSanityServerClient(false).fetch(getRedirectByPathname, {
      path: event.url.pathname
    })

    console.log('redirect', redirect)
    if (redirect) {
      return new Response('Redirect', {status: redirect.type, headers: {Location: redirect.toPath}})
    }
  }
  return await resolve(event)
}

const theme: Handle = async ({event, resolve}) => {
  // Theme Settings
  console.log('init hook theme')
  const theme = event.cookies.get('theme') ?? 'auto'
  if (isValidTheme(theme)) {
    event.locals.theme = theme
  }
  return await resolve(event)
}

const shopifyCart: Handle = async ({event, resolve}) => {
  // Shopify Cart Stuff
  console.log('init hook shopify cart')
  let cart_id = event.cookies.get('CART_ID')
  if (cart_id === undefined) {
    cart_id = await shopify.cart.create()
    event.cookies.set('CART_ID', cart_id, {path: '/', sameSite: 'strict', expires: tomorrow()})
  }
  event.locals.cart_id = cart_id

  return await resolve(event)
}

export const handle = sequence(
  responseTime,
  sequenceTimeStart,
  redirects,
  previewMode,
  auth,
  lang,
  theme,
  shopifyCart,
  sequenceTimeEnd
)
