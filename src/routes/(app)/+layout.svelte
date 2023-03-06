<script lang="ts">
  import Header from '$lib/components/Header.svelte'
  import Favicons from '$lib/components/Favicons.svelte'
  import menu from '$lib/config/sanity/schemas/documents/menu'

  export let data: any
  $: ({siteConfig} = data)
  $: ({menus} = data)
</script>

<svelte:head>
  <Favicons iconImage={siteConfig.favicon} />
</svelte:head>

<!-- <Header menu={menus.navMenuHeader}/> -->
{JSON.stringify(menus)}
{#each menus as menu}
  <h3>{menu.title}</h3>
  {#each menu as navi}
    <!-- {JSON.stringify(navi)} -->
    {JSON.stringify(navi)}
  {/each}
{/each}
<slot />
