import ComponentContainerCard from '@/components/ComponentContainerCard';
import PageMetaData from '@/components/PageMetaData';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { colorVariants } from '@/context/constants';
import { Card, CardBody, Col, Row } from 'react-bootstrap';
import HighlightText from './components/HighlightText';
const Heading = () => {
  return <ComponentContainerCard title="Heading">
      <h1>h1. Bootstrap heading</h1>
      <h2>h2. Bootstrap heading</h2>
      <h3>h3. Bootstrap heading</h3>
      <h4>h4. Bootstrap heading</h4>
      <h5>h5. Bootstrap heading</h5>
      <h6>h6. Bootstrap heading</h6>
    </ComponentContainerCard>;
};
const DisplayHeading = () => {
  return <ComponentContainerCard title="Display Heading">
      <h1 className="display-1">Display 1</h1>
      <h1 className="display-2">Display 2</h1>
      <h1 className="display-3">Display 3</h1>
      <h1 className="display-4">Display 4</h1>
    </ComponentContainerCard>;
};
const LeadExample = () => {
  return <ComponentContainerCard title="Lead">
      <p className="lead mb-0">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
    </ComponentContainerCard>;
};
const InlineTextElements = () => {
  return <ComponentContainerCard title="Inline text elements">
      <p>
        You can use the mark tag to <mark>highlight</mark> text.
      </p>
      <p>
        <del>This line of text is meant to be treated as deleted text.</del>
      </p>
      <p>
        <s>This line of text is meant to be treated as no longer accurate.</s>
      </p>
      <p>
        <ins>This line of text is meant to be treated as an addition to the document.</ins>
      </p>
      <p>
        <u>This line of text will render as underlined</u>
      </p>
      <p>
        <small>This line of text is meant to be treated as fine print.</small>
      </p>
      <p>
        <strong>This line rendered as bold text.</strong>
      </p>
      <p className="mb-0">
        <em>This line rendered as italicized text.</em>
      </p>
    </ComponentContainerCard>;
};
const Blockquote = () => {
  return <ComponentContainerCard title="Blockquote">
      <blockquote className="blockquote">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer className="blockquote-footer font-14">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </footer>
      </blockquote>
      <blockquote className="blockquote blockquote-reverse">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer className="blockquote-footer font-14">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </footer>
      </blockquote>
      <blockquote className="blockquote blockquote-reverse mb-0">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer className="blockquote-footer font-14 text-right">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </footer>
      </blockquote>
    </ComponentContainerCard>;
};
const UnOrderList = () => {
  return <ComponentContainerCard title="UnOrder List">
      <ul className="mb-0">
        <li>Integer molestie lorem at massa</li>
        <li>
          Nulla volutpat aliquam velit
          <ul>
            <li>Phasellus iaculis neque</li>
            <li>Purus sodales ultricies</li>
            <li>Vestibulum laoreet porttitor sem</li>
          </ul>
        </li>
        <li>Faucibus porta lacus fringilla vel</li>
      </ul>
    </ComponentContainerCard>;
};
const OrderList = () => {
  return <ComponentContainerCard title="Order List">
      <ol className="mb-0">
        <li>Integer molestie lorem at massa</li>
        <li>Nulla volutpat aliquam velit </li>
        <li>Phasellus iaculis neque</li>
        <li>Purus sodales ultricies</li>
        <li>Vestibulum laoreet porttitor sem</li>
        <li>Faucibus porta lacus fringilla vel</li>
      </ol>
    </ComponentContainerCard>;
};
const UnstyledList = () => {
  return <ComponentContainerCard title="Order List">
      <ul className="mb-0 list-unstyled">
        <li>Integer molestie lorem at massa</li>
        <li>Nulla volutpat aliquam velit </li>
        <li>Phasellus iaculis neque</li>
        <li>Purus sodales ultricies</li>
        <li>Vestibulum laoreet porttitor sem</li>
        <li>Faucibus porta lacus fringilla vel</li>
      </ul>
    </ComponentContainerCard>;
};
const InlineList = () => {
  return <ComponentContainerCard title="Inline List">
      <ul className="list-inline">
        <li className="list-inline-item">
          <IconifyIcon icon="mdi:circle-outline" className="font-13 text-success me-1" />
          Lorem ipsum
        </li>
        <li className="list-inline-item">
          <IconifyIcon icon="mdi:circle-outline" className="font-13 text-success me-1" />
          Phasellus iaculis
        </li>
        <li className="list-inline-item">
          <IconifyIcon icon="mdi:circle-outline" className="font-13 text-success me-1" />
          Nulla volutpat
        </li>
        <li className="list-inline-item">
          <IconifyIcon icon="mdi:circle-outline" className="font-13 text-success me-1" />
          Lorem ipsum
        </li>
        <li className="list-inline-item">
          <IconifyIcon icon="mdi:circle-outline" className="font-13 text-success me-1" />
          Phasellus iaculis
        </li>
        <li className="list-inline-item">
          <IconifyIcon icon="mdi:circle-outline" className="font-13 text-success me-1" />
          Nulla volutpat
        </li>
        <li className="list-inline-item">
          <IconifyIcon icon="mdi:circle-outline" className="font-13 text-success me-1" />
          Lorem ipsum
        </li>
        <li className="list-inline-item">
          <IconifyIcon icon="mdi:circle-outline" className="font-13 text-success me-1" />
          Phasellus iaculis
        </li>
        <li className="list-inline-item">
          <IconifyIcon icon="mdi:circle-outline" className="font-13 text-success me-1" />
          Nulla volutpat
        </li>
      </ul>
    </ComponentContainerCard>;
};
const TextColors = () => {
  return <ComponentContainerCard title="Colors">
      {colorVariants.slice(0, 6).map((color, idx) => {
      return <p key={idx} className={`text-${color}`}>
            .text-{color}
          </p>;
    })}
      <p className="text-light bg-dark">.text-light</p>
      <p className="text-body">.text-body</p>
      <p className="text-muted">.text-muted</p>
      <p className="text-white bg-dark">.text-white</p>
      <p className="text-black-50">.text-black-50</p>
      <p className="text-white-50 bg-dark">.text-white-50</p>
    </ComponentContainerCard>;
};
const ListAlignment = () => {
  return <ComponentContainerCard title="Description List Alignment">
      <dl className="row mb-0">
        <dt className="col-sm-3">Description lists</dt>
        <dd className="col-sm-9">A description list is perfect for defining terms.</dd>
        <dt className="col-sm-3">Euismod</dt>
        <dd className="col-sm-9">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
        <dd className="col-sm-9 offset-sm-3">Donec id elit non mi porta gravida at eget metus.</dd>
        <dt className="col-sm-3">Malesuada porta</dt>
        <dd className="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>
        <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
        <dd className="col-sm-9">
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
        </dd>
        <dt className="col-sm-3">Nesting</dt>
        <dd className="col-sm-9 mb-0">
          <dl className="row mb-0">
            <dt className="col-sm-4">Nested definition list</dt>
            <dd className="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
          </dl>
        </dd>
      </dl>
    </ComponentContainerCard>;
};
const Typography = () => {
  return <>
      <PageMetaData title="Typography" />
      <Row className="justify-content-center">
        <Col md={6}>
          <Row className="justify-content-center">
            <Col md={6}>
              <Card>
                <CardBody>
                  <span className="float-end text-muted fw-normal">Normal / 400</span>
                  <h1 className="display-4 fw-normal mt-0 mb-4">Aa</h1>
                  <h5 className="mb-0 fw-normal">Rizz</h5>
                </CardBody>
              </Card>
            </Col>
            <Col md={6}>
              <Card>
                <CardBody>
                  <span className="float-end text-muted fw-bold">Bold / 700</span>
                  <h1 className="display-4 fw-bold mt-0 mb-4">Aa</h1>
                  <h5 className="mb-0 fw-bold">Rizz</h5>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col md={6} lg={6}>
          <HighlightText />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <Heading />
          <LeadExample />
          <InlineTextElements />
          <UnOrderList />
          <OrderList />
          <UnstyledList />
          <InlineList />
        </Col>
        <Col md={6}>
          <DisplayHeading />
          <Blockquote />
          <TextColors />
          <ListAlignment />
        </Col>
      </Row>
    </>;
};
export default Typography;