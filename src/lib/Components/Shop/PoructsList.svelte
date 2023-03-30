<script>
  import ProductCard from '$lib/Components/Shop/ProductCard.svelte'
  export let products
</script>

// src/components/ProductList.svelte
<div class="product-grid">
  {#each products as product}
    <ProductCard product={product.node} />
  {/each}
</div>
