<script lang="ts">
  import {page} from '$app/stores'
  import classNames from 'classnames'

  import {superForm} from 'sveltekit-superforms/client'
  import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte'

  export let data

  const {form, errors, constraints, message, enhance} = superForm(data.form, {
    validators: {
      first_name: (value) => (value.length < 1 ? 'Wie ist Ihr Vorname?' : null),
      last_name: (value) => (value.length < 1 ? 'Wir wüssten gern Ihren Nachnamen!' : null),
      message: (value) => (value.length < 1 ? 'Wollten Sie uns nicht etwas mitteilen?' : null)
    }
  })
</script>

<!-- <SuperDebug data={$form} /> -->
<div class="container">
  <h1>Forms Testing</h1>
  {#if $message}
    <div class="status" class:error={$page.status >= 400} class:success={$page.status == 200}>
      {$message}
    </div>
  {/if}

  <form method="POST" use:enhance class="space-y-4">
    <div class="relative">
      <input
        class={classNames('w-full border-light bg-light', $errors.first_name ? 'invalidField' : '')}
        type="text"
        placeholder="Vorname"
        name="first_name"
        data-invalid={$errors.first_name}
        bind:value={$form.first_name}
      />
      {#if $errors.first_name}<div class="invalid">{$errors.first_name}</div>{/if}
    </div>
    <div class="relative">
      <input
        class={classNames('w-full border-light bg-light', $errors.last_name ? 'invalidField' : '')}
        type="text"
        placeholder="Nachname"
        name="last_name"
        data-invalid={$errors.last_name}
        bind:value={$form.last_name}
      />
      {#if $errors.last_name}<div class="invalid">{$errors.last_name}</div>{/if}
    </div>
    <div class="relative">
      <input
        class={classNames('w-full border-light bg-light', $errors.email ? 'invalidField' : '')}
        type="email"
        placeholder="E-Mail"
        name="email"
        data-invalid={$errors.email}
        bind:value={$form.email}
      />
      {#if $errors.email}<div class="invalid">{$errors.email}</div>{/if}
    </div>
    <div class="relative">
      <input
        class={classNames('w-full border-light bg-light', $errors.phone ? 'invalidField' : '')}
        type="text"
        placeholder="Telefonnummer"
        name="phone"
        data-invalid={$errors.phone}
        bind:value={$form.phone}
      />
      {#if $errors.phone}<div class="invalid">{$errors.phone}</div>{/if}
    </div>
    <div class="relative">
      <textarea
        class={classNames('w-full border-light bg-light', $errors.message ? 'invalidField' : '')}
        type="text"
        placeholder="Ihre Mitteilung"
        name="message"
        data-invalid={$errors.message}
        bind:value={$form.message}
      />
      {#if $errors.message}<div class="invalid">{$errors.message}</div>{/if}
    </div>
    <div class="relative">
      <button>Abschicken</button>
    </div>
  </form>
</div>

<style lang="postcss">
  input {
    @apply focus:border-transparent focus:ring-0;
  }
  .invalid {
    @apply absolute top-0 right-0;
    @apply bg-primary text-sm text-white px-2;
  }

  .invalidField {
    @apply border-b-2 border-b-primary !important;
  }
  .valid {
    @apply border-success;
  }
</style>
