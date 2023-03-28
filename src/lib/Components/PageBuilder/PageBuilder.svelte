<script lang="ts">
  // Page Builder
  import Image from '$lib/Components/PageBuilder/Image.svelte'
  import RichEditor from '$lib/Components/PageBuilder/RichEditor.svelte'
  import TeaserGrid from '$lib/Components/PageBuilder/TeaserGrid.svelte'

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
  {/each}
{/if}
