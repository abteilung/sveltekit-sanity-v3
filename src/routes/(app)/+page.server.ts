import {fail, type Actions} from '@sveltejs/kit'
import {isValidTheme} from '../../hooks.server'

import {getSanityServerClient, overlayDrafts} from '$lib/config/sanity/client'
import {getHomepage} from '$lib/config/sanity/queries'
import {error} from '@sveltejs/kit'

export const prerender = true

export const load = async ({parent, params}) => {
  const page = async () => {
    return await getSanityServerClient(false).fetch(getHomepage)
  }

  if (page) {
    return {
      page: page()
    }
  }
  throw error(404)
}
