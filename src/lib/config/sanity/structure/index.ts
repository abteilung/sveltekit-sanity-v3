// Imports

// Documents
import pageStructure from './documents/pages'
import casestudyStructure from './documents/caseStudies'
import landingPageStructure from './documents/landingPages'
import landingPageFeatureStructure from './documents/landingPageFeatures'
import landingPageServiceStructure from './documents/landingPageServices'
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
      landingPageFeatureStructure(S),
      landingPageServiceStructure(S),
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
      navigationStructure(S),
      redirectsStructure(S)
    ])
}

export default structure
