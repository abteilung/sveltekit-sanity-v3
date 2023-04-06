<script lang="ts">
  import 'vidstack/styles/base.css'

  import {defineCustomElements} from 'vidstack/elements'
  defineCustomElements()
</script>

<h1>Media Player Stuff</h1>

<div class="contentContainer">
  <media-player
    src="https://media-files.vidstack.io/720p.mp4"
    poster="https://media-files.vidstack.io/poster.png"
    controls
  >
    <media-player muted autoplay />
    <media-outlet />
  </media-player>
</div>
