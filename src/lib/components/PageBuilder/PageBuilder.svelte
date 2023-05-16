<script lang="ts">
  // Page Builder
  import Image from '$lib/elements/media/Image.svelte'
  import RichEditor from '$lib/components/PageBuilder/RichEditor.svelte'
  import TeaserGrid from '$lib/components/PageBuilder/TeaserGrid.svelte'
  import EmptySpace from '$lib/components/PageBuilder/EmptySpace.svelte'
  import Columns from '$lib/elements/generalContent/Columns.svelte'
  import Code from '$lib/elements/generalContent/Code.svelte'
  import Video from '$lib/elements/media/Video.svelte'

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
      <TeaserGrid {block} skipItems="2" maxItems="4" />
    {/if}
    {#if block._type === 'emptySpace'}
      <EmptySpace {block} />
    {/if}
    {#if block._type === 'columns'}
      <Columns {block} />
    {/if}
    {#if block._type === 'code'}
      <Code {block} />
    {/if}
    {#if block._type === 'video'}
      <Video portableText={block} />
    {/if}
  {/each}
{/if}
