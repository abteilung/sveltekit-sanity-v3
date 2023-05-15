<script lang="ts">
  import {cartOpen} from '$lib/stores/shopify'
</script>

<a href="/" aria-label="Close cart" on:click|preventDefault={() => cartOpen.set(false)}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <path d="M2 2l16 16" />
    <path d="M18 2L2 18" />
  </svg>
</a>

<style lang="postcss">
  svg {
    @apply w-4 stroke-black fill-none block;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
    transition: stroke 0.2s ease;
  }
  svg:hover {
    @apply stroke-primary;
  }
</style>
