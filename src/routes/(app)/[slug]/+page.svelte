<script lang="ts">
  import type {PageData} from './$types'
  import PageBuilder from '$lib/Components/PageBuilder/PageBuilder.svelte'

  export let data: PageData

  $: ({page} = data)
</script>

<svelte:head>
  <title>Layout with left Navigation and revealing Footer</title>
</svelte:head>

<PageBuilder blocks={page.content} />
