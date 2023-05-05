<script lang="ts">
  import {PortableText} from '@portabletext/svelte'
  import Link from './PT/Link.svelte'
  import Lists from './PT/Lists.svelte'
  import Highlight from './PT/Highlight.svelte'
  import Sup from './PT/Sup.svelte'
  import Sub from './PT/Sub.svelte'
  import Image from './PT/Image.svelte'
  import Accordion from './PT/Accordion.svelte'
  import Gallery from './PT/Gallery.svelte'
  import Quote from './PT/Quote.svelte'
  import Code from '$lib/elements/generalContent/Code.svelte'
  import Video from '$lib/elements/media/Video.svelte'
  import Testimonial from './PT/Testimonial.svelte'
  import FAQ from './PT/FAQ.svelte'
  import PostsGrid from './PT/PostsGrid.svelte'

  const components: any = {
    marks: {
      highlight: Highlight,
      sup: Sup,
      sub: Sub,
      link: Link
    },
    list: {
      bullet: Lists,
      number: Lists
    },
    types: {
      customImage: Image,
      accordions: Accordion,
      gallery: Gallery,
      quote: Quote,
      code: Code,
      video: Video,

      // Use to reference to a custom component
      postsGrid: PostsGrid,
      faqReference: FAQ,
      testimonialReference: Testimonial
    }
  }

  export let content
</script>

<PortableText value={content} {components} />
