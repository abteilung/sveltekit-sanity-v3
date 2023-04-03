<script lang="ts">
  export let social: any
  import classNames from 'classnames'

  export let textColor: string = 'hover:text-primary'
  export let iconSize: string = 'w-6 h-6'
  export let showIcons: boolean = true
</script>

{#if social}
  <div class={classNames()}>
    {#if social.twitter}
      <a class="{textColor} flex items-center space-x-2" href={'https://twitter.com/' + social.twitter} target="_blank">
        {#if showIcons}
        <svg class={iconSize} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"
          ><rect width="256" height="256" fill="none" /><path
            d="M88,176S32.85,144,40.78,56c0,0,39.66,40,87.22,48V88c0-22,18-40.27,40-40a40.74,40.74,0,0,1,36.67,24H240l-32,32c-4.26,66.84-60.08,120-128,120-32,0-40-12-40-12S72,200,88,176Z"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          /></svg
        >
        {/if}
        <span>{'Twitter'}</span>
      </a>
    {/if}
    {#if social.facebook}
      <a
        class="{textColor} flex items-center space-x-2"
        href={'https://facebook.com/' + social.facebook}
        target="_blank"
      >
      {#if showIcons}
        <svg class={iconSize} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"
          ><rect width="256" height="256" fill="none" /><circle
            cx="128"
            cy="128"
            r="96"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          /><path
            d="M168,88H152a24,24,0,0,0-24,24V224"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          /><line
            x1="96"
            y1="144"
            x2="160"
            y2="144"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          /></svg
        >
        {/if}
        <span>{'Facebook'}</span>
      </a>
    {/if}
    {#if social.instagram}
      <a
        class="{textColor} flex items-center space-x-2"
        href={'https://instagram.com/' + social.instagram}
        target="_blank"
      >
      {#if showIcons}
        <svg class={iconSize} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"
          ><rect width="256" height="256" fill="none" /><circle
            cx="128"
            cy="128"
            r="40"
            fill="none"
            stroke="currentColor"
            stroke-miterlimit="10"
            stroke-width="16"
          /><rect
            x="32"
            y="32"
            width="192"
            height="192"
            rx="48"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          /><circle cx="180" cy="76" r="12" /></svg
        >
        {/if}
        <span>{'Instagram'}</span>
      </a>
    {/if}
    {#if social.youtube}
      <a class="{textColor} flex items-center space-x-2" href={'https://youtube.com/' + social.youtube} target="_blank">
        {#if showIcons}
        <svg class={iconSize} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"
          ><rect width="256" height="256" fill="none" /><polygon
            points="160 128 112 96 112 160 160 128"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          /><path
            d="M24,128c0,29.91,3.07,47.45,5.41,56.47A16,16,0,0,0,39,195.42C72.52,208.35,128,208,128,208s55.48.35,89-12.58a16,16,0,0,0,9.63-10.95c2.34-9,5.41-26.56,5.41-56.47s-3.07-47.45-5.41-56.47a16,16,0,0,0-9.63-11C183.48,47.65,128,48,128,48s-55.48-.35-89,12.58a16,16,0,0,0-9.63,11C27.07,80.54,24,98.09,24,128Z"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          /></svg
        >
        {/if}
        <span>{'YouTube'}</span>
      </a>
    {/if}
    {#if social.linkedin}
      <a
        class="{textColor} flex items-center space-x-2"
        href={'https://linkedin.com/' + social.linkedin}
        target="_blank"
      >
      {#if showIcons}
        <svg class={iconSize} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"
          ><rect width="256" height="256" fill="none" /><rect
            x="32"
            y="32"
            width="192"
            height="192"
            rx="8"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          /><line
            x1="120"
            y1="112"
            x2="120"
            y2="176"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          /><line
            x1="88"
            y1="112"
            x2="88"
            y2="176"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          /><path
            d="M120,140a28,28,0,0,1,56,0v36"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          /><circle cx="88" cy="84" r="12" /></svg
        >
        {/if}
        <span>{'LinkedIn'}</span>
      </a>
    {/if}
    {#if social.tiktok}
      <a class="{textColor} flex items-center space-x-2" href={'https://tiktok.com/@' + social.tiktok} target="_blank">
        {#if showIcons}
        <svg class={iconSize} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"
          ><rect width="256" height="256" fill="none" /><path
            d="M168,102a95.55,95.55,0,0,0,56,18V80a56,56,0,0,1-56-56H128V156a28,28,0,1,1-40-25.31V88c-31.83,5.67-56,34.54-56,68a68,68,0,0,0,136,0Z"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          /></svg
        >
        {/if}
        <span>{'TikTok'}</span>
      </a>
    {/if}
    {#if social.pinterest}
      <a
        class="{textColor} flex items-center space-x-2"
        href={'https://pinterest.com/' + social.pinterest}
        target="_blank"
      >
      {#if showIcons}
        <svg class={iconSize} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"
          ><rect width="256" height="256" fill="none" /><line
            x1="120"
            y1="88"
            x2="88"
            y2="224"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          /><path
            d="M58.7,152A80,80,0,1,1,208,112c0,44.18-32,72-64,72s-41.63-21.07-41.63-21.07"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          /></svg
        >
        {/if}
        <span>{'Pinterest'}</span>
      </a>
    {/if}
    {#if social.reddit}
      <a class="{textColor} flex items-center space-x-2" href={'https://reddit.com/' + social.reddit} target="_blank">
        {#if showIcons}
        <svg class={iconSize} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"
          ><rect width="256" height="256" fill="none" /><circle
            cx="184"
            cy="32"
            r="16"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          /><polyline
            points="128 72 136 24 168.29 28.97"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          /><path
            d="M59.41,89.88C77.72,78.75,101.72,72,128,72s50.28,6.75,68.59,17.88h0a24,24,0,1,1,31.62,34.79h0A51.6,51.6,0,0,1,232,144c0,39.76-46.56,72-104,72S24,183.76,24,144a51.6,51.6,0,0,1,3.79-19.33h0A24,24,0,1,1,59.41,89.88Z"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          /><circle cx="88" cy="128" r="16" /><circle cx="168" cy="128" r="16" /><path
            d="M160,176a68,68,0,0,1-64,0"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          /></svg
        >
        {/if}
        <span>{'Reddit'}</span>
      </a>
    {/if}
  </div>
{/if}
