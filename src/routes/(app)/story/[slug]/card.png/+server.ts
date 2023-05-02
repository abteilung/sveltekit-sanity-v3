import {getSanityServerClient} from '$lib/config/sanity/client'
import {getPostBySlug} from '$lib/config/sanity/queries'

import type {RequestHandler} from '@sveltejs/kit'

import satori from 'satori'
import {Resvg} from '@resvg/resvg-js'
import SourceSansProBlack from './SourceSansPro-Black.woff'
import {html as toReactNode} from 'satori-html'

import {error} from '@sveltejs/kit'
import Card from './Card.svelte'

const height = 630
const width = 1200

export const prerender = 'auto'

console.log('xaca: ', Buffer.from(SourceSansProBlack))
export const GET: RequestHandler = async ({params}) => {
  const post = await getSanityServerClient(false).fetch(getPostBySlug, {slug: params.slug})

  if (!post) {
    throw error(404)
  }

  const result = Card.render({post})
  const element = toReactNode(`${result.html}<style>${result.css.code}</style>`)

  const fontFile400 = await fetch('https://og-playground.vercel.app/inter-latin-ext-400-normal.woff')
  const fontData400 = await fontFile400.arrayBuffer()

  const template = toReactNode(`${result.html}`)

  const svg = await satori(template, {
    fonts: [
      {
        name: 'Source Sans Pro',
        // data: await Buffer.from(SourceSansProBlack),
        data: fontData400,
        style: 'black',
        weiht: 900
      }
    ],
    height,
    width
  })

  const resvg = new Resvg(svg, {
    fitTo: {
      mode: 'width',
      value: width
    }
  })

  const image = resvg.render()

  return new Response(image.asPng(), {
    headers: {
      'content-type': 'image/png',
      'cache-control': 'public, max-age=604800' // cache for 7 days
    }
  })
}
