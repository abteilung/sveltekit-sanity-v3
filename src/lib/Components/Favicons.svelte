<script lang="ts">
  import {urlForImage} from '$lib/config/sanity'
  export let iconImage: string
</script>

{#if iconImage}
  <link rel="apple-touch-icon" sizes="180x180" href={urlForImage(iconImage, 180, 180).format('png')}>
  <link rel="icon" type="image/png" sizes="32x32" href={urlForImage(iconImage, 32, 32).format('png')}>
  <link rel="icon" type="image/png" sizes="16x16" href={urlForImage(iconImage, 16, 16).format('png')}>
  <link rel="manifest" href="/site.webmanifest">
{/if}