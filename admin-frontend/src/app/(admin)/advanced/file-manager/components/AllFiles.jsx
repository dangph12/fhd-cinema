import { ButtonGroup, Card, CardBody, CardHeader, CardTitle, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { audioData, documentsData, imagesData } from '../data';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
const AllFiles = () => {
  return <TabContainer defaultActiveKey={'documents'}>
      <div className="clearfix">
        <Dropdown drop="start" as={ButtonGroup} className="float-end ms-2">
          <button type="button" className="btn btn-secondary me-0 overflow-hidden">
            Upload File
            <input type="file" name="file" className="overflow-hidden position-absolute top-0 start-0 opacity-0" />
          </button>
          <DropdownToggle type="button" className="btn btn-secondary dropdown-toggle-split" aria-expanded="false">
            <IconifyIcon icon="la:angle-down" />
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-end">
            <DropdownItem href="#">
              <IconifyIcon icon="la:file-upload" className="fs-16 me-1 align-text-bottom" /> Upload File
            </DropdownItem>
            <DropdownItem href="#">
              <IconifyIcon icon="la:cloud-upload-alt" className="fs-16 me-1 align-text-bottom" />
              Upload Folder
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Nav className="nav-tabs my-4" role="tablist">
          <NavItem>
            <NavLink className="fw-semibold py-2" eventKey="documents" role="tab" aria-selected="true">
              <IconifyIcon icon="fa6-regular:folder-open" className="me-1" /> Documents{' '}
              <span className="badge rounded text-blue bg-blue-subtle ms-1">32</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="fw-semibold py-2" eventKey="images" role="tab" aria-selected="false">
              <IconifyIcon icon="fa6-regular:image" className="me-1" /> Images <span className="badge rounded text-blue bg-blue-subtle ms-1">85</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="fw-semibold py-2" eventKey="audio" role="tab" aria-selected="false">
              <IconifyIcon icon="fa6-solid:headphones" className="me-1" /> Audio{' '}
              <span className="badge rounded text-blue bg-blue-subtle ms-1">21</span>
            </NavLink>
          </NavItem>
        </Nav>
      </div>
      <Card>
        <CardHeader>
          <Row className="align-items-center">
            <Col>
              <CardTitle as={'h4'}>Files</CardTitle>
            </Col>
            <Col xs="auto">
              <div className="dropdown">
                <span role="button" className="text-body text-decoration-underline">
                  View All
                </span>
              </div>
            </Col>
          </Row>
        </CardHeader>
        <CardBody className="pt-0">
          <TabContent>
            <TabPane eventKey="documents" id="documents" role="tabpanel">
              <div className="table-responsive browser_users">
                <table className="table mb-0">
                  <thead className="table-light">
                    <tr>
                      <th className="border-top-0">Name</th>
                      <th className="border-top-0 text-end">Last Modified</th>
                      <th className="border-top-0 text-end">Size</th>
                      <th className="border-top-0 text-end">Members</th>
                      <th className="border-top-0 text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {documentsData.map((document, idx) => <tr key={idx}>
                        <td className="icons-center gap-1">
                          <div className="d-inline-flex justify-content-center align-items-center thumb-md bg-blue-subtle rounded mx-auto me-1">
                            <IconifyIcon icon="fa6-solid:file-pdf" className="fs-18 align-self-center mb-0 text-blue" />
                          </div>
                          <Link to="" className="text-body">
                            {document.name}
                          </Link>
                        </td>
                        <td className="text-end">{document.date}</td>
                        <td className="text-end"> {document.size}</td>
                        <td className="text-end">
                          <div className="img-group d-flex justify-content-end">
                            {document?.avatars && document?.avatars.map((avatar, idx) => <span role="button" className={clsx('user-avatar position-relative d-inline-block', {
                          'ms-n2': idx != 0
                        })} key={idx}>
                                  <img src={avatar} alt="avatar" className="thumb-md shadow-sm rounded-circle" />
                                </span>)}
                          </div>
                        </td>
                        <td className="text-end">
                          <span role="button">
                            <IconifyIcon icon="la:download" className="text-secondary fs-18" />
                          </span>
                          <span role="button">
                            <IconifyIcon icon="la:pen" className="text-secondary fs-18" />
                          </span>
                          <span role="button">
                            <IconifyIcon icon="la:trash-alt" className="text-secondary fs-18" />
                          </span>
                        </td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
            </TabPane>
            <TabPane eventKey="images" id="images" role="tabpanel">
              <div className="table-responsive">
                <table className="table mb-0">
                  <thead className="table-light">
                    <tr>
                      <th className="border-top-0">Name</th>
                      <th className="border-top-0 text-end">Last Modified</th>
                      <th className="border-top-0 text-end">Size</th>
                      <th className="border-top-0 text-end">Members</th>
                      <th className="border-top-0 text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {imagesData.map((item, idx) => <tr key={idx}>
                        <td className="icons-center gap-1">
                          <div className="d-inline-flex justify-content-center align-items-center thumb-md bg-danger-subtle rounded mx-auto me-1">
                            <IconifyIcon icon="fa6-solid:image" className="fs-18 align-self-center mb-0 text-danger" />
                          </div>
                          <Link to="" className="text-body">
                            {item.name}
                          </Link>
                        </td>
                        <td className="text-end">{item.date}</td>
                        <td className="text-end"> {item.size}</td>
                        <td className="text-end">
                          <div className="img-group d-flex justify-content-end">
                            {item?.avatars && item?.avatars.map((avatar, idx) => <span role="button" className={clsx('user-avatar position-relative d-inline-block', {
                          'ms-n2': idx != 0
                        })} key={idx}>
                                  <img src={avatar} alt="avatar" className="thumb-md shadow-sm rounded-circle" />
                                </span>)}
                          </div>
                        </td>
                        <td className="text-end">
                          <span role="button">
                            <IconifyIcon icon="la:download" className="text-secondary fs-18" />
                          </span>
                          <span role="button">
                            <IconifyIcon icon="la:pen" className="text-secondary fs-18" />
                          </span>
                          <span role="button">
                            <IconifyIcon icon="la:trash-alt" className="text-secondary fs-18" />
                          </span>
                        </td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
            </TabPane>
            <TabPane eventKey="audio" id="audio" role="tabpanel">
              <div className="table-responsive">
                <table className="table mb-0">
                  <thead className="table-light">
                    <tr>
                      <th className="border-top-0">Name</th>
                      <th className="border-top-0 text-end">Last Modified</th>
                      <th className="border-top-0 text-end">Size</th>
                      <th className="border-top-0 text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {audioData.map((audio, idx) => <tr key={idx}>
                        <td className="icons-center gap-1">
                          <div className="d-inline-flex justify-content-center align-items-center thumb-md bg-secondary-subtle rounded mx-auto me-1">
                            <IconifyIcon icon="fa6-solid:microphone" className="fs-18 align-self-center mb-0 text-secondary" />
                          </div>
                          <a href="#" className="text-body">
                            {audio.name}
                          </a>
                        </td>
                        <td className="text-end">{audio.date}</td>
                        <td className="text-end"> {audio.size}</td>
                        <td className="text-end">
                          <span role="button">
                            <IconifyIcon icon="la:download" className="text-secondary fs-18" />
                          </span>
                          <span role="button">
                            <IconifyIcon icon="la:pen" className="text-secondary fs-18" />
                          </span>
                          <span role="button">
                            <IconifyIcon icon="la:trash-alt" className="text-secondary fs-18" />
                          </span>
                        </td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    </TabContainer>;
};
export default AllFiles;