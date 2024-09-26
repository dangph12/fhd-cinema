import PageMetaData from '@/components/PageMetaData';
import { CardBody, Col, Row } from 'react-bootstrap';
import CalendarWidget from './components/CalendarWidget';
const Calendar = () => {
  return <>
      <PageMetaData title="Calendar" />
      <Row>
        <Col xs={12}>
          <div className="mb-3">
            <CardBody>
              <CalendarWidget />
            </CardBody>
          </div>
        </Col>
      </Row>
    </>;
};
export default Calendar;