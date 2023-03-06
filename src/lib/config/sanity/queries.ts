import groq from 'groq'

const linkTypes = groq`
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
`

const documentFields = groq`
  _id,
  _type,
  "category": categories[0]->,
  title,
  subtitle,
  date,
  body[] {
    ...,
    markDefs[] {
      _type == "link" => {
        ...,
        "link": page -> {...}
      }
    }
  },
  mainImage,
  "slug": slug.current,
  ${linkTypes}
  "author": author->{name, image},
`

const modules = groq`
  ...,
  _type == "customImage" => {
    "image": { "alt": alt, image, "asset": image.asset-> },
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
    ${documentFields}
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

export const settingsQuery = groq`*[_type == "settings"][0]{title}`

export const postVisionQuery = groq`*[_type == "post"] | order(date desc, _updatedAt desc) {
  ...
}`

export const indexQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${documentFields}
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
const pageBlocks = groq`{
  title,
  "slug": slug.current,
  "href": "/" + slug.current,
  mainImage,
  imageGallery,
  "category": category[]->{title},
  "author": author->{name, image},
  "date": coalesce(
    publishedAt,
    string(_createdAt)
  ),
  content[] {
    ${modules}
    ${columns}
    _type == 'slice' => {
      "content": @->content[] {
        ${modules}
        ${columns}
      }
    }
  },
}`

export const getPageBySlug = groq`
*[_type == 'page' && slug.current == $slug && _id != 'frontPage']
${pageBlocks}
[0]
`

export const getSiteConfig = groq`
  *[_type == 'settings'][0] {
    ...,
    title,
    description,
    siteUrl,
    "favicon": favicon.asset->,
    "social": {
      "twitter": twitter,
      "facebook": facebook,
      "instagram": instagram,
      "youtube": youtube,
      "linkedin": linkedin,
      "github": github,
    },
    "contact": {
      "email": email,
      "phone": phone,
      "address": address,
    },
    "analytics": {
      "googleAnalytics": googleAnalytics,
      "googleTagManager": googleTagManager,
      "plausibleAnalytics": plausibleAnalytics,
    },
    "seo": {
      "googleSiteVerification": googleSiteVerification,
      "bingSiteVerification": bingSiteVerification,
      themeColor,
      backgroundColor,
      display
    },
  }
`

// Navigations
export const getMenus = groq`
*[_type == 'menu'] {
  "navigation": items[] {
    title,
    _type == 'navDropdown' => {
      title,
      dropdownItems [] {
        _type,
        title,
        "page": page->{
          title, subtitle, "slug": slug.current, "image": mainImage.asset->, "icon": productIcon.asset-> 
        }
      }
    },
    _type == 'navPage' => {
      ...,
      _type,
      title,
      "title": page->{title},
      "subtitle": page->{subtitle},
      "slug": page->{slug},
      "image": page->{mainImage},
      "icon": page->{productIcon},
    },
    _type == 'navLink' => {
      ...,
      _type
    }
  }
}
`
