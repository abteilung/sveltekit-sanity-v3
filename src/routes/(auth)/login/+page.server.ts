import type {PageServerLoad, Actions} from './$types'
import {redirect, fail} from '@sveltejs/kit'
import {loginUser} from '$lib/models/user'

export const load: PageServerLoad = (event) => {
  const user = event.locals.user

  if (user) {
    throw redirect(302, '/guarded')
  }
}

export const actions: Actions = {
  default: async (event) => {
    const formData = Object.fromEntries(await event.request.formData())

    if (!formData.email || !formData.password) {
      return fail(400, {
        error: 'Missing email or password'
      })
    }

    const {email, password} = formData as {email: string; password: string}
    const {error, token} = await loginUser(email, password)

    if (error) {
      return fail(401, {
        error
      })
    }

    // Set the cookie

    event.cookies.set('AuthorizationToken', `Bearer ${token}`, {
      path: '/',
      secure: true,
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 // 1 day
    })

    throw redirect(302, '/login/success')
  }
}
