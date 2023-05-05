<script lang="ts">
  import {onMount} from 'svelte'
  import {urlForImage} from '$lib/config/sanity'
  import {fade} from 'svelte/transition'

  export let block: any = {}

  let isLoaded: boolean = false

  onMount(() => {
    isLoaded = true
  })

  export let width: number = 940
  export let height: number = 480
  export let additionalClass: string = ''
  export let alt: string = block.image.alt ? block.image.alt : ''

  $: ({image} = block)
</script>

<div style="background-size: cover; background-image: url({image.lqip}); background-color: {image.bgColor};">
  {#if image.src && isLoaded}
    {#key image.src}
      <img
        in:fade={{duration: 200}}
        out:fade={{duration: 200}}
        src={urlForImage(image.src, width, image.customRatio ? Math.round(width / image.customRatio) : height)}
        width="{width}px"
        height="{image.customRatio ? Math.round(width / image.customRatio) : height}px"
        class={'w-full ' + additionalClass}
        {alt}
      />
    {/key}
  {/if}
</div>
