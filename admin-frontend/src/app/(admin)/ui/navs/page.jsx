import ComponentContainerCard from '@/components/ComponentContainerCard';
import PageMetaData from '@/components/PageMetaData';
import { Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, Row } from 'react-bootstrap';
const BasicNav = () => {
  return <ComponentContainerCard title="Base Nav">
      <Nav>
        <NavItem>
          <NavLink active eventKey={'0'}>
            Active
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey={'1'}>Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey={'2'}>Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey={'3'} disabled href="#" tabIndex={-1}>
            Disabled
          </NavLink>
        </NavItem>
      </Nav>
    </ComponentContainerCard>;
};
const NavTabs = () => {
  return <ComponentContainerCard title="Nav Tabs">
      <Nav className="nav-tabs">
        <NavItem>
          <NavLink active eventKey={'0'}>
            Active
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey={'1'}>Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey={'2'}>Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey={'3'} disabled href="#" tabIndex={-1}>
            Disabled
          </NavLink>
        </NavItem>
      </Nav>
    </ComponentContainerCard>;
};
const NavJustified = () => {
  return <ComponentContainerCard title="Nav Justified">
      <Nav defaultActiveKey={'0'} className="nav-pills nav-justified">
        <NavItem>
          <NavLink eventKey={'0'}>Active</NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey={'1'}>Longer nav link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey={'2'}>Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey={'3'} disabled href="#" tabIndex={-1}>
            Disabled
          </NavLink>
        </NavItem>
      </Nav>
    </ComponentContainerCard>;
};
const NavPills = () => {
  return <ComponentContainerCard title="Nav Pills">
      <Nav defaultActiveKey={'0'} className="nav-pills">
        <NavItem>
          <NavLink eventKey={'0'}>Active</NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey={'1'}>Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey={'2'}>Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey={'3'} disabled href="#" tabIndex={-1}>
            Disabled
          </NavLink>
        </NavItem>
      </Nav>
    </ComponentContainerCard>;
};
const NavTabsWithDropdowns = () => {
  return <ComponentContainerCard title="Nav Tabs With Dropdowns">
      <Nav defaultActiveKey={'0'} className="nav-tabs">
        <NavItem>
          <NavLink eventKey={'0'}>Active</NavLink>
        </NavItem>
        <Dropdown className="nav-item">
          <DropdownToggle as="a" className="nav-link" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#">Action</DropdownItem>
            <DropdownItem href="#">Another action</DropdownItem>
            <DropdownItem href="#">Something else here</DropdownItem>
            <DropdownItem href="#">Separated link</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavItem>
          <NavLink eventKey={'2'}>Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey={'3'} disabled href="#" tabIndex={-1}>
            Disabled
          </NavLink>
        </NavItem>
      </Nav>
    </ComponentContainerCard>;
};
const NavPillsWithDropdown = () => {
  return <ComponentContainerCard title="Nav Pills With Dropdowns">
      <Nav defaultActiveKey={'0'} className="nav-pills">
        <NavItem>
          <NavLink eventKey={'0'}>Active</NavLink>
        </NavItem>
        <Dropdown className="nav-item">
          <DropdownToggle as="a" className="nav-link" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#">Action</DropdownItem>
            <DropdownItem href="#">Another action</DropdownItem>
            <DropdownItem href="#">Something else here</DropdownItem>
            <DropdownItem href="#">Separated link</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavItem>
          <NavLink eventKey={'2'}>Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey={'3'} disabled href="#" tabIndex={-1}>
            Disabled
          </NavLink>
        </NavItem>
      </Nav>
    </ComponentContainerCard>;
};
const Navs = () => {
  return <>
      <PageMetaData title="Navs" />
      <Row className="justify-content-center">
        <Col md={6}>
          <BasicNav />
        </Col>
        <Col md={6}>
          <NavTabs />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <NavJustified />
        </Col>
        <Col md={6}>
          <NavPills />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <NavTabsWithDropdowns />
        </Col>
        <Col md={6}>
          <NavPillsWithDropdown />
        </Col>
      </Row>
    </>;
};
export default Navs;