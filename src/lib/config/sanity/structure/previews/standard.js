import SeoPreview from './seo/seo-preview'

export const standardViews = [
  S.view.form().icon(EditIcon),
  S.view
    .component(SeoPreview)
    .icon(EyeIcon)
    .title('SEO Preview')
]