import type {LayoutServerLoad} from './$types'

// Types
/** @type {import('@sveltejs/kit').RequestHandler} */

export const load: LayoutServerLoad = async ({locals: {previewMode}, url}) => {
  const isPreview = previewMode && url.searchParams.get('isPreview') === 'true'

  return {
    previewModeEmbed: isPreview,
    previewMode
  }
}
