<script lang="ts">
  import {urlForImage} from '$lib/config/sanity'

  export let portableText
  export let width: number = 940
  export let height: number = 480
  export let alt: string = 'Image'
  export let src: string = ''

  $: ({value} = portableText)

  $: if (value.asset) {
    src = urlForImage(value.asset).width(width).height(height)
    alt = value.alt
  }
</script>

{value.customRatio}

<img {src} {alt} />


<style lang="postcss">
  img {
    @apply w-full;
  }
</style>
