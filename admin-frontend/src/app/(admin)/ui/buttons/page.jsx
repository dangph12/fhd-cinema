import ComponentContainerCard from '@/components/ComponentContainerCard';
import PageMetaData from '@/components/PageMetaData';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { colorVariants } from '@/context/constants';
import { toSentenceCase } from '@/utils/change-casing';
import { Button, ButtonGroup, Col, DropdownButton, DropdownItem, Row, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
const DefaultButtons = () => {
  return <ComponentContainerCard title="Default Buttons">
      <div className="d-flex flex-wrap gap-2">
        {colorVariants.map((color, idx) => <Button variant={color} type="button" key={idx}>
            {toSentenceCase(color)}
          </Button>)}
      </div>
    </ComponentContainerCard>;
};
const OutlineButtons = () => {
  return <ComponentContainerCard title="Outline Buttons">
      <div className="d-flex flex-wrap gap-2">
        {colorVariants.map((color, idx) => <Button type="button" variant={`outline-${color}`} key={idx}>
            {toSentenceCase(color)}
          </Button>)}
      </div>
    </ComponentContainerCard>;
};
const RoundedButtons = () => {
  return <ComponentContainerCard title="Round Buttons">
      <div className="d-flex flex-wrap gap-2">
        {colorVariants.map((color, idx) => <Button variant={color} className="rounded-pill" type="button" key={idx}>
            {toSentenceCase(color)}
          </Button>)}
      </div>
    </ComponentContainerCard>;
};
const OutlineRoundedButtons = () => {
  return <ComponentContainerCard title="Round Outline Buttons">
      <div className="d-flex flex-wrap gap-2">
        {colorVariants.map((color, idx) => <Button type="button" variant={`outline-${color}`} className="rounded-pill" key={idx}>
            {toSentenceCase(color)}
          </Button>)}
      </div>
    </ComponentContainerCard>;
};
const ButtonSizes = () => {
  return <ComponentContainerCard title="Button Sizes">
      <div className="d-flex flex-wrap align-items-center gap-2">
        <button type="button" className="btn btn-primary btn-lg">
          Large
        </button>
        <button type="button" className="btn btn-secondary">
          Normal
        </button>
        <button type="button" className="btn btn-dark btn-sm">
          Small
        </button>
      </div>
    </ComponentContainerCard>;
};
const OutlineButtonsSizes = () => {
  return <ComponentContainerCard title="Outline Buttons Sizes">
      <div className="d-flex flex-wrap align-items-center gap-2">
        <button type="button" className="btn btn-outline-primary btn-lg">
          Large
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Normal
        </button>
        <button type="button" className="btn btn-outline-dark btn-sm">
          Small
        </button>
      </div>
    </ComponentContainerCard>;
};
const DisabledButton = () => {
  return <ComponentContainerCard title="Disabled Buttons">
      <div className="d-flex flex-wrap gap-2">
        <Button variant="primary" disabled>
          Primary
        </Button>
        <Button variant="secondary" disabled>
          Secondary
        </Button>
      </div>
    </ComponentContainerCard>;
};
const DisabledOutlineButton = () => {
  return <ComponentContainerCard title="Disabled Buttons">
      <div className="d-flex flex-wrap gap-2">
        <Button variant="outline-primary" disabled>
          Primary
        </Button>
        <Button variant="outline-secondary" disabled>
          Secondary
        </Button>
      </div>
    </ComponentContainerCard>;
};
const BlockButtons = () => {
  return <ComponentContainerCard title="Block Buttons">
      <div className="d-flex flex-wrap gap-2">
        <Button variant="primary" className="w-100">
          Primary
        </Button>
        <Button variant="secondary" type="button" className="w-100">
          Secondary
        </Button>
      </div>
    </ComponentContainerCard>;
};
const BlockOutlineButtons = () => {
  return <ComponentContainerCard title="Block Buttons">
      <div className="d-flex flex-wrap gap-2">
        <Button variant="outline-primary" className="w-100">
          Primary
        </Button>
        <Button variant="outline-secondary" type="button" className="w-100">
          Secondary
        </Button>
      </div>
    </ComponentContainerCard>;
};
const ButtonGroup1 = () => {
  return <ComponentContainerCard title="Button Group">
      <ButtonGroup vertical>
        <Button variant="primary">Button 1</Button>
        <Button variant="primary">Button 2</Button>
        <DropdownButton as={ButtonGroup} title="Button 3" variant="primary" data-bs-toggle="dropdown" aria-expanded="false">
          <DropdownItem href="#">Dropdown link</DropdownItem>
          <DropdownItem href="#">Dropdown link</DropdownItem>
        </DropdownButton>
      </ButtonGroup>
    </ComponentContainerCard>;
};
const CheckAndRadioButtons = () => {
  return <ComponentContainerCard title="Check And Radio Buttons">
      <ToggleButtonGroup type="checkbox" className="mb-2 mb-lg-0">
        <ToggleButton variant="outline-primary" id="tbg-check-1" value={1}>
          Checkbox 1
        </ToggleButton>
        <ToggleButton variant="outline-primary" id="tbg-check-2" value={2}>
          Checkbox 2
        </ToggleButton>
        <ToggleButton variant="outline-primary" id="tbg-check-3" value={3}>
          Checkbox 3
        </ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup type="radio" name="options" className="float-end" defaultValue={1}>
        <ToggleButton variant="outline-secondary" id="tbg-radio-1" value={1}>
          Radio 1
        </ToggleButton>
        <ToggleButton variant="outline-secondary" id="tbg-radio-2" value={2}>
          Radio 2
        </ToggleButton>
        <ToggleButton variant="outline-secondary" id="tbg-radio-3" value={3}>
          Radio 3
        </ToggleButton>
      </ToggleButtonGroup>
    </ComponentContainerCard>;
};
const ButtonGroup2 = () => {
  return <ComponentContainerCard title="Button Group">
      <div className="mb-3">
        <ButtonGroup role="group">
          <Button variant="outline-secondary">
            <IconifyIcon icon="fa:align-left" height={11} width={14} />
          </Button>
          <Button variant="outline-secondary">
            <IconifyIcon icon="fa:align-center" height={11} width={14} />
          </Button>
          <Button variant="outline-secondary">
            <IconifyIcon icon="fa:align-right" height={11} width={14} />
          </Button>
        </ButtonGroup>
      </div>
      <div className="mb-3">
        <ButtonGroup>
          <Button variant="outline-secondary">
            <IconifyIcon icon="la:play" />
          </Button>
          <Button variant="outline-primary" active>
            <IconifyIcon icon="la:pause" />
          </Button>
          <Button variant="outline-secondary">
            <IconifyIcon icon="la:stop" />
          </Button>
        </ButtonGroup>
      </div>
      <div className="mb-3">
        <ButtonGroup role="group">
          <Button variant="outline-secondary">Left</Button>
          <Button variant="outline-secondary">Middle</Button>
          <Button variant="outline-secondary">Right</Button>
        </ButtonGroup>
      </div>
      <div className="mb-3">
        <ButtonGroup className="me-1">
          <Button variant="outline-secondary">1</Button>
          <Button variant="outline-secondary">2</Button>
          <Button variant="primary" active>
            3
          </Button>
          <Button variant="outline-secondary">4</Button>
        </ButtonGroup>
        <ButtonGroup className="me-1">
          <Button variant="outline-secondary">5</Button>
          <Button variant="primary" active>
            6
          </Button>
          <Button variant="outline-secondary">7</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline-secondary">8</Button>
        </ButtonGroup>
      </div>
    </ComponentContainerCard>;
};
const Buttons = () => {
  return <>
      <PageMetaData title="Buttons" />
      <Row className="justify-content-center">
        <Col md={6}>
          <DefaultButtons />
        </Col>
        <Col md={6}>
          <OutlineButtons />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <RoundedButtons />
        </Col>
        <Col md={6}>
          <OutlineRoundedButtons />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <ButtonSizes />
        </Col>
        <Col md={6}>
          <OutlineButtonsSizes />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <DisabledButton />
        </Col>
        <Col md={6}>
          <DisabledOutlineButton />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <BlockButtons />
        </Col>
        <Col md={6}>
          <BlockOutlineButtons />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <CheckAndRadioButtons />
          <ButtonGroup1 />
        </Col>
        <Col md={6}>
          <ButtonGroup2 />
        </Col>
      </Row>
    </>;
};
export default Buttons;