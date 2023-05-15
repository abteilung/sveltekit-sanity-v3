import {redirect, error} from '@sveltejs/kit'

// Connect to Cal.com API
// https://cal.com/api

const apiKey = import.meta.env.VITE_CAL_COM_API_KSBL

export const load = async ({params}) => {
  const slug = params.slug
  const calEvent = await fetch(`https://api.cal.com/v1/event-types?apiKey=${apiKey}`).then((res) => res.json())

  if (calEvent) {
    return {
      calEvent
    }
  }
  throw error(404, 'Event not found')
}
