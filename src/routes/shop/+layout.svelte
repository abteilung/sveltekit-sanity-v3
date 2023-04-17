<script lang="ts">
  import type {LayoutServerData} from './$types'
  import Open from '$lib/Components/Shop/Open.svelte'
  import Sidebar from '$lib/Components/Shop/Sidebar.svelte'

  export let data: LayoutServerData
  $: cart = data.cart
</script>

<div class="flex w-full text-primary absolute z-50">
  <Open {cart} />
  <Sidebar {cart} />
</div>
<slot />
