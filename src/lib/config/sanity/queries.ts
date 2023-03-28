import groq from 'groq'

// Construct our "home" and "error" page GROQ
export const homeID = `*[_type=="settings"][0].home->_id`
export const shopID = `*[_type=="settings"][0].shop->_id`
export const errorID = `*[_type=="settings"][0].error->_id`

// Check if Dates are within a range (Publication Settings)
const dateRangeChecker = `(publishedAt < now() || publishedAt == null) && (unpublishedAt == null || unpublishedAt > now())`

// Define URLs for all our link types
const linkTypes = groq`
  "href": slug.current,
  _type == "post" => {
    "href": "/story/" + slug.current,
  },
  _type == "service" => {
    "href": "/services/" + slug.current,
  },
  _type == "product" => {
    "href": "/products/" + slug.current,
  },
  _type == "page" => {
    "href": "/" + slug.current,
  },
  _type == "meta" => {
    "href": "/meta/" + slug.current,
  }
`

// Construct our "page" GROQ
const page = `
  "type": _type,
  "slug": slug.current,
  "isHome": _id == ${homeID},
  "isShop": _id == ${shopID},
  ${linkTypes},
`

// Construct our "link" GROQ
const link = `
  _key,
  _type,
  title,
  "pageTitle": page -> title,
  "subtitle": page -> subtitle,
  subtitle,
  "image": page->mainImage,
  "icon": page->productIcon,
  url,
  target,
  "page": page->{
    ${page}
  }
`

// Construct our "image meta" GROQ
// Is it really image->altText?
const imageMeta = `
  "alt": coalesce(image.alt, image->altText),
  "asset": image.asset,
  "crop": image.crop,
  "customRatio": image.customRatio,
  "hotspot": image.hotspot,
  "id": image.asset->assetId,
  "type": image.asset->mimeType,
  "aspectRatio": image.asset->metadata.dimensions.aspectRatio,
  "lqip": image.asset->metadata.lqip,
  "bgColor": image.asset->metadata.palette.dominant.background
`

const mainImageMeta = `
  "alt": coalesce(mainImage.alt, mainImage->altText),
  "asset": mainImage.asset,
  "crop": mainImage.crop,
  "customRatio": mainImage.customRatio,
  "hotspot": mainImage.hotspot,
  "id": mainImage.asset->assetId,
  "type": mainImage.asset->mimeType,
  "aspectRatio": mainImage.asset->metadata.dimensions.aspectRatio,
  "lqip": mainImage.asset->metadata.lqip,
  "bgColor": mainImage.asset->metadata.palette.dominant.background
`

const modules = groq`
  ...,
  _type == "image" => {
    ${imageMeta}
  },
  _type == "customImage" => {
    ${imageMeta}
  },
  _type == "gallery" => {
    display, imagesPerRow, zoom,
    ...,
    "images": images[] {
      "alt": image.alt,
      "image": image.asset->,
    }
  },
  _type == "accordions" => {
    "content": items[] {...}
  },
  _type == "richEditor" => {
    content
  },
  _type == "slider" => {
    "slides": @->slides[] {
      ...
    }
  },
  _type == "postsGrid" => {
    "posts": *[
      type == 'post'
      // No Drafts!
     && !(_id in path("drafts.**"))
    ]
    | order(publishDate desc)
  },
`

const columns = groq`
  _type == 'columns' => {
    "content": {
      "column_1": column_1[] {
        ${modules}
      },
      "column_2": column_2[] {
        ${modules}
        _type == 'slice' => {
          "content": @->content[] {
            ${modules}
          }
        }
      },
      "column_3": column_3[] {
        ${modules}
        _type == 'slice' => {
          "content": @->content[] {
            ${modules}
          }
        }
      },
    }
  },
`

const documentFields = groq`
  _id,
  _type,
  "category": categories[0]->,
  title,
  subtitle,
  "date": coalesce(
    publishedAt,
    string(_createdAt)
  ),
  body[] {
    ${modules}
  },
  ${mainImageMeta},
  "slug": slug.current,
  ${linkTypes},
  "author": author->{name, "image": image.image},
`

// Posts Stuff
export const getPostBySlug = groq`
{
  "draft": *[_type == "post" && slug.current == $slug && defined(draft) && draft == true && ${dateRangeChecker}][0]{
    content,
    ${documentFields}
  },
  "post": *[_type == "post" && slug.current == $slug && ${dateRangeChecker}] | order(_updatedAt desc) [0] {
    content,
    ${documentFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug && ${dateRangeChecker}] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${documentFields}
  }
}`

export const getAllPosts = groq`
*[_type == "post" && defined(slug.current) && ${dateRangeChecker}] | order(date desc, _updatedAt desc) {
  ${documentFields}
}`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug && ${dateRangeChecker}][0] {
  ${documentFields}
}
`

// Configure Page Blocks with modules and columns

export const getPageBySlug = groq`
*[(_type == 'page' && slug.current == $slug && _id != 'frontPage') && ${dateRangeChecker}] | order(_updatedAt desc)[0] {
  ${documentFields}
}`

export const getSiteConfig = groq`
  *[_type == 'settings'][0] {
    title,
    description,
    siteUrl,
    favicon,
    "social": *[_type == 'settingsContact'][0] {
      twitter,
      facebook,
      instagram,
      youtube,
      linkedin,
      github,
    },
    "contact": *[_type == 'settingsContact'][0] {
      companyName,
      email,
      phone,
      locations[],
    },
    "analytics": *[_type == 'settingsAnalytics'][0] {
        googleAnalytics,
        googleTagManager,
        plausibleAnalytics,
    },
    "seo": {
      themeColor,
      backgroundColor,
      display
    },
  }
`

// Navigations
const multiLevelNavigation = groq`
  items[]{
    // First Level
    ${link},
      // Second Level
    dropdownItems[]{
      ${link},
        // Third Level
      dropdownItems[]{
        ${link},
          // Fourth Level
          dropdownItems[]{
            ${link},
        },        
      },
    },
  }
`

export const getDsgvoSettings = groq`
*[_type == 'settings'][0] {
  "menu": {
    "imprint": imprint -> {
      title,
      ${linkTypes}
    },
    "privacy": privacy -> {
      title,
      ${linkTypes}
    },
    "terms": terms -> {
      title,
      ${linkTypes}
    },
  },
  cookieBanner,
  cookieBannerText,
  cookieBannerLink -> {
    ${linkTypes}
  },
  cookieBannerLinkText,
  cookieBannerButtonText,
  cookieBannerMoreLink -> {
    ${linkTypes}
  },
  cookieBannerMoreLinkText,
  cookieExpires,
  siteUrl,
}
`

export const getMenus = groq`
*[_type == 'navigationSettings'][0] {
  navMenuHeader->{
    ${multiLevelNavigation}
  },
  navMenuMobile->{
    ${multiLevelNavigation}
  },  
  navMenuFooter->{
    ${multiLevelNavigation}
  },
  navMenuMeta->{
    ${multiLevelNavigation}
  },
}
`

export const site = groq`
  "site": {
    "title": settings.title,
    "productsCounts": *[_type == "product"].length,
    "menuDesktop"
  }
`


export const getRedirectBySlug = groq`
*[_type == 'redirect' && fromPath.current == $slug && ${dateRangeChecker}][0] {
  "fromPath": fromPath.current,
  toPath,
  "start": publishedAt,
  "end": unpublishedAt,
  statusCode,
}
`
