
export const load = async ({locals: {previewMode}, locals, url}) => {
  const isPreview = previewMode && url.searchParams.get('isPreview') === 'true'

  const {theme, locale} = locals

  return {
    theme,
    locale,
    previewModeEmbed: isPreview,
    previewMode
  }
}
