<script lang="ts">
  export let data: any

  $: ({calEvent} = data)
</script>

<!-- {JSON.stringify(calEvent)} -->

<h2>Event Types:</h2>
{#each calEvent.event_types as eventType}
  <h3>{eventType.title}</h3>
{/each}
