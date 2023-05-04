<script lang="ts">
  import classNames from 'classnames'

  export let menu: any
  export let spacing: number
  export let additionalClass: string = ''
  export let textColor: string

  // SafeList:
  // space-x-2 space-x-4 space-x-6 space-x-8 space-x-12
  // sm:space-x-2 sm:space-x-4 sm:space-x-6 sm:space-x-8 sm:space-x-12
  // md:space-x-2 md:space-x-4 md:space-x-6 md:space-x-8 md:space-x-12
  // lg:space-x-2 lg:space-x-4 lg:space-x-6 lg:space-x-8 lg:space-x-12
  // xl:space-x-2 xl:space-x-4 xl:space-x-6 xl:space-x-8 xl:space-x-12
</script>

<ul class={classNames(additionalClass, textColor, 'flex space-x-' + spacing)}>
  {#each menu.items as menuItem}
    {#if menuItem._type === 'navPage'}
      <li>
        <a href={menuItem.page.href}>{menuItem.title || menuItem.pageTitle}</a>
      </li>
    {/if}
  {/each}
</ul>
