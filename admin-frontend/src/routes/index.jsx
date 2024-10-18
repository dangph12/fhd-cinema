import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

// Dashboard Routes
const Analytics = lazy(() => import('@/app/(admin)/dashboard/analytics/page'))

// Tables Routes
const AccountsTable = lazy(() => import('@/app/(admin)/tables/accounts-table/page'))
const BillsTable = lazy(() => import('@/app/(admin)/tables/bills-table/page'))
const BookingsTable = lazy(() => import('@/app/(admin)/tables/bookings-table/page'))
const CinemasTable = lazy(() => import('@/app/(admin)/tables/cinemas-table/page'))
const CustomersTable = lazy(() => import('@/app/(admin)/tables/customers-table/page'))
const MoviesTable = lazy(() => import('@/app/(admin)/tables/movies-table/page'))
const NewsTable = lazy(() => import('@/app/(admin)/tables/news-table/page'))
const ScreensTable = lazy(() => import('@/app/(admin)/tables/screens-table/page'))
const SeatsTable = lazy(() => import('@/app/(admin)/tables/seats-table/page'))
const ShowtimesTable = lazy(() => import('@/app/(admin)/tables/showtimes-table/page'))
const TicketsTable = lazy(() => import('@/app/(admin)/tables/tickets-table/page'))

// Not Found Routes
const Error500 = lazy(() => import('@/app/(other)/error-500/page'))
const NotFound = lazy(() => import('@/app/(other)/not-found/page'))

// Pages Routes
const Maintenance = lazy(() => import('@/app/(other)/maintenance/page'))

// Auth Routes
const AuthLogin = lazy(() => import('@/app/(other)/auth/login/page'))
const AuthRegister = lazy(() => import('@/app/(other)/auth/register/page'))
const ResetPassword = lazy(() => import('@/app/(other)/auth/reset-pass/page'))
const LockScreen = lazy(() => import('@/app/(other)/auth/lock-screen/page'))
const initialRoutes = [
  {
    path: '/',
    name: 'root',
    element: <Navigate to="/dashboard/analytics" />,
  },
]
const generalRoutes = [
  {
    path: '/dashboard/analytics',
    name: 'Analytics',
    element: <Analytics />,
  },
]
const tableRoutes = [
  {
    name: 'Account Table',
    path: '/tables/accounts-table/*',
    element: <AccountsTable />,
  },
  {
    name: 'Bill Table',
    path: '/tables/bills-table/*',
    element: <BillsTable />,
  },
  {
    name: 'Booking Table',
    path: '/tables/bookings-table/*',
    element: <BookingsTable />,
  },
  {
    name: 'Cinema Table',
    path: '/tables/cinemas-table/*',
    element: <CinemasTable />,
  },
  {
    name: 'Customers Table',
    path: '/tables/customers-table/*',
    element: <CustomersTable />,
  },
  {
    name: 'Movie Table',
    path: '/tables/movies-table/*',
    element: <MoviesTable />,
  },
  {
    name: 'News Table',
    path: '/tables/news-table/*',
    element: <NewsTable />,
  },
  {
    name: 'Screen Table',
    path: '/tables/screens-table/*',
    element: <ScreensTable />,
  },
  {
    name: 'Seat Table',
    path: '/tables/seats-table/*',
    element: <SeatsTable />,
  },
  {
    name: 'Showtimes Table',
    path: '/tables/showtimes-table/*',
    element: <ShowtimesTable />,
  },
  {
    name: 'Ticket Table',
    path: '/tables/tickets-table/*',
    element: <TicketsTable />,
  },
]
export const authRoutes = [
  {
    path: '/auth/login',
    name: 'Sign In',
    element: <AuthLogin />,
  },
  {
    name: 'Register',
    path: '/auth/register',
    element: <AuthRegister />,
  },
  {
    name: 'Reset Password',
    path: '/auth/reset-pass',
    element: <ResetPassword />,
  },
  {
    name: 'Lock Screen',
    path: '/auth/lock-screen',
    element: <LockScreen />,
  },
  {
    name: '404 Error',
    path: '/not-found',
    element: <NotFound />,
  },
  {
    name: '500 Error',
    path: '/error-500',
    element: <Error500 />,
  },
  {
    name: 'Maintenance',
    path: '/maintenance',
    element: <Maintenance />,
  },
]
export const appRoutes = [
  ...initialRoutes,
  ...generalRoutes,
  ...tableRoutes,
  ...authRoutes,
]
