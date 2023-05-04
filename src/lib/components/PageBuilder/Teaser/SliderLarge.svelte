<script lang="ts">
  import {fly} from 'svelte/transition'
  import SwiperCore, {Controller, Navigation, Pagination} from 'swiper'
  import {Swiper, SwiperSlide} from 'swiper/svelte'
  import 'swiper/css'
  import 'swiper/css/navigation'
  import 'swiper/css/pagination'

  // store swiper instances
  let firstSwiper = null
  let secondSwiper = null

  const setFirstSwiper = (e) => {
    const [swiper] = e.detail
    setTimeout(() => {
      firstSwiper = swiper
    })
  }

  const setSecondSwiper = (e) => {
    const [swiper] = e.detail
    setTimeout(() => {
      secondSwiper = swiper
    })
  }

  import IntersectionObserver from '$lib/components/IntersectionObserver.svelte'
  import Image from '$lib/components/PageBuilder/Image.svelte'

  export let teasers: any
  export let maxItems: number
  export let i: number

  let swiper: Swiper
  $: activeSnapIndex = 0
  $: snapGridTotal = 1
</script>

<IntersectionObserver let:intersecting top={200} once={true}>
  {#if intersecting}
    <div class="grid grid-cols-2 gap-0">
      <div>
        <Swiper
          modules={[Controller]}
          controller={{control: secondSwiper}}
          spaceBetween={0}
          slidesPerView={1}
          on:slideChange={() => {
            activeSnapIndex = swiper.snapIndex
          }}
          on:resize={() => {
            snapGridTotal = swiper?.snapGrid.length
          }}
          on:swiper={setFirstSwiper}
        >
          {#each teasers as teaser, i}
            {#if i < maxItems}
              <SwiperSlide>
                {#if teaser.image}
                  <div class="overflow-hidden">
                    <Image block={teaser.image} additionalClass="group-hover:scale-105 duration-300 transition-all" />
                  </div>
                {/if}
              </SwiperSlide>
            {/if}
          {/each}
        </Swiper>
      </div>

      <div class="bg-black p-12 h-full">
        <Swiper
          modules={[Controller, Navigation, Pagination]}
          on:swiper={setSecondSwiper}
          controller={{control: firstSwiper}}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{clickable: true}}
          on:slideChange={() => {
            activeSnapIndex = swiper.snapIndex
          }}
          on:resize={() => {
            snapGridTotal = swiper?.snapGrid.length
          }}
          on:swiper={setSecondSwiper}
        >
          {#each teasers as teaser, i}
            {#if i < maxItems}
              <SwiperSlide>
                <a href={teaser.href} class="block space-y-4 group">
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
    </div>
  {/if}
</IntersectionObserver>

<style lang="postcss">
  :global(.swiper-pagination-bullet) {
    @apply bg-white w-4 h-4 rounded-full opacity-100;
  }

  :global(.swiper-pagination-bullet-active) {
    @apply bg-primary w-16 h-4 rounded-full;
  }
</style>
