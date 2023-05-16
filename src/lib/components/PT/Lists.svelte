<script>
  export let portableText
  $: ({value} = portableText)
</script>

<!-- Todo: Wrap Content of <li>xxx</li> in a <span> Tag. So multiline Content will be aligned nicely. -->
{#if value.listItem === 'number'}
  <ol class="ol"><slot /></ol>
{:else}
  <ul class="ul"><slot /></ul>
{/if}
