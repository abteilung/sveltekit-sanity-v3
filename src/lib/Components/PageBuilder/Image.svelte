<script lang="ts">
  import {urlForImage} from '$lib/config/sanity'
  import {onMount} from 'svelte'
  import {fade} from 'svelte/transition'
  import {page} from '$app/stores'

  export let block
  let isLoaded: boolean = false

  onMount(() => {
    isLoaded = true
  })

  export let width: number = 940
  export let height: number = 480
  export let customRatio: number = ''
  export let additionalClass: string = ''
</script>

<div style="background-size: cover; background-image: url({block.lqip}); background-color: {block.bgColor};">
  {#if block.src && isLoaded}
    {#key block.src}
      <img
        in:fade={{duration: 200}}
        out:fade={{duration: 200}}
        src={urlForImage(block.src, width, customRatio ? Math.round(width / customRatio) : height)}
        width="{width}px"
        height="{customRatio ? Math.round(width / customRatio) : height}px"
        class={'w-full ' + additionalClass}
        alt={block.alt}
      />
    {/key}
  {/if}
</div>
