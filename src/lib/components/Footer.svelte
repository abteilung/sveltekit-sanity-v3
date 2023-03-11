<footer class="">
  <div class="content">
    <h1 class="hidden text-white xl:block">Footer XL</h1>
    <h1 class="hidden text-white lg:block xl:hidden">Footer LG</h1>
    <h1 class="hidden text-white md:block lg:hidden">Footer MD</h1>
    <h1 class="hidden text-white sm:block md:hidden">Footer SM</h1>
    <h1 class="sm:hidden text-white">Footer XS</h1>
  </div>
</footer>

<style lang="postcss">
  footer {
    @apply 2xl:max-w-[1920px] mx-auto flex-none;
  }

  .content {
    @apply p-[20px] sm:p-[30px] md:p-[50px] h-[350px];
    @apply 2xl:container relative z-10 bg-dark;
  }
</style>
