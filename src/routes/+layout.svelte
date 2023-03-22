<script lang="ts">
  // Sevelte imports
  import {page} from '$app/stores'

  // Local imports
  import type {LayoutData} from './$types'
  export let data: LayoutData

  // CSS imports
  import '../app.css'
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

  /**
   * Only show the preview banner on the following route id's.
   */
  const previewRouteIds = ['/(app)/posts/[slug]']

  $: ({previewMode, previewModeEmbed: embedded} = data)
  $: ({siteConfig} = data)
  $: showPreviewBanner = previewMode && previewRouteIds.includes($page.route.id || '')
</script>

<svelte:head />

{#if showPreviewBanner}
  <PreviewBanner {embedded} />
{/if}

<slot />
