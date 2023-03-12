<script lang="ts">
  import {urlForImage} from '$lib/config/sanity'
  import type {PageData} from './$types'

  export let data: PageData

  $: ({page} = data)
</script>

<svelte:head>
  <title>Layout with left Navigation and revealing Footer</title>
</svelte:head>

{page.title}
