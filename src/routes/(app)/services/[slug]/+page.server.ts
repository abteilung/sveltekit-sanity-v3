import {getSanityServerClient, overlayDrafts} from '$lib/config/sanity/client'
import {getServiceBySlug} from '$lib/config/sanity/queries'
import {error} from '@sveltejs/kit'
import type {set} from 'sanity'
import {redis} from '$lib/server/redis'

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
      await redis.set(cacheKey, JSON.stringify(freshPage))
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
