import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

// Dashboard Routes
const Analytics = lazy(() => import('@/app/(admin)/dashboard/analytics/page'))
const Ecommerce = lazy(() => import('@/app/(admin)/dashboard/ecommerce/page'))

// Apps Routes
const AnalyticCustomer = lazy(() => import('@/app/(admin)/apps/analytics/customers/page'))
const AnalyticReport = lazy(() => import('@/app/(admin)/apps/analytics/reports/page'))
const ProjectClient = lazy(() => import('@/app/(admin)/apps/projects/clients/page'))
const ProjectTeam = lazy(() => import('@/app/(admin)/apps/projects/team/page'))
const Project = lazy(() => import('@/app/(admin)/apps/projects/project/page'))
const ProjectTask = lazy(() => import('@/app/(admin)/apps/projects/task/page'))
const Kanban = lazy(() => import('@/app/(admin)/apps/projects/kanban/page'))
const ProjectUsers = lazy(() => import('@/app/(admin)/apps/projects/users/page'))
const ProjectCreate = lazy(() => import('@/app/(admin)/apps/projects/create/page'))
const EcommerceProducts = lazy(() => import('@/app/(admin)/apps/ecommerce/products/page'))
const EcommerceCustomers = lazy(() => import('@/app/(admin)/apps/ecommerce/customers/page'))
const CustomerDetails = lazy(() => import('@/app/(admin)/apps/ecommerce/customers/[customerId]/page'))
const Orders = lazy(() => import('@/app/(admin)/apps/ecommerce/orders/page'))
const OrderDetails = lazy(() => import('@/app/(admin)/apps/ecommerce/orders/[orderId]/page'))
const OrderRefunds = lazy(() => import('@/app/(admin)/apps/ecommerce/refunds/page'))
const Chat = lazy(() => import('@/app/(admin)/apps/chat/page'))
const Contacts = lazy(() => import('@/app/(admin)/apps/contacts/page'))
const Invoices = lazy(() => import('@/app/(admin)/apps/invoice/page'))
const Calendar = lazy(() => import('@/app/(admin)/apps/calendar/page'))

// Base UI Routes
const Alerts = lazy(() => import('@/app/(admin)/ui/alerts/page'))
const Avatars = lazy(() => import('@/app/(admin)/ui/avatars/page'))
const Badges = lazy(() => import('@/app/(admin)/ui/badges/page'))
const Grids = lazy(() => import('@/app/(admin)/ui/grids/page'))
const Buttons = lazy(() => import('@/app/(admin)/ui/buttons/page'))
const Cards = lazy(() => import('@/app/(admin)/ui/cards/page'))
const Carousel = lazy(() => import('@/app/(admin)/ui/carousels/page'))
const Images = lazy(() => import('@/app/(admin)/ui/images/page'))
const Dropdowns = lazy(() => import('@/app/(admin)/ui/dropdowns/page'))
const ListGroup = lazy(() => import('@/app/(admin)/ui/list/page'))
const Modals = lazy(() => import('@/app/(admin)/ui/modals/page'))
const Navs = lazy(() => import('@/app/(admin)/ui/navs/page'))
const Navbar = lazy(() => import('@/app/(admin)/ui/navbar/page'))
const Pagination = lazy(() => import('@/app/(admin)/ui/paginations/page'))
const PopoverAndTooltips = lazy(() => import('@/app/(admin)/ui/popovers-tooltips/page'))
const Progress = lazy(() => import('@/app/(admin)/ui/progress/page'))
const Spinners = lazy(() => import('@/app/(admin)/ui/spinners/page'))
const Typography = lazy(() => import('@/app/(admin)/ui/typography/page'))
const TabsAndAccordion = lazy(() => import('@/app/(admin)/ui/tabs-accordion/page'))
const Videos = lazy(() => import('@/app/(admin)/ui/videos/page'))

// Advanced UI Routes
const Ratings = lazy(() => import('@/app/(admin)/advanced/ratings/page'))
const SweetAlerts = lazy(() => import('@/app/(admin)/advanced/alerts/page'))
const Animation = lazy(() => import('@/app/(admin)/advanced/animation/page'))
const ClipBoard = lazy(() => import('@/app/(admin)/advanced/clipboard/page'))
const Dragula = lazy(() => import('@/app/(admin)/advanced/dragula/page'))
const FileManager = lazy(() => import('@/app/(admin)/advanced/file-manager/page'))
const Highlight = lazy(() => import('@/app/(admin)/advanced/highlight/page'))
const RangeSlider = lazy(() => import('@/app/(admin)/advanced/range-slider/page'))
const Ribbons = lazy(() => import('@/app/(admin)/advanced/ribbons/page'))
const Toasts = lazy(() => import('@/app/(admin)/advanced/toasts/page'))

// Charts and Maps Routes
const ApexChart = lazy(() => import('@/app/(admin)/charts/apex/page'))
const JustgageCharts = lazy(() => import('@/app/(admin)/charts/justgage/page'))
const ChartjsCharts = lazy(() => import('@/app/(admin)/charts/chartjs/page'))
const ToastChart = lazy(() => import('@/app/(admin)/charts/toast/page'))
const GoogleMaps = lazy(() => import('@/app/(admin)/maps/google/page'))
const VectorMaps = lazy(() => import('@/app/(admin)/maps/vector/page'))
const Leafletmaps = lazy(() => import('@/app/(admin)/maps/leaflet/page'))

// Forms Routes
const Basic = lazy(() => import('@/app/(admin)/forms/basic/page'))
const FormAdvanced = lazy(() => import('@/app/(admin)/forms/advance/page'))
const FormValidation = lazy(() => import('@/app/(admin)/forms/validation/page'))
const FormWizard = lazy(() => import('@/app/(admin)/forms/wizard/page'))
const FormEditors = lazy(() => import('@/app/(admin)/forms/editors/page'))
const FormFileUpload = lazy(() => import('@/app/(admin)/forms/file-uploads/page'))
const FormImageCrop = lazy(() => import('@/app/(admin)/forms/image-crop/page'))

// Tables Routes
const BasicTable = lazy(() => import('@/app/(admin)/tables/basic/page'))
const DataTables = lazy(() => import('@/app/(admin)/tables/data-tables/page'))
const AccountsTables = lazy(() => import('@/app/(admin)/tables/accounts-tables/page'))

// Icon Routes
const FontAwesomeIcons = lazy(() => import('@/app/(admin)/icons/fa/page'))
const LaIcons = lazy(() => import('@/app/(admin)/icons/la/page'))
const IcofontIcons = lazy(() => import('@/app/(admin)/icons/icofont/page'))
const IconoirIcons = lazy(() => import('@/app/(admin)/icons/iconoir/page'))

//template routes
const BasicEmail = lazy(() => import('@/app/(admin)/email-templates/basic/page'))
const AlertEmail = lazy(() => import('@/app/(admin)/email-templates/alert/page'))
const BillingEmail = lazy(() => import('@/app/(admin)/email-templates/billing/page'))

// Not Found Routes
const Error500 = lazy(() => import('@/app/(other)/error-500/page'))
const NotFound = lazy(() => import('@/app/(other)/not-found/page'))

// Pages Routes
const ProfilePage = lazy(() => import('@/app/(admin)/pages/profile/page'))
const Notifications = lazy(() => import('@/app/(admin)/pages/notifications/page'))
const TimelinePage = lazy(() => import('@/app/(admin)/pages/timeline/page'))
const TreeviewPage = lazy(() => import('@/app/(admin)/pages/treeview/page'))
const StarterPage = lazy(() => import('@/app/(admin)/pages/starter/page'))
const PricingPage = lazy(() => import('@/app/(admin)/pages/pricing/page'))
const BlogPage = lazy(() => import('@/app/(admin)/pages/blogs/page'))
const FAQsPage = lazy(() => import('@/app/(admin)/pages/faqs/page'))
const GalleryPage = lazy(() => import('@/app/(admin)/pages/gallery/page'))
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
  {
    path: '/dashboard/ecommerce',
    name: 'Finance',
    element: <Ecommerce />,
  },
]
const appsRoutes = [
  {
    name: 'Analytic Customers',
    path: '/apps/analytics/customers',
    element: <AnalyticCustomer />,
  },
  {
    name: 'Analytic Reports',
    path: '/apps/analytics/reports',
    element: <AnalyticReport />,
  },
  {
    name: 'Project Client',
    path: '/apps/projects/clients',
    element: <ProjectClient />,
  },
  {
    name: 'Project Team',
    path: '/apps/projects/team',
    element: <ProjectTeam />,
  },
  {
    name: 'Project',
    path: '/apps/projects/project',
    element: <Project />,
  },
  {
    name: 'Project Task',
    path: '/apps/projects/task',
    element: <ProjectTask />,
  },
  {
    name: 'Kanban',
    path: '/apps/projects/kanban',
    element: <Kanban />,
  },
  {
    name: 'Project Users',
    path: '/apps/projects/users',
    element: <ProjectUsers />,
  },
  {
    name: 'Project Create',
    path: '/apps/projects/create',
    element: <ProjectCreate />,
  },
  {
    name: 'Products',
    path: '/apps/ecommerce/products',
    element: <EcommerceProducts />,
  },
  {
    name: 'Customer',
    path: '/apps/ecommerce/customers',
    element: <EcommerceCustomers />,
  },
  {
    name: 'Customers',
    path: '/apps/ecommerce/customers/:customerId',
    element: <CustomerDetails />,
  },
  {
    name: 'Ecommerce Orders',
    path: '/apps/ecommerce/orders',
    element: <Orders />,
  },
  {
    name: 'Ecommerce Orders Details',
    path: '/apps/ecommerce/orders/:orderId',
    element: <OrderDetails />,
  },
  {
    name: 'Refunds',
    path: '/apps/ecommerce/refunds',
    element: <OrderRefunds />,
  },
  {
    name: 'Chat',
    path: '/apps/chat',
    element: <Chat />,
  },
  {
    name: 'Contacts',
    path: '/apps/contacts',
    element: <Contacts />,
  },
  {
    name: 'Invoices List',
    path: '/apps/invoice',
    element: <Invoices />,
  },
  {
    name: 'Calendar',
    path: '/apps/calendar',
    element: <Calendar />,
  },
]
const customRoutes = [
  {
    path: '/pages/profile',
    name: 'Profile',
    element: <ProfilePage />,
  },
  {
    path: '/pages/notifications',
    name: 'Notifications',
    element: <Notifications />,
  },
  {
    path: '/pages/timeline',
    name: 'Timeline',
    element: <TimelinePage />,
  },
  {
    path: '/pages/treeview',
    name: 'Treeview',
    element: <TreeviewPage />,
  },
  {
    path: '/pages/starter',
    name: 'Starter Page',
    element: <StarterPage />,
  },
  {
    path: '/pages/pricing',
    name: 'Pricing',
    element: <PricingPage />,
  },
  {
    path: '/pages/blogs',
    name: 'Blogs',
    element: <BlogPage />,
  },
  {
    path: '/pages/faqs',
    name: 'Faqs',
    element: <FAQsPage />,
  },
  {
    path: '/pages/gallery',
    name: 'Gallery',
    element: <GalleryPage />,
  },
]
const baseUIRoutes = [
  {
    name: 'Alerts',
    path: '/ui/alerts',
    element: <Alerts />,
  },
  {
    name: 'Avatars',
    path: '/ui/avatars',
    element: <Avatars />,
  },
  {
    name: 'Badges',
    path: '/ui/badges',
    element: <Badges />,
  },
  {
    name: 'Grids',
    path: '/ui/grids',
    element: <Grids />,
  },
  {
    name: 'Buttons',
    path: '/ui/buttons',
    element: <Buttons />,
  },
  {
    name: 'Cards',
    path: '/ui/cards',
    element: <Cards />,
  },
  {
    name: 'Carousel',
    path: '/ui/carousels',
    element: <Carousel />,
  },
  {
    name: 'Images',
    path: '/ui/images',
    element: <Images />,
  },
  {
    name: 'Dropdowns',
    path: '/ui/dropdowns',
    element: <Dropdowns />,
  },
  {
    name: 'List Group',
    path: '/ui/list',
    element: <ListGroup />,
  },
  {
    name: 'Modals',
    path: '/ui/modals',
    element: <Modals />,
  },
  {
    name: 'Navs',
    path: '/ui/navs',
    element: <Navs />,
  },
  {
    name: 'Navbar',
    path: '/ui/navbar',
    element: <Navbar />,
  },
  {
    name: 'Pagination',
    path: '/ui/paginations',
    element: <Pagination />,
  },
  {
    name: 'Popovers Tooltips',
    path: '/ui/popovers-tooltips',
    element: <PopoverAndTooltips />,
  },
  {
    name: 'Progress',
    path: '/ui/progress',
    element: <Progress />,
  },
  {
    name: 'Spinners',
    path: '/ui/spinners',
    element: <Spinners />,
  },
  {
    name: 'Tabs Accordion',
    path: '/ui/tabs-accordion',
    element: <TabsAndAccordion />,
  },
  {
    name: 'Typography',
    path: '/ui/typography',
    element: <Typography />,
  },
  {
    name: 'Videos',
    path: '/ui/videos',
    element: <Videos />,
  },
]
const advancedUIRoutes = [
  {
    path: '/advanced/animation',
    name: 'Animation',
    element: <Animation />,
  },
  {
    path: '/advanced/clipboard',
    name: 'Clip-Board',
    element: <ClipBoard />,
  },
  {
    path: '/advanced/dragula',
    name: 'Dragula',
    element: <Dragula />,
  },
  {
    path: '/advanced/file-manager',
    name: 'File Manager',
    element: <FileManager />,
  },
  {
    path: '/advanced/highlight',
    name: 'Highlight',
    element: <Highlight />,
  },
  {
    path: '/advanced/range-slider',
    name: 'Range Slider',
    element: <RangeSlider />,
  },
  {
    path: '/advanced/ratings',
    name: 'Ratings',
    element: <Ratings />,
  },
  {
    path: '/advanced/ribbons',
    name: 'Ribbons',
    element: <Ribbons />,
  },
  {
    path: '/advanced/alerts',
    name: 'Sweet Alerts',
    element: <SweetAlerts />,
  },
  {
    path: '/advanced/toasts',
    name: 'Toasts',
    element: <Toasts />,
  },
]
const chartsNMapsRoutes = [
  {
    path: '/charts/apex',
    name: 'Apex',
    element: <ApexChart />,
  },
  {
    path: '/charts/justgage',
    name: 'Justgage',
    element: <JustgageCharts />,
  },
  {
    path: '/charts/chartjs',
    name: 'Chartjs',
    element: <ChartjsCharts />,
  },
  {
    path: '/charts/toast',
    name: 'Toast Chart',
    element: <ToastChart />,
  },
  {
    name: 'Google',
    path: '/maps/google',
    element: <GoogleMaps />,
  },
  {
    name: 'Vector',
    path: '/maps/vector',
    element: <VectorMaps />,
  },
  {
    name: 'Leaflet',
    path: '/maps/leaflet',
    element: <Leafletmaps />,
  },
]
const formsRoutes = [
  {
    path: '/forms/basic',
    name: 'Basic Elements',
    element: <Basic />,
  },
  {
    path: '/forms/advance',
    name: 'Advance Elements',
    element: <FormAdvanced />,
  },
  {
    path: '/forms/validation',
    name: 'Validation',
    element: <FormValidation />,
  },
  {
    path: '/forms/wizard',
    name: 'Wizard',
    element: <FormWizard />,
  },
  {
    path: '/forms/editors',
    name: 'Editors',
    element: <FormEditors />,
  },
  {
    path: '/forms/file-uploads',
    name: 'File Upload',
    element: <FormFileUpload />,
  },
  {
    path: '/forms/image-crop',
    name: 'Image Crop',
    element: <FormImageCrop />,
  },
]
const tableRoutes = [
  //   {
  //   name: 'Basic Tables',
  //   path: '/tables/basic',
  //   element: <BasicTable />
  // },
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
const iconRoutes = [
  {
    name: 'Font Awesome',
    path: '/icons/fa',
    element: <FontAwesomeIcons />,
  },
  {
    name: 'Line Awesome',
    path: '/icons/la',
    element: <LaIcons />,
  },
  {
    name: 'Icofont',
    path: '/icons/icofont',
    element: <IcofontIcons />,
  },
  {
    name: 'Iconoir',
    path: '/icons/iconoir',
    element: <IconoirIcons />,
  },
]
const templateRoutes = [
  {
    name: 'Basic Email Template',
    path: '/email-templates/basic',
    element: <BasicEmail />,
  },
  {
    name: 'Alert Email Template',
    path: '/email-templates/alert',
    element: <AlertEmail />,
  },
  {
    name: 'Billing Email Template',
    path: '/email-templates/Billing',
    element: <BillingEmail />,
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
  ...appsRoutes,
  ...customRoutes,
  ...baseUIRoutes,
  ...advancedUIRoutes,
  ...chartsNMapsRoutes,
  ...formsRoutes,
  ...tableRoutes,
  ...iconRoutes,
  ...authRoutes,
  ...templateRoutes,
]
