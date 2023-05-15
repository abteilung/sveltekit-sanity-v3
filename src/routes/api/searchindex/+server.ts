import {getSanityServerClient} from '$lib/config/sanity/client'
import {getSearchResults} from '$lib/config/sanity/queries'
import {error} from '@sveltejs/kit'

import {cachedQuery} from '$lib/utils/cachedQuery'

// export const prerender = 'auto'

export const load = async ({parent, params, locals}) => {
  const query = getSanityServerClient(false).fetch(getSearchResults)
  const page = cachedQuery(false, 'rendered:v1:SearchResults', query, locals)

  if (page) {
    return {
      page: page
    }
  }
  throw error(404)
}
