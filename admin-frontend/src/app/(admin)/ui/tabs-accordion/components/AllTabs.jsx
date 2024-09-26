import ComponentContainerCard from '@/components/ComponentContainerCard';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Col, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap';
const Tabs = () => {
  return <ComponentContainerCard title="Tabs">
      <TabContainer defaultActiveKey="1">
        <Nav className="nav-tabs" role="tablist">
          <NavItem>
            <NavLink eventKey="1" href="#home" role="tab">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventKey="2" href="#profile" role="tab">
              Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventKey="3" href="#settings" role="tab">
              Settings
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent>
          <TabPane eventKey="1" className="p-3" id="home" role="tabpanel">
            <p className="mb-0 text-muted">Raw denim you probably haven&apos;t heard of them jean shorts Austin.</p>
          </TabPane>
          <TabPane eventKey="2" className="p-3" id="profile" role="tabpanel">
            <p className="mb-0 text-muted">Food truck fixie locavore, accusamus mcsweeney&apos;s single-origin coffee squid.</p>
          </TabPane>
          <TabPane eventKey="3" className="p-3" id="settings" role="tabpanel">
            <p className="text-muted mb-0">Trust fund seitan letterpress, keytar raw denim keffiyeh etsy.</p>
          </TabPane>
        </TabContent>
      </TabContainer>
    </ComponentContainerCard>;
};
const Pills = () => {
  return <ComponentContainerCard title="Pills">
      <TabContainer defaultActiveKey="1">
        <Nav justify className="nav-pills" role="tablist">
          <NavItem>
            <NavLink eventKey="1" href="#home" role="tab">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventKey="2" href="#profile" role="tab">
              Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventKey="3" href="#settings" role="tab">
              Settings
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent>
          <TabPane eventKey="1" className="p-3" id="home" role="tabpanel">
            <p className="mb-0 text-muted">Raw denim you probably haven&apos;t heard of them jean shorts Austin.</p>
          </TabPane>
          <TabPane eventKey="2" className="p-3" id="profile" role="tabpanel">
            <p className="mb-0 text-muted">Food truck fixie locavore, accusamus mcsweeney&apos;s single-origin coffee squid.</p>
          </TabPane>
          <TabPane eventKey="3" className="p-3" id="settings" role="tabpanel">
            <p className="text-muted mb-0">Trust fund seitan letterpress, keytar raw denim keffiyeh etsy.</p>
          </TabPane>
        </TabContent>
      </TabContainer>
    </ComponentContainerCard>;
};
const VerticalPills = () => {
  const tabContents = [{
    id: '1',
    title: 'Home',
    description: 'Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater.'
  }, {
    id: '2',
    title: 'Profile',
    description: "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson."
  }, {
    id: '3',
    title: 'Settings',
    description: 'Exercitation commodo enim craft beer mlkshk +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress.'
  }];
  return <ComponentContainerCard title="Vertical Pills">
      <TabContainer defaultActiveKey="1">
        <Row>
          <Col sm={4} lg={3}>
            <Nav className="flex-column nav-pills text-center" role="tablist">
              {tabContents.map((tab, idx) => {
              return <NavLink key={idx} eventKey={tab.id} role="tab">
                    {tab.title}
                  </NavLink>;
            })}
            </Nav>
          </Col>
          <Col sm={8} lg={9}>
            <TabContent className="mo-mt-2">
              {tabContents.map((tab, idx) => {
              return <TabPane key={idx} eventKey={tab.id} className="fade" role="tabpanel">
                    <p className="mb-0 text-muted">{tab.description}</p>
                  </TabPane>;
            })}
            </TabContent>
          </Col>
        </Row>
      </TabContainer>
    </ComponentContainerCard>;
};
const CustomTabs = () => {
  const tabContents = [{
    id: '1',
    title: 'Home',
    description: "Raw denim you probably haven't heard of them jean shorts Austin.",
    icon: 'la:home'
  }, {
    id: '2',
    title: 'Events',
    description: "Food truck fixie locavore, accusamus mcsweeney's marfa nulla.",
    icon: 'la:calendar'
  }, {
    id: '3',
    title: 'Settings',
    description: 'Trust fund seitan letterpress, keytar raw denim keffiyeh etsy.',
    icon: 'la:cog'
  }];
  return <ComponentContainerCard title="Custom Tabs">
      <TabContainer defaultActiveKey="1">
        <div className="nav-tabs-custom text-center">
          <Nav className="nav nav-tabs" role="tablist">
            {tabContents.map((tab, idx) => {
            return <NavItem key={idx}>
                  <NavLink eventKey={tab.id} className="text-center" role="tab">
                    <IconifyIcon icon={tab.icon} className="d-block fs-24 w-100 mx-auto" />
                    {tab.title}
                  </NavLink>
                </NavItem>;
          })}
          </Nav>
        </div>
        <TabContent className="mo-mt-2">
          {tabContents.map((tab, idx) => {
          return <TabPane key={idx} eventKey={tab.id} className="p-3" role="tabpanel">
                <p className="mb-0 text-muted">{tab.description}</p>
              </TabPane>;
        })}
        </TabContent>
      </TabContainer>
    </ComponentContainerCard>;
};
const AllTabs = () => {
  return <>
      <Row className="justify-content-center">
        <Col md={6}>
          <Tabs />
        </Col>
        <Col md={6}>
          <Pills />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <VerticalPills />
        </Col>
        <Col md={6}>
          <CustomTabs />
        </Col>
      </Row>
    </>;
};
export default AllTabs;