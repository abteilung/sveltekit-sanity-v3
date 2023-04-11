import {getSanityServerClient} from '$lib/config/sanity/client'
import {json} from '@sveltejs/kit'

// import type { PageLoad } from '../$types';
// import type { Actions } from '../$types';

// export const actions = {
//   default:(async ({ params }) => {
//     const res = await getSanityServerClient(false).patch(`${params.likeId}`).inc({ likes: 1 }).commit();
//     const item = await res.json();

//     return { item };
//   })
// }

export async function POST(requestEvent) {
  const {params} = requestEvent
  const {slug} = params

  const res = await getSanityServerClient(true).patch(`${slug}`).inc({likes: 1}).commit()
  const item = await res.json()

  return json(item, {status: 200})
}
