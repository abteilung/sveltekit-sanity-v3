<script>
  import ProductCard from '$Lib/Components/ProductCard.svelte'
  export let products
</script>

<div class="product-grid">
  {#each products as product}
    <ProductCard product={product.node} />
  {/each}
</div>
