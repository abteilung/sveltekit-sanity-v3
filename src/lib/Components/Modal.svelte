<script lang="ts">
  import {browser} from '$app/environment'
  import {fade, fly} from 'svelte/transition'
  import {cubicInOut} from 'svelte/easing'

  export let content = 'I am a Modal'
  let isModalOpen: boolean = false

  // Function to toggle State of Modal
  const openModal = () => {
    isModalOpen = !isModalOpen
  }

  // Function to close Modal with ECS Key
  // set open to false on ESC
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      isModalOpen = false
    }
  }
  const closeModal = (e: KeyboardEvent) => {
    isModalOpen = false
  }

  //   add class .modal-open to body
  $: if (browser && isModalOpen) {
    document.body.classList.add('modal-open')
  } else if (browser && !isModalOpen) {
    // Add Delay
    setTimeout(() => {
      document.body.classList.remove('modal-open')
    }, 350)
  }
</script>

<svelte:window on:keydown={handleKeyDown} />

<button class="bg-black text-white px-4 py-2" on:click={openModal}> Open this Modal </button>

{#if isModalOpen}
  <div
    in:fade={{duration: 150, easing: cubicInOut}}
    out:fade={{duration: 150, easing: cubicInOut, delay: 300}}
    class="bg-black/80 fixed justify-center items-center inset-0 w-full h-full z-50"
    on:click={closeModal}
  >
    <div
      in:fly={{y: -150, duration: 250, easing: cubicInOut, delay: 150}}
      out:fly={{y: 150, duration: 250, easing: cubicInOut, delay: 150}}
      class="h-full w-full flex justify-center items-center"
    >
      <div class="w-1/2 p-12 h-96 bg-white" on:click|stopPropagation>
        {content}
      </div>
    </div>
  </div>
{/if}
