<script lang="ts">
  // Sevelte imports
  import {page} from '$app/stores'
  import {browser} from '$app/environment'
  import {theme} from '$lib/stores/theme'

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
  import PreviewBanner from '$lib/elements/utilities/PreviewBanner.svelte'

  /**
   * Only show the preview banner on the following route id's.
   */
  const previewRouteIds = ['/(app)/story/[slug]', '/(app)/produkte/[slug]', '/(app)/services/[slug]']

  $theme = data.theme
  $: browser && (document.documentElement.dataset.theme = $theme)

  $: ({previewMode, previewModeEmbed: embedded} = data)
  $: showPreviewBanner = previewMode && previewRouteIds.includes($page.route.id || '')
</script>

<svelte:head />

{#if showPreviewBanner}
  <PreviewBanner {embedded} />
{/if}

<slot />
