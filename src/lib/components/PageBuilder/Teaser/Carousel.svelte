<script lang="ts">
  import {fly} from 'svelte/transition'
  import {Swiper, SwiperSlide} from 'swiper/svelte'
  import 'swiper/css'

  import IntersectionObserver from '$lib/elements/utilities/IntersectionObserver.svelte'
  import Image from '$lib/elements/media/Image.svelte'

  export let teasers: any
  export let maxItems: number
  export let i: number

  let swiper: Swiper
  $: activeSnapIndex = 0
  $: snapGridTotal = 1
  const breakpoints = {
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
      slidesPerGroup: 1
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerGroup: 2
    },
    // when window width is >= 980px
    980: {
      slidesPerView: 3,
      spaceBetween: 10,
      slidesPerGroup: 3
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 4,
      spaceBetween: 10,
      slidesPerGroup: 4
    }
  }
</script>

<IntersectionObserver let:intersecting once={true}>
  {#if intersecting}
    <div class="flex items-center justify-between">
      <button
        type="button"
        on:click={() => {
          swiper?.slidePrev()
        }}>prev</button
      >
      <span>{activeSnapIndex + 1} / {snapGridTotal}</span>
      <button
        type="button"
        on:click={() => {
          swiper?.slideNext()
          console.log(swiper.snapIndex)
        }}>next</button
      >
    </div>

    <Swiper
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
                  <Image block={teaser} additionalClass="group-hover:scale-105 duration-300 transition-all" />
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
  {/if}
</IntersectionObserver>
