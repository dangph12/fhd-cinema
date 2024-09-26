import { Card, CardBody, CardTitle, Col, Row } from 'react-bootstrap';
import ProjectForm from './components/ProjectForm';
import clsx from 'clsx';
import PageMetaData from '@/components/PageMetaData';
import gitlab from '@/assets/images/logos/lang-logo/gitlab.png';
import avatar1 from '@/assets/images/users/avatar-1.jpg';
import avatar2 from '@/assets/images/users/avatar-2.jpg';
import avatar3 from '@/assets/images/users/avatar-3.jpg';
import avatar4 from '@/assets/images/users/avatar-4.jpg';
import avatar5 from '@/assets/images/users/avatar-5.jpg';
import avatar6 from '@/assets/images/users/avatar-6.jpg';
const Create = () => {
  const teamMembers = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];
  return <>
      <PageMetaData title="Project Create" />
      <Row>
        <Col xs={12}>
          <Card>
            <CardBody className="p-0">
              <Row className="g-0 h-100">
                <Col lg={7} className="border-end">
                  <CardTitle as="h4" className="fs-16 mb-0 pt-3 ps-4">
                    Create Project
                  </CardTitle>
                  <ProjectForm />
                </Col>
                <Col lg={5} className="align-self-center">
                  <form className="p-4">
                    <div className="form-group">
                      <div className="d-flex align-items-center">
                        <img src={gitlab} alt="" className="thumb-xxl rounded me-3" />
                        <div className="flex-grow-1 text-truncate">
                          <label className="btn btn-primary text-light">
                            Change Avatar <input type="file" hidden />
                          </label>
                        </div>
                      </div>
                    </div>
                    <h5 className="fw-normal my-3 lh-lg">
                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
                      injected humour, or randomised.
                    </h5>
                    <div className="form-group">
                      <label className="form-label" htmlFor="team-leader">
                        Project team members
                      </label>
                      <div className="img-group d-flex justify-content-start">
                        {teamMembers.map((avatar, idx) => <span role="button" className={clsx('user-avatar position-relative d-inline-block', {
                        'ms-n2': idx != 0
                      })} key={idx}>
                            <img src={avatar} alt="avatar" className="thumb-md shadow-sm rounded-circle" />
                          </span>)}
                        <div role="button" className="user-avatar position-relative d-inline-block ms-1">
                          <span className="thumb-md shadow-sm justify-content-center d-flex align-items-center text-primary bg-info-subtle rounded-circle fw-semibold fs-6">
                            +32
                          </span>
                        </div>
                      </div>
                      <input id="add-member" type="file" name="files[]" multiple style={{
                      display: 'none'
                    }} />
                    </div>
                    <div className="p-3  border-info border-dashed bg-info-subtle  mt-3 rounded">
                      <Row className="d-flex justify-content-center">
                        <Col>
                          <div>
                            <a href="#" className="fw-bold me-1 text-info">
                              You&apos;ve almost reached your goal
                            </a>{' '}
                            75% of your goals are completed just complate 25% of remaining goals to achieve your target.
                          </div>
                        </Col>
                        <Col xs="auto" className="align-self-center">
                          <span className="badge rounded text-info bg-transparent border border-info mb-2 p-1">Last Created Project</span>
                          <p className="text-dark  fw-semibold fs-13">15 Aug 2024, AM-10:15</p>
                        </Col>
                      </Row>
                    </div>
                  </form>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>;
};
export default Create;