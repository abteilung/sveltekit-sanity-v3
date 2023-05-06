<script lang="ts">
  // Imports
  import classNames from 'classnames'
  import PageBuilder from '$lib/components/PageBuilder/PageBuilder.svelte'

  // API
  export let block
  export let additionalClass: string

  let style = block.columnNumber
  let styleLg = block.columnNumberLg
  let content = block.content

  const [colsNumber, colsStyle] = style.split('_')
  const colWidth = colsStyle.split('-').map((col) => col)

  const [colsNumberLg, colsStyleLg] = styleLg.split('_')
  const colWidthLg = colsStyleLg.split('-').map((col) => col)

  const columns = Object.values(content).filter((col) => col)
</script>

<section class={classNames(additionalClass, '')}>
  <!-- `wrapper wrapper--${colsNumber} wrapper--${colsStyle}` -->
  <div class={'md:grid md:grid-cols-12'}>
    {#each columns as column, i}
      <!-- make sure the colsNumber Settings is respected by the rendering -->
      {#if colsNumber >= i}
        <div class="column md:col-span-{colWidth[i]} lg:col-span-{colWidthLg[i]}">
          <PageBuilder blocks={column} />
        </div>
      {/if}
    {/each}
  </div>
</section>

<!-- Safelisting of Grid classes -->
<!-- md:grid-cols-1 md:grid-cols-2 md:grid-cols-3 md:grid-cols-4 -->
<!-- lg:grid-cols-1 lg:grid-cols-2 md:grid-cols-3 md:grid-cols-4 -->

<!-- md:col-span-1 md:col-span-2 md:col-span-3 md:col-span-4 md:col-span-5 md:col-span-6 md:col-span-7 md:col-span-8 md:col-span-9 md:col-span-10 md:col-span-11 md:col-span-12 -->
<!-- lg:col-span-1 lg:col-span-2 lg:col-span-3 lg:col-span-4 lg:col-span-5 lg:col-span-6 lg:col-span-7 lg:col-span-8 lg:col-span-9 lg:col-span-10 lg:col-span-11 lg:col-span-12 -->
