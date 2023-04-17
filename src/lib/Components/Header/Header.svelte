<script lang="ts">
  import {browser} from '$app/environment'
  import {applyAction, enhance} from '$app/forms'

  import ThemeToggleIcon from './ThemeToggleIcon.svelte'

  import Image from '$lib/Components/PageBuilder/Image.svelte'
  export let bgImage
  import {theme} from '$lib/stores/theme'
  import type {Theme} from '../../../hooks.server'

  export let subTitle: string = 'Page Eyebrow (h1)'
  export let pageTitle: string = 'Page Title'

  const deriveNextTheme = (theme: Theme): Theme => {
    switch (theme) {
      case 'dark':
        return 'light'
      case 'light':
        return 'dark'
      case 'auto':
      default:
        if (!browser) return 'auto'
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'light' : 'dark'
    }
  }
  $: nextTheme = deriveNextTheme($theme)
</script>

<header
  id="header"
  class="relative text-white overflow-hidden w-full mb-[20px] lg:mb-[30px] xl:mb-[40px] 2xl:mb-[50px]"
>
  <div class="headerContent">
    <slot />

    <form
      method="POST"
      action="/?/theme"
      use:enhance={async () => {
        $theme = nextTheme

        return async ({result}) => {
          await applyAction(result)
        }
      }}
    >
      <input name="theme" value={nextTheme} hidden />
      <button class="w-8">
        <ThemeToggleIcon additionalClass="text-black hover:text-primary dark:text-white dark:hover:text-primary"/>
      </button>
    </form>
  </div>
  <div class="absolute top-0 left-0 inset-0 isolate z-0">
    {#if bgImage}
      <Image block={bgImage} additionalClass="absolute top-0 left-0 w-full h-full object-cover z-10" alt="xx" />
    {/if}
    <div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-black/00 z-20" />
  </div>
</header>
