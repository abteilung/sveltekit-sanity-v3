<script lang="ts">
  import Footer from '$lib/layout/Footer.svelte'
  import Left from '$lib/layout/Left.svelte'
  import Favicons from '$lib/elements/media/Favicons.svelte'

  import {navigating} from '$app/stores'
  import {page} from '$app/stores'
  import {fade} from 'svelte/transition'
  import {cubicInOut} from 'svelte/easing'

  import SearchBar from '$lib/elements/shop/SearchBar.svelte'
  import Open from './shop/cart/Open.svelte'
  import {cartItemCount} from '$lib/stores/shopify'

  export let data: any

  // Set cartItemCount with value from server
  $: cartItemCount.set(data.cartItemsCount.length)
  $: siteConfig = data.layoutData.siteConfig
  $: menus = data.layoutData.menus
  $: dsgvo = data.layoutData.dsgvoSettings
  $: ({cart} = data)
</script>

<svelte:head>
  <Favicons iconImage={siteConfig.favicon} />
</svelte:head>

<div class="wrapper">
  <Left menu={menus.navMenuHeader} meta={menus.navMenuMeta} navMenuMobile={menus.navMenuMobile} {cart} />
  <div class="content">
    <div class="fixed px-6 py-2 space-x-6 top-6 right-6 rounded-full bg-black text-white z-40">
      <div class="flex space-x-4">
        <Open />
        <SearchBar />
        <button class="whitespace-nowrap">f X</button>
        <button class="whitespace-nowrap">f Y</button>
      </div>
    </div>
    {#key $page.url}
      <slot />
    {/key}
  </div>
</div>

<!-- {JSON.stringify(menus)} -->
<Footer {dsgvo} menu={menus.navMenuFooter} contact={siteConfig.contact} socialChannels={siteConfig.socialChannels} />
