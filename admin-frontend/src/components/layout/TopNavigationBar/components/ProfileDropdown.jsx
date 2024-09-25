import { Dropdown, DropdownDivider, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap';
import avatar1 from '@/assets/images/users/avatar-1.jpg';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
const ProfileDropdown = () => {
  return <Dropdown className="topbar-item">
      <DropdownToggle className="nav-link arrow-none nav-icon" role="button" aria-haspopup="false" aria-expanded="false">
        <img src={avatar1} alt="user" className="thumb-lg rounded-circle" />
      </DropdownToggle>
      <DropdownMenu align={'end'} className="py-0">
        <div className="d-flex align-items-center dropdown-item py-2 bg-secondary-subtle">
          <div className="flex-shrink-0">
            <img src={avatar1} alt="avatar" className="thumb-md rounded-circle" />
          </div>
          <div className="flex-grow-1 ms-2 text-truncate align-self-center">
            <h6 className="my-0 fw-medium text-dark fs-13">William Martin</h6>
            <small className="text-muted mb-0">Front End Developer</small>
          </div>
        </div>
        <DropdownDivider className="mt-0" />
        <small className="text-muted px-2 pb-1 d-block">Account</small>
        <DropdownItem href="/pages/profile">
          <IconifyIcon icon="la:user" className="fs-18 me-1 align-text-bottom" /> Profile
        </DropdownItem>
        <DropdownItem href="/pages/faqs">
          <IconifyIcon icon="la:wallet" className="fs-18 me-1 align-text-bottom" /> Earning
        </DropdownItem>
        <small className="text-muted px-2 py-1 d-block">Settings</small>
        <DropdownItem href="/pages/profile">
          <IconifyIcon icon="la:cog" className="fs-18 me-1 align-text-bottom" />
          Account Settings
        </DropdownItem>
        <DropdownItem href="/pages/profile">
          <IconifyIcon icon="la:lock" className="fs-18 me-1 align-text-bottom" /> Security
        </DropdownItem>
        <DropdownItem href="/pages/faqs">
          <IconifyIcon icon="la:question-circle" className="fs-18 me-1 align-text-bottom" /> Help Center
        </DropdownItem>
        <DropdownDivider className="mb-0" />
        <DropdownItem className="text-danger" href="/auth/login">
          <IconifyIcon icon="la:power-off" className="fs-18 me-1 align-text-bottom" /> Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>;
};
export default ProfileDropdown;