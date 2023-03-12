// Get Queries from Sanity
import {getSanityServerClient} from '../../../lib/config/sanity/client'
import {getSiteConfig} from '../../../lib/config/sanity/queries'

// Types
/** @type {import('@sveltejs/kit').RequestHandler} */

// Get all Data for Sitemap
export async function GET({req}) {
  const siteConfig = await getSanityServerClient(false).fetch(getSiteConfig)

  // Populate Body
  const body = robots(siteConfig)

  // Return Response
  return new Response(body, {
    headers: {
      'Cache-Control': `max-age=0, s-maxage=${3600}`,
      // content-Type Text/Plain
      'Content-Type': 'text/plain'
    }
  })
}

// Create Robots.txt
const robots = (siteConfig) => `# https://www.robotstxt.org/robotstxt.html
User-agent: *

# Stop JS and JSON from being crawled
Disallow: /*.js$
Disallow: /*.ts$
Disallow: /*.jsx$
Disallow: /*.tsx$
Disallow: /*.json
Disallow: /analytics.json
Disallow: /current-visitors.json

Sitemap: ${siteConfig.siteUrl}/sitemap.xml
`
