<script lang="ts">
  import {fly} from 'svelte/transition'

  import IntersectionObserver from '$lib/Components/IntersectionObserver.svelte'
  import Image from '$lib/Components/PageBuilder/Image.svelte'

  export let teaser: any
  export let i: number
</script>

<IntersectionObserver let:intersecting top={200} once={true}>
  {#if intersecting}
    {#if teaser.image}
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
</IntersectionObserver>
