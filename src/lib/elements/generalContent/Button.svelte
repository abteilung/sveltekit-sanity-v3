<!-- https://themenectar.com/salient/buttons/ -->
<script lang="ts">
  import classNames from 'classnames'
  // Regular Style
  // See Through Style
  // Gradient Style

  export let href: string = '#'
  export let primary: boolean = false
</script>

<a
  {href}
  class={classNames(
    primary ? 'bg-primary' : '',
    'inline-block px-8 py-4 text-white uppercase font-bold tracking-widest transition duration-300 ease-in-out transform hover:scale-105'
  )}
>
  <slot />
</a>
