<script lang="ts">
  // Sveltekit Imports
  import {fade, fly, crossfade} from 'svelte/transition'

  // cubicInOut
  import {cubicInOut} from 'svelte/easing'
  import MenuLink from '$lib/Components/Navigation/MenuLink.svelte'
  import MenuPage from '$lib/Components/Navigation/MenuPage.svelte'

  // Stores
  import {page} from '$app/stores'
  import {showSubMenu, subMenuItemsStore} from '$lib/stores/navigation'

  // empty store on ESC click
  function closeNavigation(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      showSubMenu.set(false)
    }
  }

  $: isVisible = showSubMenu
</script>

<svelte:window on:keydown={closeNavigation} />

{#if $isVisible}
  <div
    in:fade={{duration: 150, easing: cubicInOut}}
    out:fade={{duration: 150, easing: cubicInOut, delay: $subMenuItemsStore.length * 50}}
    class="absolute inset-0 bg-dark/70 z-50 text-white"
  >
    <div class="contentArea py-48">
      <div class="space-y-8 grid grid-cols-2">
        {#each $subMenuItemsStore as item, i}
          <div
            in:fly={{x: 150, y: -20, duration: 150, easing: cubicInOut, delay: i * 50}}
            out:fly={{x: -50, y: -20, duration: 150, easing: cubicInOut, delay: i * 50}}
          >
            <MenuLink menuItem={item} />
            <MenuPage menuItem={item} />
          </div>
        {/each}
      </div>
    </div>
  </div>
{/if}
