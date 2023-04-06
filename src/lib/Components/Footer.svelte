<script lang="ts">
  import Icons from '$lib/Components/Icons.svelte'
  import CookieBanner from '$lib/Components/CookieBanner.svelte'
  import SocialIcons from '$lib/Components/SocialIcons.svelte'
  import MenuInline from '$lib/Components/Navigation/MenuInline.svelte'
  export let menu: any
  export let dsgvo: any
  export let contact: any
  export let socialChannels: any
  export let products: any
  export let services: any
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
          <a class="hover:text-primary" href="tel:{contact.phone.replace(/\s+/g, '')}">Anrufen: {contact.phone}</a>
          <br />
          <a class="hover:text-primary" href="mailto:{contact.email}">Schreiben: {contact.email}</a>
        </p>
      </div>
      <div>
        <h3>Produkte</h3>
        <ul>
          {#each products as product}
            {#if product.href}
              <li>
                <a href={product.href}>{product.subtitle || product.title}</a>
              </li>
            {/if}
          {/each}
        </ul>
      </div>
      <div>
        <h3>Services</h3>
        <ul>
          {#each services as service}
            {#if service.href}
              <li>
                <a href={service.href}>{service.subtitle || service.title}</a>
              </li>
            {/if}
          {/each}
        </ul>
      </div>
      <div>
        <h3>Social</h3>
        <SocialIcons {socialChannels} showIcons={true} />
      </div>
    </div>
    <hr />
    <div class="flex justify-between">
      <MenuInline {menu} spacing="8" />
      <div>
        <p>© {new Date().getFullYear()} - {dsgvo.companyName}</p>
      </div>
    </div>
  </div>
</footer>

<CookieBanner {dsgvo} />
