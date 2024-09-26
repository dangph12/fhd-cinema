import clsx from 'clsx';
import { Card, CardBody, Col, Row } from 'react-bootstrap';
const taskStats = [{
  stat: '38',
  title: 'ONGOING',
  variant: 'text-danger'
}, {
  stat: '41',
  title: 'PROCESS',
  variant: 'text-warning'
}, {
  stat: '40.8%',
  title: 'COMPLETED',
  variant: 'text-success'
}];
const TaskStats = () => {
  return <>
      {taskStats.map((task, idx) => <Col md={6} lg={4} key={idx}>
          <Card className="mb-3 mb-lg-0">
            <CardBody>
              <Row className="align-items-center">
                <Col className="text-center">
                  <span className={clsx('fs-24 fw-normal', task.variant)}>{task.stat}</span>
                  <h6 className="text-uppercase fs-12 text-muted mt-2 m-0">{task.title}</h6>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>)}
    </>;
};
export default TaskStats;