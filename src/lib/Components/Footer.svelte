<script lang="ts">
  import Icons from '$lib/Components/Icons.svelte'
  import CookieBanner from '$lib/Components/CookieBanner.svelte'
  import SocialIcons from '$lib/Components/SocialIcons.svelte'
  export let menu: any
  export let dsgvo: any
  export let contact: any
  export let social: any
</script>

<footer id="footer">
  <div class="footerContent text-white">
    <div class="grid md:grid-cols-4">
      <div>
        <h3>Adresse</h3>
        {#each contact.locations as location}
          <h4>{location.name}</h4>
          <p>
            {location.address}<br />
            {location.zip}
            {location.city}<br />
          </p>
        {/each}
        <p>
          {contact.email}<br />
          {contact.phone}
        </p>
      </div>
      <div>
        <h3>Produkte</h3>
        <ul>
          {#each menu.items as menuItem}
            <li>
              <a href={menuItem.page.href}>{menuItem.title || menuItem.pageTitle}</a>
            </li>
          {/each}
        </ul>
      </div>
      <div><h3>Services</h3></div>
      <div>
        <h3>Social</h3>
        <SocialIcons {social} showIcons={true}  />
      </div>
    </div>
    <hr />
    <div class="flex justify-between">
      <div>
        <Icons />
      </div>
      <div>
        <p>© 2021 - {new Date().getFullYear()} - {dsgvo.companyName}</p>
      </div>
    </div>
  </div>
</footer>

<CookieBanner {dsgvo} />
