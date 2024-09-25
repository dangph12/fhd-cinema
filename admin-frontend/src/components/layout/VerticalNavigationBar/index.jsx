import { Suspense } from 'react';
import FallbackLoading from '@/components/FallbackLoading';
import LogoBox from '@/components/LogoBox';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
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

            <div className="update-msg text-center">
              <div className="d-flex justify-content-center align-items-center thumb-lg update-icon-box  rounded-circle mx-auto">
                <IconifyIcon icon="iconoir:peace-hand" className="h3 align-self-center mb-0 text-primary" />
              </div>
              <h5 className="mt-3">Mannat Themes</h5>
              <p className="mb-3 text-muted">Rizz is a high quality web applications.</p>
              <button className="btn text-primary shadow-sm rounded-pill">Upgrade your plan</button>
            </div>
          </div>
        </SimplebarReactClient>
      </div>
    </div>;
};
export default VerticalNavigationBar;