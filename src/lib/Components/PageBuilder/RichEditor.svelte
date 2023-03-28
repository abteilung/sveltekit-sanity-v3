<script lang="ts">
  import PortableBlock from '$lib/Components/PortableBlock.svelte'

  export let block
  $: ({content} = block)
</script>

<PortableBlock {content} />
