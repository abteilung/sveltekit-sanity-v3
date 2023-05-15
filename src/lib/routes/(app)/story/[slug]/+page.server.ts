import {getSanityServerClient, overlayDrafts} from '$lib/config/sanity/client'
import {getPostBySlug} from '$lib/config/sanity/queries'
import {error} from '@sveltejs/kit'

export const load = async ({parent, params}) => {
  const {previewMode} = await parent()

  const post = await getSanityServerClient(previewMode).fetch(getPostBySlug, {slug: params.slug})

  if (post) {
    return {
      post
    }
  } else {
    throw error(404, 'Story not found')
  }
}
