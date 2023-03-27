<script lang="ts">
  // Store Imports
  import {page} from '$app/stores'

  // Component Imports
  import MenuLink from '$lib/Components/Navigation/MenuLink.svelte'
  import MenuPage from '$lib/Components/Navigation/MenuPage.svelte'
  import Dropdown from '$lib/Components/Navigation/Dropdown.svelte'

  // Button to toggle submenus
  const toggleSubmenu = (e: any) => {
    const target = e.target
    const parent = target.parentNode
    const subMenu = parent.querySelector('.subMenu')

    if (subMenu) {
      subMenu.classList.toggle('hidden')
    }
  }

  // API
  export let menuItem: string
  export let width: number
  let activeClass: string = ''
</script>

<!-- Dropdown Navigation First Level-->
{#if menuItem._type === 'navDropdown'}
  <button class={activeClass} on:click={toggleSubmenu}>{menuItem.title || menuItem.pageTitle}</button>
  {#if menuItem.dropdownItems}
    <ul class="subMenu firstLevel hidden" style="--firstlevel-offset: {width}px">
      {#each menuItem.dropdownItems as submenu}
        <li>
          <MenuLink menuItem={submenu} />
          <MenuPage menuItem={submenu} />

          <!-- Dropdown Navigation Consecutive Levels-->
          {#if submenu._type === 'navDropdown'}
            <button on:click={toggleSubmenu}>{submenu.title || submenu.pageTitle}</button>
          {/if}
          {#if submenu.dropdownItems}
            <Dropdown menuItem={submenu} />
          {/if}
        </li>
      {/each}
    </ul>
  {/if}
{/if}

<style lang="postcss">
  .subMenu {
    @apply text-primary w-96 bg-white/80 p-4;
    @apply absolute top-0;
  }
  .firstLevel {
    left: var(--firstlevel-offset);
  }
</style>
