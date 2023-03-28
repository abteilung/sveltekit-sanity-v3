<script lang="ts">
  export let seoData: any
</script>

<svelte:head>
    <title>{seoData.title}</title>
    <meta name="description" content={seoData.description} />
</svelte:head>