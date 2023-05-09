<script lang="ts">
  import {Controller, EffectFade, Pagination, Mousewheel} from 'swiper'
  import {Swiper, SwiperSlide} from 'swiper/svelte'
  import 'swiper/css'
  import 'swiper/css/effect-fade'
  import 'swiper/css/pagination'
  import IntersectionObserver from '$lib/elements/utilities/IntersectionObserver.svelte'

  // Create object for 5 pages with Title, Subtitle and short Text
  let pages: any = [
    {
      title: 'Page 1',
      subtitle: 'Subtitle 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc',
      video: 'vecteezy_dynamic-animated-background-futuristic-virtual-technology_7515503_625_8.mp4'
    },
    {
      title: 'Page 2',
      subtitle: 'Subtitle 2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc',
      video: 'vecteezy_dynamic-animated-background-futuristic-virtual-technology_7515501_292_1.mp4'
    },
    {
      title: 'Page 3',
      subtitle: 'Subtitle 3',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc',
      video: 'vecteezy_dynamic-animated-background-futuristic-virtual-technology_7515503_625_8.mp4'
    },
    {
      title: 'Page 4',
      subtitle: 'Subtitle 4',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc',
      video: 'vecteezy_dynamic-animated-background-futuristic-virtual-technology_7515501_292_1.mp4'
    },
    {
      title: 'Page 5',
      subtitle: 'Subtitle 5',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc',
      video: 'vecteezy_dynamic-animated-background-futuristic-virtual-technology_7515501_292_1.mp4'
    }
  ]

  $: activeSnapIndex = 0
  $: snapGridTotal = 1

  let swiper: Swiper
</script>

<div class="fullPageSwiper bg-black relative">
  <div class="absolute top-12 mt-12 left-12 text-white z-50">{activeSnapIndex + 1} / {snapGridTotal}</div>

  <Swiper
    class="h-screen overflow-hidden "
    modules={[Controller, Pagination, Mousewheel, EffectFade]}
    effect="fade"
    direction="vertical"
    slidesPerView={1}
    spaceBetween={0}
    threshold={5}
    pagination={{clickable: true}}
    slidesPerGroup={1}
    on:slideChange={() => {
      activeSnapIndex = swiper.snapIndex
    }}
    on:resize={() => {}}
    on:swiper={(e) => {
      swiper = e.detail[0]
      activeSnapIndex = swiper.snapIndex
      snapGridTotal = swiper?.snapGrid.length
      console.log(swiper)
    }}
    mousewheel={true}
  >
    {#each pages as page, i}
      <SwiperSlide class="bg-black flex items-center overflow-hidden justify-center w-full h-screen border-4">
        <div class="w-1/2 p-12 text-white">
          <div class="text-4xl">{page.title}</div>
          <div class="text-2xl">{page.subtitle}</div>
          <p>{page.text}</p>
        </div>
        <div class="w-1/2 h-screen bg-primary">
          <video
            autoplay
            loop
            muted
            class="h-screen absolute z-10 w-auto min-w-full min-h-full max-w-none object-cover"
          >
            <source src={page.video} type="video/mp4" />Your browser does not support the video tag.
          </video>
        </div>
      </SwiperSlide>
    {/each}
  </Swiper>
</div>

<style lang="postcss">
  :global(.fullPageSwiper .swiper-pagination-bullet) {
    @apply bg-black/30 w-4 h-4 rounded-full opacity-100;
  }

  :global(.fullPageSwiper .swiper-pagination-bullet-active) {
    @apply bg-primary w-4 h-16 rounded-full;
  }
</style>
