<!-- https://github.com/diwakersurya/svelte-accordion/tree/master/src -->
<script lang="ts">
  // import function to register Swiper custom elements
  import {slidy} from '@slidy/core'
  import {urlForImage} from '$lib/config/sanity'

  import {onMount} from 'svelte'

  import BlazeSlider from 'blaze-slider'
  import 'blaze-slider/dist/blaze.css'

  // register Swiper custom elements
  export let portableText: any
  $: ({value} = portableText)

  let index = 0
</script>

<!-- {value.zoom}
{value.display}
{value.images}
{value.imagesPerRow} -->

<!-- {JSON.stringify(value.images)} -->

<!-- Slidy Version -->
<ul
  class="w-full gap-12 h-full flex min-w-[0px] overflow-hidden"
  use:slidy={{
    index,
    axis: 'x',
    align: 'middle',
    duration: 375,
    clamp: 1,
    snap: true,
    loop: true,
    gravity: 1.2,
    indexer: (x) => (index = x),
    scroller: (p) => (scrollPos = p)
  }}
>
  {#each value.images as slide, i}
    <li id={i} class:active={i === index} class="h-96 aspect-[16/9] relative max-w-full">
      <img
        src={urlForImage(slide.image, 800, 600)}
        alt={slide.alt}
        width="800"
        height="600"
        class="w-full h-full object-cover"
      />
    </li>
  {/each}
</ul>
