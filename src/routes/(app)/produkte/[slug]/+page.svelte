<script lang="ts">
  // Import Types
  import type {PageData} from './$types'

  // Import Components
  import Header from '$lib/Components/Header.svelte'
  import PageBuilder from '$lib/Components/PageBuilder/PageBuilder.svelte'

  // Export Data
  export let data: PageData
  $: ({page} = data)
</script>

<svelte:head />
{#if page}
  <Header pageTitle={page.title} bgImage={page.image} />
  <PageBuilder blocks={page.content} />
{/if}
