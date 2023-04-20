<script lang="ts">
  import {fly} from 'svelte/transition'

  export let iterator: number
  export let delay: number = 75
  export let duration: number = 500
  export let x: number = 75
  export let y: number = 0

  export let style: string = 'default'
</script>

<div in:fly={{x: x, y: y, delay: iterator * delay, duration: duration, opacity: 0}}>
  <slot />
</div>
