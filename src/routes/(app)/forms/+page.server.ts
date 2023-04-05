import { setError, superValidate } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';
import { z } from 'zod';

import type { Actions, PageServerLoad } from '../../.svelte-kit/types/src/routes/$types';

const schema = z.object({
	name: z.string().min(1),
	email: z.string().email(),
    // This is a date field, but we'll default it to the current date
    // so that it's always valid.
    // https://stackoverflow.com/questions/23593052/format-javascript-date-as-yyyy-mm-dd
    date: z.date().default(new Date().toISOString().split('T')[0]).optional(),
});

///// Load //////////////////////////////////////////////////////////

export const load: PageServerLoad = async (event) => {
	// Server API:
	const form = await superValidate(event, schema);

	// Always return { form } in load and form actions.
	return { form };
};

///// Form actions //////////////////////////////////////////////////

export const actions: Actions = {
	default: async (event) => {
		// Same syntax as in the load function
		const form = await superValidate(event, schema);
		console.log('POST', form);

		// Convenient validation check:
		if (!form.valid) {
			// Again, always return { form } and things will just work.
			return fail(400, { form });
		}

		// TODO: Do something with the validated data
        if (form.data.name === 'error') {
            // This will set the error message on the field
            // and return { form } for you.
            return setError(form, 'name', 'This is an error message');
        }

		// Yep, return { form } here too
		return { form };
	}
} satisfies Actions;
