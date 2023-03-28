<script lang="ts">
    import classNames from 'classnames'
  export let block: string

  $: ({value} = block)
</script>

<div class={classNames("w-full m-0 block py-8", value == 'small' ? 'py-4' : 'py-12')} />