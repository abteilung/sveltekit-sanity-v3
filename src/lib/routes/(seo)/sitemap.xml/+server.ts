// Get Queries from Sanity
import {getSanityServerClient} from '$lib/config/sanity/client'
import {getLayoutData} from '$lib/config/sanity/queries'

// export const prerender = 'auto'

// Types
/** @type {import('@sveltejs/kit').RequestHandler} */

// Get all Data for Sitemap
export async function GET({req}) {
  const layoutStuff = await getSanityServerClient(false).fetch(getLayoutData)

  // Populate Body
  const body = sitemap(layoutStuff.siteMap)

  // Return Response
  return new Response(body, {
    headers: {
      'Cache-Control': `max-age=0, s-maxage=${604800}`,
      'Content-Type': 'application/xml'
    }
  })
}

// Set a new Date if a change is made
const changeDate = (date) => {
  const newDate = new Date(date)
  const year = newDate.getFullYear()
  const month = newDate.getMonth() + 1
  const day = 17
  return `${year}-${month}-${day}`
}

// Create Sitemap
const sitemap = (siteMap) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
    xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
    xmlns:xhtml="https://www.w3.org/1999/xhtml"
    xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
    xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
    <url>
        <loc>${siteMap.siteUrl}</loc>
        <lastmod>${siteMap.siteChangeDate.split('T')[0]}</lastmod>
    </url>
    ${siteMap.sitePages
      .map(
        (sitemapEntry) => `
        <url>
          <loc>${siteMap.siteUrl}${sitemapEntry.href}</loc>
          <lastmod>${sitemapEntry.updatedAt.split('T')[0]}</lastmod>
        </url>
    `
      )
      .join('')}
</urlset>`
