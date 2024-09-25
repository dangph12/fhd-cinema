import IconifyIcon from '@/components/wrappers/IconifyIcon';
import useScrollEvent from '@/hooks/useScrollEvent';
import clsx from 'clsx';
import LanguageDropdown from './components/LanguageDropdown';
import LeftSideBarToggle from './components/LeftSideBarToggle';
import Notifications from './components/Notifications';
import ProfileDropdown from './components/ProfileDropdown';
import ThemeModeToggle from './components/ThemeModeToggle';
const TopNavigationBar = () => {
  const {
    scrollY
  } = useScrollEvent();
  return <div className="topbar d-print-none">
      <div className="container-xxl">
        <nav className={clsx('topbar-custom d-flex justify-content-between', {
        'nav-sticky': scrollY >= 50
      })} id="topbar-custom">
          <ul className="topbar-item list-unstyled d-inline-flex align-items-center mb-0">
            <LeftSideBarToggle />

            <li className="mx-3 welcome-text">
              <h3 className="mb-0 fw-bold text-truncate">Good Morning, James!</h3>
            </li>
          </ul>
          <ul className="topbar-item list-unstyled d-inline-flex align-items-center mb-0">
            <li className="hide-phone app-search">
              <form role="search" action="#" method="get">
                <input type="search" name="search" className="form-control top-search mb-0" placeholder="Search here..." />
                <button type="button">
                  <IconifyIcon icon="iconoir:search" className="mb-1" />
                </button>
              </form>
            </li>
            <LanguageDropdown />
            <ThemeModeToggle />
            <Notifications />
            <ProfileDropdown />
          </ul>
        </nav>
      </div>
    </div>;
};
export default TopNavigationBar;