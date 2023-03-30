<script lang="ts">
  export let data: PageData
  $: ({productDetails} = data)
</script>

Details: {productDetails}
