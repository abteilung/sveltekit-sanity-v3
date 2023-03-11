<script lang="ts">
  import {urlForImage} from '$lib/config/sanity'
  import type {PageData} from './$types'

  export let data: PageData

  $: ({posts} = data)
</script>

<svelte:head>
  <title>Layout with left Navigation and revealing Footer</title>
</svelte:head>

<div class="grid w-full grid-cols-3">
  {#each posts as post}
    <div class="post">
      <a href={post.href} class="block space-y-4">
        <img src={urlForImage(post.mainImage).width(500)} alt={post.title} />
        <div>
          <h4 class="mb-2">{post.subtitle}</h4>
          <h3>{post.title}</h3>
        </div>
      </a>
    </div>
  {/each}
</div>
