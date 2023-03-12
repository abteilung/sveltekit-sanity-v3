<script lang="ts">
  import {urlForImage} from '$lib/config/sanity'

  $: ({value} = portableText)
  export let portableText
  export let width: number = 940
  export let height: number = 480
  export let alt: string = 'Image'
  export let src: string = portableText.value.image
  export let customRatio: number = 1.777;

  $: if (value.alt) {
    alt = value.alt
  }
</script>
<img src={urlForImage(src, width, value.customRatio ? Math.round(width / value.customRatio) : height)} {alt} />

<style lang="postcss">
  img {
    @apply w-full;
  }
</style>