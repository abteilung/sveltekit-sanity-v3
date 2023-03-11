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
        <img src={urlForImage(post.mainImage).width(500).url()} />
        <h2>{post.title}</h2>
        <p>{post.excerpt}</p>
    </div>
    {/each}
  </div>
