<script lang="ts">
import { onMount } from 'svelte'
import { fade } from 'svelte/transition'
	import Icons from '$lib/Components/Icons.svelte'


  // Menu object with title, href
  const menu = [
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
  const meta = [
    {
      title: 'Privacy Policy',
      href: '/privacy-policy'
    },
    {
      title: 'Terms of Use',
      href: '/terms-of-use'
    },
    {
      title: 'Sitemap',
      href: '/sitemap'
    }
  ]

  let isLoaded: boolean = false

  onMount (() => {
	isLoaded = true
  })
</script>

<div class="navBar">
  <div class="h-full">
	<Icons icon="logo" additionalClass="text-primary w-[123px] sm:w-[135px] md:w-full h-full md:h-auto py-4 md:py-0" />
    <div class="mt-[100px] hidden md:block ">
      <ul>
        {#each menu as menuItem}
          <li>
            <a href={menuItem.href}>{menuItem.title}</a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
  <div class="hidden md:flex mt-auto pt-[50px] mb-0">
    <div class="">
      <ul class="">
        {#each meta as metaItem}
          <li>
            <a href={metaItem.href}>{metaItem.title}</a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>