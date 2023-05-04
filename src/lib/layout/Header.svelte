<script lang="ts">
  import Image from '$lib/components/PageBuilder/Image.svelte'
  export let bgImage

  export let pageTitle: string = 'Image Title'
</script>

<header
  id="header"
  class="relative text-white overflow-hidden w-full mb-[20px] lg:mb-[30px] xl:mb-[40px] 2xl:mb-[50px]"
>
  <div class="headerContent">
    <slot />
  </div>
  <div class="absolute top-0 left-0 inset-0 isolate z-0">
    {#if bgImage}
      <Image block={bgImage} additionalClass="absolute top-0 left-0 w-full h-full object-cover z-10" alt={pageTitle} />
    {/if}
    <div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-black/00 z-20" />
  </div>
</header>
