import { Suspense } from 'react';
import FallbackLoading from '@/components/FallbackLoading';
import LogoBox from '@/components/LogoBox';
import SimplebarReactClient from '@/components/wrappers/SimplebarReactClient';
import { getMenuItems } from '@/helpers/menu';
import AppMenu from './components/AppMenu';
const VerticalNavigationBar = () => {
  const menuItems = getMenuItems();
  return <div className="startbar d-print-none">
      <div className="brand">
        <LogoBox />
      </div>
      <div className="startbar-menu">
        <SimplebarReactClient className="startbar-collapse" id="startbarCollapse">
          <div className="d-flex align-items-start flex-column w-100">
            <Suspense fallback={<FallbackLoading />}>
              <AppMenu menuItems={menuItems} />
            </Suspense>
          </div>
        </SimplebarReactClient>
      </div>
    </div>;
};
export default VerticalNavigationBar;