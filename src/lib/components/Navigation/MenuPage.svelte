<script lang="ts">
  // Store Imports
  import {page} from '$app/stores'
  import {showSubMenu} from '$lib/stores/navigation'

  export let menuItem: string

  // set ActiveClass
  let activeClass: string = ''

  $: {
    if (menuItem.page) {
      if (menuItem.page.href === '/' + $page.params.slug) {
        activeClass = 'activeMenuItem'
      } else {
        activeClass = ''
      }
    }
  }

  const hideSubMenus: any = () => {
    showSubMenu.set(false)
  }
</script>

{#if menuItem._type === 'navPage'}
  <a on:click={hideSubMenus} class={activeClass} href={menuItem.page?.href}>{menuItem.title || menuItem.pageTitle}</a>
{/if}

<style lang="postcss">
  .activeMenuItem {
    @apply text-primary;
  }
</style>
