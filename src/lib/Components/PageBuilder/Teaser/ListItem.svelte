<script lang="ts">
  import {fly} from 'svelte/transition'

  import IntersectionObserver from '$lib/components/IntersectionObserver.svelte'
  import Image from '$lib/elements/media/Image.svelte'

  export let teaser: any
  export let i: number
</script>

<IntersectionObserver let:intersecting once={true}>
  {#if intersecting}
    {#if teaser.image}
      <li class="py-2 my-2" in:fly={{x: -50, y: -20, delay: i * 75, duration: 500, opacity: 0}}>
        <a href={teaser.href} class="grid items-top grid-cols-4 group">
          {#if teaser.image}
            <div class="overflow-hidden">
              <Image block={teaser} additionalClass="group-hover:scale-105 duration-300 transition-all" />
            </div>
          {/if}
          <div class="col-span-3">
            <h4 class="mb-2">{teaser.subtitle}</h4>
            <h3 class="mb-0">{teaser.title}</h3>
          </div>
        </a>
      </li>
    {/if}
  {/if}
</IntersectionObserver>
