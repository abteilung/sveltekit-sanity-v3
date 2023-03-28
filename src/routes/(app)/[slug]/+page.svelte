<script lang="ts">
  import {urlForImage} from '$lib/config/sanity'
  import type {PageData} from './$types'
  import PortableBlock from '$lib/Components/PortableBlock.svelte'

  export let data: PageData

  $: ({page} = data)
</script>

<svelte:head>
  <title>Layout with left Navigation and revealing Footer</title>
</svelte:head>

<h4>{page.subtitle}</h4>
<h1>{page.title}</h1>

{#if page.body}
  <PortableBlock content={page.body} />
{/if}