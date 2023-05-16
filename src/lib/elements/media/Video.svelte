<!-- Todo: Replace Plyr. It's not goooooood! -->
<script lang="ts">
  import Plyr from '$lib/components/PlyrWrapper.svelte'
  import IntersectionObserver from '$lib/elements/utilities/IntersectionObserver.svelte'
  import {fade} from 'svelte/transition'

  export let content
  export let portableText

  // create random string as ID
  const id = Math.random().toString(36).substring(7)

  let video: string

  // export let video = page.youtube
  let videoType

  // Find out if it's youtube or vimeo
  function getVideoID(url) {
    if (url.match(/youtube.com/) || url.match(/youtu.be/)) {
      videoType = 'youtube'
      return (url.split('v=')[1] || url.split('/')[3]).split('&')[0]
    } else if (url.match(/vimeo.com/)) {
      videoType = 'vimeo'
      return url.split('/')[3]
    }
  }
</script>

<Plyr>
  {#if content}
    <div data-plyr-embed-id={getVideoID(content.url)} data-plyr-provider={videoType} />
  {/if}
</Plyr>

<Plyr>
  {#if portableText?.value.url}
    <div data-plyr-embed-id={getVideoID(portableText?.value.url)} data-plyr-provider={videoType} />
  {/if}
</Plyr>
