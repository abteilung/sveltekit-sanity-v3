<script lang="ts">
  import {urlForImage} from '$lib/config/sanity'
  import type {PageData} from './$types'

  import PageBuilder from '$lib/Components/PageBuilder/PageBuilder.svelte'

  export let data: PageData

  $: ({page} = data)
</script>

<svelte:head />

{#if page}
  <PageBuilder blocks={page.content} />
{/if}
