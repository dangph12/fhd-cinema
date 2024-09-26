import ComponentContainerCard from '@/components/ComponentContainerCard';
import PageMetaData from '@/components/PageMetaData';
import Spinner from '@/components/Spinner';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { colorVariants } from '@/context/constants';
import { Button, Col, Row } from 'react-bootstrap';
const BorderedSpinners = () => {
  return <ComponentContainerCard title="Border Spinner">
      <Spinner />
    </ComponentContainerCard>;
};
const GrowingSpinner = () => {
  return <ComponentContainerCard title="Growing Spinner">
      <Spinner type="grow" />
    </ComponentContainerCard>;
};
const ColorsSpinners = () => {
  return <ComponentContainerCard title="Colors">
      {(colorVariants || []).map((color, idx) => {
      return <Spinner key={idx} className="me-1" color={color} />;
    })}
    </ComponentContainerCard>;
};
const ColorGrowingSpinners = () => {
  return <ComponentContainerCard title="Color Growing spinner">
      {(colorVariants || []).map((color, idx) => {
      return <Spinner key={idx} type="grow" className="me-1" color={color} />;
    })}
    </ComponentContainerCard>;
};
const AlignmentSpinner = () => {
  return <ComponentContainerCard title="Alignment">
      <div className="d-flex justify-content-center">
        <Spinner />
      </div>
    </ComponentContainerCard>;
};
const PlacementSpinners = () => {
  return <ComponentContainerCard title="Placement">
      <div className="d-flex align-items-center">
        <strong>Loading...</strong>
        <Spinner className="ms-auto" />
      </div>
    </ComponentContainerCard>;
};
const SpinnersSizes = () => {
  const sizes = ['md', 'sm'];
  return <ComponentContainerCard title="Size">
      <Row>
        {(sizes || []).map((size, idx) => {
        return <Col lg={4} key={idx} className="d-flex">
              <Spinner className="text-primary me-1" color="primary" size={size} />
              <Spinner className="text-secondary" type="grow" size={size} />
            </Col>;
      })}
        <Col lg={4}>
          <div className="spinner-border spinner-border-sm me-1" role="status" />
          <div className="spinner-grow spinner-grow-sm" role="status" />
        </Col>
      </Row>
    </ComponentContainerCard>;
};
const ButtonSpinners = () => {
  return <ComponentContainerCard title="Buttons spinners">
      <div className="d-flex flex-wrap gap-2">
        <Button variant="primary" disabled>
          <Spinner className="spinner-border-sm" tag="span" color="white" /> <span className="visually-hidden">Loading...</span>
        </Button>

        <Button variant="primary" disabled>
          <Spinner className="spinner-border-sm me-1" tag="span" color="white" />
          Loading...
        </Button>
        <Button variant="primary" disabled>
          <Spinner className="spinner-grow-sm" tag="span" color="white" type="grow" /> <span className="visually-hidden">Loading...</span>
        </Button>

        <Button variant="primary" disabled>
          <Spinner className="spinner-grow-sm me-1" tag="span" color="white" type="grow"></Spinner>
          Loading...
        </Button>
      </div>
    </ComponentContainerCard>;
};
const CustomSpinners = () => {
  return <ComponentContainerCard title="Custom spinners">
      <Spinner className="spinner-border-custom-1 me-1" />
      <Spinner color="secondary" className="spinner-border-custom-2 me-1" />
      <Spinner color="success" className="spinner-border-custom-3 border-success me-1" />
      <Spinner color="warning" className="spinner-border-custom-4 me-1" />
      <Spinner color="info" className="spinner-border-custom-5 border-info me-1" />
    </ComponentContainerCard>;
};
const CustomIconSpinners = () => {
  return <ComponentContainerCard title="Custom Icon spinners">
      <Row>
        <Col md={3}>
          <div className="text-center">
            <IconifyIcon icon="la:spinner" className="text-primary la-spin progress-icon-spin" />
          </div>
        </Col>
        <Col md={3}>
          <div className="text-center">
            <IconifyIcon icon="la:redo-alt" className="text-secondary la-spin progress-icon-spin" />
          </div>
        </Col>
        <Col md={3}>
          <div className="text-center">
            <IconifyIcon icon="la:sun" className="text-warning la-spin progress-icon-spin" />
          </div>
        </Col>
        <Col md={3}>
          <div className="text-center">
            <IconifyIcon icon="la:cog" className="la-spin progress-icon-spin" />
          </div>
        </Col>
      </Row>
    </ComponentContainerCard>;
};
const Spinners = () => {
  return <>
      <PageMetaData title="Spinners" />
      <Row className="justify-content-center">
        <Col md={6}>
          <BorderedSpinners />
        </Col>
        <Col md={6}>
          <GrowingSpinner />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <ColorsSpinners />
        </Col>
        <Col md={6}>
          <ColorGrowingSpinners />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <AlignmentSpinner />
        </Col>
        <Col md={6}>
          <PlacementSpinners />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <SpinnersSizes />
        </Col>
        <Col md={6}>
          <ButtonSpinners />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <CustomSpinners />
        </Col>
        <Col md={6}>
          <CustomIconSpinners />
        </Col>
      </Row>
    </>;
};
export default Spinners;