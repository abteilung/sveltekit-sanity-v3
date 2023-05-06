<!-- https://themenectar.com/salient/image-grid/ -->
<script lang="ts">
  import classNames from 'classnames'
  import {onMount} from 'svelte'

  import PhotoSwipeLightbox from 'photoswipe/lightbox'
  import 'photoswipe/style.css'
  export let galleryID: string = 'gallery'

  onMount(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
      indexIndicatorSep: ' von '
    })
    lightbox.init()
  })

  export let images: Array<{
    src: string
    alt: string
    width: number
    height: number
  }> = [
    {
      src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80',
      alt: 'image',
      width: 1,
      height: 1
    },
    {
      src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80',
      alt: 'image',
      width: 1,
      height: 1
    },
    {
      src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80',
      alt: 'image',
      width: 1,
      height: 1
    },
    {
      src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80',
      alt: 'image',
      width: 1,
      height: 1
    },
    {
      src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80',
      alt: 'image',
      width: 1,
      height: 1
    },
    {
      src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80',
      alt: 'image',
      width: 1,
      height: 1
    },
    {
      src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80',
      alt: 'image',
      width: 1,
      height: 1
    },
    {
      src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80',
      alt: 'image',
      width: 1,
      height: 1
    },
    {
      src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80',
      alt: 'image',
      width: 1,
      height: 1
    },
    {
      src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80',
      alt: 'image',
      width: 1,
      height: 1
    },
    {
      src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80',
      alt: 'image',
      width: 1,
      height: 1
    },
    {
      src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80',
      alt: 'image',
      width: 1,
      height: 1
    },
    {
      src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80',
      alt: 'image',
      width: 1,
      height: 1
    },
    {
      src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80',
      alt: 'image',
      width: 1,
      height: 1
    },
    {
      src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80',
      alt: 'image',
      width: 1,
      height: 1
    },
    {
      src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80',
      alt: 'image',
      width: 1,
      height: 1
    },
    {
      src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80',
      alt: 'image',
      width: 1,
      height: 1
    }
  ]
</script>

<div class="container mx-auto">
  <div class="flex-1 p-10 mx-auto">
    <ul id={galleryID} class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5 md:gap-8">
      {#each images as image, i}
        <li
          class={classNames(
            'block w-full rounded relative overflow-hidden group border-2 border-primary bg-primary',
            i === 0 ? 'md:col-span-2 md:row-span-2' : '',
            i === 4 ? 'md:col-span-2' : ''
          )}
        >
          <a
            href={image.src}
            data-pswp-width={989}
            data-pswp-height={718}
            target="_blank"
            rel="noreferrer"
            class="block h-72"
          >
            <div class="w-full h-full border-4 border-black">
              <div class="absolute z-50 top-6 left-6">{i}</div>
              <img
                class="cursor-pointer transition-all duration-150 scale-100 group-hover:scale-[1.25] ease-out"
                src={image.src}
                alt={image.alt}
              />
            </div>
          </a>
        </li>
      {/each}
    </ul>
  </div>
</div>

<!-- <div class="container mx-auto">
	<div
		id={galleryID}
		class="grid-cols-4 p-20 space-y-1 bg-yellow-200 pswp-gallery lg:space-y-0 lg:grid lg:gap-1 lg:grid-rows-4"
	>
		{#each images as image, i}
			<div class={classNames('w-full rounded', i % 7 === 0 ? 'col-span-2 row-span-2' : '')}>
				<div class="overflow-hidden group">
					<a
						href={image.src}
						data-pswp-width={989}
						data-pswp-height={718}
						target="_blank"
						rel="noreferrer"
					>
						<img
							class="cursor-pointer transition-all duration-150 scale-100 group-hover:scale-[1.25] ease-out"
							src={image.src}
							alt={image.alt}
						/>
					</a>
				</div>
			</div>
		{/each}
	</div>
</div>  -->
