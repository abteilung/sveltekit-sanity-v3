import type {LayoutServerLoad} from './$types'
import {getSanityServerClient} from '$lib/config/sanity/client'
import {getSiteConfig} from '$lib/config/sanity/queries'

// Types
/** @type {import('@sveltejs/kit').RequestHandler} */

export const load: LayoutServerLoad = async ({locals: {previewMode}, url}) => {
  const isPreview = previewMode && url.searchParams.get('isPreview') === 'true'
  const siteConfig = await getSanityServerClient(false).fetch(getSiteConfig)

  return {
    previewModeEmbed: isPreview,
    previewMode,
    siteConfig
  }
}
