<script lang="ts">
    export let block
    $: ({title, teasers} = block)
</script>

<h2>{title}</h2>

<ul>
    {#each teasers as teaser}
        <li>{teaser.title}</li>
    {/each}
</ul>