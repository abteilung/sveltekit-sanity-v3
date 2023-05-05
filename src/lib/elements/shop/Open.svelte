<script lang="ts">
  import type {TCart} from '$lib/shopify'
  import {cartOpen} from '$lib/stores/shopify'
  //   import {getCartItems} from '$lib/stores/shopify'
  //   import {open} from '$lib/elements/Shop/Cart.svelte'
  import {cartItemCount} from '$lib/stores/shopify'

  export let cart: TCart
</script>

<a href="/cart" aria-label="Open cart" on:click|preventDefault={() => cartOpen.set(true)}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 22 22"
    class="hover:stroke-white stroke-primary block w-12 fill-none stroke-linejoin-round stroke-linecap-round"
  >
    <path d="M1 7l3 11h14l3-11z" />
    <path d="M8 7l3-6 3 6" />
    {#if cart?.lines?.length > 0}<circle fill="fill-primary" stroke="stroke-white" cx="17" cy="17" r="5" />{/if}
  </svg>
</a>

<div class="relative my-2 mx-4">
  <div
    data-test="cart-quantity"
    class="absolute bottom-0 left-0 -ml-3 -mb-3 flex h-5 w-5 items-center justify-center rounded-full border border-black bg-white dark:bg-primary text-xs text-black dark:text-white"
  >
    {$cartItemCount}
  </div>
</div>
