import {defineConfig, type Slug} from 'sanity'
import {PostsPreview} from './Components/PostsPreview'
import {noteField} from 'sanity-plugin-note-field'
import app from '../app'

/*-------------- PLUGINS --------------*/
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {unsplashImageAsset} from 'sanity-plugin-asset-source-unsplash'
/*------------------------------------*/

/*-------------- SCHEMAS --------------*/
import blockContent from './schemas/helpers/blockContent'

import settingsType from './schemas/documents/settings'
import settingsContactType from './schemas/documents/settingsContact'
import settingsAnalyticsType from './schemas/documents/settingsAnalytics'
import settingsStoreType from './schemas/documents/settingsStore'

import postType from './schemas/documents/post'
import pageType from './schemas/documents/page'
import testimonialType from './schemas/documents/testimonial'
import categoryType from './schemas/documents/category'
import faqType from './schemas/documents/faq'
import faqCategory from './schemas/documents/faqCategory'
import accordionsType from './schemas/objects/accordions'
import accordionType from './schemas/objects/accordion'
import galleryType from './schemas/objects/gallery'
import authorType from './schemas/documents/author'
import caseStudyType from './schemas/documents/caseStudy'
import serviceType from './schemas/documents/service'
import categoryReferenceType from './schemas/documents/categoryReference'

// Objects
import video from './schemas/objects/video'
import customImage from './schemas/objects/customImage'
import testimonialReference from './schemas/objects/testimonialReference'
import code from './schemas/objects/code'
import faqReference from './schemas/objects/faqReference'

// Shopify
import productType from './schemas/documents/shop-product'
import collectionType from './schemas/documents/shop-collection'
import variantType from './schemas/documents/shop-variant'

import productOptionType from './schemas/objects/product-option-value'
import shopifyCollection from './schemas/objects/shopifyCollection'
import shopifyCollectionRule from './schemas/objects/shopifyCollectionRule'
import shopifyProduct from './schemas/objects/shopifyProduct'
import shopifyProductVariant from './schemas/objects/shopifyProductVariant'

import filter from './schemas/documents/filter'
import productOption from './schemas/objects/productOption'
import productHotspots from './schemas/objects/productHotspots'
import productWithVariant from './schemas/objects/productWithVariant'

// Navigatons
import menu from './schemas/documents/menu'
import navigations from './schemas/documents/navigations'
import navDropdown from './schemas/objects/nav-dropdown'
import navPage from './schemas/objects/nav-page'
import navLink from './schemas/objects/nav-link'

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
      postType,
      authorType,
      testimonialType,
      accordionsType,
      accordionType,
      categoryType,
      faqType,
      faqCategory,
      galleryType,
      blockContent,
      caseStudyType,
      categoryReferenceType,
      serviceType,
      
      // Settings
      settingsType,
      settingsContactType,
      settingsAnalyticsType,
      settingsStoreType,
      
      // Objects
      video,
      customImage,
      testimonialReference,
      code,
      faqReference,

      // Shopify
      filter,
      shopifyProduct,
      productType,
      collectionType,
      variantType,
      productOptionType,

      // shopifyCollection,
      // shopifyCollectionRule,
      // shopifyProduct,
      shopifyProductVariant,
      
      productOption,
      productHotspots,
      productWithVariant,
      
      // Components
      //   shcemas/objects
      menu,
      navigations,
      navDropdown,
      navPage,
      navLink
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
    noteField()
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
