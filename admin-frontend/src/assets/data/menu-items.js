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
        key: 'tables-accounts-table',
        label: 'Accounts Table',
        url: '/tables/accounts-table',
        parentKey: 'tables',
      },
      {
        key: 'tables-movies-table',
        label: 'Movies Table',
        url: '/tables/movies-table',
        parentKey: 'tables',
      },
    ],
  },
]
