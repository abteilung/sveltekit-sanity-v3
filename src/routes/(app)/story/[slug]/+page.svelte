<script lang="ts">
  // Import Types
  import type {PageData} from './$types'

  // Import Components
  import {urlForImage} from '$lib/config/sanity'
  import PortableBlock from '$lib/Components/PortableBlock.svelte'
  import Header from '$lib/Components/Header.svelte'

  // Export Data
  export let data: PageData
  $: ({post} = data)
</script>

<svelte:head />

{#if post}
  <Header pageTitle={post.current.title} subTitle={post.current.subtitle} bgImage={post.current.image} />

  <div class="contentArea">
    {#if post.current.subtitle}
      <h1 class="h3 mb-0">{post.current.subtitle}</h1>
      <h2 class="text-4xl">{post.current.title}</h2>
    {:else}
      <h1>{post.current.pageTitle}</h1>
    {/if}

    <div class="mt-3 flex items-center mb-12">
      {#if post.current.author}
        <div class="flex-shrink-0">
          {#if post.current.author.image}
            <img
              class="h-10 w-10 rounded-full"
              src={urlForImage(post.current.author.image, 128, 128)}
              alt={post.current.author?.name}
            />
          {/if}
        </div>
      {/if}
      <div class="ml-3">
        <p class="text-sm font-medium mb-0">{post.current.author?.name}</p>
        <time datetime="2020-03-16">
          {new Date(post.current.date).toLocaleDateString()}
        </time>
      </div>
    </div>
    {#if post.current.body}
      <PortableBlock content={post.current.body} />
    {/if}
  </div>
{/if}

<!-- 
  {JSON.stringify(post.previous)}
  {JSON.stringify(post.next)} 
-->
