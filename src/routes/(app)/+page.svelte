<script lang="ts">
  import {urlForImage} from '$lib/config/sanity'
  import type {PageData} from './$types'

  import Image from '$lib/Components/PT/Image.svelte'

  export let data: PageData

  $: ({posts} = data)
</script>

<svelte:head>
  <title>Layout with left Navigation and revealing Footer</title>
</svelte:head>

<div class="grid w-full grid-cols-2">
  {#each posts as post}
    <div class="post">
      <a href={post.href} class="block space-y-4">
        {#if post.mainImage}
          {JSON.stringify(post.mainImage.asset)}
        {/if}
        <div>
          <h4 class="mb-2">{post.subtitle}</h4>
          <h3>{post.title}</h3>
        </div>
      </a>
    </div>
  {/each}
</div>
