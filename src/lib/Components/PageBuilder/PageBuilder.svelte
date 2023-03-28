<script lang="ts">
  // Page Builder
  import Image from '$lib/Components/PageBuilder/Image.svelte'
  import RichEditor from '$lib/Components/PageBuilder/RichEditor.svelte'
  import TeaserGrid from '$lib/Components/PageBuilder/TeaserGrid.svelte'
  import EmptySpace from '$lib/Components/PageBuilder/EmptySpace.svelte'
    import Columns from '$lib/Components/PageBuilder/Columns.svelte'
  
  export let blocks: any = []
</script>

{#if blocks}
  {#each blocks as block}
    {#if block._type === 'customImage'}
      <Image {block} />
    {/if}
    {#if block._type === 'richEditor'}
      <RichEditor {block} />
    {/if}
    {#if block._type === 'teaserGrid'}
      <TeaserGrid {block} />
    {/if}
    {#if block._type === 'emptySpace'}
      <EmptySpace {block} />
    {/if}
    {#if block._type === 'columns'}
      <Columns {block} />
    {/if}
  {/each}
{/if}
