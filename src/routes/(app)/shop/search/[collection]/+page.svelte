<script>
  import {page} from '$app/stores'

  /** @type {import('./$types').PageData} */
  export let data
  let collection

  $: data.body.collections.forEach((d) => {
    if (d.node.handle === $page?.params?.collection) {
      collection = d.node
    }
  })
</script>

<svelte:head>
  <title>{collection?.handle} collection</title>
</svelte:head>

<div>
  {#if collection}
    <ul class="grid grid-flow-row gap-4 sm:grid-cols-2 md:grid-cols-3">
      {#each collection.products.edges as product, i (i)}
        <li>
          <div class="group relative block aspect-square overflow-hidden bg-dark">
            <div class="bg-white shadow-lg">
              <a href={`/shop/product/${product?.node?.handle}`}>
              <h3>{product?.node?.title}</h3>
              <p>{'CHF' || product?.node?.priceRange?.maxVariantPrice?.currencyCode} {20 || product?.node?.priceRange?.maxVariantPrice?.amount}.–</p>
              {product?.node?.images?.edges[0].node?.originalSrc}
              </a>
            </div>
          </div>
        </li>
      {/each}
    </ul>
  {:else}
    <div>There are no products in this collection.</div>
  {/if}
</div>
