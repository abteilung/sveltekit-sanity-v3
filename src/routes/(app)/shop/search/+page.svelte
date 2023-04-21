<script>
  import {page} from '$app/stores'
  import Animation from '$lib/components/Animation.svelte'

  export let data

  $: search = $page.url.searchParams.get('q')

  $: displayedProducts = []

  $: ({allProducts} = data)

  $: displayedProducts = search
    ? allProducts.filter((item) => {
        return item.title.toLowerCase().includes(search.toLowerCase())
      })
    : allProducts

</script>

<h1>xxx</h1>

<div>
  <ul class="grid grid-flow-row gap-4 sm:grid-cols-2 md:grid-cols-3">
    {#each displayedProducts as product, i (product.id)}
      <li>
        <Animation iterator={i} delay={25} duration={250}>

        <div class="group relative block overflow-hidden">
          <div class="bg-white shadow-lg">
            <a href={`/shop/product/${product.handle}`}>
              <h3>{product.title}</h3>
              <p>
                CHF {product.cost.toFixed(2)}
              </p>
            </a>
          </div>
        </div>
        </Animation>
      </li>
    {:else}
      <p>No products :(</p>
    {/each}
  </ul>
</div>