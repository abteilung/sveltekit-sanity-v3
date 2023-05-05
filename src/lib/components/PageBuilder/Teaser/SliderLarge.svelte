<script lang="ts">
  import SwiperCore, {Controller, EffectCreative, Pagination} from 'swiper'
  import {Swiper, SwiperSlide} from 'swiper/svelte'
  import 'swiper/css'
  import 'swiper/css/effect-creative'
  import 'swiper/css/pagination'

  // store swiper instances
  let firstSwiper: Swiper = null
  let secondSwiper: Swiper = null

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
</script>

<IntersectionObserver let:intersecting once={true}>
  {#if intersecting}
    <div class="md:grid md:grid-cols-2 md:gap-0 group">
      <div class="hidden md:block aspect-[1/1]">
        <Swiper
          modules={[Controller]}
          controller={{control: secondSwiper}}
          threshold={5}
          spaceBetween={0}
          slidesPerView={1}
          on:swiper={setFirstSwiper}
        >
          {#each teasers as teaser, i}
            {#if i < maxItems}
              <SwiperSlide>
                {#if teaser.image}
                  <a href={teaser.href} class="block space-y-4 group">
                    <div class="overflow-hidden">
                      <Image
                        block={teaser}
                        width={600}
                        height={600}
                        additionalClass="group-hover:scale-105 duration-300 transition-all"
                      />
                    </div>
                  </a>
                {/if}
              </SwiperSlide>
            {/if}
          {/each}
        </Swiper>
      </div>

      <div class=" bg-black p-12 h-full swiper-2">
        <Swiper
          modules={[Controller, Pagination, EffectCreative]}
          controller={{control: firstSwiper}}
          effect="creative"
          creativeEffect={{
            prev: {
              shadow: false,
              origin: 'left center',
              translate: ['-5%', 0, -200],
              rotate: [0, 100, 0]
            },
            next: {
              origin: 'right center',
              translate: ['5%', 0, -200],
              rotate: [0, -100, 0]
            }
          }}
          threshold={5}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{clickable: true}}
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
                  <div class="button inline-block border-2 border-white hover:bg-white hover:text-black px-6 py-2">
                    Weiter lesen…
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
  :global(.swiper-2 .swiper) {
    @apply h-full;
  }
  :global(.swiper-2 .swiper-pagination-bullet) {
    @apply bg-white w-4 h-4 rounded-full opacity-100;
  }

  :global(.swiper-2 .swiper-pagination-bullet-active) {
    @apply bg-primary w-16 h-4 rounded-full;
  }

  :global(.swiper-2 .swiper-slide:not(.swiper-slide-visible)) {
    @apply opacity-0 !important;
  }
</style>
