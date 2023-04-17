<script>
  import {page} from '$app/stores'
  import {goto} from '$app/navigation'

  import Icons from '$lib/Components/Icons.svelte'

  let value = $page.url.searchParams.get('q')

  async function submit(e) {
    let query = new URLSearchParams()
    if (value) {
      query.set('q', value)
    }
    await goto(`/shop/search${query ? `?${query}` : ''}`, {keepFocus: true})
  }
</script>

<form on:submit|preventDefault={submit} class="relative flex w-full items-center border-primary border-2">
  <input
    id="searchInput"
    type="text"
    bind:value
    placeholder="Search for products..."
    autocomplete="off"
    class="w-full border border-white/30 bg-transparent p-2 placeholder-primary/60 border-transparent focus:border-transparent focus:ring-0"
  />
  <div class="top-0 right-0 mr-2 cursor-pointer" on:click={submit}><Icons type="search" /></div>
</form>
