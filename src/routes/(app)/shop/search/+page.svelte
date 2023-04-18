<script>
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
        <div class="group relative block overflow-hidden ">
          <div class="bg-white shadow-lg">
            <a href={`/shop/product/${product.node.handle}`}>
            <h3>{product.node.title}</h3>
            <p>{'CHF' || product.node.priceRange.maxVariantPrice.currencyCode} {20 || product.node.priceRange.maxVariantPrice.amount}.–</p>
            </a>
          </div>
        </div>
      </li>
    {:else}
      <p>No products :(</p>
    {/each}
  </ul>
</div>
