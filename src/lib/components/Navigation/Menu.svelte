<script lang="ts">
  import {onMount} from 'svelte'
  import {fade} from 'svelte/transition'
  import {page} from '$app/stores'

  import Icon from '$lib/components/Icons.svelte'

  // Dropdown Navigation Stuff
  export let navigationTitle: string
  export let items: Array<{title: string; href: string}>
  let show = false // menu state
  let menu = null // menu wrapper DOM reference

  onMount(() => {
    //   const handleOutsideClick = (event) => {
    //     if (show && !menu.contains(event.target)) {
    //       show = false
    //     }
    //   }

    // add events when element is added to the DOM
    //   document.addEventListener('click', handleOutsideClick, false)
    //   document.addEventListener('keyup', handleEscape, false)

    // remove events when element is removed from the DOM
    return () => {
      // document.removeEventListener('click', handleOutsideClick, false)
      // document.removeEventListener('keyup', handleEscape, false)
    }
  })
  $: currentRoute = $page.url.pathname
</script>

<div bind:this={menu}>
  <button
    on:click={() => (show = !show)}
    class="menu flex w-full justify-between items-center focus:outline-none focus:shadow-solid user-title"
  >
    <div>{navigationTitle}</div>
    <Icon type="caretRight" additionalClass={show ? 'rotate-90' : ''} />
  </button>

  {#if show}
    <div
      in:fade={{opacity: 1, duration: 200, start: 0.95}}
      out:fade={{opacity: 1, duration: 200, delay: 150}}
      class="origin-top-left left-0 w-full px-4"
    >
      <div
        on:click={() => {
          show = false
        }}
      >
        {#each items as item}
          <a
            href={item.href}
            class="duration-300 block text-sm p-2 text-dark underline decoration-transparent underline-offset-2 hover:decoration-dark"
            class:is-active={currentRoute == '/service' + (item.slug ? '/' + item.slug : '')}
          >
            {item.title || item.pageTitle}
          </a>
        {/each}
      </div>
    </div>
  {/if}
</div>

<style lang="postcss">
  .is-active {
    @apply decoration-dark;
  }
</style>
