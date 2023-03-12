<script lang="ts">
  import {urlForImage} from '$lib/config/sanity'
  export let iconImage: string
</script>

<link rel="icon" type="image/png" href={urlForImage(iconImage, 32, 32).format('png')} />

<link rel="apple-touch-icon" type="image/png" sizes="180x180" href={urlForImage(iconImage, 180, 180).format('png')} />
<link rel="icon" type="image/png" sizes="32x32" href={urlForImage(iconImage, 32, 32).format('png')} />
<link rel="icon" type="image/png" sizes="16x16" href={urlForImage(iconImage, 16, 16).format('png')} />
<link rel="manifest" href="/site.webmanifest" />
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#fff" />
<meta name="msapplication-TileColor" content="#fff" />
<meta name="msapplication-config" content="/IEconfig.xml" />
<meta name="theme-color" content="#fff" />
