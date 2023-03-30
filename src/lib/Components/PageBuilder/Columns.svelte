<script lang="ts">
  // Imports
  import classNames from 'classnames'
  import PageBuilder from '$lib/Components/PageBuilder/PageBuilder.svelte'

  // API
  export let block
  export let additionalClass: string

  let style = block.columnNumber
  let content = block.content

  const [colsNumber, colsStyle] = style.split('_')
  const colWidth = colsStyle.split('-').map((col) => col)
  const columns = Object.values(content).filter((col) => col)
</script>

<section class={classNames(additionalClass, 'w-full h-full relative')}>
  <div class="grid md:grid-cols-12">
    {#each columns as column, i}
      <!-- make sure the colsNumber Settings is respected by the rendering -->
      {#if colsNumber >= i}
        <div class="column md:col-span-{colWidth[i]}">
          <PageBuilder blocks={column} />
        </div>
      {/if}
    {/each}
  </div>
</section>

<!-- Safelisting of Grid classes -->
<!-- grid-cols-1 grid-cols-2 grid-cols-3 grid-cols-4 -->

<!-- md:col-span-1 md:col-span-2 md:col-span-3 md:col-span-4 md:col-span-5 md:col-span-6 md:col-span-7 md:col-span-8 md:col-span-9 md:col-span-10 md:col-span-11 md:col-span-12 -->
<style lang="postcss">
  .wrapper {
    @apply grid gap-12;
    grid-template-columns: var(--columns, 1fr);
  }

  .wrapper--2 {
    --columns: 1fr 1fr;
  }

  .wrapper--3 {
    --columns: repeat(3, 1fr);
  }

  .wrapper--40-60 {
    --columns: 0.4fr 0.6fr;
  }

  .wrapper--75-25 {
    --columns: 0.75fr 0.25fr;
  }

  .wrapper--25-75 {
    --columns: 0.25fr 0.75fr;
  }

  .wrapper--50-25-25 {
    --columns: 0.5fr 0.25fr 0.25fr;
  }

  .wrapper--25-50-25 {
    --columns: 0.25fr 0.5fr 0.25fr;
  }

  .wrapper--25-25-50 {
    --columns: 0.25fr 0.25fr 0.5fr;
  }
</style>
