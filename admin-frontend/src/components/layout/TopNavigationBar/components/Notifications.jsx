import { notificationsData } from '@/assets/data/topbar';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import SimplebarReactClient from '@/components/wrappers/SimplebarReactClient';
import { timeSince } from '@/utils/date';
import { Fragment } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Tab, Tabs } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Notifications = () => {
  return <Dropdown className="topbar-item">
      <DropdownToggle as="a" className="nav-link arrow-none nav-icon" role="button" aria-haspopup="false" aria-expanded="false">
        <i className="icofont-bell-alt" />
        <span className="alert-badge" />
      </DropdownToggle>
      <DropdownMenu className="stop dropdown-menu-end dropdown-lg py-0">
        <h5 className="dropdown-item-text m-0 py-3 d-flex justify-content-between align-items-center">
          Notifications{' '}
          <span role="button" className="badge text-body-tertiary badge-pill">
            <IconifyIcon icon="iconoir:plus-circle" className="fs-4" />
          </span>
        </h5>
        <Tabs defaultActiveKey="all">
          <Tab eventKey="all" title={<>
                All <span className="badge bg-primary-subtle text-primary badge-pill ms-1">24</span>
              </>}>
            <SimplebarReactClient style={{
            maxHeight: 230
          }}>
              {notificationsData.map((notification, idx) => <DropdownItem href="" className="py-3" key={idx}>
                  <small className="float-end text-muted ps-2">{timeSince(notification.createdAt)}</small>
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                      <IconifyIcon icon={notification.icon} className="fs-4" />
                    </div>
                    <div className="flex-grow-1 ms-2 text-truncate">
                      <h6 className="my-0 fw-normal text-dark fs-13">{notification.title}</h6>
                      <small className="text-muted mb-0">{notification.description}</small>
                    </div>
                  </div>
                </DropdownItem>)}
            </SimplebarReactClient>
          </Tab>
          <Tab title="Projects" eventKey="projects">
            <SimplebarReactClient style={{
            maxHeight: 230
          }}>
              {notificationsData.map((notification, idx) => <Fragment key={idx}>
                  {notification.type === 'project' && <DropdownItem href="" className="py-3">
                      <small className="float-end text-muted ps-2">{timeSince(notification.createdAt)}</small>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                          <IconifyIcon icon={notification.icon} className="fs-4" />
                        </div>
                        <div className="flex-grow-1 ms-2 text-truncate">
                          <h6 className="my-0 fw-normal text-dark fs-13">{notification.title}</h6>
                          <small className="text-muted mb-0">{notification.description}</small>
                        </div>
                      </div>
                    </DropdownItem>}
                </Fragment>)}
            </SimplebarReactClient>
          </Tab>
          <Tab eventKey="team" title="Team">
            <SimplebarReactClient style={{
            maxHeight: 230
          }}>
              {notificationsData.map((notification, idx) => <Fragment key={idx}>
                  {notification.type === 'team' && <DropdownItem href="" className="py-3">
                      <small className="float-end text-muted ps-2">{timeSince(notification.createdAt)}</small>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                          <IconifyIcon icon={notification.icon} className="fs-4" />
                        </div>
                        <div className="flex-grow-1 ms-2 text-truncate">
                          <h6 className="my-0 fw-normal text-dark fs-13">{notification.title}</h6>
                          <small className="text-muted mb-0">{notification.description}</small>
                        </div>
                      </div>
                    </DropdownItem>}
                </Fragment>)}
            </SimplebarReactClient>
          </Tab>
        </Tabs>
        <Link to="/pages/notifications" className="dropdown-item text-center text-dark fs-13 py-2">
          View All <IconifyIcon icon="fi:arrow-right" />
        </Link>
      </DropdownMenu>
    </Dropdown>;
};
export default Notifications;