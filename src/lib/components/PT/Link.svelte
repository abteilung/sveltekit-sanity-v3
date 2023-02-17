<script>export let portableText;
    $: ({ value } = portableText);
    $: href = (value === null || value === void 0 ? void 0 : value.href) || (value === null || value === void 0 ? void 0 : value.url) || (value === null || value === void 0 ? void 0 : value.link) || (value === null || value === void 0 ? void 0 : value.value);
    
    // External Link
    $: internal = (value === null || value === void 0 ? void 0 : value.page._ref);
    
    export let external = false;
    $: isExternal = external ? "external" : null;

</script>
    <!-- {JSON.stringify(internal)} -->
{#if typeof href === 'string'}
    <a {href}><slot /></a>
{:else}
    <slot />
{/if}