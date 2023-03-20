<script lang="ts">
  import Icons from '$lib/Components/Icons.svelte'

  export let menu: any
</script>

<footer id="footer">
  <div class="footerContent">
    <h1 class="hidden text-white xl:block">Footer XL</h1>
    <h1 class="hidden text-white lg:block xl:hidden">Footer LG</h1>
    <h1 class="hidden text-white md:block lg:hidden">Footer MD</h1>
    <h1 class="hidden text-white sm:block md:hidden">Footer SM</h1>
    <h1 class="sm:hidden text-white">Footer XS</h1>
    <ul class="text-white">
      {#each menu.items as menuItem}
        <li>
          <a href={menuItem.page.href}>{menuItem.title || menuItem.pageTitle}</a>
        </li>
      {/each}
    </ul>
  </div>
</footer>
