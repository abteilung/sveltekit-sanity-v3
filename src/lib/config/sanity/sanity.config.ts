import {defineConfig, type Slug} from 'sanity'
import {availability} from 'sanity-plugin-availability'
import {googleMapsInput} from '@sanity/google-maps-input'

import {PostsPreview} from './Components/PostsPreview'
import {noteField} from 'sanity-plugin-note-field'
import app from '../app'

/*-------------- PLUGINS --------------*/
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {media} from 'sanity-plugin-media'
import {unsplashImageAsset} from 'sanity-plugin-asset-source-unsplash'
/*------------------------------------*/

/*-------------- SCHEMAS --------------*/
import blockContent from './schemas/helpers/blockContent'

import settingsType from './schemas/documents/settings'
import redirectType from './schemas/documents/redirect'
import settingsContactType from './schemas/documents/settingsContact'
import settingsAnalyticsType from './schemas/documents/settingsAnalytics'

import postType from './schemas/documents/post'
import pageType from './schemas/documents/page'
import landingPageType from './schemas/documents/landingPage'
import landingPageFeatureType from './schemas/documents/landingPageFeature'
import metaType from './schemas/documents/meta'
import testimonialType from './schemas/documents/testimonial'
import categoryType from './schemas/documents/category'
import faqType from './schemas/documents/faq'
import faqCategory from './schemas/documents/faqCategory'
import accordionsType from './schemas/objects/accordions'
import accordionType from './schemas/objects/accordion'
import galleryType from './schemas/objects/gallery'
import authorType from './schemas/documents/author'
import memberType from './schemas/documents/member'
import caseStudyType from './schemas/documents/caseStudy'
import productType from './schemas/documents/product'
import abteProductType from './schemas/documents/abteProduct'
import serviceType from './schemas/documents/service'
import categoryReferenceType from './schemas/documents/categoryReference'
import clientType from './schemas/documents/client'
import brandType from './schemas/documents/brand'
import brandCategory from './schemas/documents/categoryBrand'

// Objects
import video from './schemas/objects/video'
import customImage from './schemas/objects/customImage'
import testimonialReference from './schemas/objects/testimonialReference'
import code from './schemas/objects/code'
import faqReference from './schemas/objects/faqReference'

import shopifyProduct from './schemas/objects/shopify/shopifyProduct'
import shpifyProductVariant from './schemas/objects/shopify/shopifyProductVariant'
import shopifyProductOption from './schemas/objects/shopify/shopifyProductOption'

// PageBuilder
import pageBuilder from './schemas/objects/pageBuilder'
import richEditor from './schemas/objects/pageBuilder/richEditor'
import teaserGrid from './schemas/objects/pageBuilder/teaserGrid'
import emptySpace from './schemas/objects/pageBuilder/emptySpace'
import columns from './schemas/objects/pageBuilder/columns'

// Navigatons
import menu from './schemas/documents/menu'
import navigations from './schemas/documents/navigations'
import navDropdown from './schemas/objects/nav-dropdown'
import navPage from './schemas/objects/nav-page'
import navLink from './schemas/objects/nav-link'
import navSection from './schemas/objects/nav-section'

// Fragments
import visibility from './schemas/fragments/visibility'

/*------------------------------------*/

import {structure} from './structure'

export default defineConfig({
  basePath: '/studio',
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  title: app.appName + ' - Studio',
  schema: {
    // If you want more content types, you can add them to this array

    types: [
      // Documents
      pageType,
      landingPageType,
      landingPageFeatureType,
      metaType,
      postType,
      authorType,
      memberType,
      testimonialType,
      accordionsType,
      accordionType,
      categoryType,
      faqType,
      faqCategory,
      galleryType,
      blockContent,
      caseStudyType,
      abteProductType,
      productType,
      categoryReferenceType,
      serviceType,
      redirectType,
      clientType,
      brandType,
      brandCategory,

      // Settings
      settingsType,
      settingsContactType,
      settingsAnalyticsType,

      // Objects
      video,
      customImage,
      testimonialReference,
      code,
      faqReference,

      shopifyProduct,
      shpifyProductVariant,
      shopifyProductOption,

      // PageBuilder
      pageBuilder,
      richEditor,
      teaserGrid,
      emptySpace,
      columns,

      // Components
      //   shcemas/objects
      menu,
      navigations,
      navDropdown,
      navPage,
      navLink,
      navSection,

      // Fragments
      visibility
    ]
    // If you want to add more schemas, you can add them here
  },
  plugins: [
    deskTool({
      structure: structure,
      // `defaultDocumentNode is responsible for adding a “Preview” tab to the document pane
      // You can add any React component to `S.view.component` and it will be rendered in the pane
      // and have access to content in the form in real-time.
      // It's part of the Studio's “Structure Builder API” and is documented here:
      // https://www.sanity.io/docs/structure-builder-reference
      defaultDocumentNode: (S, {schemaType}) => {
        if (schemaType === 'post') {
          return S.document().views([S.view.form(), S.view.component(PostsPreview).title('Preview')])
        }

        return null
      }
    }),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({
      defaultApiVersion: '2022-08-08'
    }),
    media(),
    noteField(),
    googleMapsInput({
      apiKey: import.meta.env.GOOGLE_MAPS_API_KEY
    }),
    availability()
  ],
  document: {
    productionUrl: async (prev, {document}) => {
      const url = new URL('/api/preview', location.origin)
      const secret = import.meta.env.VITE_SANITY_PREVIEW_SECRET
      if (secret) {
        url.searchParams.set('secret', secret)
      }

      try {
        switch (document._type) {
          case postType.name:
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            url.searchParams.set('slug', (document.slug as Slug).current!)
            break
          default:
            return prev
        }
        return url.toString()
      } catch {
        return prev
      }
    }
  }
})
