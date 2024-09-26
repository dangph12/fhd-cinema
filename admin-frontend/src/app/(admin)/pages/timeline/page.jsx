import ComponentContainerCard from '@/components/ComponentContainerCard';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import SimplebarReactClient from '@/components/wrappers/SimplebarReactClient';
import { timeSince } from '@/utils/date';
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
import { timelineData } from './data';
import PageMetaData from '@/components/PageMetaData';
import { Link } from 'react-router-dom';
const Timeline1 = () => {
  return <Card>
      <CardHeader>
        <Row className="align-items-center">
          <Col>
            <CardTitle as="h4">Timeline</CardTitle>
          </Col>
        </Row>
      </CardHeader>
      <CardBody className="pt-0 px-0">
        <SimplebarReactClient className="activity p-3 pt-0" style={{
        height: 500
      }}>
          {timelineData.map((timeline, idx) => <div className="activity-info" key={idx}>
              <div className="icon-info-activity">
                <IconifyIcon icon={timeline.icon} height={18} width={18} className={timeline.variant} />
              </div>
              <div className="activity-info-text">
                <div className="d-flex justify-content-between align-items-center">
                  <h6 className="m-0  w-75">{timeline.title}</h6>
                  <span className="text-muted">{timeSince(timeline.time)}</span>
                </div>
                <p className="text-muted mt-3">
                  {timeline.description}
                  <Link to="" className="text-primary">
                    [more info]
                  </Link>
                </p>
                {timeline.tags && timeline.tags.map((tag, idx) => <span className="badge badge-soft-secondary" key={idx}>
                      {tag}
                    </span>)}
              </div>
            </div>)}
        </SimplebarReactClient>
      </CardBody>
    </Card>;
};
const Timeline2 = () => {
  return <ComponentContainerCard title="Timeline">
      <div className="tracking-list">
        {timelineData.map((timeline, idx) => <div className="tracking-item" key={idx}>
            <div className="tracking-icon icon-inner">
              <IconifyIcon icon="fa-solid:circle" />
            </div>
            <div className="tracking-date">
              {new Date(timeline.date).toLocaleDateString()}
              <span className="d-block fs-12 text-muted">{new Date(timeline.time).toLocaleTimeString()}</span>
            </div>
            <p className="mb-0 text-muted">{timeline.description}</p>
          </div>)}
      </div>
    </ComponentContainerCard>;
};
const Timeline = () => {
  return <>
      <PageMetaData title="Timeline" />
      <Row className="justify-content-center">
        <Col md={6} lg={6}>
          <Timeline1 />
        </Col>
        <Col md={6} lg={6}>
          <Timeline2 />
        </Col>
      </Row>
    </>;
};
export default Timeline;