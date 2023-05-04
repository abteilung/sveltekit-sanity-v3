<script lang="ts">
  export let socialChannels: any
  import classNames from 'classnames'

  import IconSocial from '$lib/elements/media/IconsSocial.svelte'
  import Image from '$lib/components/PageBuilder/Image.svelte'

  export let textColor: string = 'hover:text-primary'
  export let iconSize: string = 'w-6 h-6'
  export let showIcons: boolean = true
</script>

{#each socialChannels as channel, i}
  <div class={classNames()}>
    <a class="{textColor} flex items-center space-x-2" href={channel.url} target="_blank">
      {#if showIcons}
        {#if channel.image.asset}
          <Image block={channel.image} additionalClass={iconSize} alt={channel.name} />
        {:else}
          <IconSocial icon={channel.name.toLowerCase()} />
        {/if}
      {/if}
      <span>{channel.name}</span>
    </a>
  </div>
{/each}
