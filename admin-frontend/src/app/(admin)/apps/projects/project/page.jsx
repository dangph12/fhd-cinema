import { Card, CardBody, Col, ProgressBar, Row } from 'react-bootstrap';
import clsx from 'clsx';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { currency } from '@/context/constants';
import { getAllProjects } from '@/helpers/data';
import { useEffect, useState } from 'react';
import PageMetaData from '@/components/PageMetaData';
const ProjectCard = ({
  project
}) => {
  const {
    budget,
    client,
    deadlineDate,
    description,
    logo,
    name,
    progress,
    startDate,
    status,
    tasks,
    teams
  } = project;
  return <Card>
      <CardBody>
        <div className="position-absolute  end-0 me-3">
          <span className={clsx('badge rounded bg-transparent border ms-1 p-1', status === 'In Progress' ? 'border-warning text-warning' : 'border-primary text-primary')}>
            {status}
          </span>
        </div>
        <div className="text-center border-dashed-bottom pb-3">
          <img src={logo} alt="logo" height={80} className="rounded-circle d-inline-block" />
          <h5 className="fw-bold my-2 fs-20">{name}</h5>
          <p className="text-dark  fs-13 fw-semibold">
            <span className="text-muted">Client : </span>
            {client}
          </p>
          <div className="d-flex justify-content-between fw-semibold align-items-center">
            <p className="mb-1 d-inline-flex align-items-center">
              <IconifyIcon icon="iconoir:task-list" className="fs-18 text-muted me-1" />
              {tasks} Tasks
            </p>
            <small className="text-end text-body-emphasis d-block ms-auto">{progress}%</small>
          </div>
          <ProgressBar now={progress} variant="secondary" style={{
          height: 5
        }} />
          <Row className="mt-3 align-items-center">
            <Col xs="auto" md={6}>
              <div className="text-start">
                <h5 className="fs-18 fw-semibold mb-1">
                  {currency}
                  {budget}
                </h5>
                <p className="mb-0  text-muted">Total Budget</p>
              </div>
            </Col>
            <Col md={6} className="text-end align-self-center">
              <h6 className="fw-normal text-muted">
                Start : <span className="text-dark fw-semibold"> {new Date(startDate).toLocaleDateString()}</span>
              </h6>
              <h6 className="fw-normal text-muted">
                Deadline : <span className="text-dark fw-semibold"> {new Date(deadlineDate).toLocaleDateString()}</span>
              </h6>
            </Col>
          </Row>
          <p className="text-muted mt-3 mb-0">{description}</p>
        </div>
        <div className="d-flex justify-content-between fw-semibold align-items-center  mt-3">
          <div className="img-group d-flex justify-content-center">
            {teams?.members && teams?.members.slice(0, 3).map((member, idx) => <span role="button" className={clsx('user-avatar position-relative d-inline-block', {
            'ms-n2': idx != 0
          })} key={idx}>
                  {member?.avatar && <img src={member?.avatar} alt="avatar" className="thumb-md shadow-sm rounded-circle" />}
                </span>)}
            {teams?.members && <div role="button" className="user-avatar position-relative d-inline-block ms-1">
                <span className="thumb-md shadow-sm justify-content-center d-flex align-items-center bg-info-subtle rounded-circle fw-semibold fs-6 text-primary">
                  +{teams?.members.length - 3}
                </span>
              </div>}
          </div>
          <button type="button" className="btn bg-secondary-subtle text-dark btn-sm px-3">
            Details
          </button>
        </div>
      </CardBody>
    </Card>;
};
const Project = () => {
  const [projects, setProjects] = useState();
  useEffect(() => {
    ;
    (async () => {
      const data = await getAllProjects();
      setProjects(data);
    })();
  }, []);
  return <>
      <PageMetaData title="Projects" />
      <Row>
        {projects?.map((project, idx) => <Col md={6} lg={4} key={idx}>
            <ProjectCard project={project} />
          </Col>)}
      </Row>
    </>;
};
export default Project;