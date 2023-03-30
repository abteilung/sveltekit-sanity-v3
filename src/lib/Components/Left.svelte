<script lang="ts">
  import Icons from '$lib/Components/Icons.svelte'
  import MultilevelNavigation from '$lib/Components/Navigation/MultilevelNavigation.svelte'

  import SearchBar from '$lib/Components/Shop/SearchBar.svelte'
  import {cartQuantity} from '$lib/Stores/Shopify'
  import {createEventDispatcher} from 'svelte'

  const dispatch = createEventDispatcher()

  function openCart() {
    dispatch('openCart', true)
    console.log('openCart: ', openCart)
  }

  // Menu object with title, href
  export let menu = [
    {
      title: 'Home',
      href: '/',
      submenus: []
    },
    {
      title: 'About',
      href: '/about',
      submenus: []
    },
    {
      title: 'Services',
      href: '/services'
    },
    {
      title: 'Contact',
      href: '/contact',
      submenus: []
    }
  ]

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

  let width
</script>

<div class="navBar" bind:clientWidth={width}>
  <div class="h-full">
    <a href="/">
      <Icons
        icon="logo"
        additionalClass="text-primary w-[123px] sm:w-[135px] md:w-full h-full md:h-auto py-4 md:py-0"
      />
    </a>
    <div class="mt-[100px] hidden md:block">
      <MultilevelNavigation {menu} {width} />

      Basket-Count: {$cartQuantity}
      <SearchBar />

      <button on:click={openCart} class="relative my-2 mx-4">
        <Icons strokeColor="#fff" type="cart" />
        <div
          data-test="cart-quantity"
          class="absolute bottom-0 left-0 -ml-3 -mb-3 flex h-5 w-5 items-center justify-center rounded-full border border-black bg-white text-xs text-black"
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
