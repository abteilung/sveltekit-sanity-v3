import groq from 'groq'

// Construct our "home" and "error" page GROQ
export const homeID = `*[_type=="settings"][0].home->_id`
export const shopID = `*[_type=="settings"][0].shop->_id`
export const errorID = `*[_type=="settings"][0].error->_id`

// Check if Dates are within a range (Publication Settings)
const visibilityChecker = `
  (pub.isHidden != true ||
  (pub.publishedAt < now() || pub.publishedAt == null) 
  && (pub.unpublishedAt == null || pub.unpublishedAt > now()))
`

// Define URLs for all our link types
const linkTypes = groq`
  "href": slug.current,
  _type,
  _type == "author" => {
    "href": "/author/" + slug.current,
  },
  _type == "post" => {
    "href": "/story/" + slug.current,
  },
  _type == "casestudy" => {
    "href": "/case/" + slug.current,
  },
  _type == "service" => {
    "href": "/services/" + slug.current,
  },
  _type == "abteProduct" => {
    "href": "/produkte/" + slug.current,
  },
  _type == "page" => {
    "href": "/" + slug.current,
  },
  _type == "meta" => {
    "href": "/meta/" + slug.current,
  },
  _type == "brand" => {
    "href": url,
  },
  _type == "landingPage" => {
    "href": "/landing/" + slug.current,
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
  "image": page->image,
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
"image": {
  "alt": coalesce(image.alt, image->altText),
  "asset": image.asset ->,
  "src": image,
  "customRatio": image.customRatio,
  "type": image.asset->mimeType,
  "lqip": image.asset->metadata.lqip,
  "bgColor": image.asset->metadata.palette.dominant.background
}
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
    content[] {
      ...,
      _type == "link" => {
        ${link}
      },
    }
  },
  _type == "slider" => {
    "slides": @->slides[] {
      ...
    }
  },
  _type == "code" => {
    "code": code,
    "language": language
  },
  _type == "emptySpace" => {
    value, showRule
  },
  _type == "teaserGrid" => {
    // No Drafts!
    "teasers": *[_type == ^.typeSelector && ${visibilityChecker}] {
      ...,
      ${imageMeta},
      ${linkTypes},
    }
    | order(publishDate desc)
  },
  // _type == "teaserGrid" && defined(maxItems) || defined(skipItems) => {
  //   // No Drafts!
  //   "teasers": *[_type == ^.typeSelector][$skipItems..$maxItems] {
  //     ...,
  //     ${imageMeta},
  //     ${linkTypes},
  //   }
  //   | order(publishDate desc)
  // },
`

const columns = groq`
  _type == 'columns' => {
    ...,
    "content": {
      "column_1": column_1.pageBuilder[] {
        ${modules}
      },
      "column_2": column_2.pageBuilder[] {
        ${modules}
        // _type == 'slice' => {
        //   "content": @->content[] {
        //     ${modules}
        //   }
        // }
      },
      "column_3": column_3.pageBuilder[] {
        ${modules}
        // _type == 'slice' => {
        //   "content": @->content[] {
        //     ${modules}
        //   }
        // }
      },
      "column_4": column_4.pageBuilder[] {
        ${modules}
      },
    }
  },
`

const documentFields = groq`
  _id,
  _type,
  _updatedAt,
  likes,
  "category": categories[0]->,
  title,
  subtitle,
  youtube,
  "date": coalesce(
    pub.publishedAt,
    string(_createdAt)
  ),
  body[] {
    ${modules}
    ${columns}
  },
  "content": content.pageBuilder[] {
    ${modules}
    ${columns}
  },  
  ${imageMeta},
  "slug": slug.current,
  ${linkTypes},
  "author": author->{name, "image": image.image},
  "seoData": {
    "title":  title + ' | ' + *[_type == 'settings'][0].title,
    "description": pt::text(content[]),
  },
`

// Posts Stuff
export const getPostBySlug = groq`
*[_type == "post" && slug.current == $slug && ${visibilityChecker}] | order(_updatedAt desc)[0] {
  "draft": *[_type == "post" && slug.current == $slug && defined(draft) && draft == true && ${visibilityChecker}][0]{
    ${documentFields}
  },
  "current": *[_type == "post" && slug.current == $slug && ${visibilityChecker}] | order(_updatedAt desc)[0] {
    ${documentFields}
  },
  "previous": *[_type == "post" && ^.publishedAt > publishedAt && ${visibilityChecker}]|order(publishedAt desc)[0]{ 
      ${documentFields}
    },
  "next": *[_type == "post" && ^.publishedAt < publishedAt && ${visibilityChecker}]|order(publishedAt asc)[0]{ 
    ${documentFields}
  },    
}`

export const getAllPosts = groq`
*[_type == "post" && defined(slug.current) && ${visibilityChecker}] | order(date desc, _updatedAt desc) {
  ${documentFields}
}`

// Configure Page Blocks with modules and columns

// Pages Queries
export const getHomepage = groq`
*[(_type == 'page' && _id == 'frontPage') && ${visibilityChecker}] | order(_updatedAt desc)[0] {
  ${documentFields}
}`

export const getPageBySlug = groq`
*[(_type == 'page' && slug.current == $slug && _id != 'frontPage') && ${visibilityChecker}] | order(_updatedAt desc)[0] {
  ${documentFields}
}`

// Services Queries
export const getAllServices = groq`
*[(_type == 'service') && ${visibilityChecker}] | order(_updatedAt desc) {
  ${documentFields}
}`

export const getServiceBySlug = groq`
*[(_type == 'service' && slug.current == $slug) && ${visibilityChecker}] | order(_updatedAt desc)[0] {
  ${documentFields}
}`

// Products Queries
export const getAllProducts = groq`
*[(_type == 'abteProduct') && ${visibilityChecker}] | order(_updatedAt desc) {
  ${documentFields}
}`

export const getProductBySlug = groq`
*[(_type == 'abteProduct' && slug.current == $slug) && ${visibilityChecker}] | order(_updatedAt desc)[0] {
  ${documentFields}
}`

// Site Config specific Queries
const getSiteConfig = groq`
  *[_type == 'settings'][0] {
    title,
    description,
    siteUrl,
    favicon,
    "socialChannels": *[_type == 'settingsContact'][0].socialChannels[] { ..., ${imageMeta} },
    "contact": *[_type == 'settingsContact'][0] {
      companyName,
      email,
      address,
      phone,
      locations[],
    },
    "analytics": *[_type == 'settingsAnalytics'][0] {
        googleAnalytics,
        googleTagManager,
        plausibleAnalytics,
        sibTrackingV3,
    },
    "seo": {
      themeColor,
      backgroundColor,
      display
    },
  }
`

// Multilevel Navigation Queries
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

const getMenus = groq`
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

// Get DSGVO specific Setetings
const getDsgvoSettings = groq`
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
  "companyName": *[_type == 'settingsContact'][0].companyName,
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

// Get Redirects
export const getRedirectBySlug = groq`
*[_type == 'redirect' && fromPath.current == $slug && ${visibilityChecker}][0] {
  "fromPath": fromPath.current,
  toPath,
  "start": pub.publishedAt,
  "end": pub.unpublishedAt,
  statusCode,
}
`

// Do we need this?
export const site = groq`
  "site": {
    "title": settings.title,
    "productsCounts": *[_type == "abteProduct"].length,
    "menuDesktop"
  }
`

const getSitemap = groq`
{
  "siteUrl": *[_type == 'settings'][0].siteUrl,
  "sitePages": *[defined(slug) && ${visibilityChecker}] | order(_updatedAt desc) {
    "updatedAt": _updatedAt,
    ${linkTypes},
  }
}
`

// Concentrated Output for Layout stuff
export const getLayoutData = groq`
{
  "siteConfig": ${getSiteConfig},
  "menus": ${getMenus},
  "siteMap": ${getSitemap},
  "dsgvoSettings": ${getDsgvoSettings},
}
`
