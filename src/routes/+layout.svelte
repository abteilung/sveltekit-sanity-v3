<script lang="ts">
  // Sevelte imports
  import {page} from '$app/stores'

  // Local imports
  import type {LayoutData} from './$types'
  export let data: LayoutData

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
