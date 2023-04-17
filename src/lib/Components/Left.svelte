<script lang="ts">
  import Icons from '$lib/Components/Icons.svelte'

  import SearchBar from '$lib/Components/Shop/SearchBar.svelte'
  import AnimatedHamburger from '$lib/Components/AnimatedHamburger.svelte'
  import {cartQuantity} from '$lib/stores/shopify'
  import {showSubMenu, subMenuItemsStore} from '$lib/stores/navigation'
  import {createEventDispatcher} from 'svelte'

  import Open from '$lib/Components/Shop/Open.svelte'
  import Sidebar from '$lib/Components/Shop/Sidebar.svelte'

  export let cart

  // Component Imports
  import Dropdown from '$lib/Components/Navigation/Dropdown.svelte'
  import MenuLink from '$lib/Components/Navigation/MenuLink.svelte'
  import MenuPage from '$lib/Components/Navigation/MenuPage.svelte'

  export let navMenuMobile

  const dispatch = createEventDispatcher()

  function openCart() {
    dispatch('openCart', true)
    console.log('openCart: ', openCart)
  }

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

<div 
  class="navBar dark:bg-black"  
  bind:clientWidth={width}
>
  <div class="h-full">
    <div class="flex md:block justify-between items-center">
      <a href="/" on:click={hideSubMenus}>
        <Icons type="logo" additionalClass="text-primary w-full md:w-full h-full md:h-auto py-4 md:py-0" />
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
      Basket-Count: {$cartQuantity}
      <SearchBar />

      <Open />
      <Sidebar {cart} />

      <button on:click={openCart} class="relative my-2 mx-4">
        <Icons additionalClass="text-primary dark:text-white" type="cart" />
        <div
          data-test="cart-quantity"
          class="absolute bottom-0 left-0 -ml-3 -mb-3 flex h-5 w-5 items-center justify-center rounded-full border border-black bg-white dark:bg-primary text-xs text-black dark:text-white"
        >
          {$cartQuantity}
        </div>
      </button>
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
    </div>
  </div>
</div>

<style lang="postcss">
  .active {
    @apply text-primary;
  }
</style>
