<script lang="ts">
  import {goto} from '$app/navigation'
  import Modal from '$lib/components/Modal.svelte'

  export let slug: string
  export let title

  // Import components
  import Header from '$lib/layout/Header.svelte'
  import PageBuilder from '$lib/components/PageBuilder/PageBuilder.svelte'

  // Export Data
  export let data: PageData
  $: ({page} = data)

  // Update Likes in Synity.io
  const addLike = async () => {
    const _id = page._id
    const response = await fetch('/api/like', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({_id})
    })
    const data = await response.json()
    console.log(data)
    // goto(`/produkte/${slug}`)
  }
</script>

{#if page}
  <Header bgImage={page.image} pageTitle={page.title} />
  <Modal />

  <form>
    <button class="bg-black text-white px-4 py-2" on:click={addLike}>Like</button>
  </form>

  Likes: {page.likes}
  <br />

  <div class="contentArea">
    {#if page.subtitle}
      <h1 class="h3 mb-0">{page.subtitle}</h1>
      <h2 class="text-4xl">{page.title}</h2>
    {:else}
      <h1>{page.title}</h1>
    {/if}
  </div>
  <PageBuilder blocks={page.content} />
{/if}
