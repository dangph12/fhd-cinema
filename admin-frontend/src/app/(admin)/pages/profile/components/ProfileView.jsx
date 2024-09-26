import { Nav, NavItem, NavLink, TabContainer, TabContent, TabPane } from 'react-bootstrap';
import Gallery from './Gallery';
import Post from './Post';
import Settings from './Settings';
const ProfileView = () => {
  return <TabContainer defaultActiveKey="post">
      <Nav className="nav-tabs mb-3" role="tablist">
        <NavItem>
          <NavLink eventKey="post" className="fw-medium" role="tab" aria-selected="true">
            Post
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey="gallery" className="fw-medium" role="tab" aria-selected="false">
            Gallery
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink eventKey="settings" className="fw-medium" role="tab" aria-selected="false">
            Settings
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent>
        <TabPane eventKey="post" id="post" role="tabpanel">
          <Post />
        </TabPane>
        <TabPane eventKey="gallery" className="p-3" id="gallery" role="tabpanel">
          <Gallery />
        </TabPane>
        <TabPane eventKey="settings" className="p-3" id="settings" role="tabpanel">
          <Settings />
        </TabPane>
      </TabContent>
    </TabContainer>;
};
export default ProfileView;