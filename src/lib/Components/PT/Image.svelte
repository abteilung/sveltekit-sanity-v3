<script lang="ts">
  import {urlForImage} from '$lib/config/sanity'

  export let portableText: any;
  $: ({value} = portableText)
  
  export let width: number = 940
  export let height: number = 480
  export let alt: string = 'Image'
  export let src: string = portableText.value.asset
  // portableText.value.asset.metadata.lqip
  export let lqip: string = portableText.value.lqip
  // portableText.value.asset.metadata.palette.dominant.background
  export let bgColor: string = portableText.value.bgColor
  export let customRatio: number = portableText.value.customRatio

</script>

<div style="background-image: url({lqip}); background-color: {bgColor};">
  <img src={urlForImage(src, width, customRatio ? Math.round(width / customRatio) : height)} {alt} />
</div>

<style lang="postcss">
  img {
    @apply w-full;
  }
</style>
