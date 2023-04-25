<script lang="ts">
  import {writable} from 'svelte/store'

  // Stores for Menu States
  let menuWidth = writable(0)
  let menuTop = writable(0)

  import Icons from '$lib/components/Icons.svelte'
  import ThemeToggleIcon from '$lib/components/ThemeToggleIcon.svelte'
  import AnimatedHamburger from '$lib/components/AnimatedHamburger.svelte'

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

  export let activeClass: string = ''
</script>

<div class="navBar dark:bg-black" bind:clientWidth={$menuWidth}>
  <div class="h-full">
    <div class="flex md:block justify-between items-center">
      <a href="/">
        <Icons
          type="logo"
          additionalClass="stroke-white text-black dark:text-white w-full md:w-full h-full md:h-auto py-4 md:py-0"
        />
      </a>
      <AnimatedHamburger {navMenuMobile} />
    </div>
    <div class="mt-[100px] hidden md:block">
      <ul bind:offsetHeight={$menuTop}>
        {#each menu.items as menuItem}
          <li>
            <Dropdown {menuItem} width={$menuWidth} top={$menuTop} />
            <MenuLink {menuItem} />
            <MenuPage {menuItem} />
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
