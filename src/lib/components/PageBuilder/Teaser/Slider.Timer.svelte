<script lang="ts">
  import ProgressCircle from '$lib/elements/navigation/Progress.Circle.svelte'

  import SwiperCore, {Controller, EffectCreative, Pagination, Autoplay} from 'swiper'
  import {Swiper, SwiperSlide} from 'swiper/svelte'
  import 'swiper/css'
  import 'swiper/css/autoplay'
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

  import IntersectionObserver from '$lib/elements/utilities/IntersectionObserver.svelte'
  import Image from '$lib/elements/media/Image.svelte'

  export let teasers: any
  export let maxItems: number
  export let i: number

  let progress: number = 40
</script>

<IntersectionObserver let:intersecting once={true}>
  {#if intersecting}
    <div class="group relative">
      <ProgressCircle {progress} />

      <div class="hidden md:block w-2/3 aspect-[1/1]">
        <Swiper
          modules={[Controller, Autoplay]}
          autoplay={{delay: 5000}}
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
