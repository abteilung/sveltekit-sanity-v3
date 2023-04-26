<script lang="ts">
  import {showSubMenu} from '$lib/stores/navigation'

  export let menuItem: string
  export let activeClass: string = ''

  const hideSubMenus = () => {
    showSubMenu.set(true)
  }
</script>

{#if menuItem._type === 'navLink'}
  <a on:click={hideSubMenus} class={activeClass} href={menuItem.url} target={menuItem.target}>{menuItem.title}</a>
{/if}
