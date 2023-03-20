<script lang="ts">
  import {previewSubscription} from '$lib/config/sanity'
  import {getPostBySlug} from '$lib/config/sanity/queries'
  import {urlForImage} from '$lib/config/sanity'
  import type {PageData} from './$types'
  import PortableBlock from '$lib/Components/PortableBlock.svelte'

  import Header from '$lib/Components/Header.svelte'

  import {HeaderImage} from '$lib/Stores/Stores.ts'

  export let data: PageData

  $: ({initialData, previewMode, slug} = data)
  $: ({data: postData} = previewSubscription(getPostBySlug, {
    params: {slug},
    initialData,
    enabled: previewMode && !!slug
  }))

  $: HeaderImage.set(urlForImage($postData.post.mainImage, 1344, 736))
</script>

<svelte:head>
  <title>{$postData?.post?.title || 'Post'}</title>
</svelte:head>

{#if $postData?.post}
  <h1 class="eyebrow">{$postData.post.subtitle}</h1>
  <h2 class="text-4xl leading-tight">{$postData.post.title}</h2>
  <div class="mt-3 flex items-center mb-12">
    {#if $postData.post.author}
      <div class="flex-shrink-0">
        {#if $postData.post.author.image}
          <img
            class="h-10 w-10 rounded-full"
            src={urlForImage($postData.post.author.image, 128, 128)}
            alt={$postData.post.author.name}
          />
        {/if}
      </div>
    {/if}
    <div class="ml-3">
      <p class="text-sm font-medium mb-0">{$postData.post.author.name}</p>
      <time datetime="2020-03-16">
        {new Date($postData.post.date).toLocaleDateString()}
      </time>
    </div>
  </div>
  {#if $postData.post.body}
    <PortableBlock content={$postData.post.body} />
  {/if}
{/if}
