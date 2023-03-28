<script lang="ts">
  import {urlForImage} from '$lib/config/sanity'

  export let portableText: any;
  $: ({value} = portableText)
  export let width: number = 940
  export let height: number = 480
  export let alt: string = 'Image'
  export let src: string = portableText.value.asset
  // portableText.value.asset.metadata.lqip
  export let lqip: string = ""
  // portableText.value.asset.metadata.palette.dominant.background
  export let bgColor: string = ""
  export let customRatio: number = 1.777

</script>

<div style="background-image: url({value.lqip}); background-color: {value.bgColor};">
  <img src={urlForImage(src, width, value.customRatio ? Math.round(width / value.customRatio) : height)} {alt} />
</div>

<style lang="postcss">
  img {
    @apply w-full;
  }
</style>
