<!-- https://themenectar.com/salient/cascading-images/ -->
<script lang="ts">
  import classNames from 'classnames'
  import {backInOut} from 'svelte/easing'

  let isOpen = false

  function toggleVisibility() {
    isOpen = !isOpen
  }

  export let images = [
    {
      label: 'Image 1',
      src: 'https://webon.qodeinteractive.com/wp-content/uploads/2020/08/h2-img8.jpg',
      imageWidth: 600,
      imageHeight: 600
    },
    {
      label: 'Image 2',
      src: 'https://webon.qodeinteractive.com/wp-content/uploads/2020/08/h2-img7.jpg',
      imageWidth: 600,
      imageHeight: 600
    },
    {
      label: 'Image 3',
      src: 'https://webon.qodeinteractive.com/wp-content/uploads/2020/08/h2-img6.jpg',
      imageWidth: 600,
      imageHeight: 600
    }
  ]
  export let imageWidth = 600
</script>

<button on:click={toggleVisibility}>Toggle</button>
<div class="container">
  <div class="w-1/2">
    <div class="aspect-[16/9] overflow-hidden">
      <img
        src="https://webon.qodeinteractive.com/wp-content/uploads/2020/08/h2-img7.jpg"
        alt="asdfsf"
        class={classNames(
          'transition-all origin-right duration-250 ease-out',
          isOpen ? 'h-full w-full scale-x-100' : 'h-full w-full scale-x-[1.2]'
        )}
      />
    </div>
  </div>
</div>
