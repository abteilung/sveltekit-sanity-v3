import groq from 'groq'

const postFields = groq`
  _id,
  _type,
  "category": categories[0]->,
  name,
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
    ${postFields}
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
  ${postFields}
}`

// Posts Stuff
export const postQuery = groq`
{
  "draft": *[_type == "post" && slug.current == $slug && defined(draft) && draft == true][0]{
    content,
    ${postFields}
  },
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`

export const allPostsQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`

// Configure Page Blocks with modules and columns
const pageBlocks = groq`{
  title,
  "slug": slug.current,
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

// Navigation Stuff
export const getMenuSettingsDoc = groq`*[_type == 'navigationSettings'][0]`

const menuFirstLevel = groq`
  _key,
  _id,
  isMegaMenu,
  "slug": slug.current,
  linkType == "external" => {
    "label": title,
    "url": linkExternal,
    "external": true,
  },
  linkType == "internal" => {
    "label": target->title,
    "url": "/" + target->slug.current + "/",
    "external": false,
    defined(title) => {
      "label": title
    },
  },
`

const menuSecondLevel = groq`
  links[] {
    "url": target -> { "slug": slug.current, "label": title },
    "label": target -> title,
    "labelOverride": title,
    linkType == "external" => {
      "label": title,
      "url": linkExternal,
      "external": true,
    },
    linkType == "internal" => {
      "label": target->title,
      "url": "/" + target->slug.current + "/",
      "external": false,
      defined(title) => {
        "label": title
      },
    },
  }
`

const menuLinkSection = groq`
  ${menuFirstLevel}
  ${menuSecondLevel}
`

export const getMenus = groq`
  ${getMenuSettingsDoc}
  {
    "navMenuHeader":  navMenuHeader->sections[],
    "navMenuFooter":  navMenuFooter->sections[],
    "navMenuMeta":    navMenuMeta->sections[],
  },
  {
  navMenuHeader[] {
    ${menuLinkSection}
  },
  navMenuFooter[] {
    ${menuLinkSection}
  },
  navMenuMeta[] {
    ${menuLinkSection}
  },
}`
