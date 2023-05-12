import {getSanityServerClient, overlayDrafts} from '$lib/config/sanity/client'
import {getServiceBySlug} from '$lib/config/sanity/queries'
import {redis} from '$lib/server/redis'
import {error} from '@sveltejs/kit'

export const load = async ({parent, params, context}) => {
  const page = async () => {
    const cacheKey = `service-${params.slug}`
    const cachedPage = await redis.get(cacheKey)
    if (cachedPage) {
      console.log('🟩 Cache.Hit')
      return JSON.parse(cachedPage)
    } else {
      console.log('🟥 Cache.Miss')
      const freshPage = await getSanityServerClient(false).fetch(getServiceBySlug, {slug: params.slug})
      await redis.set(cacheKey, JSON.stringify(freshPage), {
        // Expires after 60 seconds. For testing purposes.
        EX: 60
      })
      return freshPage
    }
  }
  if (page) {
    return {
      page: page()
    }
  }
  throw error(404, 'Service not found')
}
