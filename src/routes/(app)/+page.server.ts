import {fail, type Actions} from '@sveltejs/kit'
import {isValidTheme} from '../../hooks.server'

import {getSanityServerClient, overlayDrafts} from '$lib/config/sanity/client'
import {getHomepage} from '$lib/config/sanity/queries'
import {error} from '@sveltejs/kit'

import {cachedQuery} from '$lib/utils/cachedQuery'

// export const prerender = 'auto'

export const load = async ({parent, params, locals}) => {
  const query = getSanityServerClient(false).fetch(getHomepage)
  const page = cachedQuery(true, 'rendered:v1:Homepage', query, locals)

  if (page) {
    return {
      page: page
    }
  }
  throw error(404)
}
