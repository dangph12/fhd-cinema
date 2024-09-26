import ComponentContainerCard from '@/components/ComponentContainerCard';
import PageMetaData from '@/components/PageMetaData';
import { Button, Col, OverlayTrigger, Popover, PopoverBody, PopoverHeader, Row, Tooltip } from 'react-bootstrap';
const placements = ['top', 'right', 'bottom', 'left'];
const PopoversExample = () => {
  return <ComponentContainerCard title="Popovers Example">
      <div className="button-items d-flex flex-wrap gap-2">
        {placements.map((placement, idx) => {
        return <OverlayTrigger key={idx} placement={placement} trigger="click" overlay={<Popover>
                  <PopoverBody>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</PopoverBody>
                </Popover>}>
              <button type="button" className="btn btn-primary">
                Popover on {placement}
              </button>
            </OverlayTrigger>;
      })}
      </div>
    </ComponentContainerCard>;
};
const BootstrapTooltips = () => {
  return <ComponentContainerCard title="Bootstrap Tooltips">
      <div className="button-items d-flex flex-wrap gap-2">
        {placements.map((placement, idx) => {
        return <OverlayTrigger key={idx} trigger={['hover', 'focus']} placement={placement} overlay={<Tooltip>Tooltip on {placement}</Tooltip>}>
              <button type="button" className="btn btn-primary" title="Tooltip on top">
                Tooltip on {placement}
              </button>
            </OverlayTrigger>;
      })}
      </div>
    </ComponentContainerCard>;
};
const CustomAndDismissPopover = () => {
  return <ComponentContainerCard title="Custom & Dismiss Popover">
      <div className="button-items d-flex flex-wrap gap-2">
        <OverlayTrigger trigger="click" placement="right" overlay={<Popover className="custom-popover">
              <PopoverHeader>Custom popover</PopoverHeader>
              <PopoverBody>This popover is themed via CSS variables.</PopoverBody>
            </Popover>}>
          <Button variant="secondary" type="button" data-bs-toggle="popover" data-bs-placement="right" data-bs-custom-class="custom-popover" data-bs-title="Custom popover" data-bs-content="This popover is themed via CSS variables.">
            Custom popover
          </Button>
        </OverlayTrigger>
        <OverlayTrigger placement="right" trigger="focus" overlay={<Popover>
              <PopoverHeader>Dismissible popover</PopoverHeader>
              <PopoverBody>And here&apos;s some amazing content. It&apos;s very engaging. Right?</PopoverBody>
            </Popover>}>
          <button tabIndex={0} className="btn btn-danger" role="button">
            Dismissible popover
          </button>
        </OverlayTrigger>
      </div>
    </ComponentContainerCard>;
};
const CustomTooltip = () => {
  return <ComponentContainerCard title="Custom Tooltip">
      <div className="button-items d-flex flex-wrap gap-2">
        <OverlayTrigger trigger={['focus', 'hover']} placement="top" overlay={<Tooltip className="custom-tooltip">This top tooltip is themed via CSS variables.</Tooltip>}>
          <Button variant="dark">Custom Tooltip</Button>
        </OverlayTrigger>
      </div>
    </ComponentContainerCard>;
};
const PopoversAndTooltips = () => {
  return <>
      <PageMetaData title="Popovers and Tooltips" />
      <Row className="justify-content-center">
        <Col md={6}>
          <PopoversExample />
        </Col>
        <Col md={6}>
          <BootstrapTooltips />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <CustomAndDismissPopover />
        </Col>
        <Col md={6}>
          <CustomTooltip />
        </Col>
      </Row>
    </>;
};
export default PopoversAndTooltips;