<script lang="ts">
  import type {PageData} from './$types'
  import Image from '$lib/elements/shop/Image.svelte'
  import Back from './Back.svelte'
  import Buy from './Buy.svelte'

  export let data: PageData

  $: product = data.product
  $: cart = data.cart
</script>

<svelte:head>
  <title>{data.product.title} Ades.ch</title>
  <meta property="og:title" content="{data.product.title} &middot; Sue Williams A’Court’s Shop" />
  <meta name="description" content="Sue Williams A’Court is a fine artist and painter." />
  <meta property="og:description" content="Sue Williams A’Court is a fine artist and painter." />
  <meta property="og:image" content="" />
</svelte:head>

<article class="block md:flex">
  <section class="w-full mr-0 md:flex-1 md:mr-4">
    <Image
      src={product.image}
      alt={product.title}
      widths={[350, 500, 650, 800, 950, 1100]}
      width={700}
      sizes="(min-width: 1182px) 500px, (min-width: 608px) 42vw, 88vw"
    />
  </section>
  <main class="flex-1 space-y-4">
    <div class="back">
      <Back class="hidden md:block" href="/">Back to shop</Back>
    </div>
    <div>
      <h1>{product.title}</h1>
      {@html product.description}
    </div>
    <div>
      <p class="text-lg text-primary">CHF {product.cost.toFixed(2)}.–<span class="text-sm ml-2">+ shipping</span></p>
    </div>
    <div class="buy w-full md:w-3/4"><Buy {product} {cart} /></div>
  </main>
</article>
