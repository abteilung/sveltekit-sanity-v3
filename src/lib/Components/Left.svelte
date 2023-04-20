<script lang="ts">
  import Icons from '$lib/components/Icons.svelte'

  import ThemeToggleIcon from '$lib/components/ThemeToggleIcon.svelte'

  import AnimatedHamburger from '$lib/components/AnimatedHamburger.svelte'
  import {showSubMenu, subMenuItemsStore} from '$lib/stores/navigation'

  import Sidebar from '$lib/components/Shop/Sidebar.svelte'

  export let cart

  // Component Imports
  import Dropdown from '$lib/components/Navigation/Dropdown.svelte'
  import MenuLink from '$lib/components/Navigation/MenuLink.svelte'
  import MenuPage from '$lib/components/Navigation/MenuPage.svelte'

  export let navMenuMobile

  // Menu object with title, href
  export let menu: any = []

  // Menu for meta objects
  export let meta = [
    {
      title: 'Privacy Policy',
      href: '/privacy-policy'
    },
    {
      title: 'Imprint',
      href: '/imprint'
    }
  ]

  // Write submenus to navStore on Click
  const storeSubMenu = (navItems) => {
    subMenuItemsStore.set(navItems)
  }

  const hideSubMenus: any = () => {
    showSubMenu.set(false)
  }

  const showSubMenus: any = () => {
    showSubMenu.set(true)
  }
  export let activeClass: string = ''

  let width
</script>

<div class="navBar dark:bg-black" bind:clientWidth={width}>
  <div class="h-full">
    <div class="flex md:block justify-between items-center">
      <a href="/" on:click={hideSubMenus}>
        <Icons
          type="logo"
          additionalClass="stroke-white text-black dark:text-white w-full md:w-full h-full md:h-auto py-4 md:py-0"
        />
      </a>
      <AnimatedHamburger {navMenuMobile} />
    </div>
    <div class="mt-[100px] hidden md:block">
      <ul>
        {#each menu.items as menuItem}
          <li>
            {#if menuItem._type === 'navDropdown'}
              <div on:click={showSubMenus} on:click={storeSubMenu(menuItem.dropdownItems)}>
                {menuItem.title}
              </div>
            {:else}
              <MenuLink {menuItem} />
              <MenuPage {menuItem} />
            {/if}
          </li>
        {/each}
      </ul>
      <Sidebar {cart} />
    </div>
  </div>
  <div class="hidden md:flex mt-auto pt-[50px] mb-0">
    <div class="">
      <ul class="text-sm flex gap-4">
        {#each meta.items as menuItem}
          <li>
            <a class="whitespace-nowrap" href={menuItem.page?.href}>{menuItem.title || menuItem.pageTitle}</a>
            {#if menuItem._type === 'navDropdown'}
              ->
            {/if}
          </li>
        {/each}
      </ul>
      <ThemeToggleIcon additionalClass="text-black hover:text-primary dark:text-white dark:hover:text-primary" />
    </div>
  </div>
</div>

<style lang="postcss">
  .active {
    @apply text-primary;
  }
</style>
