import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { currency } from '@/context/constants';
import clsx from 'clsx';
import { useState } from 'react';
import { Card, CardBody, Col, ProgressBar, Row } from 'react-bootstrap';
import { projectData } from '../data';
import { ReactSortable } from 'react-sortablejs';
import avatar1 from '@/assets/images/users/avatar-1.jpg';
import avatar7 from '@/assets/images/users/avatar-7.jpg';
import avatar8 from '@/assets/images/users/avatar-8.jpg';
import { Link } from 'react-router-dom';
const ContainerCard = ({
  name,
  handle,
  avatar,
  children
}) => {
  return <div className="border-dashed border-theme-color rounded">
      <Card className="bg-light ">
        <CardBody className="border-dashed-bottom border-theme-color">
          <button type="button" className="btn btn-sm btn-outline-primary px-2 d-inline-flex align-items-center float-end">
            <IconifyIcon icon="iconoir:chat-bubble" className="fs-14 me-1" />
            Message
          </button>
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              <img src={avatar} alt="avatar" className="rounded-circle thumb-xxl mx-auto d-inline-block" />
            </div>
            <div className="flex-grow-1 ms-2 text-truncate">
              <h5 className="m-0 fw-bold">{name}</h5>
              <p className="text-muted mb-0">{handle}</p>
            </div>
          </div>
          <Row className="mt-3 align-items-center">
            <Col xs={12}>
              <div className="text-muted mb-2 d-flex align-items-center">
                <IconifyIcon icon="iconoir:mail-out" className="fs-20 me-1" />
                <span className="text-body fw-semibold">Email :</span>
                <Link to="#" className="text-primary text-decoration-underline">
                  example@example.com
                </Link>
              </div>
              <div className="text-body  d-flex align-items-center">
                <IconifyIcon icon="iconoir:phone" className="fs-20 me-1 text-muted" />
                <span className="text-body fw-semibold">Phone :</span> +1 123 456 789
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <div id="project-list-end" className="p-3 pt-0">
        {children}
      </div>
    </div>;
};
const MovableCard = ({
  project
}) => {
  const {
    clientName,
    logo,
    status,
    title,
    budget,
    deadlineDate,
    members,
    progress,
    startDate,
    tasks
  } = project;
  return <Card>
      <CardBody>
        <div className="position-absolute  end-0 me-3">
          <span className={clsx('badge rounded  bg-transparent border', status === 'In Progress' ? 'text-warning border-warning' : status === 'TODO' ? 'text-success border-success' : 'text-primary border-primary')}>
            {status}
          </span>
        </div>
        <div className={`d-flex align-items-center ${members ? 'mb-3 pb-2 border-dashed-bottom' : ''}`}>
          <div className="flex-shrink-0">
            <img src={logo} alt="logo" height={50} className="rounded-circle d-inline-block" />
          </div>
          <div className="flex-grow-1 ms-2 text-truncate">
            <h5 className="fw-bold mb-1 fs-15">{title}</h5>
            <p className="text-dark mb-0 fs-13 fw-semibold">
              <span className="text-muted">Client : </span>
              {clientName}
            </p>
          </div>
        </div>
        {members && <>
            <div className="d-flex justify-content-between fw-semibold align-items-center  my-3">
              <div className="img-group d-flex justify-content-center">
                {members.slice(0, 3).map((member, idx) => <Link key={idx} className={clsx('user-avatar position-relative d-inline-block', {
              'ms-n2': idx != 0
            })} to="#">
                    <img src={member} alt="avatar" className="thumb-md shadow-sm rounded-circle" />
                  </Link>)}
                <Link to="" className="user-avatar position-relative d-inline-block ms-1">
                  <span className="thumb-md shadow-sm justify-content-center d-flex align-items-center bg-info-subtle rounded-circle fw-semibold fs-6">
                    +{members.length - 3}
                  </span>
                </Link>
              </div>
              <button type="button" className="btn btn-primary btn-sm px-3">
                Details
              </button>
            </div>
            <div>
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
                <Col xs="auto" md={5}>
                  <div className="text-start">
                    <h5 className="fs-16 fw-semibold mb-0">
                      {currency}
                      {budget}
                    </h5>
                    <p className="mb-0  text-muted">Total Budget</p>
                  </div>
                </Col>
                <Col md={7} className="text-end align-self-center">
                  <h6 className="fw-normal text-muted fs-12 mb-1">
                    Start : <span className="text-dark fw-semibold"> {startDate}</span>
                  </h6>
                  <h6 className="fw-normal text-muted mb-0 fs-12">
                    Deadline : <span className="text-dark fw-semibold"> {deadlineDate}</span>
                  </h6>
                </Col>
              </Row>
            </div>
          </>}
      </CardBody>
    </Card>;
};
const ProjectList = () => {
  const [project1, setProject1] = useState(projectData.slice(0, 4));
  const [project2, setProject2] = useState(projectData.slice(4, 8));
  const [project3, setProject3] = useState(projectData.slice(8, 11));
  return <div className="dragula-wrapper">
      <div className="dragula-items">
        <ContainerCard avatar={avatar1} handle="@carol" name="Carol Maier">
          <ReactSortable group="teamList" list={project1} setList={setProject1}>
            {project1.map((project, idx) => <MovableCard project={project} key={idx} />)}
          </ReactSortable>
        </ContainerCard>
      </div>
      <div className="dragula-items">
        <ContainerCard avatar={avatar8} handle="@thomas" name="Thomas Milligan">
          <ReactSortable group="teamList" list={project2} setList={setProject2}>
            {project2.map((project, idx) => <MovableCard project={project} key={idx} />)}
          </ReactSortable>
        </ContainerCard>
      </div>
      <div className="dragula-items">
        <ContainerCard avatar={avatar7} handle="@juan" name="Juan Clark">
          <ReactSortable group="teamList" list={project3} setList={setProject3}>
            {project3.map((project, idx) => <MovableCard project={project} key={idx} />)}
          </ReactSortable>
        </ContainerCard>
      </div>
    </div>;
};
export default ProjectList;