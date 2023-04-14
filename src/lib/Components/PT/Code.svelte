<script lang="ts">
  import Highlight from "svelte-highlight";
    // import javascript from "svelte-highlight/languages/javascript";
    import typescript from "svelte-highlight/languages/typescript";
    import css from "svelte-highlight/languages/css";
    import json from "svelte-highlight/languages/json";
    import bash from "svelte-highlight/languages/bash";
    import markdown from "svelte-highlight/languages/markdown";
    import yaml from "svelte-highlight/languages/yaml"; 

    import tokyoNightDark from "svelte-highlight/styles/tokyo-night-dark";

    export let portableText: any
    $: ({value} = portableText)
</script>

<svelte:head>
  {@html tokyoNightDark}
</svelte:head>

{#if value.language == "javascript"}
    <Highlight language={typescript} code={value.code} />
{/if}

{#if value.language == "typescript"}
    <Highlight language={typescript} code={value.code} />
{/if}

{#if value.language == "css"}
    <Highlight language={css} code={value.code} />
{/if}

{#if value.language == "json"}
    <Highlight language={json} code={value.code} />
{/if}

{#if value.language == "bash"}
    <Highlight language={bash} code={value.code} />
{/if}

{#if value.language == "markdown"}
    <Highlight language={markdown} code={value.code} />
{/if}

{#if value.language == "yaml"}
    <Highlight language={yaml} code={value.code} />
{/if}

{#if value.language == "groq"}
    <Highlight language={json} code={value.code} />
{/if}