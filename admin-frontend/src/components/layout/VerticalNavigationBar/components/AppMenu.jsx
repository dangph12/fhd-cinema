import clsx from 'clsx';
import { Fragment, useCallback, useEffect, useState } from 'react';
import { Collapse } from 'react-bootstrap';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { findAllParent, findMenuItem, getMenuItemFromURL } from '@/helpers/menu';
import { Link, useLocation } from 'react-router-dom';
const MenuItemWithChildren = ({
  item,
  className,
  linkClassName,
  subMenuClassName,
  activeMenuItems,
  toggleMenu
}) => {
  const [open, setOpen] = useState(activeMenuItems.includes(item.key));
  useEffect(() => {
    setOpen(activeMenuItems.includes(item.key));
  }, [activeMenuItems, item]);
  const toggleMenuItem = e => {
    e.preventDefault();
    const status = !open;
    setOpen(status);
    if (toggleMenu) toggleMenu(item, status);
    return false;
  };
  const getActiveClass = item => {
    return activeMenuItems?.includes(item.key) ? 'active' : '';
  };
  return <li className={className}>
      <div onClick={toggleMenuItem} aria-expanded={open} data-bs-toggle="collapse" className={linkClassName} role="button">
        {item.icon && <i className="menu-icon">
            <IconifyIcon icon={item.icon} />
          </i>}
        <span>{item.label}</span>
        {item.badge && <span className={`badge rounded text-${item.badge.variant} ms-1 bg-${item.badge.variant}-subtle`}>{item.badge.text}</span>}
        <IconifyIcon icon="la:angle-right" className="menu-arrow" />
      </div>
      <Collapse in={open}>
        <div>
          <ul className={subMenuClassName}>
            {(item.children || []).map((child, idx) => {
            return <Fragment key={child.key + idx}>
                  {child.children ? <MenuItemWithChildren item={child} linkClassName={clsx('nav-link', getActiveClass(child))} activeMenuItems={activeMenuItems} className="nav-item" subMenuClassName="nav flex-column" toggleMenu={toggleMenu} /> : <MenuItem item={child} className="nav-item" linkClassName={clsx('nav-link', getActiveClass(child))} />}
                </Fragment>;
          })}
          </ul>
        </div>
      </Collapse>
    </li>;
};
const MenuItem = ({
  item,
  className,
  linkClassName
}) => {
  return <li className={className}>
      <MenuItemLink item={item} className={linkClassName} />
    </li>;
};
const MenuItemLink = ({
  item,
  className
}) => {
  return <Link to={item.url ?? ''} className={clsx(className)}>
      {item.label}
    </Link>;
};
const AppMenu = ({
  menuItems
}) => {
  const {
    pathname
  } = useLocation();
  const [activeMenuItems, setActiveMenuItems] = useState([]);
  const toggleMenu = (menuItem, show) => {
    if (show) setActiveMenuItems([menuItem.key, ...findAllParent(menuItems, menuItem)]);
  };
  const getActiveClass = item => {
    return activeMenuItems?.includes(item.key) ? 'active' : '';
  };
  const activeMenu = useCallback(() => {
    const trimmedURL = pathname?.replaceAll('', '');
    const matchingMenuItem = getMenuItemFromURL(menuItems, trimmedURL);
    if (matchingMenuItem) {
      const activeMt = findMenuItem(menuItems, matchingMenuItem.key);
      if (activeMt) {
        setActiveMenuItems([activeMt.key, ...findAllParent(menuItems, activeMt)]);
      }
      setTimeout(() => {
        const activatedItem = document.querySelector(`#leftside-menu-container .simplebar-content a[href="${trimmedURL}"]`);
        if (activatedItem) {
          const simplebarContent = document.querySelector('#leftside-menu-container .simplebar-content-wrapper');
          if (simplebarContent) {
            const offset = activatedItem.offsetTop - window.innerHeight * 0.4;
            scrollTo(simplebarContent, offset, 600);
          }
        }
      }, 400);

      // scrollTo (Left Side Bar Active Menu)
      const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };
      const scrollTo = (element, to, duration) => {
        const start = element.scrollTop,
          change = to - start,
          increment = 20;
        let currentTime = 0;
        const animateScroll = function () {
          currentTime += increment;
          const val = easeInOutQuad(currentTime, start, change, duration);
          element.scrollTop = val;
          if (currentTime < duration) {
            setTimeout(animateScroll, increment);
          }
        };
        animateScroll();
      };
    }
  }, [pathname, menuItems]);
  useEffect(() => {
    if (menuItems && menuItems.length > 0) activeMenu();
  }, [activeMenu, menuItems]);
  return <ul className="navbar-nav mb-auto w-100">
      {(menuItems || []).map((item, idx) => {
      return <Fragment key={item.key + idx}>
            {item.isTitle ? <li className={clsx('menu-label', idx === 0 ? 'pt-0 mt-0' : 'mt-2')}>
                <small className={clsx({
            'label-border': idx != 0
          })}>
                  <div className="border_left hidden-xs" />
                  <div className="border_right" />
                </small>
                <span>{item.label}</span>
              </li> : <>
                {item.children ? <MenuItemWithChildren item={item} toggleMenu={toggleMenu} className="nav-item" linkClassName={clsx('nav-link', getActiveClass(item))} subMenuClassName="nav flex-column" activeMenuItems={activeMenuItems} /> : <MenuItem item={item} linkClassName={clsx('nav-link', getActiveClass(item))} className="nav-item" />}
              </>}
          </Fragment>;
    })}
    </ul>;
};
export default AppMenu;