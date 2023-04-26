<script lang="ts">
  import classNames from 'classnames'
  import {fade} from 'svelte/transition'
  // Store Imports
  import {page} from '$app/stores'
  import {navStore} from '$lib/stores/navigation'

  // Component Imports
  import MenuLink from '$lib/components/Navigation/MenuLink.svelte'
  import MenuPage from '$lib/components/Navigation/MenuPage.svelte'
  import Menu from '$lib/components/Navigation/Menu.svelte'

  // Function to toggle open subMenu Block (with ID)
  let open = {}
  const toggle = (name) => (open[name] = !open[name])

  // API
  export let menuItem: string
  // Reactive variable for width
  export let width: number
  export let top: number

  let activeClass: string = ''
  let style: string

  $: {
    style = '--firstlevel-offset:' + width + 'px;'
  }
</script>

<!-- Dropdown Navigation First Level-->
{#if menuItem._type === 'navDropdown'}
  <button
    class={classNames(activeClass, '')}
    class:open={open[menuItem]}
    on:click|preventDefault={() => toggle(menuItem)}
  >
    {menuItem.title || menuItem.pageTitle}
  </button>
  <div
    in:fade={{duration: 200}}
    out:fade={{duration: 200}}
    class:open={open[menuItem]}
    class="fixed firstLevel top-0 z-50 w-96 bg-dark bg-opacity-30 h-screen backdrop-blur-lg"
    {style}
  >
    <div class=" absolute px-12 w-full" style={'margin-top: ' + top + 'px;'}>
      <ul class="">
        {#each menuItem.dropdownItems as submenu}
          <li>
            <MenuLink menuItem={submenu} />
            <MenuPage menuItem={submenu} />

            {#if submenu.dropdownItems}
              <Menu navigationTitle={submenu.title} items={submenu.dropdownItems} />
            {/if}
          </li>
        {/each}
      </ul>
    </div>
  </div>
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
