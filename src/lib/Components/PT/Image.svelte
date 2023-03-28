<script lang="ts">
  import {urlForImage} from '$lib/config/sanity'

  export let portableText: any

  export let width: number = 940
  export let height: number = 480
  export let alt: string = portableText.value.alt
  export let src: string = portableText.value.asset
  export let lqip: string = portableText.value.lqip
  export let bgColor: string = portableText.value.bgColor
  export let customRatio: number = portableText.value.customRatio
</script>

<div class="w-full" style="background-size: cover; background-image: url({lqip}); background-color: {bgColor};">
  <img
    src={urlForImage(src, width, customRatio ? Math.round(width / customRatio) : height)}
    width="{width}px"
    height="{customRatio ? Math.round(width / customRatio) : height}px"
    {alt}
  />
</div>
