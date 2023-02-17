<script lang="ts">
    export let portableText;
    $: ({ value } = portableText);
    $: href = (value === null || value === void 0 ? void 0 : value.href) || (value === null || value === void 0 ? void 0 : value.url) || (value === null || value === void 0 ? void 0 : value.link) || (value === null || value === void 0 ? void 0 : value.value);
    
    $: external = (value.linkType === 'external' ? true : false);
    $: internal = (value.linkType === 'internal' ? true : false);

    const debug: boolean = false;

    // // External Link
    // $: internal = (value === null || value === void 0 ? void 0 : value.page._ref);
    
    // export let external = false;
    // $: isExternal = external ? "external" : null;
</script>

{#if debug}
    <br><br>
    ext: {external}<br>
    int: {internal}<br>
    slug: {value.link.slug.current}<br>
    type: {value.link._type}<br>
    {'./' + value.link._type + '/' + value.link.slug.current}<br>
    {JSON.stringify(value.link)}<br>
    <br><br>
{/if}


{#if typeof href === 'string'}
    {#if value.linkType === 'internal'}
        <a href={'/' + value.link._type + value.link.slug.current}><slot /></a>
    {:else}
        <a {href} target="_blank"><slot /></a>
    {/if}
{:else}
    <slot />
{/if}