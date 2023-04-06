<script lang="ts">
  import classNames from 'classnames'
  import Image from '$lib/Components/PageBuilder/Image.svelte'
  import {fly} from 'svelte/transition'

  import {onMount} from 'svelte'

  let brandVisible: boolean = false

  let hidden = true
  onMount(() => {
    hidden = false
    brandVisible = true
  })

  import {Swiper, SwiperSlide} from 'swiper/svelte'
  import 'swiper/css'

  export let block
  $: ({title, teasers, bgColor, maxItems, layout, itemSelector, typeSelector, columns, container} = block)

  let touchMove = true

  let swiper: Swiper
  $: activeSnapIndex = 0
  $: snapGridTotal = 1
  const breakpoints = {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerGroup: 2,

      grid: {
        rows: 2
      }
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 10,
      slidesPerGroup: 3,
      grid: {
        rows: 2
      }
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 10,
      slidesPerGroup: 4,
      grid: {
        rows: 2
      }
    }
    // when window width is >= 640px
    // 1024: {
    //     slidesPerView: 5,
    //     spaceBetween: 10,
    //     slidesPerGroup: 5,

    //     grid: {
    //         rows: 2
    //     }
    // }
  }
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
      <ul class={classNames('overflow-hidden grid-cols-' + columns / 2 + ' lg:grid-cols-' + columns, 'grid  bg-light')}>
        {#each teasers as teaser, i}
          {#if teaser.image}
            {#if brandVisible}
              <li class="group" in:fly={{x: -50, y: -20, delay: i * 75, duration: 500, opacity: 0}}>
                <a href={teaser.href} target="_blank">
                  <Image
                    block={teaser.image}
                    width="483"
                    height="244"
                    alt={teaser.title}
                    additionalClass="group-hover:scale-105 duration-300 transition-all"
                  />
                </a>
              </li>
            {/if}
          {/if}
        {/each}
      </ul>
    {:else}

      {#if layout === 'grid'}
        <ul class={classNames('md:grid-cols-' + columns, 'grid')}>
          {#each teasers as teaser, i}
            {#if i < maxItems}
              {#if hidden === false}
                <li in:fly={{x: -50, y: -20, delay: i * 75, duration: 500, opacity: 0}}>
                  <a href={teaser.href} class="block space-y-4 group">
                    {#if teaser.image}
                      <div class="overflow-hidden">
                        <Image block={teaser.image} additionalClass="group-hover:scale-105 duration-300 transition-all" />
                      </div>
                    {/if}
                    <div>
                      <h4 class="mb-2">{teaser.subtitle}</h4>
                      <h3>{teaser.title}</h3>
                    </div>
                  </a>
                </li>
              {/if}
            {/if}
          {/each}
        </ul>
      {/if}

      {#if layout === 'list'}
        <ul class="divide-y">
          {#each teasers as teaser, i}
            {#if i < maxItems}
              <li class="py-2 my-2">
                <a href={teaser.href} class="grid items-top grid-cols-4 group">
                  {#if teaser.image}
                    <div class="overflow-hidden">
                      <Image block={teaser.image} additionalClass="group-hover:scale-105 duration-300 transition-all" />
                    </div>
                  {/if}
                  <div class="col-span-3">
                    <h4 class="mb-2">{teaser.subtitle}</h4>
                    <h3 class="mb-0">{teaser.title}</h3>
                  </div>
                </a>
              </li>
            {/if}
          {/each}
        </ul>
      {/if}

      {#if layout === 'carousel'}
        <div>
          <div class="flex items-center justify-between">
            <button
              type="button"
              class="i-carbon-chevron-left"
              on:click={() => {
                swiper?.slidePrev()
              }}>prev</button
            >
            <span>{activeSnapIndex + 1} / {snapGridTotal}</span>
            <button
              type="button"
              class="i-carbon-chevron-right"
              on:click={() => {
                swiper?.slideNext()
                console.log(swiper.snapIndex)
              }}>next</button
            >
          </div>

          <Swiper
            spaceBetween={10}
            slidesPerView="4"
            {breakpoints}
            on:slideChange={() => {
              activeSnapIndex = swiper.snapIndex
            }}
            on:resize={() => {
              snapGridTotal = swiper?.snapGrid.length
            }}
            on:swiper={(e) => {
              swiper = e.detail[0]
              activeSnapIndex = swiper.snapIndex
              snapGridTotal = swiper?.snapGrid.length
              console.log(swiper)
            }}
          >
            {#each teasers as teaser, i}
              {#if i < maxItems}
                <SwiperSlide>
                  <a href={teaser.href} class="block space-y-4 group">
                    {#if teaser.image}
                      <div class="overflow-hidden">
                        <Image block={teaser.image} additionalClass="group-hover:scale-105 duration-300 transition-all" />
                      </div>
                    {/if}
                    <div>
                      <h4 class="mb-2">{teaser.subtitle}</h4>
                      <h3>{teaser.title}</h3>
                    </div>
                  </a>
                </SwiperSlide>
              {/if}
            {/each}
          </Swiper>
        </div>
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
