import { lazy, Suspense } from 'react';
import FallbackLoading from '@/components/FallbackLoading';
import Preloader from '@/components/Preloader';
const VerticalNavigationBar = lazy(() => import('@/components/layout/VerticalNavigationBar'));
const TopNavigationBar = lazy(() => import('@/components/layout/TopNavigationBar'));
const AdminLayout = ({
  children
}) => {
  return <>
      <Suspense>
        <TopNavigationBar />
      </Suspense>

      <Suspense fallback={<FallbackLoading />}>
        <VerticalNavigationBar />
      </Suspense>

      <div className="page-wrapper">
        <div className="page-content">
          <div className="container-xxl">
            <Suspense fallback={<Preloader />}>{children}</Suspense>
          </div>
        </div>
      </div>
    </>;
};
export default AdminLayout;