<script lang="ts">
  import {onMount} from 'svelte'
  import Icons from '$lib/Components/Icons.svelte'
  import navDropdown from '$lib/config/sanity/schemas/objects/nav-dropdown'

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

  let isLoaded: boolean = false

  onMount(() => {
    isLoaded = true
  })
</script>

<div class="navBar">
  <div class="h-full">
    <a href="/">
      <Icons
        icon="logo"
        additionalClass="text-primary w-[123px] sm:w-[135px] md:w-full h-full md:h-auto py-4 md:py-0"
      />
    </a>
    <div class="mt-[100px] hidden md:block ">
      <ul>
        {#each menu.items as menuItem}
          <li>
            <a href={menuItem.page?.href}>{menuItem.title || menuItem.pageTitle}</a>
            {#if menuItem._type === 'navDropdown'}
              (navDropdown)
            {/if}
            {#if menuItem._type === 'navLink'}
              (navLink)
            {/if}
          </li>
        {/each}
      </ul>
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
