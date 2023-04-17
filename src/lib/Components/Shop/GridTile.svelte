<script>
  export let title = ''
  export let removeLabels = false
  export let imageSrc
  export let price = ''
  export let currencyCode = ''
  export let href = ''
  export let priority = 'lazy'

  let hover = false
</script>

<div
  on:mouseenter={() => {
    hover = true
  }}
  on:mouseleave={() => {
    hover = false
  }}
  class=""
>
  <a
    data-test="grid-tile"
    {href}
    data-sveltekit-prefetch
    class="focus:border-blue-500 focus:border-2 relative flex h-full w-full items-center justify-center"
  >
  {#if imageSrc}
    <img
      alt={title}
      class={`w-full md:w-1/2 lg:w-full flex-none transition duration-300 ease-in-out ${hover ? 'scale-110' : ''}`}
      fetchpriority={priority === 'eager' ? 'high' : 'low'}
      decoding="async"
      loading={priority}
      src={imageSrc}
    />
  {/if}
    {#if !removeLabels}
      <div class="text-white">
        <div class=" p-3 text-xl font-medium">
          {title}
        </div>
        <div class="w-fit bg-primary p-3 text-sm">
          {currencyCode}
          {price}.–
        </div>
      </div>
    {/if}
  </a>
</div>
