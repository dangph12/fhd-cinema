import ComponentContainerCard from '@/components/ComponentContainerCard';
import PageMetaData from '@/components/PageMetaData';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { colorVariants } from '@/context/constants';
import { toSentenceCase } from '@/utils/change-casing';
import { Button, ButtonGroup, Col, Dropdown, DropdownDivider, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap';
const DefaultDropdown = () => {
  return <ComponentContainerCard title="Default Dropdown">
      <div className="d-flex flex-wrap gap-2">
        {colorVariants.map((color, idx) => {
        return <Dropdown key={idx}>
              <DropdownToggle type="button" className={`btn btn-${color} icons-center`}>
                {toSentenceCase(color)} <IconifyIcon icon="fa6-solid:chevron-down" className="ms-1 fs-12" />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="">Action</DropdownItem>
                <DropdownItem href="">Another action</DropdownItem>
                <DropdownItem href="">Something else here</DropdownItem>
                <DropdownDivider />
                <DropdownItem href="">Separated link</DropdownItem>
              </DropdownMenu>
            </Dropdown>;
      })}
      </div>
    </ComponentContainerCard>;
};
const OutlineDropdown = () => {
  return <ComponentContainerCard title="Outline Dropdown">
      <div className="d-flex flex-wrap gap-2">
        {colorVariants.map((color, idx) => {
        return <Dropdown key={idx}>
              <DropdownToggle type="button" variant={`outline-${color} icons-center`}>
                {toSentenceCase(color)} <IconifyIcon icon="fa6-solid:chevron-down" className="ms-1 fs-12" />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="">Action</DropdownItem>
                <DropdownItem href="">Another action</DropdownItem>
                <DropdownItem href="">Something else here</DropdownItem>
                <DropdownDivider />
                <DropdownItem href="">Separated link</DropdownItem>
              </DropdownMenu>
            </Dropdown>;
      })}
      </div>
    </ComponentContainerCard>;
};
const RoundedDropdowns = () => {
  return <ComponentContainerCard title="Dropdown Rounded">
      <div className="d-flex flex-wrap gap-2">
        <Dropdown>
          <DropdownToggle variant="primary" type="button" className="rounded-pill">
            Primary
            <IconifyIcon icon="fa6-solid:chevron-down" className="ms-1 fs-12" />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="">Action</DropdownItem>
            <DropdownItem href="">Another action</DropdownItem>
            <DropdownItem href="">Something else here</DropdownItem>
            <DropdownDivider />
            <DropdownItem href="">Separated link</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <DropdownToggle variant="secondary" className="rounded-pill">
            Secondary
            <IconifyIcon icon="fa6-solid:chevron-down" className="ms-1 fs-12" />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="">Action</DropdownItem>
            <DropdownItem href="">Another action</DropdownItem>
            <DropdownItem href="">Something else here</DropdownItem>
            <DropdownDivider />
            <DropdownItem href="">Separated link</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </ComponentContainerCard>;
};
const RoundedOutlineDropdowns = () => {
  return <ComponentContainerCard title="Dropdown Outlinez Rounded">
      <div className="d-flex flex-wrap gap-2">
        <Dropdown>
          <DropdownToggle variant="outline-primary" type="button" className="rounded-pill">
            Primary
            <IconifyIcon icon="fa6-solid:chevron-down" className="ms-1 fs-12" />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="">Action</DropdownItem>
            <DropdownItem href="">Another action</DropdownItem>
            <DropdownItem href="">Something else here</DropdownItem>
            <DropdownDivider />
            <DropdownItem href="">Separated link</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <DropdownToggle variant="outline-secondary" className="rounded-pill">
            Secondary
            <IconifyIcon icon="fa6-solid:chevron-down" className="ms-1 fs-12" />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="">Action</DropdownItem>
            <DropdownItem href="">Another action</DropdownItem>
            <DropdownItem href="">Something else here</DropdownItem>
            <DropdownDivider />
            <DropdownItem href="">Separated link</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </ComponentContainerCard>;
};
const DropdownSizing = () => {
  return <ComponentContainerCard title="Dropdown Size">
      <div className="d-flex flex-wrap gap-2 align-items-center">
        <Dropdown>
          <DropdownToggle variant="primary" className="btn-lg" type="button">
            Large
            <IconifyIcon icon="fa6-solid:chevron-down" className="ms-1 fs-12" />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="">Action</DropdownItem>
            <DropdownItem href="">Another action</DropdownItem>
            <DropdownItem href="">Something else here</DropdownItem>
            <DropdownDivider />
            <DropdownItem href="">Separated link</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <DropdownToggle variant="secondary" type="button">
            Default
            <IconifyIcon icon="fa6-solid:chevron-down" className="ms-1 fs-12" />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="">Action</DropdownItem>
            <DropdownItem href="">Another action</DropdownItem>
            <DropdownItem href="">Something else here</DropdownItem>
            <DropdownDivider />
            <DropdownItem href="">Separated link</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <DropdownToggle variant="dark" className="btn-sm" type="button">
            Small
            <IconifyIcon icon="fa6-solid:chevron-down" className="ms-1 fs-12" />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="">Action</DropdownItem>
            <DropdownItem href="">Another action</DropdownItem>
            <DropdownItem href="">Something else here</DropdownItem>
            <DropdownDivider />
            <DropdownItem href="">Separated link</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </ComponentContainerCard>;
};
const DropdownButtonAndLink = () => {
  return <ComponentContainerCard title="Dropdown Button & Link">
      <Row className="g-2">
        <Col sm="auto">
          <Dropdown>
            <DropdownToggle variant="outline-primary" type="button">
              Dropdown button
              <IconifyIcon icon="la:angle-down" className="ms-1" />
            </DropdownToggle>
            <DropdownMenu aria-labelledby="dropdownMenuButton">
              <DropdownItem href="#">Action</DropdownItem>
              <DropdownItem href="#">Another action</DropdownItem>
              <DropdownItem href="#">Something else here</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
        <Col sm="auto">
          <Dropdown>
            <DropdownToggle as={'a'} className="btn btn-outline-secondary" href="#" role="button">
              Dropdown link
              <IconifyIcon icon="la:angle-down" className="ms-1" />
            </DropdownToggle>
            <DropdownMenu aria-labelledby="dropdownMenuLink">
              <DropdownItem href="#">Action</DropdownItem>
              <DropdownItem href="#">Another action</DropdownItem>
              <DropdownItem href="#">Something else here</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
      </Row>
    </ComponentContainerCard>;
};
const DropUpVariationDropdowns = () => {
  return <ComponentContainerCard title="Dropup Variation">
      <div className="d-flex flex-wrap gap-2 dropup">
        <Dropdown drop="up">
          <DropdownToggle variant="primary" type="button">
            {' '}
            Dropup
            <IconifyIcon icon="fa6-solid:chevron-up" className="ms-1 fs-12" />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="">Action</DropdownItem>
            <DropdownItem href="">Another action</DropdownItem>
            <DropdownItem href="">Something else here</DropdownItem>
            <DropdownDivider />
            <DropdownItem href="">Separated link</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown as={ButtonGroup} drop="up">
          <Button variant="secondary" className="me-0">
            Split dropup
          </Button>
          <DropdownToggle split variant="secondary">
            <span className="sr-only">Toggle Dropdown</span> <IconifyIcon icon="fa6-solid:chevron-up" className="ms-1 fs-12" />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="">Action</DropdownItem>
            <DropdownItem href="">Another action</DropdownItem>
            <DropdownItem href="">Something else here</DropdownItem>
            <DropdownDivider />
            <DropdownItem href="">Separated link</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </ComponentContainerCard>;
};
const DropEndVariationDropdowns = () => {
  return <ComponentContainerCard title="Dropend Variation">
      <div className="d-flex flex-wrap gap-2 dropup">
        <Dropdown drop="end">
          <DropdownToggle variant="primary" type="button">
            {' '}
            Dropend
            <IconifyIcon icon="fa6-solid:chevron-right" className="ms-1 fs-12" />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="">Action</DropdownItem>
            <DropdownItem href="">Another action</DropdownItem>
            <DropdownItem href="">Something else here</DropdownItem>
            <DropdownDivider />
            <DropdownItem href="">Separated link</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown as={ButtonGroup} drop="end">
          <Button variant="secondary" className="me-0">
            Split dropend
          </Button>
          <DropdownToggle split variant="secondary">
            <span className="sr-only">Toggle Dropdown</span> <IconifyIcon icon="fa6-solid:chevron-right" className="ms-1 fs-12" />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="">Action</DropdownItem>
            <DropdownItem href="">Another action</DropdownItem>
            <DropdownItem href="">Something else here</DropdownItem>
            <DropdownDivider />
            <DropdownItem href="">Separated link</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </ComponentContainerCard>;
};
const MenuAlignmentDropdown = () => {
  return <ComponentContainerCard title="Menu Alignment">
      <Dropdown placement="right-end">
        <DropdownToggle variant="primary" type="button">
          Right-aligned menu example
          <IconifyIcon icon="la:angle-down" className="ms-1" />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="">Action</DropdownItem>
          <DropdownItem href="">Another action</DropdownItem>
          <DropdownItem href="">Something else here</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </ComponentContainerCard>;
};
const DropStartVariation = () => {
  return <ComponentContainerCard title="Dropstart Variation">
      <div className="d-flex flex-wrap gap-2 dropstart">
        <Dropdown drop="start">
          <DropdownToggle variant="primary" type="button">
            <IconifyIcon icon="la:angle-left" className="me-1" /> Drostart
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="">Action</DropdownItem>
            <DropdownItem href="">Another action</DropdownItem>
            <DropdownItem href="">Something else here</DropdownItem>
            <DropdownDivider />
            <DropdownItem href="">Separated link</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown as={ButtonGroup} drop="start">
          <DropdownToggle split variant="secondary" className="me-0">
            <span className="sr-only">Toggle Dropdown</span> <IconifyIcon icon="la:angle-left" />
          </DropdownToggle>
          <Button variant="secondary">Split Drostart</Button>
          <DropdownMenu>
            <DropdownItem href="">Action</DropdownItem>
            <DropdownItem href="">Another action</DropdownItem>
            <DropdownItem href="">Something else here</DropdownItem>
            <DropdownDivider />
            <DropdownItem href="">Separated link</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </ComponentContainerCard>;
};
const Dropdowns = () => {
  return <>
      <PageMetaData title="Dropdowns" />
      <Row className="justify-content-center">
        <Col md={6}>
          <DefaultDropdown />
        </Col>
        <Col md={6}>
          <OutlineDropdown />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <RoundedDropdowns />
        </Col>
        <Col md={6}>
          <RoundedOutlineDropdowns />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <DropdownSizing />
        </Col>
        <Col md={6}>
          <DropdownButtonAndLink />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <DropUpVariationDropdowns />
        </Col>
        <Col md={6}>
          <DropEndVariationDropdowns />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <MenuAlignmentDropdown />
        </Col>
        <Col md={6}>
          <DropStartVariation />
        </Col>
      </Row>
    </>;
};
export default Dropdowns;