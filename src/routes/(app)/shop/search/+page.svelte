<script>
  import GridTile from '$lib/Components/Shop/GridTile.svelte'
  import {page} from '$app/stores'

  /** @type {import('./$types').PageData} */
  export let data
  $: search = $page.url.searchParams.get('q')

  $: displayedProducts = search
    ? data.body.allProducts.edges.filter((item) => {
        return item.node.title.toLowerCase().includes(search.toLowerCase())
      })
    : data.body.allProducts.edges
</script>

<h1>xxx</h1>

<div>
  <ul class="grid grid-flow-row gap-4 sm:grid-cols-2 md:grid-cols-3">
    {#each displayedProducts as product, i (product.node.id)}
      <li>
        <div class="group relative block aspect-square overflow-hidden bg-dark">
          <GridTile
            title={product.node.title}
            href={`/shop/product/${product.node.handle}`}
            price={20 || product.node.priceRange.maxVariantPrice.amount}
            currencyCode={'CHF' || product.node.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
      </li>
    {:else}
      <p>No products :(</p>
    {/each}
  </ul>
</div>

<!--           <GridTile
            title={product.node.title}
            href={`/shop/product/${product.node.handle}`}
            price={20 || product.node.priceRange.maxVariantPrice.amount}
            currencyCode={"CHF" || product.node.priceRange.maxVariantPrice.currencyCode}
            imageSrc={null || product.node.images.edges[0].node.originalSrc}
          />
 -->
