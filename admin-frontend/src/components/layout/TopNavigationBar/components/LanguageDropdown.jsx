import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap';
import usFlag from '@/assets/images/flags/us_flag.jpg';
import spainFlag from '@/assets/images/flags/spain_flag.jpg';
import germanyFlag from '@/assets/images/flags/germany_flag.jpg';
import frenchFlag from '@/assets/images/flags/french_flag.jpg';
const LanguageDropdown = () => {
  return <Dropdown>
      <DropdownToggle className="nav-link arrow-none nav-icon">
        <img src={usFlag} alt="flag" className="thumb-sm rounded-circle" />
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem href="#">
          <img src={usFlag} alt="flag-img" height={15} className="me-2" />
          English
        </DropdownItem>
        <DropdownItem href="#">
          <img src={spainFlag} alt="flag-img" height={15} className="me-2" />
          Spanish
        </DropdownItem>
        <DropdownItem href="#">
          <img src={germanyFlag} alt="flag-img" height={15} className="me-2" />
          German
        </DropdownItem>
        <DropdownItem href="#">
          <img src={frenchFlag} alt="flag-img" height={15} className="me-2" />
          French
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>;
};
export default LanguageDropdown;