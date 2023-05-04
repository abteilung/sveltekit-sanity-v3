<script lang="ts">
  import classNames from 'classnames'

  // Import Teasers:
  import BrandItem from './Teaser/BrandItem.svelte'
  import GridItem from './Teaser/GridItem.svelte'
  import SliderLarge from './Teaser/SliderLarge.svelte'
  import ListItem from './Teaser/ListItem.svelte'
  import Carousel from './Teaser/Carousel.svelte'

  export let block
  $: ({title, skipItems, maxItems, teasers, bgColor, maxItems, layout, itemSelector, typeSelector, columns, container} =
    block)
</script>

<div class={classNames(bgColor ? 'bg-' + bgColor : '', container ? 'py-12' : '')}>
  <div class={classNames(container ? 'contentArea' : '')}>
    {#if title}
      <h2>{title}</h2>
    {/if}

    <!-- 
max: {maxItems}<br>
cols: {columns}<br>
layout: {layout}<br>
itemSelector: {itemSelector}<br> 
-->
    {#if typeSelector === 'brand'}
      <ul
        class={classNames(
          'overflow-hidden grid-cols-' +
            columns / 2 +
            ' md:grid-cols-' +
            Math.round(columns / 1.5) +
            ' lg:grid-cols-' +
            columns,
          'grid  bg-light'
        )}
      >
        {#each teasers as teaser, i}
          <BrandItem {teaser} {i} />
        {/each}
      </ul>
    {:else}
      {#if layout === 'grid'}
        <ul class={classNames('md:grid-cols-' + columns, 'grid')}>
          {#each teasers as teaser, i}
            {#if i < maxItems}
              <GridItem {teaser} {i} />
            {/if}
          {/each}
        </ul>
      {/if}

      {#if layout === 'list'}
        <ul class="divide-y">
          {#each teasers as teaser, i}
            {#if i < maxItems}
              <ListItem {teaser} {i} />
            {/if}
          {/each}
        </ul>
      {/if}

      {#if layout === 'carousel'}
        <Carousel {teasers} {maxItems} />
      {/if}

      {#if layout === 'sliderLarge'}
        <SliderLarge {teasers} {maxItems} />
      {/if}
    {/if}
  </div>
</div>

<!-- Safelist: grid-cols-1 grid-cols-2 grid-cols-3 grid-cols-4 -->
<!-- Safelist: sm:grid-cols-1 sm:grid-cols-2 sm:grid-cols-3 sm:grid-cols-4 -->
<!-- Safelist: md:grid-cols-1 md:grid-cols-2 md:grid-cols-3 md:grid-cols-4 -->
<!-- Safelist: lg:grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 -->
<!-- Safelist: xl:grid-cols-1 xl:grid-cols-2 xl:grid-cols-3 xl:grid-cols-4 -->
<!-- bg-white bg-gray bg-dark bg-black bg-primary bg-accent bg-alert -->

<style lang="postcss">
  .bg-primary,
  .bg-accent,
  .bg-alert,
  .bg-black,
  .bg-dark {
    @apply text-white !important;
  }
</style>
