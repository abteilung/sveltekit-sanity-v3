<script lang="ts">
  import Header from '$lib/Components/Header.svelte'
  import Footer from '$lib/Components/Footer.svelte'
  import Left from '$lib/Components/Left.svelte'
  import Favicons from '$lib/Components/Favicons.svelte'
  import menu from '$lib/config/sanity/schemas/documents/menu'

  export let data: any
  $: ({siteConfig} = data)
  $: ({menus} = data)
</script>

<svelte:head>
  <Favicons iconImage={siteConfig.favicon} />
</svelte:head>

<div class="wrapper">
  <Left />
  <div class="content">
    <Header />
    <div class="contentArea">
      <div class="mainContent">
        <slot />
      </div>
    </div>
  </div>
</div>
<Footer />

<style lang="postcss">
  .wrapper {
    @apply 2xl:max-w-[1920px] mx-auto md:flex shadow-xl overflow-x-clip;
  }

  .content {
    @apply min-h-fit flex flex-col bg-white w-full;
  }

  .contentArea {
    @apply flex-grow relative;
    @apply px-[20px] sm:px-[30px] md:px-[50px] xl:px-[100px] 2xl:px-[150px];
  }

  .mainContent {
    /* @apply grid h-[1920px] grid-cols-6 sm:grid-cols-12; */
    @apply my-[20px] sm:my-[30px] md:my-[50px] xl:my-[100px] 2xl:my-[150px];
  }
</style>
