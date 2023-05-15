import {redis} from '$lib/server/redis'
import {isDev} from '$lib/config/environment'

// Write a function for cached Queries.
// This function will take in a key and a query and return the response.

export const cachedQuery = async (key, query, locals) => {
  //   if (isDev || locals.previewMode) {
  //     console.log('🟧 Cache.Bypass, preview-mode: ', locals.previewMode)
  //     const response = await query
  //     return response
  //   }
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
