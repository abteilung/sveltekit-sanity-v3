<script lang="ts">
  import {cartPending} from '$lib/stores/shopify'

  import type {TCart} from '$lib/shopify'
  import type {SubmitFunction} from '$app/forms'
  import {flip} from 'svelte/animate'
  import {applyAction} from '$app/forms'
  import {enhance} from '$app/forms'
  import {invalidateAll} from '$app/navigation'
  import Image from '$lib/components/Shop/Image.svelte'
  import Close from './Close.svelte'

  export let cart: TCart
  export let sidebar = true

  const handleForm: SubmitFunction = () => {
    cartPending.set(true)
    return async ({result}) => {
      if (result.type === 'success') {
        await invalidateAll()
        cartPending.set(false)
      }
      applyAction(result)
    }
  }
</script>

<header class="flex justify-between items-center border-b-2 border-black pb-4">
  <div>Shopping Cart</div>
  {#if sidebar}<Close />{/if}
</header>
<main class:pending={$cartPending}>
  {#if cart.lines.length === 0}
    <span class="empty">Your cart is empty</span>
  {:else}
    {#each cart.lines as { id, product } (id)}
      <div animate:flip={{duration: 400}} class="row">
        <div class="image">
          <Image
            src={product.image}
            alt={product.title}
            widths={[350, 500, 650, 800, 950, 1100]}
            width={350}
            sizes="144px"
          />
        </div>
        <div class="heading">
          <div>{product.title}</div>
          <form action="/shop/cart?/remove" method="post" use:enhance={handleForm}>
            <input hidden name="line_id" value={id} />
            <button disabled={$cartPending} class="remove" type="submit">Remove</button>
          </form>
          {#if !product.available}
            <div class="unavailable">This item is no longer available</div>
          {/if}
        </div>
        <div class="price">£{product.cost.toFixed(2)}</div>
      </div>
    {/each}
  {/if}
</main>
<footer>
  <div class="row">
    <div class="heading">Subtotal</div>
    <div class="price">CHF {cart.cost.toFixed(2)}</div>
  </div>

  <form action="/shop/cart?/checkout" method="post">
    <button disabled={cart.lines.length === 0 || $cartPending} class="primary" type="submit">Checkout</button>
  </form>
</footer>

<style lang="postcss">
  header {
    @apply flex justify-between items-center border-b-[1px] border-black/20 pb-4 text-lg text-black;
  }

  main {
    @apply flex-1 overflow-y-auto py-4;
  }

  footer {
    @apply border-t-[1px] border-black/20 pt-4;
  }

  .remove {
    @apply text-black/20 underline outline-none hover:text-primary;
  }

  .empty {
    @apply text-black/20;
  }

  main.cartPending {
    opacity: 0.4;
    cursor: wait;
  }

  .unavailable {
    @apply text-alert mt-2 text-sm;
  }

  .row {
    @apply flex mb-6;
  }
  .image {
    @apply mr-2;
    width: 9rem;
  }
  .heading {
    @apply flex-1 mr-6;
  }
  .price {
    @apply text-right;
  }
</style>
