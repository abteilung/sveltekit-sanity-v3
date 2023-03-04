// Imports

// Documents
import pageStructure from './documents/pages'
import frontPageStructure from './documents/frontPage'
import postsStructure from './documents/posts'
import productsStructure from './documents/products'
import settingsStructure from './documents/settings'

export const structure = (S) => {
  return S.list()
    .title('Content')
    .items([
      frontPageStructure(S),
      S.divider(),
      pageStructure(S),
      S.divider(),
      postsStructure(S),
      S.divider(),
      productsStructure(S),
      S.divider(),
      settingsStructure(S)
    ])
}

export default structure
