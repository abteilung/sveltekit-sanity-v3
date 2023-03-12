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

  $: HeaderImage.set(urlForImage($postData.post.mainImage).width(1344).height(736).url())
</script>

<svelte:head>
  <title>{$postData?.post?.title || 'Post'}</title>
</svelte:head>

<button>Weiterlesen</button>
{#if $postData?.post}
  <div>
    <h1 class="h4">{$postData.post.subtitle}</h1>
    <h2 class="text-4xl">{$postData.post.title}</h2>
    <div class="mt-3 flex items-center">
      {#if $postData.post.author}
        <div class="flex-shrink-0">
          <span class="sr-only">Image</span>
          <img
            class="h-10 w-10 rounded-full"
            src={urlForImage($postData.post.author.image).crop('focalpoint').width(256).height(256).url()}
            alt=""
          />
        </div>
      {/if}
      <div class="ml-3">
        <p class="text-sm font-medium text-white mb-0">{$postData.post.author.name}</p>
        <div class="flex space-x-1 text-sm text-gray-400">
          <time datetime="2020-03-16">
            {new Date($postData.post.date).toLocaleDateString()}
          </time>
        </div>
      </div>
    </div>
  </div>
  <div>
    {#if $postData.post.body}
      <PortableBlock content={$postData.post.body} />
    {/if}
  </div>
{/if}
