import { Button, Col, Row } from 'react-bootstrap';
import clsx from 'clsx';
import avatar1 from '@/assets/images/users/avatar-1.jpg';
import avatar2 from '@/assets/images/users/avatar-2.jpg';
import avatar3 from '@/assets/images/users/avatar-3.jpg';
import avatar4 from '@/assets/images/users/avatar-4.jpg';
import avatar5 from '@/assets/images/users/avatar-5.jpg';
import avatar6 from '@/assets/images/users/avatar-6.jpg';
const TeamCard = () => {
  const teamMembers = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];
  return <div className="p-3  border-info border-dashed bg-info-subtle  mt-3 rounded">
      <Row className="d-flex justify-content-center">
        <Col>
          <div>
            <span role="button" className="fw-bold me-1 text-primary">
              You&apos;ve almost reached your goal
            </span>{' '}
            75% of your goals are completed just complate 25% of remaining goals to achieve your target.
          </div>
          <Row className="mt-3 g-2">
            <Col md={12} lg={6}>
              <div>
                <p className="text-dark mb-2 fw-semibold fs-13">All Members</p>
                <div className="img-group d-flex">
                  {teamMembers.map((member, idx) => <span className={clsx('user-avatar position-relative d-inline-block', {
                  'ms-n2': idx != 0
                })} role="button" key={idx}>
                      <img src={member} alt="avatar" className="thumb-md shadow-sm rounded-circle" />
                    </span>)}
                  <div role="button" className="user-avatar position-relative d-inline-block ms-1">
                    <span className="thumb-md shadow-sm justify-content-center d-flex align-items-center text-primary bg-info-subtle rounded-circle fw-semibold fs-6">
                      +80
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={12} lg={6} className="align-self-center">
              <span className="badge rounded text-primary bg-transparent border border-primary mb-2 p-1">Senior team leader interview</span>
              <p className="text-dark  fw-semibold fs-13">15 Aug 2024, AM-10:15</p>
            </Col>
          </Row>
        </Col>
        <Col xs="auto" className="align-self-center">
          <Button variant="primary" size="sm" type="button" className="px-3 mt-2">
            View All
          </Button>
        </Col>
      </Row>
    </div>;
};
export default TeamCard;