<script lang="ts">
  export let previous: any
  export let next: any

  // Reveal Image on Hover
  const revealImage = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    const image = target.querySelector('img')
    if (image) {
      image.classList.add('opacity-100')
    }
  }
</script>

<div class="grid md:grid-cols-2" />
