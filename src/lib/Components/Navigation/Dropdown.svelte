<script lang="ts">
  import classNames from 'classnames'
  import {fade, fly} from 'svelte/transition'
  import {cubicInOut} from 'svelte/easing'
  import {browser} from '$app/environment'
  import {onMount} from 'svelte'
  // Store Imports
  import {page} from '$app/stores'
  import {showSubMenu, subMenuItemsStore} from '$lib/stores/navigation'

  export let menuItem: any

  // Function to write menuItems to subbMenuItemsStore
  const fillStore = () => {
    subMenuItemsStore.set(menuItem.dropdownItems)
  }

  const showSubMenus = () => {
    showSubMenu.set(true)
  }

  // Component Imports
  import MenuLink from '$lib/components/Navigation/MenuLink.svelte'
  import MenuPage from '$lib/components/Navigation/MenuPage.svelte'
  import Menu from '$lib/components/Navigation/Menu.svelte'

  // API
  // Reactive variable for width
  export let width: number
  export let top: number

  let style: string
  $: {
    style = '--firstlevel-offset:' + width + 'px;'
  }

  // Press Escape to set showSubMenu to false
  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      showSubMenu.set(false)
    }
  }

  // Function to set store to false
  const closeSubMenu = () => {
    showSubMenu.set(false)
  }

  $: if (browser && $showSubMenu) {
    document.body.classList.add('modal-open')
  } else if (browser && !$showSubMenu) {
    // Add Delay
    setTimeout(() => {
      document.body.classList.remove('modal-open')
    }, 350)
  }
</script>

<svelte:window on:keydown={handleEscape} />

{#if menuItem._type === 'navDropdown'}
  <button on:click={fillStore} on:click={showSubMenus}>
    {menuItem.title || menuItem.pageTitle}
  </button>
  {#if $showSubMenu}
    <div
      in:fade={{duration: 200}}
      out:fade={{duration: 200}}
      class="fixed firstLevel top-0 z-50 w-96 bg-light bg-opacity-50 h-screen backdrop-blur-lg"
      {style}
    >
      <div class=" absolute px-12 w-full" style={'margin-top: ' + top + 'px;'}>
        {#each $subMenuItemsStore as submenu, i}
          {#key submenu}
            <li in:fly={{x: -50, duration: 25, easing: cubicInOut, opacity: 0, delay: 50 * i}}>
              <MenuLink menuItem={submenu} />
              <MenuPage menuItem={submenu} />

              {#if submenu.dropdownItems}
                <Menu navigationTitle={submenu.title} items={submenu.dropdownItems} />
              {/if}
            </li>
          {/key}
        {/each}
      </div>
    </div>
  {/if}
{/if}

<style lang="postcss">
  .firstLevel {
    left: var(--firstlevel-offset);
  }

  .open {
    @apply text-primary;
  }

  .navigationItem:not(.open) {
    display: none;
  }
</style>
