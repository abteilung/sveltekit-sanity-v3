<script lang="ts">
  import Cookies from 'js-cookie'
  import {onMount} from 'svelte'

  import {cookieVisibility} from '$lib/Stores/Stores'

  export let dsgvo: any

  export let cookieName = 'cookieConsent'
  export let cookieValue = 'true'
  export let cookiePath = '/'
  export let cookieSecure = false
  export let cookieSameSite = 'Lax'
  export let cookieExpires = dsgvo.cookieExpires ? dsgvo.cookieExpires : 365
  export let cookieDomain = dsgvo.siteUrl ? dsgvo.siteUrl : ''

  function acceptCookies() {
    Cookies.set(cookieName, cookieValue, {
      expires: cookieExpires,
      path: cookiePath,
      domain: cookieDomain,
      secure: cookieSecure,
      sameSite: cookieSameSite
    })
    cookieVisibility.set(false)
  }

  $: {
    // Check if cookie is set
    onMount(() => {
      if (Cookies.get(cookieName) !== cookieValue) {
        // set Store vaule of cookieVisibility to true
        cookieVisibility.set(true)
      }
    })
  }

</script>

{#if $cookieVisibility}
  <div class="flex justify-between items-center cookie-bar p-8 bg-black text-white fixed bottom-4 left-4 w-1/2 z-50">
    <div>
      <p class="mb-0">{dsgvo.cookieBannerText}</p>
      {#if dsgvo.cookieBannerMoreLink.href}
        <a href={dsgvo.cookieBannerMoreLink.href} class="text-white mb-0 underline">{dsgvo.cookieBannerMoreLinkText}</a>
      {/if}
    </div>
    <div class="space-x-4 flex items-center">
      <button class="bg-white whitespace-nowrap text-black px-6 py-2" on:click={acceptCookies}
        >{dsgvo.cookieBannerLinkText}</button
      >
    </div>
  </div>
{/if}