import {getSanityServerClient, overlayDrafts} from '$lib/config/sanity/client'
import {getPostBySlug} from '$lib/config/sanity/queries'
import {error} from '@sveltejs/kit'

export const load = async ({parent, params}) => {
  const {previewMode} = await parent()

  const {post, morePosts} = await getSanityServerClient(previewMode).fetch<{
    post: Post
    morePosts: Post[]
  }>(getPostBySlug, {
    slug: params.slug
  })

  if (!post) {
    throw error(404, 'Post not found')
  }

  return {
    previewMode,
    slug: post?.slug || params.slug,
    initialData: {
      post,
      morePosts: overlayDrafts(morePosts)
    }
  }
}
