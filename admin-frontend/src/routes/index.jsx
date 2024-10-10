import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

// Dashboard Routes
const Analytics = lazy(() => import('@/app/(admin)/dashboard/analytics/page'))

// Tables Routes
const DataTables = lazy(() => import('@/app/(admin)/tables/data-tables/page'))
const AccountsTables = lazy(() => import('@/app/(admin)/tables/accounts-tables/page'))

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
    name: 'Data Table',
    path: '/tables/data-tables',
    element: <DataTables />,
  },
  {
    name: 'Account Table',
    path: '/tables/accounts-tables',
    element: <AccountsTables />,
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
