<script lang="ts">
  import type {TCart, TProductDetail} from '$lib/shopify'
  import type {SubmitFunction} from '$app/forms'
  import {cartOpen} from '$lib/stores/shopify'
  import {cartPending} from '$lib/stores/shopify'

  import {enhance, applyAction} from '$app/forms'
  import {invalidateAll} from '$app/navigation'

  export let cart: TCart
  export let product: TProductDetail

  $: line = cart.lines.find((line) => line.product.id === product.id)

  const handleForm: SubmitFunction = () => {
    cartPending.set(true)
    return async ({result}) => {
      if (result.type === 'success') {
        await invalidateAll()
        cartPending.set(false)
        cartOpen.set(true)
      }
      applyAction(result)
    }
  }
</script>

<form method="post">
  {#if line !== undefined}
    <form action="/shop/cart?/remove" method="post" use:enhance={handleForm}>
      <input hidden name="line_id" value={line.id} />
      <button disabled={$cartPending} class:pending={$cartPending} class="primary" type="submit"
        >Remove from cart</button
      >
    </form>
  {:else if !product.available}
    <button class:pending={$cartPending} disabled class="primary" type="submit">Sold</button>
  {:else}
    <form action="/shop/cart?/add" method="post" use:enhance={handleForm}>
      <input hidden name="product_id" value={product.id} />
      <button disabled={$cartPending} class:pending={$cartPending} class="primary" type="submit">Add to cart</button>
    </form>
  {/if}
</form>
