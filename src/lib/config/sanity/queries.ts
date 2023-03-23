import groq from 'groq'

// Construct our "home" and "error" page GROQ
export const homeID = `*[_type=="settings"][0].home->_id`
export const shopID = `*[_type=="settings"][0].shop->_id`
export const errorID = `*[_type=="settings"][0].error->_id`

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
export const imageMeta = `
  "alt": coalesce(alt, asset->altText),
  asset,
  crop,
  customRatio,
  hotspot,
  "id": asset->assetId,
  "type": asset->mimeType,
  "aspectRatio": asset->metadata.dimensions.aspectRatio,
  "lqip": asset->metadata.lqip
`

const modules = groq`
  ...,
  _type == "image" => {
    "alt": image.alt, 
    "asset": image,
    "customRatio": image.customRatio,
  },
  _type == "customImage" => {
    "alt": image.alt, 
    "asset": image.asset ->,
    "customRatio": image.customRatio,
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
  mainImage,
  "img": mainImage.image.asset ->,
  "slug": slug.current,
  ${linkTypes},
  "author": author->{name, "image": image.image},
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

export const postVisionQuery = groq`*[_type == "post"] | order(date desc, _updatedAt desc) {
  ...
}`

// Posts Stuff
export const getPostBySlug = groq`
{
  "draft": *[_type == "post" && slug.current == $slug && defined(draft) && draft == true][0]{
    content,
    ${documentFields}
  },
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${documentFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${documentFields}
  }
}`

export const getAllPosts = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${documentFields}
}`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${documentFields}
}
`

// Configure Page Blocks with modules and columns

export const getPageBySlug = groq`
*[_type == 'page' && slug.current == $slug && _id != 'frontPage'][0] {
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
*[_type == 'redirect' && fromPath.current == $slug][0] {
  "fromPath": fromPath.current,
  toPath,
  "start": publishedAt,
  "end": unpublishedAt,
  statusCode
}
`