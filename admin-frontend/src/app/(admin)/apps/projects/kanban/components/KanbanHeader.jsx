import { Button, CardBody, Col, Dropdown, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { useKanbanContext } from '@/context/useKanbanContext';
import avatar1 from '@/assets/images/users/avatar-1.jpg';
import avatar2 from '@/assets/images/users/avatar-2.jpg';
import avatar3 from '@/assets/images/users/avatar-3.jpg';
import avatar4 from '@/assets/images/users/avatar-4.jpg';
import avatar5 from '@/assets/images/users/avatar-5.jpg';
import avatar6 from '@/assets/images/users/avatar-6.jpg';
const KanbanHeader = () => {
  const {
    sectionModal
  } = useKanbanContext();
  return <Row className="my-3">
      <Col xs={12}>
        <div>
          <CardBody>
            <div className="d-block d-md-flex justify-content-between align-items-center ">
              <div className="d-flex align-self-center mb-2 mb-md-0">
                <div className="img-group d-inline-flex justify-content-center">
                  <span role="button" className="user-avatar position-relative d-inline-block">
                    <img src={avatar1} alt="avatar" className="thumb-md shadow-sm rounded-circle" />
                  </span>
                  <span role="button" className="user-avatar position-relative d-inline-block ms-n2">
                    <img src={avatar2} alt="avatar" className="thumb-md shadow-sm rounded-circle" />
                  </span>
                  <span role="button" className="user-avatar position-relative d-inline-block ms-n2">
                    <img src={avatar3} alt="avatar" className="thumb-md shadow-sm rounded-circle" />
                  </span>
                  <span role="button" className="user-avatar position-relative d-inline-block ms-n2">
                    <img src={avatar4} alt="avatar" className="thumb-md shadow-sm rounded-circle" />
                  </span>
                  <span role="button" className="user-avatar position-relative d-inline-block ms-n2">
                    <img src={avatar5} alt="avatar" className="thumb-md shadow-sm rounded-circle" />
                  </span>
                  <span role="button" className="user-avatar position-relative d-inline-block ms-n2">
                    <img src={avatar6} alt="avatar" className="thumb-md shadow-sm rounded-circle" />
                  </span>
                  <p role="button" className="user-avatar position-relative d-inline-block ms-1 text-primary mb-0">
                    <span className="thumb-md shadow-sm justify-content-center d-flex align-items-center bg-info-subtle rounded-circle fw-semibold fs-6">
                      +6
                    </span>
                  </p>
                </div>
                <button type="button" className="icons-center btn card-bg text-primary shadow-sm ms-2">
                  <IconifyIcon icon="fa6-solid:plus" className="fa-solid fa-plus me-1" /> Invite
                </button>
              </div>
              <div className="align-self-center">
                <form className="row g-2">
                  <Col xs="auto">
                    <label htmlFor="inputsearch" className="visually-hidden">
                      Search
                    </label>
                    <input type="search" className="form-control" id="inputsearch" placeholder="Search" />
                  </Col>
                  <Dropdown className="col-auto" autoClose="outside">
                    <DropdownToggle as="button" type="button" className="btn card-bg text-primary shadow-sm dropdown-toggle arrow-none">
                      <IconifyIcon icon="iconoir:filter-alt" /> Filter
                    </DropdownToggle>
                    <DropdownMenu align="start">
                      <div className="p-2">
                        <div className="form-check mb-2">
                          <input type="checkbox" className="form-check-input" defaultChecked id="filter-all" />
                          <label className="form-check-label" htmlFor="filter-all">
                            All
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <input type="checkbox" className="form-check-input" defaultChecked id="filter-one" />
                          <label className="form-check-label" htmlFor="filter-one">
                            Design
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <input type="checkbox" className="form-check-input" defaultChecked id="filter-two" />
                          <label className="form-check-label" htmlFor="filter-two">
                            UI/UX
                          </label>
                        </div>
                        <div className="form-check">
                          <input type="checkbox" className="form-check-input" defaultChecked id="filter-three" />
                          <label className="form-check-label" htmlFor="filter-three">
                            Backend
                          </label>
                        </div>
                      </div>
                    </DropdownMenu>
                  </Dropdown>
                  <Col xs="auto">
                    <Button variant="primary" type="button" onClick={() => sectionModal.toggle()}>
                      <IconifyIcon icon="fa6-solid:plus" className="me-1" /> Add Section
                    </Button>
                  </Col>
                </form>
              </div>
            </div>
          </CardBody>
        </div>
      </Col>
    </Row>;
};
export default KanbanHeader;