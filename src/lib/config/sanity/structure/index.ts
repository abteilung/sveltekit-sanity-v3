// Imports

// Documents
import pageStructure from './documents/pages'
import casestudyStructure from './documents/caseStudies'
import landingPageStructure from './documents/landingPages'
import navigationStructure from './documents/navigation'
import frontPageStructure from './documents/frontPage'
import postsStructure from './documents/posts'
import productsStructure from './documents/products'
import faqStructure from './documents/faq'
import settingsStructure from './documents/settings'
import redirectsStructure from './documents/redirects'
import personsStructure from './documents/persons'
import brandsStructure from './documents/brands'
import clientsStructure from './documents/clients'
import closedUserGroup from './documents/closedUserGroup'

export const structure = (S) => {
  return S.list()
    .title('Content')
    .items([
      frontPageStructure(S),
      S.divider(),
      pageStructure(S),
      postsStructure(S),
      productsStructure(S),
      S.divider(),
      landingPageStructure(S),
      S.divider(),
      personsStructure(S),
      faqStructure(S),
      S.divider(),
      brandsStructure(S),
      clientsStructure(S),
      casestudyStructure(S),
      S.divider(),
      settingsStructure(S),
      S.divider(),
      closedUserGroup(S),
      navigationStructure(S),
      redirectsStructure(S)
    ])
}

export default structure
