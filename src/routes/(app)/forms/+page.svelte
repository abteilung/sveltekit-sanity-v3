<script lang="ts">
  import { page } from '$app/stores';
  import { superForm } from 'sveltekit-superforms/client';
  import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

  export let data;

  const { form, errors, constraints, message, enhance } = superForm(data.form);
</script>

<SuperDebug data={$form} />

<h1>Forms Testing</h1>
{#if $message}
  <div class="status"
    class:error={$page.status >= 400}
    class:success={$page.status == 200}
  >
    {$message}
  </div>
{/if}


<form method="POST" use:enhance>
	<label for="name">Name<br/>
	<input
		type="text"
		name="name"
		data-invalid={$errors.name}
		bind:value={$form.name}
	/>
	{#if $errors.name}<div class="invalid">{$errors.name}</div>{/if}
</label>
<br/><br/>
	<label for="email">E-mail<br/>
	<input
		type="email"
		name="email"
		data-invalid={$errors.email}
		bind:value={$form.email}
	/>
	{#if $errors.email}<div class="invalid">{$errors.email}</div>{/if}
</label>
<br/><br/>

<label>
  <input
    type="date" 
    name="date"
    data-invalid={$errors.date}
    bind:value={$form.date}
  />
</label>
<br/><br/>

	<div><button>Submit</button></div>
</form>

<style lang="postcss">
	.invalid {
		@apply text-primary border-4 border-accent;
	}
</style>
