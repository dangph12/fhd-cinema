import ComponentContainerCard from '@/components/ComponentContainerCard';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import useToggle from '@/hooks/useToggle';
import { Button, Col, Collapse, Container, Dropdown, DropdownDivider, DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink, Row } from 'react-bootstrap';
import logoSm from '@/assets/images/logo-sm.png';
import logoDark from '@/assets/images/logo-dark.png';
import { Link } from 'react-router-dom';
const NavBarDropdown = () => {
  return <Dropdown>
      <DropdownToggle as="a" className="nav-link icons-center" href="#" id="navbarDropdown" role="button">
        Dropdown <IconifyIcon icon="la:angle-down" className="ms-1" />
      </DropdownToggle>
      <DropdownMenu aria-labelledby="navbarDropdown">
        <li>
          <DropdownItem href="#">Action</DropdownItem>
        </li>
        <li>
          <DropdownItem href="#">Another action</DropdownItem>
        </li>
        <li>
          <DropdownDivider />
        </li>
        <li>
          <DropdownItem href="#">Something else here</DropdownItem>
        </li>
      </DropdownMenu>
    </Dropdown>;
};
const NavbarTheme = ({
  color
}) => {
  const {
    isTrue: isOpen,
    toggle
  } = useToggle();
  return <nav className={`navbar navbar-expand-lg navbar-dark bg-${color} mb-2`}>
      <Container fluid>
        <Link className="navbar-brand" to="">
          Navbar
        </Link>
        <button onClick={toggle} className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon" />
        </button>
        <Collapse in={isOpen} className="navbar-collapse">
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavItem>
                <NavLink eventKey="1" active aria-current="page" href="#">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Link</NavLink>
              </NavItem>
              <NavItem>
                <NavBarDropdown />
              </NavItem>
              <NavItem>
                <NavLink disabled href="#" tabIndex={-1} aria-disabled="true">
                  Disabled
                </NavLink>
              </NavItem>
            </ul>
            <form className="d-flex">
              <div className="input-group">
                <input type="text" className="form-control bg-white bg-opacity-25 border-white border-opacity-25" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <Button variant={color === 'dark' ? 'secondary' : 'dark'} type="button" id="button-addon2">
                  <IconifyIcon icon="fa-solid:search" />
                </Button>
              </div>
            </form>
          </div>
        </Collapse>
      </Container>
    </nav>;
};
const BasicNavbar = () => {
  const {
    isTrue: isOpen,
    toggle
  } = useToggle();
  return <ComponentContainerCard title="Basic Navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="">
            Navbar
          </Link>
          <button onClick={toggle} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <Collapse in={isOpen} className="navbar-collapse">
            <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <NavItem>
                  <NavLink eventKey="1" active aria-current="page" href="#">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavBarDropdown />
                </NavItem>
                <NavItem>
                  <NavLink disabled href="#" tabIndex={-1} aria-disabled="true">
                    Disabled
                  </NavLink>
                </NavItem>
              </ul>
              <form className="d-flex">
                <div className="input-group icons-center">
                  <input type="text" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                  <button className="btn btn-soft-secondary" type="button" id="button-addon2">
                    <IconifyIcon icon="fa-solid:search" />
                  </button>
                </div>
              </form>
            </div>
          </Collapse>
        </div>
      </nav>
    </ComponentContainerCard>;
};
const NavbarWithBrandImage = () => {
  const {
    isTrue: isOpen,
    toggle
  } = useToggle();
  const {
    isTrue: isNavbarOpen,
    toggle: toggleNavbar
  } = useToggle();
  return <ComponentContainerCard title="Navbar With Brand Image">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="">
            <img src={logoSm} height={26} alt="logo-sm" className="me-1" />
          </Link>
          <button onClick={toggle} className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon" />
          </button>
          <Collapse in={isOpen} className="navbar-collapse">
            <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <NavItem>
                  <NavLink eventKey="1" active aria-current="page" href="#">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavBarDropdown />
                </NavItem>
                <NavItem>
                  <NavLink disabled href="#" tabIndex={-1} aria-disabled="true">
                    Disabled
                  </NavLink>
                </NavItem>
              </ul>
              <form className="d-flex">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                  <button className="btn btn-soft-secondary" type="button" id="button-addon2">
                    <IconifyIcon icon="fa-solid:search" />
                  </button>
                </div>
              </form>
            </div>
          </Collapse>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mt-2">
        <Container fluid>
          <Link className="navbar-brand" to="">
            <img src={logoSm} height={26} alt="logo-2" className="me-2" />
            <img src={logoDark} height={16} alt="logo-dark" />
          </Link>
          <button onClick={toggleNavbar} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent3" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <Collapse in={isNavbarOpen} className="navbar-collapse">
            <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <NavItem>
                  <NavLink eventKey="1" active aria-current="page" href="#">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavBarDropdown />
                </NavItem>
                <NavItem>
                  <NavLink disabled href="#" tabIndex={-1} aria-disabled="true">
                    Disabled
                  </NavLink>
                </NavItem>
              </ul>
              <form className="d-flex">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                  <button className="btn btn-soft-secondary" type="button" id="button-addon2">
                    <IconifyIcon icon="fa-solid:search" />
                  </button>
                </div>
              </form>
            </div>
          </Collapse>
        </Container>
      </nav>
    </ComponentContainerCard>;
};
const NavbarThemeColors = () => {
  const navbarColors = ['primary', 'secondary', 'dark'];
  return <ComponentContainerCard title="Theme Colors">
      {navbarColors.map((color, idx) => <NavbarTheme color={color} key={idx} />)}
    </ComponentContainerCard>;
};
const AllNavBars = () => {
  return <>
      <Row className="justify-content-center">
        <Col>
          <BasicNavbar />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col>
          <NavbarWithBrandImage />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col>
          <NavbarThemeColors />
        </Col>
      </Row>
    </>;
};
export default AllNavBars;