import { Col, Row } from 'react-bootstrap';
import SummaryChart from './components/SummaryChart';
import TaskDetails from './components/TaskDetails';
import TaskStats from './components/TaskStats';
import TeamCard from './components/TeamCard';
import PageMetaData from '@/components/PageMetaData';
const Task = () => {
  return <>
      <PageMetaData title="Tasks" />
      <Row>
        <Col md={12} lg={4}>
          <SummaryChart />
        </Col>
        <Col md={12} lg={8}>
          <Row className="g-3">
            <TaskStats />
          </Row>
          <TeamCard />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <TaskDetails />
        </Col>
      </Row>
    </>;
};
export default Task;