<script lang="ts">
  import type {PageServerData} from './$types'
  import Cart from '../../../../lib/elements/shop/Cart.svelte'
  export let data: PageServerData
</script>

<div class="container">
  <Cart cart={data.cart} sidebar={false} />
</div>
