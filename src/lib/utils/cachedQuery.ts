import {redis} from '$lib/server/redis'
import {isDev} from '$lib/config/environment'

// Write a function for cached Queries.
// This function will take in a key and a query and return the response.

export const cachedQuery = async (bypass: boolean, key: string, query: string, locals: string) => {
  if (bypass ? true : false || isDev || locals?.previewMode ? true : false) {
    console.log('🟧 Cache.Bypass, preview-mode: ', locals?.previewMode ? true : false)
    const response = await query
    return response
  }
  let cached = await redis.get(key)
  if (!cached) {
    console.log('🟥 Cache.Miss')
    const response = await query
    redis.set(key, JSON.stringify(response), {
      EX: 60 * 5,
      NX: true
    })
    return response
  } else {
    console.log('🟩 Cache.Hit')
    return JSON.parse(cached)
  }
}
