<script lang="ts">
  import {onMount} from 'svelte'
  import {fade} from 'svelte/transition'

  import Header from '$lib/Components/Header.svelte'
  import Footer from '$lib/Components/Footer.svelte'
  import Left from '$lib/Components/Left.svelte'
  import Favicons from '$lib/Components/Favicons.svelte'
  import Icons from '$lib/Components/Icons.svelte'
  import Navigation from '$lib/Components/Navigation/Navigation.svelte'

  import ShoppingCart from '$lib/Components/Shop/ShoppingCart.svelte'
  import {getCartItems} from '$lib/Stores/Shopify'
  import {createCart} from '$lib/utils/shopify'
  // This line causes Vercel to crash. Is it even needed or an autopilot import???
  // import settings from '$lib/config/sanity/schemas/documents/settings'

  let cartId
  let checkoutUrl
  let cartCreatedAt
  let cartItems = []
  onMount(async () => {
    if (typeof window !== 'undefined') {
      cartId = JSON.parse(localStorage.getItem('cartId'))
      cartCreatedAt = JSON.parse(localStorage.getItem('cartCreatedAt'))
      checkoutUrl = JSON.parse(localStorage.getItem('cartUrl'))
      let currentDate = Date.now()
      let difference = currentDate - cartCreatedAt
      let totalDays = Math.ceil(difference / (1000 * 3600 * 24))
      let cartIdExpired = totalDays > 6
      if (cartId === 'undefined' || cartId === 'null' || cartIdExpired) {
        await callCreateCart()
      }
      await loadCart()
      document.addEventListener('keydown', (e) => {
        let keyCode = e.keyCode
        if (keyCode === 27) {
          showCart = false
        }
      })
    }
  })
  async function callCreateCart() {
    const cartRes = await createCart()
    if (typeof window !== 'undefined') {
      localStorage.setItem('cartCreatedAt', Date.now())
      localStorage.setItem('cartId', JSON.stringify(cartRes.body?.data?.cartCreate?.cart?.id))
      localStorage.setItem('cartUrl', JSON.stringify(cartRes.body?.data?.cartCreate?.cart?.checkoutUrl))
    }
  }
  async function loadCart() {
    const res = await getCartItems()
    cartItems = res?.body?.data?.cart?.lines?.edges
  }
  let showCart = false
  let loading = false
  async function openCart() {
    await loadCart()
    showCart = true
  }
  function hideCart() {
    showCart = false
  }
  function getCheckoutUrl() {
    window.open(checkoutUrl, '_blank')
    loading = false
  }
  async function addToCart(event) {
    await fetch('/cart.json', {
      method: 'PATCH',
      body: JSON.stringify({cartId: cartId, variantId: event.detail.body})
    })
    // Wait for the API to finish before updating cart items
    await loadCart()
    loading = false
  }
  async function removeProduct(event) {
    await fetch('/cart.json', {
      method: 'PUT',
      body: JSON.stringify({
        cartId,
        lineId: event.detail.body.lineId,
        quantity: event.detail.body.quantity,
        variantId: event.detail.body.variantId
      })
    })
    await loadCart()
    loading = false
  }

  export let data: any

  $: ({siteConfig} = data)
  $: ({menus} = data)
  $: ({dsgvo} = data)
  $: ({services} = data)
  $: ({products} = data)
</script>

<svelte:head>
  <Favicons iconImage={siteConfig.favicon} />
</svelte:head>

<div class="wrapper">
  <Left menu={menus.navMenuHeader} meta={menus.navMenuMeta} on:openCart={openCart} />
  <div class="content">
    <div class="fixed px-6 py-2 space-x-6 top-6 right-6 rounded-full bg-black text-white z-40">
      <button on:click={openCart}>
        <span class="relative">
          <Icons strokeColor="white" type="cart" />
          <div class="absolute -top-4 -right-4 flex items-center justify-center bg-primary w-6 h-6 rounded-full">
            <div>{cartItems.length}</div>
          </div>
        </span>
      </button>
      <button> Funktion X </button>
      <button> Funktion Y </button>
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

{#if showCart}
  <ShoppingCart
    items={cartItems}
    on:click={hideCart}
    on:removeProduct={removeProduct}
    on:addProduct={addToCart}
    on:getCheckoutUrl={getCheckoutUrl}
    bind:loading
  />
{/if}
