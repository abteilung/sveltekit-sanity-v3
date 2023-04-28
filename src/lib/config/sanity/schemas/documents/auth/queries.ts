import groq from 'groq'

// Check if Dates are within a range (Publication Settings)
const accessCheck = `
  (access.isHidden != true ||
  (access.publishedAt < now() || access.publishedAt == null) 
  && (access.unpublishedAt == null || access.unpublishedAt > now()))
`

export const getUserByEmail = groq`
*[(_type == 'user' && email == $email) && ${accessCheck}] | order(_updatedAt desc)[0] {
  _id,
  _type,
  _updatedAt,
  email,
  hash,
  access  
}`
