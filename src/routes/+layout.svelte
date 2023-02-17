<script lang="ts">
  // Sevelte imports
  import { page } from "$app/stores";

  // Local imports
  import type { LayoutData } from "./$types";
  export let data: LayoutData;
  
  // CSS imports
  import "../app.css";

  // Live Preveiew Banner
  import PreviewBanner from "$lib/components/PreviewBanner.svelte";

  /**
   * Only show the preview banner on the following route id's.
   */
  const previewRouteIds = ["/(app)/posts/[slug]"];

  $: ({ previewMode, previewModeEmbed: embedded } = data);
  $: showPreviewBanner = previewMode && previewRouteIds.includes($page.route.id || "");
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed|Source+Sans+Pro:300,400,700,900&display=swap" rel="stylesheet">
</svelte:head>

{#if showPreviewBanner}
  <PreviewBanner {embedded} />
{/if}

<slot />
