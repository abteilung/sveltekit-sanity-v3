<script>
  import {page} from '$app/stores'
</script>

<!-- component -->
<main class="h-screen w-full flex flex-col justify-center items-center bg-black">
  <h1 class="text-9xl font-extrabold text-white tracking-widest">{$page.status}</h1>
  <div class="bg-accent px-2 text-sm rounded rotate-12 absolute">{$page.error.message}</div>
  <button class="mt-5">
    <a
      href="/"
      class="relative inline-block text-sm font-medium text-primary group active:text-orange-500 focus:outline-none focus:ring"
    >
      <span
        class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-primary group-hover:translate-y-0 group-hover:translate-x-0"
      />

      <span class="relative block px-8 py-3 bg-black border border-current">
        <a href="/">Go Home</a>
      </span>
    </a>
  </button>
</main>