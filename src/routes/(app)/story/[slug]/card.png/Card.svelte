<script lang="ts">
  import {urlForImage} from '$lib/config/sanity'
  import Icons from '$lib/elements/media/Icons.svelte'

  export let post
</script>

<div tw="bg-gray-50 flex w-full h-full items-center justify-center">
  <div class="flex absolute w-full h-full top-0 left-0">
    <img src={urlForImage(post.current.image, 1200, 630)} alt={post.current.title} />
  </div>
  <div tw="bg-black opacity-50 flex w-full h-full absolute top-0 left-0 " />
  <div tw="flex flex-row w-full py-12 px-4 justify-between p-8">
    <h2 tw="flex flex-col text-4xl font-bold text-left">
      <spa tw="text-white">{new Date(post.current.date).toLocaleDateString()}</spa>
      <h1 tw="font-4xl text-[#e53357]">{post.current.title}</h1>
    </h2>
  </div>
</div>
