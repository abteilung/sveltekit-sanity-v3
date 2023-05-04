<script lang="ts">
  // Svelte Imports
  import {getContext} from 'svelte'
  import {slide} from 'svelte/transition'

  // components
  import PortableBlock from '$lib/components/PortableBlock.svelte'
  import Icons from '$lib/elements/media/Icons.svelte'

  // API
  export let id
  export let title
  export let content = ''

  const active = getContext('context')

  $: isCurrentActive = $active === id

  const onClickHandler = () => {
    if (isCurrentActive) {
      $active = false
    } else {
      $active = id
    }
  }

  // calculate height of div
  const getHeight = (node) => {
    return node.scrollHeight
  }
</script>

<div class="w-full p-4 shadow-lg">
  <button
    on:click={onClickHandler}
    class:active={isCurrentActive}
    class="flex items-center w-full text-left focus:outline-none"
  >
    <div class="w-full transition">{title}</div>

    <div class="w-8 transition transform" class:rotate-90={isCurrentActive}>
      <Icons type="arrow-right" />
    </div>
  </button>
  {#if isCurrentActive}
    <div transition:slide class="[&>*:last-of-type]:mb-0">
      {#if content}
        <PortableBlock {content} />
      {/if}
    </div>
  {/if}
</div>
