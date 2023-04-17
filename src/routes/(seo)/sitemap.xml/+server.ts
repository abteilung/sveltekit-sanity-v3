// Get Queries from Sanity
import {getSanityServerClient} from '$lib/config/sanity/client'
import {getLayoutData} from '$lib/config/sanity/queries'

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
      'Cache-Control': `max-age=0, s-maxage=${3600}`,
      'Content-Type': 'application/xml'
    }
  })
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
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
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
