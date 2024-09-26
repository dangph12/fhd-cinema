import { Card, CardBody, Col, ProgressBar, Row } from 'react-bootstrap';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { getAllTeams } from '@/helpers/data';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PageMetaData from '@/components/PageMetaData';
const TeamCard = ({
  description,
  logo,
  progress,
  teamName,
  members,
  user
}) => {
  return <Card>
      <CardBody>
        <div className="text-center border-dashed-bottom pb-3">
          <img src={logo} alt="team-logo" height={80} className="rounded-circle d-inline-block" />
          <h5 className="m-0 fw-bold mt-2 fs-20">{teamName}</h5>
          <p className="text-muted mb-0">{user?.handle}</p>
          <div className="img-group d-flex justify-content-center mt-3">
            {members?.slice(0, 4).map((member, idx) => <Link className="user-avatar position-relative d-inline-block ms-n2" to="" key={idx}>
                {member && <img src={member?.avatar} alt="avatar" className="thumb-md shadow-sm rounded-circle" />}
              </Link>)}
            {members && <a href="" className="user-avatar position-relative d-inline-block ms-1">
                <span className="thumb-md shadow-sm justify-content-center d-flex align-items-center bg-info-subtle rounded-circle fw-semibold fs-6">
                  +{members?.length - 4}
                </span>
              </a>}
          </div>
          <p className="text-muted mt-3 mb-0">{description}</p>
        </div>
        <Row className="mt-3 align-items-center">
          <Col xs="auto" md={6}>
            <div className="d-flex align-items-center">
              {user?.avatar && <img src={user?.avatar} className="me-2 align-self-center thumb-lg rounded" alt="..." />}
              <div className="flex-grow-1 text-truncate">
                <h6 className="m-0 text-truncate fs-14 fw-bold">{user?.name}</h6>
                <p className="font-12 mb-0 text-muted">{user?.role}</p>
              </div>
            </div>
          </Col>
          <Col md={6} className="text-end align-self-center">
            <small className="text-end">{progress}%</small>
            <ProgressBar now={progress} variant="secondary" style={{
            height: 5
          }} />
          </Col>
        </Row>
        <div className="mt-3 text-center">
          <Link to="/apps/chat" className="btn btn-outline-primary px-2 d-inline-flex align-items-center">
            <IconifyIcon icon="iconoir:chat-bubble" className="fs-14 me-1" />
            Message
          </Link>
        </div>
      </CardBody>
    </Card>;
};
const Team = () => {
  const [teams, setTeams] = useState();
  useEffect(() => {
    ;
    (async () => {
      const data = await getAllTeams();
      setTeams(data);
    })();
  }, []);
  return <>
      <PageMetaData title="Teams" />
      <Row>
        {teams?.map((team, idx) => <Col md={6} lg={4} key={idx}>
            <TeamCard {...team} />
          </Col>)}
      </Row>
    </>;
};
export default Team;