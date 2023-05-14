<script lang="ts">
  // Svelte Imports
  import {getContext} from 'svelte'
  import {slide} from 'svelte/transition'
  import classNames from 'classnames'

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

<div class:active={isCurrentActive}>
  <div class={classNames(isCurrentActive ? 'p-8 mb-12' : '')}>
    <button
      on:click={onClickHandler}
      class="flex items-center w-full text-left focus:outline-none pb-4 mb-4 border-dashed border-b-black/30 border-b-[1px]"
    >
      <div class="w-full transition text-xl">
        {title}
      </div>

      <div class="w-8 transition text-primary transform" class:rotate-45={isCurrentActive}>
        <Icons type="plus" additionalClass="w-full h-full" />
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
</div>

<style lang="postcss">
  .active {
    @apply shadow-xl shadow-black/30  transition-all -my-4 -mx-8;
  }
</style>
