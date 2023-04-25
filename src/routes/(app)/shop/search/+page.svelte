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
      <li class={product.available ? 'border-4 border-success' : 'border-4 border-accent'}>
        <Animation iterator={i} delay={25} duration={250}>
          <a href={`/shop/product/${product.handle}`}
            class="p-6 group relative block overflow-hidden bg-white shadow-xl hover:shadow-md duration-150 block min-h-[280px]"
          >
            <h3>{product.title}</h3>
            <p>
              CHF {product.cost.toFixed(2)}
            </p>
            available: {product.available}
          </a>
        </Animation>
      </li>
    {:else}
      <p>No products :(</p>
    {/each}
  </ul>
</div>