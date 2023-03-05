<script lang="ts">
  import {urlForImage} from '$lib/config/sanity'
  export let iconImage: string
</script>

<link rel="icon" type="image/png" href={urlForImage(iconImage).width(32).height(32).format('png')} />

<link
  rel="apple-touch-icon"
  type="image/png"
  sizes="180x180"
  href={urlForImage(iconImage).width(180).height(180).format('png')}
/>
<link rel="icon" type="image/png" sizes="32x32" href={urlForImage(iconImage).width(32).height(32).format('png')} />
<link rel="icon" type="image/png" sizes="16x16" href={urlForImage(iconImage).width(16).height(16).format('png')} />
<link rel="manifest" href="/site.webmanifest" />
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#fff" />
<meta name="msapplication-TileColor" content="#fff" />
<meta name="msapplication-config" content="/IEconfig.xml" />
<meta name="theme-color" content="#fff" />
