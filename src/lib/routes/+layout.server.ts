import type {LayoutServerLoad} from './$types'

export const load: LayoutServerLoad = async ({locals: {previewMode}, locals, url}) => {
  const isPreview = previewMode && url.searchParams.get('isPreview') === 'true'

  const {theme, locale} = locals

  return {
    user: locals.user,
    theme,
    locale,
    previewModeEmbed: isPreview,
    previewMode
  }
}
