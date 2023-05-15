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

<div class="group hover:shadow-2xl hover:-my-4 hover:-mx-8" class:active={isCurrentActive}>
  <div class={classNames(isCurrentActive ? 'p-8 mb-8 pt-4' : 'group-hover:px-8 group-hover:pt-4 group-hover:mb-8')}>
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
    @apply shadow-2xl transition-all -my-4 -mx-8;
  }
</style>
