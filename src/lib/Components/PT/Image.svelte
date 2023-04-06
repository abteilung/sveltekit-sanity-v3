<script lang="ts">
  import {urlForImage} from '$lib/config/sanity'
  import { onMount } from 'svelte'

  export let portableText: any
  let isLoaded: boolean = false

  onMount (() => {
    isLoaded = true
  })

  export let width: number = 940
  export let height: number = 480
  export let alt: string = portableText.value.image.alt
  export let src: string = portableText.value.image.asset
  export let lqip: string = portableText.value.image.lqip
  export let bgColor: string = portableText.value.image.bgColor
  export let customRatio: number = portableText.value.image.customRatio
</script>

<div style="background-size: cover; background-image: url({lqip}); background-color: {bgColor};">
  <img
    src={urlForImage(src, width, customRatio ? Math.round(width / customRatio) : height)}
    width="{width}px"
    height="{customRatio ? Math.round(width / customRatio) : height}px"
    class="w-full"
    {alt}
  />
</div>
