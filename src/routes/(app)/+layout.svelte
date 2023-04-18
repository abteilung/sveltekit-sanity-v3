<script lang="ts">
  import Footer from '$lib/components/Footer.svelte'
  import Left from '$lib/components/Left.svelte'
  import Favicons from '$lib/components/Favicons.svelte'
  import Navigation from '$lib/components/Navigation/Navigation.svelte'
  import Open from '$lib/components/Shop/Open.svelte'
  import { cartItemCount } from '$lib/stores/shopify'
  
  export let data: any
  
  // Set cartItemCount with value from server
  $: cartItemCount.set(data.cartItemsCount.length)
  $: siteConfig = data.layoutData.siteConfig
  $: menus = data.layoutData.menus
  $: dsgvo = data.layoutData.dsgvoSettings
  $: ({services} = data)
  $: ({products} = data)
  $: ({cart} = data)
</script>

<svelte:head>
  <Favicons iconImage={siteConfig.favicon} />
</svelte:head>

<div class="wrapper">
  <Left
    menu={menus.navMenuHeader}
    meta={menus.navMenuMeta}
    navMenuMobile={menus.navMenuMobile}
    {cart}
  />
  <div class="content">
    <div class="fixed px-6 py-2 space-x-6 top-6 right-6 rounded-full bg-black text-white z-40">
    <div class="flex space-x-4">
      <Open />
      <button> Funktion X </button>
      <button> Funktion Y </button>
    </div>
    </div>
    <slot />
    <Navigation />
  </div>
</div>

<!-- {JSON.stringify(menus)} -->
<Footer
  {dsgvo}
  {products}
  {services}
  menu={menus.navMenuFooter}
  contact={siteConfig.contact}
  socialChannels={siteConfig.socialChannels}
/>
