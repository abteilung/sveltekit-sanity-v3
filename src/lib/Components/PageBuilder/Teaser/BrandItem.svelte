<script lang="ts">
  import Animation from '$lib/components/Animation.svelte'
  import IntersectionObserver from '$lib/components/IntersectionObserver.svelte'
  import Image from '$lib/elements/media/Image.svelte'

  export let teaser: any
  export let i: number
</script>

<IntersectionObserver let:intersecting once={true}>
  {#if intersecting}
    {#if teaser.image}
      <li class="group">
        <Animation iterator={i} delay={25} duration={250}>
          <a href={teaser.href} target="_blank">
            <Image
              block={teaser}
              width={483}
              height={244}
              alt={teaser.title}
              additionalClass="group-hover:scale-105 duration-300 transition-all"
            />
          </a>
        </Animation>
      </li>
    {/if}
  {/if}
</IntersectionObserver>
