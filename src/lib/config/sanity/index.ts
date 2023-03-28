import createImageUrlBuilder from '@sanity/image-url'
import type {SanityImageSource} from '@sanity/image-url/lib/types/types'
import {createPreviewSubscriptionStore} from './sveltekit/previewSubscriptionStore'
import {sanityConfig} from './config'
import {createCurrentUserStore} from './sveltekit/currentUser'

export const previewSubscription = createPreviewSubscriptionStore(sanityConfig)
export const imageBuilder = createImageUrlBuilder(sanityConfig)

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlForImage = (source: SanityImageSource, width: number, height: number) => {
  return imageBuilder.image(source).width(width).height(height).auto('format').fit('crop')
}

export const responsiveImage = (
  source: SanityImageSource,
  alt: string = 'image',
  classList: string = '',
  srcs = '780,1280,1920',
  sizes: string = '100vw'
) => {
  const sizeArray: array = srcs.split(',')
  const firstSize: number = sizeArray[0]
  const lastSize: number = sizeArray[sizeArray.length - 1]
  const srcSetContent = sizeArray
    .map((size) => {
      const url = urlForImage(source).width(size).auto('format').fit('max').url()
      return `${url} ${size}w`
    })
    .join(',')

  return `<img 
			src="${urlForImage(source).width(firstSize)}"
			${classList ? "class='" + classList + "'" : ''}
			${alt ? "alt='" + alt + "'" : 'image'}
			srcset="${srcSetContent}"
			sizes="${sizes}"
			width="${lastSize.trim()}"
		>`
}

export const sanityUser = createCurrentUserStore(sanityConfig)
