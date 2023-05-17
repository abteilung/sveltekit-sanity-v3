import {getSanityServerClient} from '$lib/config/sanity/client'
import {getSearchResults} from '$lib/config/sanity/queries'
import {error} from '@sveltejs/kit'
import {json} from '@sveltejs/kit'

import {cachedQuery} from '$lib/utils/cachedQuery'

export async function GET() {
  const headers = {'Content-Type': 'application/json'}

  const query = getSanityServerClient(false).fetch(getSearchResults)
  const searchResults = await cachedQuery(true, 'rendered:v1:SearchResults', query, true, null)

  return new Response(JSON.stringify(searchResults), {headers})
}
