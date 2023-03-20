<script lang="ts">
  import {onMount} from 'svelte'
  import Icons from '$lib/Components/Icons.svelte'

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

  // Button to toggle submenus
  const toggleSubmenu = (e: any) => {
    const target = e.target
    const parent = target.parentNode
    const subMenu = parent.querySelector('.subMenu')

    if (subMenu) {
      subMenu.classList.toggle('hidden')
    }
  }
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
      <nav class="multiLevelNavigation">
        <ul>
          {#each menu.items as menuItem}
            <li>

              <!-- Dropdown Navigation -->
              {#if menuItem._type === 'navDropdown'}
                <button on:click={toggleSubmenu}>{menuItem.title || menuItem.pageTitle}</button>

                {#if menuItem.dropdownItems}
                  <ul class="subMenu hidden ml-8">
                    {#each menuItem.dropdownItems as submenu}
                      <li>

                        <!-- Dropdown Navigation -->
                        {#if submenu._type === 'navDropdown'}
                          <button on:click={toggleSubmenu}>{submenu.title || submenu.pageTitle}</button>
                        {:else}
                          <a href={submenu.page?.href}>{submenu.title || submenu.pageTitle}</a>
                        {/if}

                        {#if submenu.dropdownItems}
                          <ul class="subMenu hidden ml-8">
                            {#each submenu.dropdownItems as submenu}
                              <li>
                                <a href={submenu.page?.href}>{submenu.title || submenu.pageTitle}</a>
                              </li>
                            {/each}
                          </ul>
                        {/if}

                      </li>
                    {/each}
                  </ul>
                {/if}
                  <!-- Just Links -->
                {:else if menuItem._type === 'navLink'}
                <a href={menuItem.url} target={menuItem.target}>{menuItem.title}</a>

                <!-- Links to Pages -->
              {:else if menuItem._type === 'navPage'}
                <a href={menuItem.page?.href}>{menuItem.title || menuItem.pageTitle}</a>
              {:else}
                <span class="text-sm text-alert">Link is of undefined type</span>
              {/if}
            </li>
          {/each}
        </ul>
      </nav>
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
