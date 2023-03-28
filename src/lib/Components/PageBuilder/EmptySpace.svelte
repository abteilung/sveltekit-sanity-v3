<script lang="ts">
  import classNames from 'classnames'
  export let block: string

  let classes = ''

  $: ({value, showRule} = block)
</script>

<div class={classNames(classes, 'w-full m-0 block py-8', value == 'small' ? 'py-4' : 'py-12')}>
  {#if showRule}
    <hr class="w-1/6 mx-auto" />
  {/if}
</div>
