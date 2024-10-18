export const MENU_ITEMS = [
  {
    key: 'components',
    label: 'COMPONENTS',
    isTitle: true,
  },
  {
    key: 'dashboards',
    icon: 'iconoir:home-simple',
    label: 'Dashboards',
    children: [{
      key: 'dashboard-analytics',
      label: 'Analytics',
      url: '/dashboard/analytics',
      parentKey: 'dashboards'
    }]
  },
  {
    key: 'tables',
    icon: 'icon:table-rows',
    label: 'Tables',
    children: [
      {
        key: 'tables-accounts-table',
        label: 'Accounts Table',
        url: '/tables/accounts-table',
        parentKey: 'tables',
      },
      {
        key: 'tables-bills-table',
        label: 'Bills Table',
        url: '/tables/bills-table',
        parentKey: 'tables',
      },
      {
        key: 'tables-bookings-table',
        label: 'Bookings Table',
        url: '/tables/bookings-table',
        parentKey: 'tables',
      },
      {
        key: 'tables-cinemas-table',
        label: 'Cinemas Table',
        url: '/tables/cinemas-table',
        parentKey: 'tables',
      },
      {
        key: 'tables-customers-table',
        label: 'Customers Table',
        url: '/tables/customers-table',
        parentKey: 'tables',
      },
      {
        key: 'tables-movies-table',
        label: 'Movies Table',
        url: '/tables/movies-table',
        parentKey: 'tables',
      },
      {
        key: 'tables-news-table',
        label: 'News Table',
        url: '/tables/news-table',
        parentKey: 'tables',
      },
      {
        key: 'tables-screens-table',
        label: 'Screens Table',
        url: '/tables/screens-table',
        parentKey: 'tables',
      },
      {
        key: 'tables-seats-table',
        label: 'Seats Table',
        url: '/tables/seats-table',
        parentKey: 'tables',
      },
      {
        key: 'tables-showtimes-table',
        label: 'Showtimes Table',
        url: '/tables/showtimes-table',
        parentKey: 'tables',
      },
      {
        key: 'tables-tickets-table',
        label: 'Tickets Table',
        url: '/tables/tickets-table',
        parentKey: 'tables',
      },
    ],
  },
]
