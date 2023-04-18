<script lang="ts">
  import type {TProduct} from '$lib/shopify'
  import Image from '$lib/components/Shop/Image.svelte'

  export let fetchpriority: string | undefined = undefined
  export let loading: string | undefined = undefined
  export let index: number
  export let product: TProduct
</script>

<a class:sold={!product.available} href="/shop/product/{product.handle}">
  <div class="overlay">
    <div>
      <h2>{product.title}</h2>
      {#if !product.available}<p class="tag">SOLD</p>{/if}
    </div>
  </div>
</a>

<style>
  a:hover .overlay {
    opacity: 1;
  }
  a:active .overlay {
    background: #fff;
  }
  a {
    width: 100%;
    margin-bottom: 5%;
    position: relative;
    display: block;
  }
  .tag {
    color: #ff4a58;
  }
  .sold::after {
    content: '';
    display: block;
    bottom: 0.3rem;
    right: 0.3rem;
    display: block;
    border-radius: 100%;
    background-color: #ff4a58;
    width: 1.2rem;
    height: 1.2rem;
  }
  .overlay {
    top: -0.1rem;
    left: -0.1rem;
    right: -0.1rem;
    bottom: -0.1rem;
    background-color: rgba(255, 255, 255, 0.92);
    border-radius: 0.2rem;
    border: 1px solid #dbdbdb;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: opacity 0.2s ease, background 0.2s ease;
  }
</style>
