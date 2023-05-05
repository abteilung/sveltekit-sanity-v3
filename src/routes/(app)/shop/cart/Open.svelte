<script lang="ts">
  import type {TCart} from '$lib/shopify'
  import {cartOpen} from '$lib/stores/shopify'
  //   import {getCartItems} from '$lib/stores/shopify'
  //   import {open} from '$lib/elements/Shop/Cart.svelte'
  import {cartItemCount} from '$lib/stores/shopify'
  import Icons from '$lib/elements/media/Icons.svelte'

  export let cart: TCart
</script>

<div class="flex items-center justify-left">
  <a href="/cart" aria-label="Open cart" on:click|preventDefault={() => cartOpen.set(true)}>
    <Icons type="cart" additionalClass="fill-none stroke-white hover:stroke-primary" />
  </a>

  <div class="relative -top-4 my-2 mx-4">
    <div
      data-test="cart-quantity"
      class="absolute bottom-0 left-0 -ml-3 -mb-3 flex h-5 w-5 items-center justify-center rounded-full border border-black bg-white dark:bg-primary text-xs text-black dark:text-white"
    >
      {$cartItemCount}
    </div>
  </div>
</div>
