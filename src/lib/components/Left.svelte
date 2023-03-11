<script lang="ts">
  // Menu object with title, href
  const menu = [
    {
      title: 'Home',
      href: '/',
      submenus: []
    },
    {
      title: 'About',
      href: '/about',
      submenus: []
    },
    {
      title: 'Services',
      href: '/services'
    },
    {
      title: 'Contact',
      href: '/contact',
      submenus: []
    }
  ]

  // Menu for meta objects
  const meta = [
    {
      title: 'Privacy Policy',
      href: '/privacy-policy'
    },
    {
      title: 'Terms of Use',
      href: '/terms-of-use'
    },
    {
      title: 'Sitemap',
      href: '/sitemap'
    }
  ]
</script>

<div class="navBar">
  <div class="h-full">
    <img src="logo-claim.svg" alt="ksbl" class="w-[123px] sm:w-[135px] md:w-full h-full md:h-auto py-4 md:py-0" />
    <div class="mt-[100px] hidden md:block ">
      <ul>
        {#each menu as menuItem}
          <li>
            <a href={menuItem.href}>{menuItem.title}</a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
  <div class="hidden md:flex mt-auto pt-[50px] mb-0">
    <div class="">
      <ul class="">
        {#each meta as metaItem}
          <li>
            <a href={metaItem.href}>{metaItem.title}</a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>

<style lang="postcss">
  .navBar {
    @apply sticky z-50 top-0 md:flex md:flex-col flex-none shadow-xl h-16 sm:h-24;
    @apply md:min-h-screen h-fit w-full bg-white;
    @apply md:w-[260px] px-[20px] md:p-[30px] xl:w-[320px] lg:p-[40px] 2xl:w-[384px] xl:p-[50px];
  }
</style>
