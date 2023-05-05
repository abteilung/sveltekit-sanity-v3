<script lang="ts">
  import {urlForImage} from '$lib/config/sanity'
  export let page
</script>

<div tw="bg-gray-50 flex w-full h-full items-center justify-center">
  <div class="flex absolute w-full h-full top-0 left-0">
    <img src={urlForImage(page.image, 1200, 630)} alt={page.title} />
  </div>
  <div tw="bg-black opacity-50 flex w-full h-full absolute top-0 left-0 " />
  <div tw="flex flex-row w-full py-12 px-4 justify-between p-8">
    <div tw="flex flex-col text-4xl font-bold text-left">
      <span tw="text-white">{new Date(page.date).toLocaleDateString()}</span>
      <h1 tw="font-4xl text-[#e53357]">{page.title}</h1>
    </div>
    {#if page.author}
      <div tw="flex left-12 -bottom-12 w-full absolute w-full items-center">
        <img
          class=" w-24 h-24 rounded-full mr-6 overflow-hidden"
          src={urlForImage(page.author.image, 120, 120)}
          alt={page.title}
        />
        <div tw="text-4xl text-white relative z-50">von {page.author.name}</div>
      </div>
    {/if}
  </div>
</div>
