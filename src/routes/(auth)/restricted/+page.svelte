<script lang="ts" context="module">
   import { page } from '$app/stores'
</script>

<script lang="ts">
  export let user: SessionUser;
</script>

<svelte:head>
  <title>Restricted page</title>
</svelte:head>

<h1>Restricted page</h1>
<p>This page is restricted and will only be accessible to authenticated users.</p>

{#if !$page.data.user}
    <a href="/login">Login</a>
    <a href="/register">Register</a>
{/if}

{#if $page.data.user}
    <p>Hello <b>{$page.data.user.email}</b></p>
    <form action="/logout" method="POST">
      <button type="submit">Log out</button>
    </form>

{/if}
