<script lang="ts">
  import {onMount} from 'svelte'
  import {fade} from 'svelte/transition'

  import Header from '$lib/Components/Header.svelte'
  import Footer from '$lib/Components/Footer.svelte'
  import Left from '$lib/Components/Left.svelte'
  import Favicons from '$lib/Components/Favicons.svelte'

  let isLoaded: boolean = false

  onMount(() => {
    isLoaded = true
  })

  export let data: any
  $: ({siteConfig} = data)
  $: ({menus} = data)
</script>

<svelte:head>
  <Favicons iconImage={siteConfig.favicon} />
</svelte:head>

<div class="wrapper">
  <Left menu={menus.navMenuHeader} meta={menus.navMenuMeta} />
  <div class="contentWrapper">
    <Header />
    <div class="contentArea">
      <div class="mainContent">
        <slot />
      </div>
    </div>
  </div>
</div>

<!-- {JSON.stringify(menus)} -->
<Footer menu={menus.navMenuFooter} />
