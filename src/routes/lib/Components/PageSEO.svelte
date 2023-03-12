<script lang="ts">
  export let seoData: any
</script>

<svelte:head>
  {#if seoData.title}
    <title>{seoData.title}</title>
  {/if}
</svelte:head>
