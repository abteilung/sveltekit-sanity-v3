<script lang="ts">
    import type { ActionData } from '/$types';
    import { enhance } from '$app/forms';

    export let form: ActionData;
</script>

<svelte:head>
  <title>Login</title>
</svelte:head>

<h1>Login</h1>

<section>
    <form method="post" use:enhance>
        <div class="group">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" required />
        </div>

        <div class="group">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" required />
        </div>

        {#if form?.invalid}
            <p class="error bg-primary w-1/4">Username and password is required.</p>
        {/if}
    
        {#if form?.error}
        <p class="error bg-primary w-1/4">You have entered the wrong credentials.</p>
      {/if}

        <div class="submit-container">
            <button class="bg-white whitespace-nowrap text-black px-6 py-2" type="submit">Login</button>
        </div>
    </form>

    <!-- <div class="actions"> -->
        <!-- <a href="/signup">Sign Up</a> -->
    <!-- </div> -->
    
</section>

