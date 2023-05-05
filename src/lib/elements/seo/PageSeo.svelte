<script lang="ts">
  import {page} from '$app/stores'
  import {urlForImage} from '$lib/config/sanity'

  export let seoData: any
</script>

<svelte:head>
  {#if seoData.title}
    <title>{seoData.title}</title>
  {/if}
  {#if seoData.description != null}
    <meta name="description" content={seoData.ogDescription || seoData.description} />
  {/if}
  {#if seoData.image}
    <meta property="og:image" content={urlForImage(seoData.image, 1200, 630)} />
  {/if}
  {#if seoData.ogTitle || seoData.title}
    <meta property="og:title" content={seoData.ogTitle || seoData.title} />
  {/if}

  {#if seoData.ogType}
    <meta property="og:type" content={seoData.ogType} />
  {/if}
  <meta property="og:url" content={$page.url} />
</svelte:head>
