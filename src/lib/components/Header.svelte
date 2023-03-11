<script lang="ts">
  import Left from './Left.svelte'

  // Background Image from unsplash
  let showImage: boolean = false
  const bgImage =
    'https://images.unsplash.com/photo-1554734867-bf3c00a49371?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
</script>

<header id="header">
  <div class="headerContent">
    <h1 class="hidden xl:block">Grid XL</h1>
    <h1 class="hidden lg:block xl:hidden">Grid LG</h1>
    <h1 class="hidden md:block lg:hidden">Grid MD</h1>
    <h1 class="hidden sm:block md:hidden">Grid SM</h1>
    <h1 class="sm:hidden">Grid XS</h1>
  </div>
</header>

<!-- style="background: url({showImage ? bgImage : null}); background-size: cover; background-position: 50% 50%;" -->
