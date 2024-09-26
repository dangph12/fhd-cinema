import { useEffect } from 'react';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { useLayoutContext } from '@/context/useLayoutContext';
import useViewPort from '@/hooks/useViewPort';
const LeftSideBarToggle = () => {
  const {
    width
  } = useViewPort();
  const {
    menu: {
      size
    },
    changeMenu: {
      size: changeMenuSize
    }
  } = useLayoutContext();
  useEffect(() => {
    if (width <= 1440 && size === 'default') changeMenuSize('collapsed');else if (width > 1440) changeMenuSize('default');
  }, [width]);
  return <li>
      <button className="nav-link mobile-menu-btn nav-icon" id="togglemenu" onClick={() => size === 'default' ? changeMenuSize('collapsed') : changeMenuSize('default')}>
        <IconifyIcon height={20} width={20} icon="iconoir:menu-scale" />
      </button>
    </li>;
};
export default LeftSideBarToggle;