<script lang="ts">
  import {fly} from 'svelte/transition'

  import IntersectionObserver from '$lib/components/IntersectionObserver.svelte'
  import Image from '$lib/components/PageBuilder/Image.svelte'

  export let teaser: any
  export let i: number
</script>

<IntersectionObserver let:intersecting top={200} once={true}>
  {#if intersecting}
    {#if teaser.image}
      <li in:fly={{x: -50, y: -20, delay: i * 75, duration: 500, opacity: 0}}>
        <a href={teaser.href} class="block space-y-4 group" id="block">
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
</IntersectionObserver>
