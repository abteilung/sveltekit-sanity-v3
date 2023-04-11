<script lang="ts">
  import {browser} from '$app/environment'

  export let content = ''
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
    document.body.classList.remove('modal-open')
  }

  $: ({content} = content)
</script>

<svelte:window on:keydown={handleKeyDown} />

<button class="bg-black text-white px-4 py-2" on:click={openModal}> Open Da Modal </button>

{#if isModalOpen}
  <div class="bg-black/80 fixed justify-center items-center inset-0 w-full h-full z-50" on:click={closeModal}>
    <div class="container bg-white" on:click|stopPropagation>
      Content: {content}
    </div>
  </div>
{/if}
