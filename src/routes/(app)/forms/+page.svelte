<script lang="ts">
  import {page} from '$app/stores'
  import {superForm} from 'sveltekit-superforms/client'
  import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte'

  export let data

  const {form, errors, constraints, message, enhance} = superForm(data.form)
</script>

<SuperDebug data={$form} />

<h1>Forms Testing</h1>
{#if $message}
  <div class="status" class:error={$page.status >= 400} class:success={$page.status == 200}>
    {$message}
  </div>
{/if}

<form method="POST" use:enhance>
  <div>
    <input class={$errors.first_name ? 'invalid' : ''} type="text" placeholder="Vorname" name="first_name" data-invalid={$errors.first_name} bind:value={$form.first_name} />
    {#if $errors.first_name}<div class="invalid">{$errors.first_name}</div>{/if}
  </div>
  <div>
    <input class={$errors.last_name ? 'invalid' : ''} type="text" placeholder="Nachname" name="last_name" data-invalid={$errors.last_name} bind:value={$form.last_name} />
    {#if $errors.last_name}<div class="invalid">{$errors.last_name}</div>{/if}
  </div>
  <div>
    <input class={$errors.email ? 'invalid' : ''} type="email" placeholder="E-Mail" name="email" data-invalid={$errors.email} bind:value={$form.email} />
    {#if $errors.email}<div class="invalid">{$errors.email}</div>{/if}
  </div>
  <div>
    <input class={$errors.phone ? 'invalid' : ''} type="text" placeholder="Telefonnummer" name="phone" data-invalid={$errors.phone} bind:value={$form.phone} />
    {#if $errors.phone}<div class="invalid">{$errors.phone}</div>{/if}
  </div>
  <div>
    <textarea class={$errors.message ? 'invalid' : ''} type="text" placeholder="Ihre Mitteilung" name="message" data-invalid={$errors.message} bind:value={$form.message} />
    {#if $errors.message}<div class="invalid">{$errors.message}</div>{/if}
  </div>
  <div>
    <button>Abschicken</button>
  </div>
</form>

<style lang="postcss">
  .invalid {
    @apply text-primary text-sm;
    @apply border-accent;
  }
  .valid {
    @apply border-success;
  }
</style>
