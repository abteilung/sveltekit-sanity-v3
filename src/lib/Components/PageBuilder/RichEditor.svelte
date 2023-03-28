<script lang="ts">
  import PortableBlock from '$lib/components/PortableBlock.svelte'

  export let block
  $: ({content} = block)
</script>

<PortableBlock {content} />
