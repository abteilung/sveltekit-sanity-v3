import {Slideshow} from '@phosphor-icons/react'

export default {
  name: 'gallery',
  title: 'Galleries',
  type: 'object',
  icon: Slideshow,
  // Default value for type
  initialValue: {
    display: 'inline',
    zoom: true,
    imagesPerRow: 3
  },
  fields: [
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          name: 'item',
          type: 'customImage',
          title: 'Image'
        }
      ],
      options: {
        layout: 'grid'
      }
    },
    {
      name: 'display',
      type: 'string',
      title: 'Display as',
      description: 'How should we display these images?',
      options: {
        list: [
          {title: 'In-line', value: 'inline'},
          {title: 'Carousel', value: 'carousel'}
        ],
        layout: 'radio' // <-- defaults to 'dropdown'
      }
    },
    {
      name: 'imagesPerRow',
      type: 'number',
      title: 'Images per row',
      description: 'How many images should we display per row?',
      // only show if display is set to inline
      options: {
        list: [
          {title: '1', value: 1},
          {title: '2', value: 2},
          {title: '3', value: 3},
          {title: '4', value: 4}
        ]
      }
    },
    {
      name: 'zoom',
      type: 'boolean',
      title: 'Zoom enabled',
      description: 'Should we enable zooming of images?'
    }
  ],
  preview: {
    select: {
      images: 'images',
      image: 'images.0.image',
      alt: 'images.0.alt',
      display: 'display',
      zoom: 'zoom'
    },
    prepare(selection) {
      const {images, image, alt, display, zoom} = selection

      return {
        title: `Gallery block of ${Object.keys(images).length} images`,
        subtitle: `${display === 'inline' ? 'In-line' : 'Carousel'} ${zoom ? 'with' : 'without'} zoom`,
        media: image,
        icon: Slideshow
      }
    }
  }
}
