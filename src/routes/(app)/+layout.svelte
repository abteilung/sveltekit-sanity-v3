<script lang="ts">
  import {onMount} from 'svelte'
  import {fade} from 'svelte/transition'

  import Header from '$lib/Components/Header.svelte'
  import Footer from '$lib/Components/Footer.svelte'
  import Left from '$lib/Components/Left.svelte'
  import Favicons from '$lib/Components/Favicons.svelte'
  import menu from '$lib/config/sanity/schemas/documents/menu'

  let isLoaded: boolean = false

  // CSS imports
  import '../../app.css'
  // 300 is light
  import '@fontsource/roboto-condensed/300.css'

  // 400 is regular
  import '@fontsource/source-sans-pro/400.css'
  // 600 is semi-bold
  import '@fontsource/source-sans-pro/600.css'
  // 900 is black
  import '@fontsource/source-sans-pro/900.css'
  // Live Preveiew Banner
  import PreviewBanner from '$lib/Components/PreviewBanner.svelte'

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