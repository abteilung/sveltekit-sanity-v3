<script lang="ts">
  export let menuItem: string
  export let activeClass: string = ''
</script>

{#if menuItem._type === 'navLink'}
  <a class={activeClass} href={menuItem.url} target={menuItem.target}>{menuItem.title}</a>
{/if}
