<script lang="ts">
  import {page} from '$app/stores'
  // Import components
  import {urlForImage} from '$lib/config/sanity'
  import PortableBlock from '$lib/components/PortableBlock.svelte'
  import Header from '$lib/components/Header/Header.svelte'

  import GridItem from '$lib/components/PageBuilder/Teaser/GridItem.svelte'

  // Export Data
  export let data: PageData
  $: ({post} = data)
</script>

<svelte:head>
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={post.current.title} />
  <meta name="twitter:description" content={post.current.subtitle} />
  <meta name="Description" content={post.current.subtitle} />

  <meta name="twitter:image" content={$page.url + '/card.png'} />
  <meta name="og:image" content={$page.url + '/card.png'} />
</svelte:head>

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

<div class="contentArea">
  <h3>PREV & NEXT Post</h3>
  <ul class="grid grid-cols-2">
    {#if post.next}
      <GridItem teaser={post.next} />
    {/if}
    {#if post.previous}
      <GridItem teaser={post.previous} />
    {/if}
  </ul>
</div>
