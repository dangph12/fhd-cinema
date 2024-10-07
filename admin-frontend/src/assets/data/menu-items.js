export const MENU_ITEMS = [
  {
    key: 'components',
    label: 'COMPONENTS',
    isTitle: true,
  },
  {
    key: 'tables',
    icon: 'icon:table-rows',
    label: 'Tables',
    children: [
      {
        key: 'tables-data-tables',
        label: 'Data Tables',
        url: '/tables/data-tables',
        parentKey: 'tables',
      },
      {
        key: 'tables-accounts-tables',
        label: 'Accounts Tables',
        url: '/tables/accounts-tables',
        parentKey: 'tables',
      },
    ],
  },
]
