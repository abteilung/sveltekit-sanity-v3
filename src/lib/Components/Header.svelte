<script lang="ts">
  import Left from './Left.svelte'

  // Background Image from unsplash
  let showImage: boolean = false
  let bgImage =
    'https://images.unsplash.com/photo-1554734867-bf3c00a49371?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'

  // Use Store for Background Image
  import {HeaderImage} from '$lib/Stores/Stores'

  const backgroundImage = HeaderImage.subscribe((value) => {
    bgImage = value
  })

  export let pageTitle: string = 'Page Title'
</script>

<header id="header" class="relative text-white overflow-hidden">
  <div class="headerContent">
    <slot />
  </div>
  <div class="absolute top-0 left-0 inset-0 isolate z-0">
    <img src={bgImage} alt="background" class="absolute top-0 left-0 w-full h-full object-cover z-10" />
    <div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-black/00 z-20" />
  </div>
</header>

<!-- style="background: url({showImage ? bgImage : null}); background-size: cover; background-position: 50% 50%;" -->
