<!-- https://github.com/diwakersurya/svelte-accordion/tree/master/src -->
<script lang="ts">
  import AccordionBody from './AccordionBody.svelte'
  import AccordionItem from './AccordionItem.svelte'

  export let items: Array<{title: string; content: array}>
  let active = null

  export let portableText
  $: ({value} = portableText)
</script>

<AccordionBody bind:active>
  {#each value.items as item, i}
    <AccordionItem title={item.title} id={i} content={item.content} />
  {/each}
</AccordionBody>
