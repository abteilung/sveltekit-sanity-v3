<script lang="ts">
  import {previewSubscription} from '$lib/config/sanity'
  import {getPostBySlug} from '$lib/config/sanity/queries'
  import {urlForImage} from '$lib/config/sanity'
  import type {PageData} from './$types'
  import PortableBlock from '$lib/Components/PortableBlock.svelte'

  export let data: PageData

  $: ({initialData, previewMode, slug} = data)
  $: ({data: postData} = previewSubscription(getPostBySlug, {
    params: {slug},
    initialData,
    enabled: previewMode && !!slug
  }))
</script>

<svelte:head>
  <title>{$postData?.post?.title || 'Post'}</title>
</svelte:head>
{#if $postData?.post}
  <div class="relative w-full bg-black min-h-screen px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
    <div class="relative mx-auto max-w-2xl">
      <div class="w-full space-y-8">
        <div>
          <a href="/" class="hover:underline font-bold text-sm text-white">← Back to home</a>
        </div>

        <div>
          <h1 class="h4">{$postData.post.subtitle}</h1>
          <h4 class="text-4xl">{$postData.post.title}</h4>
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
        {#if $postData.post.mainImage}
          <img
            class="h-92 w-full object-cover rounded-xl mb-10"
            src={urlForImage($postData.post.mainImage).width(1344).height(736).url()}
            alt={$postData.post.mainImage.alt}
          />
        {/if}
        <div>
          {#if $postData.post.body}
            <PortableBlock content={$postData.post.body} />
          {/if}
        </div>
      </div>
    </div>
  </div>
{/if}
