<script lang="ts">
  import {writable} from 'svelte/store'
  import {browser} from '$app/environment'
  import {fade} from 'svelte/transition'
  import {onMount} from 'svelte'

  const showMenu = writable(false)

  // Toggle showMenu
  const toggleMenu = () => {
    showMenu.update((value) => !value)
  }

  // Function set showMenu to false on click ESC key
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      showMenu.set(false)
    }
  }

  // Menu Structore
  const menu = [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'About',
      href: '/about'
    },
    {
      title: 'Contact',
      href: '/contact'
    }
  ]
</script>

<svelte:window on:keydown={handleKeyDown} />

<div class="relative px-4 py-4 bg-black border-b border-gray-800 sm:px-6 lg:px-8">
  <div class="relative mx-auto max-w-7xl">
    <div class="flex items-center justify-between">
      <div class="relative z-20 shrink-0">
        <a href="/" title="" class="flex">
          <img class="w-auto h-8" src="/light.svg" alt="" />xx
        </a>
      </div>

      <div class="flex hidden sm:items-center sm:justify-end sm:space-x-4 md:block">
        <a
          href="https://www.sanity.io/docs/create-a-sanity-project?ref=chrisjayden-virtual-event-talk"
          title=""
          class="inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-white transition-all duration-200 border border-transparent rounded-full bg-dark-400 hover:bg-dark-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-900"
          role="button"
        >
          Start with Sanity.io
        </a>
      </div>
      <div class="relative z-50 text-white md:hidden" on:click={() => toggleMenu()}>{$showMenu}</div>
    </div>
  </div>
</div>

{#if $showMenu}
  <div
    in:fade={{duration: 200}}
    out:fade={{duration: 200}}
    class="absolute inset-0 top-0 left-0 z-10 flex items-center justify-center w-full h-full text-white bg-black/80 overlay"
  >
    <div>
      <nav>
        <ul class="text-3xl text-center">
          {#each menu as menuItem}
            <li>{menuItem.title}</li>
          {/each}
        </ul>
      </nav>
    </div>
  </div>
{/if}
