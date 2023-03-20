export default {
  title: 'Naviation Settings',
  name: 'navigationSettings',
  type: 'document',
  fields: [
    {
      name: 'navMenuHeader',
      type: 'reference',
      to: [{type: 'menu'}]
    },
    {
      name: 'navMenuFooter',
      type: 'reference',
      to: [{type: 'menu'}]
    },
    {
      name: 'navMenuMeta',
      type: 'reference',
      to: [{type: 'menu'}]
    }
  ]
}
