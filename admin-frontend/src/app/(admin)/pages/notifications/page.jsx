import { Card, CardBody, Col, Row } from 'react-bootstrap';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Fragment } from 'react';
import PageMetaData from '@/components/PageMetaData';
import { notifications } from './data';
import notificationImg from '@/assets/images/extra/card/notification.gif';
const Notifications = () => {
  return <>
      <PageMetaData title="Notifications" />
      <Row className="justify-content-center">
        <Col xs={12}>
          <Card style={{
          backgroundColor: '#ffd88e3b'
        }}>
            <CardBody>
              <Row>
                <Col>
                  <h6 className="mb-2 mt-1 fw-medium text-dark fs-18">Notifications</h6>
                  <p className="text-body fs-14 ">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical <br /> Latin literature
                    from 45 BC, making it over 2000 years old.{' '}
                  </p>
                  <button type="button" className="btn btn-warning px-2">
                    View All
                  </button>
                </Col>
                <Col xs="auto" className="align-self-center">
                  <img src={notificationImg} alt="notification" height={90} className="rounded" />
                </Col>
              </Row>
            </CardBody>
          </Card>
          {Object.keys(notifications).map((day, idx) => {
          return <Fragment key={idx}>
                <CardBody className="mb-3">
                  <h5 className="text-body m-0 d-inline-block">{day}</h5>
                  <span className="text-pink bg-pink-subtle py-0 px-1 rounded fw-medium d-inline-block ms-1">{notifications[day].length}</span>
                </CardBody>
                {notifications[day].map((notification, idx) => <Card key={idx}>
                    <CardBody>
                      <Row>
                        <Col md={10}>
                          <span role="button">
                            <div className="d-flex align-items-center">
                              <div className="flex-shrink-0">
                                <img src={notification.avatar} alt="avatar" className="thumb-lg rounded-circle" />
                              </div>
                              <div className="flex-grow-1 ms-2 text-truncate">
                                <h6 className="my-1 fw-medium text-dark fs-14">
                                  {notification.title}
                                  <small className="text-muted ps-2">{new Date(notification.time).toLocaleTimeString()}</small>
                                </h6>
                                <p className="text-muted mb-0 text-wrap">{notification.description} </p>
                              </div>
                            </div>
                          </span>
                        </Col>
                        <Col md={2} className="text-end align-self-center mt-sm-2 mt-lg-0">
                          <button type="button" className="btn btn-primary btn-sm px-2 me-1">
                            View
                          </button>
                          <button type="button" className="btn btn bg-secondary-subtle text-secondary btn-sm">
                            <IconifyIcon icon="fa-solid:trash" />
                          </button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>)}
              </Fragment>;
        })}
        </Col>
      </Row>
    </>;
};
export default Notifications;