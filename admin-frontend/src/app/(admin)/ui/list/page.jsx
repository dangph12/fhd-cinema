import ComponentContainerCard from '@/components/ComponentContainerCard';
import PageMetaData from '@/components/PageMetaData';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
const ListExample = () => {
  return <ComponentContainerCard title="List Examples">
      <ListGroup>
        <ListGroupItem>
          <IconifyIcon icon="la:check" className="text-success me-2" />
          Cras justo odio
        </ListGroupItem>
        <ListGroupItem>
          <IconifyIcon icon="la:check" className="text-success me-2" />
          Dapibus ac facilisis in
        </ListGroupItem>
        <ListGroupItem>
          <IconifyIcon icon="la:check" className="text-success me-2" />
          Morbi leo risus
        </ListGroupItem>
        <ListGroupItem disabled>
          <IconifyIcon icon="la:check" className="text-success me-2" />
          Disabled
        </ListGroupItem>
      </ListGroup>
    </ComponentContainerCard>;
};
const ActiveItems = () => {
  return <ComponentContainerCard title="Active Items">
      <ListGroup>
        <ListGroupItem>
          <IconifyIcon icon="la:arrow-right" className="text-secondary me-2" />
          Cras justo odio
        </ListGroupItem>
        <ListGroupItem active>
          <IconifyIcon icon="la:arrow-right" className="me-2" />
          Dapibus ac facilisis in
        </ListGroupItem>
        <ListGroupItem>
          <IconifyIcon icon="la:arrow-right" className="text-secondary me-2" />
          Morbi leo risus
        </ListGroupItem>
        <ListGroupItem>
          <IconifyIcon icon="la:arrow-right" className="text-secondary me-2" />
          Porta ac consectetur ac
        </ListGroupItem>
      </ListGroup>
    </ComponentContainerCard>;
};
const LinksAndButtons = () => {
  return <ComponentContainerCard title="Links And Buttons">
      <ListGroup>
        <ListGroupItem active as={'button'} action type="button">
          <IconifyIcon icon="la:hand-point-right" className="me-2" />
          Button Active
        </ListGroupItem>
        <ListGroupItem as={'button'} action type="button">
          <IconifyIcon icon="la:hand-point-right" className="text-primary me-2" />
          Button
        </ListGroupItem>
        <ListGroupItem as="a" action>
          <IconifyIcon icon="la:hand-point-right" className="text-primary me-2" />
          Link
        </ListGroupItem>
        <ListGroupItem action disabled tabIndex={-1} aria-disabled="true">
          <IconifyIcon icon="la:hand-point-right" className="text-primary me-2" />
          Link disabled
        </ListGroupItem>
      </ListGroup>
    </ComponentContainerCard>;
};
const FlushList = () => {
  return <ComponentContainerCard title="Flush">
      <ListGroup className="list-group-flush">
        <ListGroupItem>
          <IconifyIcon icon="la:angle-double-right" className="text-info me-2" />
          Cras justo odio
        </ListGroupItem>
        <ListGroupItem>
          <IconifyIcon icon="la:angle-double-right" className="text-info me-2" />
          Dapibus ac facilisis in
        </ListGroupItem>
        <ListGroupItem>
          <IconifyIcon icon="la:angle-double-right" className="text-info me-2" />
          Morbi leo risus
        </ListGroupItem>
        <ListGroupItem>
          <IconifyIcon icon="la:angle-double-right" className="text-info me-2" />
          Vestibulum at eros
        </ListGroupItem>
      </ListGroup>
    </ComponentContainerCard>;
};
const ContextualClassesList = () => {
  return <ComponentContainerCard title="Contextual Classes">
      <ListGroup>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem variant="primary">A simple primary list group item</ListGroupItem>
        <ListGroupItem variant="secondary">A simple secondary list group item</ListGroupItem>
        <ListGroupItem variant="success">A simple success list group item</ListGroupItem>
        <ListGroupItem variant="danger">A simple danger list group item</ListGroupItem>
        <ListGroupItem variant="warning">A simple warning list group item</ListGroupItem>
        <ListGroupItem variant="info">A simple info list group item</ListGroupItem>
        <ListGroupItem variant="light">A simple light list group item</ListGroupItem>
        <ListGroupItem variant="dark">A simple dark list group item</ListGroupItem>
      </ListGroup>
    </ComponentContainerCard>;
};
const HorizontalList = () => {
  return <ComponentContainerCard title="Horizontal">
      <ListGroup className="list-group-horizontal-md">
        <ListGroupItem>
          <IconifyIcon icon="la:angle-double-right" className="text-info me-2" />
          Cras justo
        </ListGroupItem>
        <ListGroupItem>
          <IconifyIcon icon="la:angle-double-right" className="text-info me-2" />
          Dapibus
        </ListGroupItem>
        <ListGroupItem>
          <IconifyIcon icon="la:angle-double-right" className="text-info me-2" />
          Morbi leo
        </ListGroupItem>
      </ListGroup>
    </ComponentContainerCard>;
};
const ListWithBadges = () => {
  return <ComponentContainerCard title="With Badges">
      <ListGroup>
        <ListGroupItem className="d-flex justify-content-between align-items-center">
          <div>
            <IconifyIcon icon="la-check" className="text-muted font-16 me-2" />
            Cras justo odio
          </div>
          <span className="badge border border-primary text-primary badge-pill">4</span>
        </ListGroupItem>
        <ListGroupItem className="d-flex justify-content-between align-items-center">
          <div>
            <IconifyIcon icon="la-bell" className="text-muted font-18 me-2" />
            New Notifications
          </div>
          <span className="badge border border-secondary text-secondary badge-pill">New</span>
        </ListGroupItem>
        <ListGroupItem className="d-flex justify-content-between align-items-center">
          <div>
            <IconifyIcon icon="la:money-bill-alt" className="text-muted font-16 me-2" />
            Payment Successfull
          </div>
          <span className="badge border border-success text-success badge-pill">Successfully</span>
        </ListGroupItem>
        <ListGroupItem className="d-flex justify-content-between align-items-center">
          <div>
            <IconifyIcon icon="la:exclamation-triangle" className="text-muted font-16 me-2" />
            Payment pending
          </div>
          <span className="badge border border-warning text-warning">Pending</span>
        </ListGroupItem>
        <ListGroupItem className="d-flex justify-content-between align-items-center">
          <div>
            <IconifyIcon icon="la:comments" className="text-muted font-16 me-2" />
            Good Morning!
          </div>
          <span className="badge border border-info text-info badge-pill">1</span>
        </ListGroupItem>
      </ListGroup>
    </ComponentContainerCard>;
};
const List = () => {
  return <>
      <PageMetaData title="List" />
      <Row className="justify-content-center">
        <Col md={6}>
          <ListExample />
        </Col>
        <Col md={6}>
          <ActiveItems />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <LinksAndButtons />
        </Col>
        <Col md={6}>
          <FlushList />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <ContextualClassesList />
        </Col>
        <Col md={6}>
          <HorizontalList />
          <ListWithBadges />
        </Col>
      </Row>
    </>;
};
export default List;