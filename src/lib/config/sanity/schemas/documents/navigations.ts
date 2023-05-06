export default {
  title: 'Naviation Settings',
  name: 'navigationSettings',
  type: 'document',
  fields: [
    {
      name: 'navMenuHeader',
      title: 'Main Menu',
      type: 'reference',
      to: [{type: 'menu'}]
    },
    {
      name: 'navMenuFooter',
      title: 'Footer Menu',
      type: 'reference',
      to: [{type: 'menu'}]
    },
    {
      name: 'navMenuMeta',
      title: 'Meta Menu',
      type: 'reference',
      to: [{type: 'menu'}]
    },
    {
      name: 'navMenuMobile',
      title: 'Mobile Menu',
      type: 'reference',
      to: [{type: 'menu'}]
    }
  ]
}
