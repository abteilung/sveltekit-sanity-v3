// import {Redis} from 'ioredis'
// import {REDIS_URI} from '$env/static/private'

// export const redis = new Redis(REDIS_URI)
// import { env } from '$env/dynamic/private';
// import { createClient } from 'redis'

// export const redis = createClient({ url: env.REDIS_URL })
// await redis.connect()

import {env} from '$env/dynamic/private'
import {createClient} from 'redis'

export const redis = createClient({url: env.REDIS_URI})
await redis.connect()
