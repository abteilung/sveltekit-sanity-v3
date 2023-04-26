<script lang="ts">
  // Import Types
  import type {PageData} from './$types'

  // Import components
  import Header from '$lib/components/Header/Header.svelte'
  import PageBuilder from '$lib/components/PageBuilder/PageBuilder.svelte'

  // Export Data
  export let data: PageData
  $: ({page} = data)
</script>

{#if page}
  <Header bgImage={page.image} />
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
