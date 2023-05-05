<script lang="ts">
  // Import Types
  import type {PageData} from './$types'

  // Import components
  import Header from '$lib/layout/Header.svelte'
  import PageBuilder from '$lib/components/PageBuilder/PageBuilder.svelte'
  import PageSeo from '$lib/elements/seo/PageSeo.svelte'

  // Export Data
  export let data: PageData
  $: ({page} = data)
</script>

<PageSeo seoData={page.seoData} cartImage={true} />

{#if page}
  <Header bgImage={page.image} pageTitle={page.title} />

  <div class="contentArea">
    {#if page.subtitle}
      <h1 class="h3 mb-0">{page.subtitle}</h1>
      <h2 class="text-4xl">{page.title}</h2>
    {:else}
      <h1>{page.title}</h1>
    {/if}
  </div>
  <PageBuilder blocks={page.content} />
{/if}
