<script lang="ts">
  import {onMount, onDestroy} from 'svelte'
  import plyr from 'plyr'
  import 'plyr/dist/plyr.css'

  onMount(() => {
    const player = new plyr('#player', {
      controls: [
        // 'play-large', // The large play button in the center
        'autoplay', // Auto play
        // 'restart', // Restart playback
        // 'rewind', // Rewind by the seek time (default 10 seconds)
        // 'play', // Play/pause playback
        // 'fast-forward', // Fast forward by the seek time (default 10 seconds)
        // 'progress', // The progress bar and scrubber for playback and buffering
        // 'current-time', // The current time of playback
        // 'duration', // The full duration of the media
        // 'mute', // Toggle mute
        // 'volume', // Volume control
        // 'captions', // Toggle captions
        // 'settings', // Settings menu
        // 'pip', // Picture-in-picture (currently Safari only)
        // 'airplay', // Airplay (currently Safari only)
        // 'download', // Show a download button with a link to either the current source or a custom URL you specify in your options
        'fullscreen' // Toggle fullscreen
      ]
    })
  })

  export let video = page.youtube
  let videoType

  // Find out if it's youtube or vimeo
  function getVideoType(url) {
    if (url.match(/youtube.com/) || url.match(/youtu.be/)) {
      videoType = 'youtube'
      return (url.split('v=')[1] || url.split('/')[3]).split('&')[0]
    } else if (url.match(/vimeo.com/)) {
      videoType = 'vimeo'
      return url.split('/')[3]
    }
  }

</script>

{#if video}
    <div 
        id="player" 
        data-plyr-provider={videoType} 
        data-plyr-embed-id={getVideoType(video)} 
    />
{/if}