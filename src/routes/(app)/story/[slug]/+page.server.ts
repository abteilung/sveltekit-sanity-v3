import {getSanityServerClient, overlayDrafts} from '$lib/config/sanity/client'
import {getPostBySlug} from '$lib/config/sanity/queries'
import {error} from '@sveltejs/kit'

export const load = async ({parent, params}) => {
  const {previewMode} = await parent()

  const post = async () => {
    return await getSanityServerClient(false).fetch(getPostBySlug, {slug: params.slug})
  }

  if (!post) {
    throw error(404, 'Post not found')
  }

  return {
    post: post()
  }
}
