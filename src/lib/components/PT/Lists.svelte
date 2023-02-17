<script>export let portableText;
    $: ({ value } = portableText);
    $: ({ listItem } = value);
    </script>
    
    {#if listItem === 'number'}
      <ol class="ol"><slot /></ol>
    {:else}
      <ul class="ul"><slot /></ul>
    {/if}
    