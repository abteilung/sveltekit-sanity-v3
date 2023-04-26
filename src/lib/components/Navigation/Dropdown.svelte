<script lang="ts">
  import {fade} from 'svelte/transition'
  // Store Imports
  import {page} from '$app/stores'

  export let expanded: boolean = false

  // Component Imports
  import MenuLink from '$lib/components/Navigation/MenuLink.svelte'
  import MenuPage from '$lib/components/Navigation/MenuPage.svelte'
  import Dropdown from '$lib/components/Navigation/Dropdown.svelte'

  import Accordion from '$lib/components/PT/Accordion.svelte'

  // Function to toggle expanded subMenu Block (with ID)
  const toggleExpanded = () => {
    expanded = !expanded
  }

  // API
  export let menuItem: string
  // Reactive variable for width
  export let width: number
  export let top: number

  let menuClass: string = ''
  let activeClass: string = ''
  let style: string
  
  $: {
    style = '--firstlevel-offset:' + width + 'px;'
  }
</script>

<!-- Dropdown Navigation First Level-->
{#if menuItem._type === 'navDropdown'}
  <button class={activeClass} on:click={toggleExpanded}>
    {menuItem.title || menuItem.pageTitle}
  </button>
  {#if expanded}
    <div
      in:fade={{duration: 200}}
      out:fade={{duration: 200}}
      class="bg-dark bg-opacity-30 h-screen backdrop-blur-lg fixed firstLevel w-96 top-0 z-50 p-12"
      {style}
    >
    {#if menuItem.dropdownItems}
        <ul class="absolute" style={'top: ' + top + 'px;'}>
          {#each menuItem.dropdownItems as submenu}
            <li>
              <MenuLink menuItem={submenu} />
              <MenuPage menuItem={submenu} />

              {#if submenu.dropdownItems}
                {#each submenu.dropdownItems as subSubmenu}
                  <MenuLink menuItem={subSubmenu} />
                  <MenuPage menuItem={subSubmenu} />
                  {#if subSubmenu._type === 'navDropdown'}
                  <button class={activeClass} on:click={toggleExpanded}>
                    <div>{subSubmenu.title || subSubmenu.pageTitle}</div>
                  </button>
                  {/if}
                {/each}
              {/if}

            </li>
          {/each}
        </ul>
      {/if}
    </div>
  {/if}
{/if}

<style lang="postcss">
  .firstLevel {
    left: var(--firstlevel-offset);
  }
</style>
