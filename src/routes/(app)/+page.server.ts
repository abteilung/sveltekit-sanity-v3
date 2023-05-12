import {fail, type Actions} from '@sveltejs/kit'
import {isValidTheme} from '../../hooks.server'

import {redis} from '$lib/server/redis'

import {getSanityServerClient, overlayDrafts} from '$lib/config/sanity/client'
import {getHomepage} from '$lib/config/sanity/queries'
import {error} from '@sveltejs/kit'

// export const prerender = 'auto';
export const load = async ({parent, params}) => {
  const page = async () => {
    const cacheKey = 'homepage'
    const cachedPage = await redis.get(cacheKey)
    if (cachedPage) {
      console.log('Cache.Hit')
      return JSON.parse(cachedPage)
    } else {
      console.log('Cache.Miss')
      const freshPage = await getSanityServerClient(false).fetch(getHomepage)
      await redis.set(cacheKey, JSON.stringify(freshPage))
      return freshPage
    }
  }

  if (page) {
    return {
      page: page()
    }
  }
  throw error(404)
}

// For Light and Dark Mode
const TEN_YEARS_IN_SECONDS = 10 * 365 * 24 * 60 * 60

export const actions: Actions = {
  theme: async ({cookies, request}) => {
    const data = await request.formData()
    const theme = data.get('theme')

    if (!isValidTheme(theme)) {
      return fail(400, {theme, missing: true})
    }

    cookies.set('theme', theme, {path: '/', maxAge: TEN_YEARS_IN_SECONDS})

    return {success: true}
  }
}
