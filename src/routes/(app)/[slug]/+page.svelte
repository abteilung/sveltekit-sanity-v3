<script lang="ts">
  import type {PageData} from './$types'
  import PageBuilder from '$lib/Components/PageBuilder/PageBuilder.svelte'
  import PageSeo from '$lib/Components/PageSeo.svelte'
  export let data: PageData

  $: ({page} = data)
</script>

<svelte:head>
  <PageSeo seoData={page.seoData} />
</svelte:head>

{#if page}
  <PageBuilder blocks={page.content} />
{/if}