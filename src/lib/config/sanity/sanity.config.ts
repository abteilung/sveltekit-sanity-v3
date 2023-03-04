import {defineConfig, type Slug} from 'sanity'
import {PostsPreview} from './components/PostsPreview'
import app from '../app'

/*-------------- PLUGINS --------------*/
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {unsplashImageAsset} from 'sanity-plugin-asset-source-unsplash'
/*------------------------------------*/

/*-------------- SCHEMAS --------------*/
import blockContent from '$lib/config/sanity/schemas/helpers/blockContent'

import settingsType from '$lib/config/sanity/schemas/documents/settings'

import postType from '$lib/config/sanity/schemas/documents/post'
import pageType from '$lib/config/sanity/schemas/documents/page'
import categoryType from '$lib/config/sanity/schemas/documents/category'
import accordionsType from '$lib/config/sanity/schemas/accordions'
import accordionType from '$lib/config/sanity/schemas/accordion'
import faqType from '$lib/config/sanity/schemas/documents/faq'
import galleryType from '$lib/config/sanity/schemas/gallery'
import authorType from '$lib/config/sanity/schemas/documents/author'
import caseStudyType from '$lib/config/sanity/schemas/documents/caseStudy'
import productType from '$lib/config/sanity/schemas/documents/product'
import serviceType from '$lib/config/sanity/schemas/documents/service'
import navigationType from '$lib/config/sanity/schemas/documents/navigation'
import categoryReferenceType from '$lib/config/sanity/schemas/documents/categoryReference'
/*------------------------------------*/

import {structure} from '$lib/config/sanity/structure/'

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
      accordionsType,
      accordionType,
      categoryType,
      faqType,
      galleryType,
      blockContent,
      caseStudyType,
      productType,
      categoryReferenceType,
      serviceType,
      navigationType,
      settingsType
      // Components
    ]
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
    })
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
