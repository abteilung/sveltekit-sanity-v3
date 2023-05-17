<script lang="ts">
  import Plyr from '$lib/components/PlyrWrapper.svelte'

  export let content
  export let portableText

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
    <div data-youtube-nokookie={true} data-plyr-embed-id={getVideoID(content.url)} data-plyr-provider={videoType} />
  {/if}
</Plyr>

<Plyr>
  {#if portableText?.value.url}
    <div
      data-youtube-nokookie={true}
      data-plyr-embed-id={getVideoID(portableText?.value.url)}
      data-plyr-provider={videoType}
    />
  {/if}
</Plyr>
