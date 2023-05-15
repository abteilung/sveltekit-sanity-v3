export async function POST(requestEvent) {
  const {request} = requestEvent
  const {text} = await request.json()
  const newComment = {
    id: comments.length + 1,
    text
  }
  customElements.push(newComment)
  return json(newComment, {status: 201})
}

export function GET() {
  return new Response('Hello from the LIKE API!')
}

// const res = await getSanityServerClient(false).patch(`${params.id}`).inc({ likes: 1 }).commit();
//
