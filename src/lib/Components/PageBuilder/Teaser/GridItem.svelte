<script lang="ts">
  import Animation from '$lib/components/Animation.svelte'
  import IntersectionObserver from '$lib/components/IntersectionObserver.svelte'
  import Image from '$lib/components/PageBuilder/Image.svelte'

  export let teaser: any
  export let i: number
</script>

<IntersectionObserver let:intersecting once={true}>
  {#if intersecting}
    {#if teaser.image}
      <li>
        <Animation iterator={i}>
          <a href={teaser.href} class="block space-y-4 group" id="block">
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
        </Animation>
      </li>
    {/if}
  {/if}
</IntersectionObserver>
