<script lang="ts">
  import {page} from '$app/stores'

  // Component Imports
  import Dropdown from '$lib/elements/navigation/Dropdown.svelte'
  import MenuLink from '$lib/elements/navigation/MenuLink.svelte'
  import MenuPage from '$lib/elements/navigation/MenuPage.svelte'

  // API
  export let menu: any = []
  export let width

  // set activeClass if page is active
</script>

<nav class="multiLevelNavigation">
  <ul>
    {#each menu.items as menuItem}
      <li class="relative">
        <Dropdown {menuItem} {width} />
        <MenuLink {menuItem} />
        <MenuPage {menuItem} />
      </li>
    {/each}
  </ul>
</nav>
